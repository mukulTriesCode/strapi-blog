import Navbar from "@/components/Navbar";
import client from "@/graphql/client";
import GetAllBlog from "@/queries/GetAllBlog";
import GetSinglePost from "@/queries/GetSingleBlog";
import React from "react";

interface BlogData {
  id: string;
  attributes: {
    title: string;
    description: string;
    author: string;
    published: string;
    slug: string;
    image: string;
  };
}

interface Blog {
  title: string;
  author: string;
  description: string;
  published: string;
  image: string;
}

const Blog = ({ blogs }: { blogs: Blog }) => {
  const bgImage = {
    background: `url(${blogs.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundClip: "content-box",
    backgroundPosition: "center"
  };
  return (
    <>
      <Navbar />
      <div
        style={bgImage}
        className="h-[calc(90vh)] mb-10 text-white"
      >
        <div className="h-full bg-black bg-opacity-55 w-full flex flex-col justify-center items-center">
          <div className="w-[50%]">
            <h1 className="text-6xl font-bold">{blogs.title}</h1>
            <h3 className="text-2xl my-10 font-medium">
              Posted by{" "}
              <span className="underline decoration-0 underline-offset-4">
                {blogs.author}
              </span>{" "}
              on {blogs.published}
            </h3>
          </div>
        </div>
        <div className="flex py-12 flex-col items-center">
          <div className="w-[50%]">
            <div className="text-black text-2xl leading-10">
              {blogs.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GetAllBlog,
  });
  const blogDa = data.blogs.data;
  const paths = blogDa.map((blog: any) => ({
    params: { slug: blog.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = await client.query({
    query: GetAllBlog,
  });
  const blogArray = data.blogs.data;
  const blog = blogArray.find(
    (item: BlogData) => item.attributes.slug === params.slug
  );

  return {
    props: {
      blogs: blog.attributes,
    },
  };
}

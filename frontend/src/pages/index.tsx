import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import client from "../graphql/client";
import GetAllBlog from "../queries/GetAllBlog";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import PostButton from "@/components/PostButton";

export interface Blogs {
  id: string;
  attributes: {
    title: string;
    description: string;
    author: string;
    published: string;
    slug: string;
  };
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GetAllBlog,
  });
  return {
    props: {
      blogs: data.blogs.data,
    },
  };
}

export default function Home({ blogs }: { blogs: Blogs[] }) {
  return (
    <main className="">
      <Navbar />
      <PageHeader />
      <div className="flex flex-col items-center">
        {blogs.map((blog) => {
          return (
            <div className="hover:text-teal-800" key={blog.id}>
              <Link href={`/${blog.attributes.slug}`}>
                <BlogCard
                  title={blog.attributes.title}
                  description={blog.attributes.description}
                  published={blog.attributes.published}
                  author={blog.attributes.author}
                />
              </Link>
            </div>
          );
        })}
      <PostButton />
      </div>
      <Footer />
    </main>
  );
}

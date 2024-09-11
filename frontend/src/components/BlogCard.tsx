import React from "react";

interface BlogDesc {
  title: string;
  description: string;
  published: string;
  author: string;
}

const BlogCard = ({ title, description, published, author }: BlogDesc) => {
  return (
    <div className="text-pretty w-[50vw] mt-3">
      <h1 className="text-[2.7rem] leading-[3rem] font-bold">{title}</h1>
      <h2 className="text-4xl font-thin my-2">
        {description.slice(0, 50)}...{" "}
      </h2>
      <h3 className="text-2xl font-thin italic">
        Posted by{" "}
        <span className="underline decoration-0 underline-offset-4">
          {author}
        </span>{" "}
        on {published}
      </h3>
      <br />
      <hr />
    </div>
  );
};

export default BlogCard;

import React from "react";

const PageHeader = () => {
  const headerStyle = {
    backgroundImage: `url(./img/home-bg.jpg)`,
  };
  return (
    <div
      className="h-[calc(70vh)] mb-10 text-white bg-clip-content bg-no-repeat bg-cover bg-center"
      style={headerStyle}
    >
      <div className="h-full bg-black bg-opacity-55 w-full flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">Clean Blog</h1>
        <h2 className="text-3xl mt-4 font-thin">Strapi X NextJS</h2>
      </div>
    </div>
  );
};

export default PageHeader;

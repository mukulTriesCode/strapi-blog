import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-8 px-9 flex text-xl justify-between items-center sticky w-full font-bold">
      <div>
        <Link href="/">
          <span className="text-white font-bold">RW BLOGS</span>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <span className="text-white">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-white">About</span>
        </Link>
        <Link href="/post">
          <span className="text-white">Post</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

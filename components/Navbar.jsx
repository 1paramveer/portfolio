import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-10">
      <div className="">
        <Link href="/work">Work</Link>
      </div>
      <div className="">
        <Link href="/">Paramveer</Link>
      </div>
      <div className="">
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";

function Header() {
  return (
    <nav className="flex flex-row justify-between">
      <div className="font-lobster text-2xl mt-2 ml-2">
        <Link href="/">Welcome!</Link>
      </div>

      <div className="mt-3 mr-3 text-md font-medium">
        <Link href="/resume" className="mx-2">Resume</Link>
        <Link href="/projects" className="mx-2">Projects</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <Link href="/about" className="mx-2">About</Link>
      </div>
    </nav>
  );
}

export default Header;

import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Saad</h1>
        </Link>
        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
          <Button variant="secondary">Hire me</Button>
          </Link>
        </div>
        {/* Mobile Navbar */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;

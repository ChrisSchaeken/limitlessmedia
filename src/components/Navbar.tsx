import { Button } from "@/components/ui/button";
import { DISCOVERY_CALL_URL } from "@/lib/links";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Contact", href: "#contact" },
  ];

  const isExternal = (href: string) => href.startsWith("#");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Photos/logo.png"
              alt="Limitless Media Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="font-display font-bold text-xl">
              <span className="text-gradient">Limitless</span>
              <span className="text-foreground"> Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isExternal(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button asChild variant="hero" size="default">
              <a href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer">
                Get a free consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) =>
              isExternal(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button asChild variant="hero" size="default" className="w-fit">
              <a href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer">
                Get a free consultation
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

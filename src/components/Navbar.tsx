import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Case Study", href: "#case-study" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xl">
              L
            </div>
            <span className="font-display font-bold text-xl">
              <span className="text-gradient">Limitless</span>
              <span className="text-foreground"> Media</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default">
              Get Started
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" className="w-fit">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

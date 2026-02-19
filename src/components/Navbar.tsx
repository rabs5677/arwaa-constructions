import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Our Work", href: "/our-work" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
      ? "bg-ivory/95 backdrop-blur-md shadow-warm py-2 border-b border-border"
      : "bg-ivory/80 backdrop-blur-sm py-2"

      }`}
    >
<div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[60px] md:h-[70px]">

     
      <Link to="/" className="flex items-center gap-3">
    <img 
  src={logoImage} 
  alt="Arwaa Constructions" 
  className="h-10 md:h-12 lg:h-14 w-auto object-contain" 
/>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href.includes("#") ? link.href : undefined}
              onClick={(e) => {
                if (link.href.includes("#")) {
                  e.preventDefault();
                  const hash = link.href.split("#")[1];
                  if (location.pathname !== "/") {
                    window.location.href = "/#" + hash;
                  } else {
                    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="text-coffee hover:text-accent transition-colors duration-300 font-body text-sm tracking-wide uppercase"
            >
              {link.href.includes("#") ? (
                link.label
              ) : (
                <Link to={link.href} className="text-coffee hover:text-accent transition-colors duration-300">
                  {link.label}
                </Link>
              )}
            </a>
          ))}
          <a
            href="tel:+919892349422"
            className="bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded-sm font-body font-semibold text-sm tracking-wide hover:shadow-gold transition-all duration-300"
          >
            <Phone className="inline w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>

        <button
          className="md:hidden text-coffee"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.includes("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const hash = link.href.split("#")[1];
                    if (location.pathname !== "/") {
                      window.location.href = "/#" + hash;
                    } else {
                      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-coffee hover:text-accent font-body text-base py-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-coffee hover:text-accent font-body text-base py-2"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:+919892349422"
              className="bg-gradient-gold text-accent-foreground px-5 py-3 rounded-sm font-body font-semibold text-sm text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

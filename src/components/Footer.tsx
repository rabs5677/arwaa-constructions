import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-coffee text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Arwaa Constructions" className="h-12 w-auto brightness-[2] contrast-75" />
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs">
              Designing Spaces. Building Trust. Over 35 years of excellence in interior design, construction, and redevelopment across Maharashtra.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/60 hover:text-accent transition-colors font-body text-sm">Home</Link>
              <Link to="/our-work" className="text-white/60 hover:text-accent transition-colors font-body text-sm">Our Work</Link>
              <a href="#about" className="text-white/60 hover:text-accent transition-colors font-body text-sm">About Us</a>
              <a href="#contact" className="text-white/60 hover:text-accent transition-colors font-body text-sm">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:arwaaconstructions@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors font-body text-sm">
                <Mail className="w-4 h-4 text-accent" />
                arwaaconstructions@gmail.com
              </a>
              <a href="tel:+919892349422" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors font-body text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +91 9892349422
              </a>
              <a href="tel:+918369783377" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors font-body text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +91 8369783377
              </a>
              <div className="flex items-start gap-3 text-white/60 font-body text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 font-body text-xs">
            © {new Date().getFullYear()} Arwaa Constructions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/919892349422" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/60">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="mailto:arwaaconstructions@gmail.com" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all">
              <Mail className="w-4 h-4 text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

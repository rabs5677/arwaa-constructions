import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Mail, Building2, Paintbrush, Hammer, Wrench, Zap, Shield, Home, Briefcase, Factory, Star, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-interior.jpg";
import showroomImage from "@/assets/showroom.jpg";
import officeImage from "@/assets/office-interior.jpg";
import residentialImage from "@/assets/residential.jpg";
import renovationImage from "@/assets/renovation.jpg";
import workshopImage from "@/assets/workshop.jpg";
import { useLocation } from "react-router-dom";

const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".animate-on-scroll").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Index = () => {
  const sectionRef = useInView();
   const location = useLocation();

     useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const services = [
  { slug: "showrooms", icon: Building2, title: "Luxury Showrooms", desc: "Premium showroom interiors for automobile and retail brands" },
  { slug: "workshops", icon: Factory, title: "Commercial Workshops", desc: "Industrial-grade workshop design and construction" },
  { slug: "residential", icon: Home, title: "Residential Modern Interiors", desc: "Elegant home interiors with modern luxury finishes" },
  { slug: "corporate", icon: Briefcase, title: "Corporate Buildings", desc: "Professional office and corporate space design" },
  { slug: "painting", icon: Paintbrush, title: "Painting Work", desc: "Premium wall textures, finishes, and artistic painting" },
  { slug: "renovation", icon: Hammer, title: "Renovation", desc: "Complete space transformation and modern upgrades" },
  { slug: "office", icon: Zap, title: "Modern Office Interiors", desc: "Sleek, functional workspace design solutions" },
  { slug: "fabrication", icon: Shield, title: "Fabrication Work", desc: "Custom steel and metal fabrication for structures" },
];


  const stats = [
    { number: "35+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Interior Designers" },
    { number: "7+", label: "Premium Brands" },
  ];

  const brands = ["BMW", "KIA", "Mahindra", "Bentley", "Rolls Royce", "Ferrari", "Maruti Suzuki"];
  const clients = ["L&T", "Reliance", "Rexello Castors", "Navneet Motors"];

  const portfolioPreview = [
    { image: showroomImage, title: "Luxury Showroom", category: "Commercial" },
    { image: officeImage, title: "Modern Office", category: "Corporate" },
    { image: residentialImage, title: "Residential Interior", category: "Residential" },
    { image: renovationImage, title: "Kitchen Renovation", category: "Renovation" },
    { image: workshopImage, title: "Workshop Design", category: "Industrial" },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-background">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury interior showroom by Arwaa Constructions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-56 md:pb-32">
          <div className="max-w-3xl">
            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
              <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/40 px-4 py-1.5 rounded-sm font-body text-xs tracking-[0.2em] uppercase mb-6">
                Since 1990 • Maharashtra, India
              </span>
            </div>

            <h1 className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.2s] font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 drop-shadow-lg">
              Arwaa{" "}
              <span className="text-gradient-gold">Constructions</span>
            </h1>

            <p className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.3s] font-display text-xl md:text-2xl text-accent italic mb-4 drop-shadow-md">
              Luxury Interiors & Construction Experts in Maharashtra. 35+ Years of Excellence.
            </p>

            <p className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.4s] font-body text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              We specialize in designing, building, repairing, and redeveloping residential and commercial spaces. With over 35 years of experience, we deliver premium interior and construction solutions tailored to every project.
            </p>
   
            <p className="sr-only">
            Arwaa Constructions offers interior design and construction services in Mumbai, Pune, Thane, Navi Mumbai and across Maharashtra for homes, offices and showrooms.
            </p>

            <p className="sr-only">
              Arwaa Constructions provides interior design, showroom construction, office interiors, renovation, painting and fabrication services across Maharashtra including Mumbai, Pune, Thane and nearby cities.
              </p>


           <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.5s] flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

             <Link
  to="/our-work"
  className="bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded-sm font-body font-bold text-sm tracking-wide hover:shadow-gold transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
  onClick={() => window.scrollTo(0, 0)}
>
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            <a
  href="#contact"
  className="border border-white/40 text-white px-8 py-3.5 rounded-sm font-body font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 inline-flex justify-center w-full sm:w-auto"
>
                Get Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-coffee/95 backdrop-blur-md border-t border-accent/20">
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="font-body text-xs text-white/50 tracking-wide uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
            <span className="text-accent font-body text-xs tracking-[0.3em] uppercase">Our Legacy</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-coffee mt-3 mb-6">
              Building Excellence for Over <span className="text-gradient-gold">35 Years</span>
            </h2>
            <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed">
              Arwaa Constructions brings more than 35 years of experience in interior design, construction, repairing, and redevelopment for both residential and commercial projects. We focus on quality, durability, and premium finishing that meets modern design standards.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
     <section id = "services" className="py-20 md:py-28 bg-warm-beige">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-16 animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
      <span className="text-accent font-body text-xs tracking-[0.3em] uppercase">What We Do</span>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-coffee mt-3">
        Services <span className="text-gradient-gold">Provided by Us</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <Link
          key={i}
          to={`/services/${service.slug}`}
          className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up group bg-ivory border border-border hover:border-accent/40 rounded-lg p-8 hover-lift shadow-warm block"
          style={{ animationDelay: `${i * 0.08}s` }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all duration-300">
            <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
          </div>
          <h3 className="font-display text-xl font-semibold text-coffee mb-2">{service.title}</h3>
          <p className="font-body text-foreground/60 text-sm">{service.desc}</p>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* ========== TRUSTED BY BRANDS — REDESIGNED ========== */}
      <section className="py-20 md:py-28 bg-coffee text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
              <span className="text-accent font-body text-xs tracking-[0.3em] uppercase">Experience & Credibility</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
                Trusted by <span className="text-gradient-gold">Leading Brands</span> & Industry Giants
              </h2>
              <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                We have proudly worked with <strong className="text-accent">Navneet Motors</strong>, where we designed and built workshops and showrooms for global automobile brands.
              </p>
            </div>

            {/* Featured Client — Navneet Motors */}
            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.2s] mb-14">
              <div className="relative bg-white/5 border border-accent/30 rounded-xl p-8 md:p-10 text-center backdrop-blur-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-coffee px-5 py-1.5 rounded-full font-body text-xs font-bold tracking-wider uppercase">
                  Featured Partner
                </div>
                <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Navneet Motors</h3>
                <p className="font-body text-white/50 text-sm max-w-lg mx-auto">Designed and built premium showrooms and workshops for multiple global automobile brands across Maharashtra.</p>
              </div>
            </div>

            {/* Auto Brands */}
            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.3s] mb-12">
              <p className="font-body text-xs text-white/40 tracking-[0.2em] uppercase mb-5 text-center">Automobile Brands We've Built For</p>
              <div className="flex flex-wrap justify-center gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-6 py-3 bg-white/5 border border-accent/25 rounded-lg font-body text-sm text-white font-medium hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    <Star className="w-3.5 h-3.5 text-accent" />
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Corporate Clients */}
            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.4s] mb-12">
              <p className="font-body text-xs text-white/40 tracking-[0.2em] uppercase mb-5 text-center">Corporate Clients</p>
              <div className="flex flex-wrap justify-center gap-3">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="px-6 py-3 bg-white/5 border border-white/15 rounded-lg font-body text-sm text-white/80 flex items-center gap-2 hover:border-accent/40 transition-all duration-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                    {client}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.5s] text-center">
              <Link
              to="/our-work"
              className="inline-flex items-center gap-2 bg-accent text-coffee px-8 py-3.5 rounded-sm font-body font-bold text-sm tracking-wide hover:shadow-gold transition-all duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO PREVIEW ========== */}
      <section className="py-20 md:py-28 bg-warm-beige">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
            <span className="text-accent font-body text-xs tracking-[0.3em] uppercase">Featured Projects</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-coffee mt-3">
              Recent <span className="text-gradient-gold">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioPreview.map((project, i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up group relative rounded-lg overflow-hidden hover-lift cursor-pointer shadow-warm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-accent font-body text-xs tracking-[0.2em] uppercase">{project.category}</span>
                    <h3 className="font-display text-xl text-white font-semibold mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 border-2 border-coffee/20 text-coffee px-8 py-3.5 rounded-sm font-body font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-20 md:py-28 bg-coffee text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up">
              <span className="text-accent font-body text-xs tracking-[0.3em] uppercase">Get Started</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
                Get in Touch with Our{" "}
                <span className="text-gradient-gold">Interior Experts</span>
              </h2>
              <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Planning a residential or commercial project? Contact Arwaa Constructions today for professional consultation and site discussion.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.2s] flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
               href="https://wa.me/919892349422?text=Hello%20Arwaa%20Constructions,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20my%20residential/commercial%20project.%20Please%20share%20more%20details%20about%20your%20services%20and%20consultation%20process."


                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,35%)] text-white px-8 py-4 rounded-sm font-body font-semibold text-sm tracking-wide hover:bg-[hsl(142,70%,40%)] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919892349422"
                className="inline-flex items-center justify-center gap-3 bg-accent text-coffee px-8 py-4 rounded-sm font-body font-bold text-sm tracking-wide hover:shadow-gold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="animate-on-scroll opacity-0 [&.animate-visible]:animate-fade-in-up [&.animate-visible]:[animation-delay:0.3s] flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-white/50 font-body text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +91 9892349422 &nbsp;|&nbsp; +91 8369783377
              </div>
              <div className="flex items-center gap-3 text-white/50 font-body text-sm">
                <Mail className="w-4 h-4 text-accent" />
                arwaaconstructions@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

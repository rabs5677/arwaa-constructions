import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import showroomImage from "@/assets/showroom.jpg";
import officeImage from "@/assets/office-interior.jpg";
import residentialImage from "@/assets/residential.jpg";
import renovationImage from "@/assets/renovation.jpg";
import workshopImage from "@/assets/workshop.jpg";
import paintingImage from "@/assets/painting.jpg";
import corporateImage from "@/assets/corporate-building.jpg";
import fabricationImage from "@/assets/fabrication.jpg";
import heroImage from "@/assets/hero-interior.jpg";
import butterflyImage from "@/assets/butterfly-shelf.jpg";
import ceilingImage from "@/assets/false-ceiling.jpg";


const projects = [
  { image: showroomImage, title: "BMW Luxury Showroom", category: "Showroom", description: "Premium car showroom with marble flooring, gold-accent columns, and state-of-the-art lighting designed for Navneet Motors." },
  { image: officeImage, title: "L&T Corporate Office", category: "Office Interior", description: "Contemporary corporate workspace with glass partitions, ergonomic furniture, warm wood ceilings, and biophilic design elements." },
  { image: residentialImage, title: "Luxury Residential Villa", category: "Residential", description: "Opulent living room with crystal chandelier, marble flooring, designer furniture, and elegant gold-tone accents throughout." },
  { image: butterflyImage, title: "Designer Butterfly Shelf", category: "Interior Design", description: "Stunning butterfly-shaped illuminated bookshelf with LED lighting — a signature custom interior design piece." },
  { image: ceilingImage, title: "Premium False Ceiling", category: "Ceiling Design", description: "Modern false ceiling design with recessed lighting, geometric patterns, and warm accent tones for a luxury living space." },
  { image: renovationImage, title: "Premium Kitchen Renovation", category: "Renovation", description: "Complete kitchen overhaul featuring marble countertops, custom walnut cabinetry, gold hardware, and pendant lighting." },
  { image: workshopImage, title: "Commercial Workshop", category: "Workshop", description: "Industrial-grade workshop facility with organized tool stations, heavy-duty equipment areas, and efficient workspace layout." },
  { image: paintingImage, title: "Luxury Wall Finishing", category: "Painting", description: "Premium wall texture and finish application using high-end materials for luxury residential interiors." },
  { image: corporateImage, title: "Corporate Building Exterior", category: "Corporate", description: "Modern glass and steel corporate building with landscaped surroundings and contemporary architectural design." },
  { image: fabricationImage, title: "Steel Fabrication Facility", category: "Fabrication", description: "Professional metal fabrication workshop with CNC machines, precision welding stations, and industrial safety measures." },
  { image: heroImage, title: "Luxury Interior Design", category: "Interior", description: "Premium interior design with warm lighting, elegant furnishings, and sophisticated architectural detailing." },
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-warm-beige">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-accent font-body text-sm mb-6 hover:text-gold-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="block text-accent font-body text-xs tracking-[0.3em] uppercase mb-3">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-coffee mb-4">
            Our <span className="text-gradient-gold">Work</span>
          </h1>
          <p className="font-body text-foreground/60 text-base md:text-lg max-w-2xl">
            Explore our portfolio of luxury showrooms, commercial workshops, residential interiors, corporate buildings, renovation projects, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group bg-ivory border border-border rounded-lg overflow-hidden hover-lift shadow-warm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-accent font-body text-xs tracking-[0.2em] uppercase">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold text-coffee mt-1 mb-2">{project.title}</h3>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-coffee text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Interested in Working <span className="text-gradient-gold">With Us?</span>
          </h2>
          <p className="font-body text-white/60 mb-8 max-w-lg mx-auto">
            Let's discuss your project. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919892349422" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,35%)] text-white px-8 py-3.5 rounded-sm font-body font-semibold text-sm hover:bg-[hsl(142,70%,40%)] transition-all">
              Chat on WhatsApp
            </a>
            <a href="tel:+919892349422" className="inline-flex items-center justify-center gap-2 bg-accent text-coffee px-8 py-3.5 rounded-sm font-body font-bold text-sm hover:shadow-gold transition-all">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;

import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

/* ================== IMPORT IMAGES ================== */
import k1 from "@/assets/services/kitchen1.jpeg";
import k2 from "@/assets/services/kitchen2.jpeg";
import k3 from "@/assets/services/kitchen3.jpeg";
import k4 from "@/assets/services/kitchen4.jpeg";
import k5 from "@/assets/services/kitchen5.jpeg";
import k6 from "@/assets/services/kitchen6.jpeg";

import house1 from "@/assets/services/house1.jpg";
import house2 from "@/assets/services/house2.jpg";
import house3 from "@/assets/services/house3.jpg";
import house4 from "@/assets/services/house4.jpg";
import house5 from "@/assets/services/house5.jpg";
import house6 from "@/assets/services/house6.jpg";

import showroom1 from "@/assets/services/showroom1.jpg";
import showroom2 from "@/assets/services/showroom2.jpg";
import showroom3 from "@/assets/services/showroom3.jpg";

import paint1 from "@/assets/services/paint1.jpg";
import paint2 from "@/assets/services/paint2.jpg";
import paint3 from "@/assets/services/paint3.png";
import paint4 from "@/assets/services/paint4.jpg";
import paint5 from "@/assets/services/paint5.jpg";
import paint6 from "@/assets/services/paint6.jpg";

import workshop1 from "@/assets/services/workshop1.jpg";
import workshop2 from "@/assets/services/workshop2.jpg";
import workshop3 from "@/assets/services/workshop3.jpg";

import corporate1 from "@/assets/services/corporate1.jpg";
import corporate2 from "@/assets/services/corporate2.jpg";
import corporate3 from "@/assets/services/corporate3.jpg";
import corporate4 from "@/assets/services/corporate4.jpg";
import corporate5 from "@/assets/services/corporate5.jpg";
import corporate6 from "@/assets/services/corporate6.jpg";

import reno1 from "@/assets/services/reno1.jpg";
import reno2 from "@/assets/services/reno2.jpg";
import reno3 from "@/assets/services/reno3.jpg";
import reno4 from "@/assets/services/reno4.jpg";

import office1 from "@/assets/services/office1.jpg";
import office2 from "@/assets/services/office2.jpg";
import office3 from "@/assets/services/office3.jpg";
import office4 from "@/assets/services/office4.jpg";

import fab1 from "@/assets/services/fab1.jpg";
import fab2 from "@/assets/services/fab2.jpg";

/* ================== GALLERY DATA ================== */

const galleries = {
  residential: [
    { src: house1, desc: "Modern modular kitchen with premium finish and lighting" },
    { src: house2, desc: "Luxury bedroom interior with customized wardrobe" },
    { src: house3, desc: "Contemporary living room interior with false ceiling design" },
    { src: house4, desc: "Elegant residential interior with premium finish" },
    { src: house5, desc: "Stylish modern home interior with warm lighting" },
    { src: house6, desc: "Spacious residential layout with designer finish" },
    { src: k1, desc: "Modern modular kitchen design with smart storage" },
    { src: k2, desc: "Premium kitchen interior with clean finishing" },
    { src: k3, desc: "Luxury kitchen design with contemporary layout" },
    { src: k4, desc: "Kitchen interior with lighting and storage planning" },
    { src: k5, desc: "Functional kitchen layout with modern styling" },
    { src: k6, desc: "Compact modular kitchen with elegant finish" }
  ],

  showrooms: [
    { src: showroom1, desc: "Premium showroom interior with custom display units and lighting" },
    { src: showroom2, desc: "Modern retail showroom layout with elegant ceiling and flooring" },
    { src: showroom3, desc: "Luxury commercial showroom design with branded finish" }
  ],

  workshops: [
    { src: workshop1, desc: "Functional workshop setup with durable flooring and layout planning" },
    { src: workshop2, desc: "Industrial workspace design optimized for workflow efficiency" },
    { src: workshop3, desc: "Custom workshop fabrication area with reinforced structure" }
  ],

  corporate: [
    { src: corporate1, desc: "Corporate office reception with modern branding elements" },
    { src: corporate2, desc: "Executive workspace interior with premium glass partitions" },
    { src: corporate3, desc: "Conference room design with acoustic and lighting solutions" },
    { src: corporate4, desc: "Open-plan corporate office layout with workstation zoning" },
    { src: corporate5, desc: "Professional office interior with modular furniture and lighting" },
    { src: corporate6, desc: "Corporate workspace with premium finish and ergonomic design" }
  ],

  painting: [
    { src: paint1, desc: "Interior wall painting with smooth premium finish" },
    { src: paint2, desc: "Decorative wall texture and color combination work" },
    { src: paint3, desc: "Exterior building painting with weather-resistant coating" },
    { src: paint4, desc: "False ceiling and wall paint finishing work" },
    { src: paint5, desc: "Residential painting project with clean professional finish" },
    { src: paint6, desc: "Commercial painting project with durable coating system" }
  ],

  renovation: [
    { src: reno1, desc: "Full home renovation with modern design upgrade" },
    { src: reno2, desc: "Interior remodeling with structural repair and redesign" },
    { src: reno3, desc: "Old property renovation with new finishes and layout" },
    { src: reno4, desc: "Complete renovation project with premium materials" }
  ],

  office: [
    { src: office1, desc: "Modern office interior with workstation layout planning" },
    { src: office2, desc: "Professional office space with storage and ceiling design" },
    { src: office3, desc: "Compact office interior optimized for productivity" },
    { src: office4, desc: "Custom office design with lighting and modular furniture" }
  ],

  fabrication: [
    { src: fab1, desc: "Custom fabrication work for interiors and structures" },
    { src: fab2, desc: "Metal fabrication and installation for commercial space" }
  ]
};

/* ================== COMPONENT ================== */

const ServiceGallery = () => {
  const { slug } = useParams();
  const images = galleries[slug] || [];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">

        {/* NAV */}
        <div className="flex flex-wrap items-center gap-6 mb-10 text-sm">
          <Link to="/#services" className="text-accent font-semibold hover:underline">
            ← Back to Services
          </Link>
          <span className="text-coffee/30">|</span>
          <Link to="/#hero" className="text-coffee/70 font-semibold hover:text-accent hover:underline">
            ↑ Go to Home
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-display mb-12 capitalize">
          {slug?.replace("-", " ")} Projects
        </h1>

        {/* EMPTY */}
        {images.length === 0 ? (
          <p className="text-center text-foreground/60">
            Images will be added soon.
          </p>
        ) : (

          /* GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {images.map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedImg(item.src)}
              >

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.desc}
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* TEXT */}
                <div className="p-6 space-y-3">

                  <p className="text-xs tracking-[0.25em] text-accent uppercase font-medium">
                    {slug?.replace("-", " ")}
                  </p>

                  <h3 className="text-lg font-display text-coffee">
                    Project Showcase
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        )}
      </section>

      <Footer />

      {/* IMAGE POPUP */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full view"
            className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
};

export default ServiceGallery;
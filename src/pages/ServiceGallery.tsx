import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


// 👉 ALL IMAGES FROM ONE FOLDER
// Put images inside:
// src/assets/services/

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

import workshop1 from  "@/assets/services/workshop1.jpg";
import workshop2 from  "@/assets/services/workshop2.jpg";
import workshop3 from  "@/assets/services/workshop3.jpg";

import corporate1 from  "@/assets/services/corporate1.jpg";
import corporate2 from  "@/assets/services/corporate2.jpg";
import corporate3 from  "@/assets/services/corporate3.jpg";
import corporate4 from  "@/assets/services/corporate4.jpg";
import corporate5 from  "@/assets/services/corporate5.jpg";
import corporate6 from  "@/assets/services/corporate6.jpg";

import reno1 from  "@/assets/services/reno1.jpg";
import reno2 from  "@/assets/services/reno2.jpg";
import reno3 from  "@/assets/services/reno3.jpg";
import reno4 from  "@/assets/services/reno4.jpg";

import office1 from  "@/assets/services/office1.jpg";
import office2 from  "@/assets/services/office2.jpg";
import office3 from  "@/assets/services/office3.jpg";
import office4 from  "@/assets/services/office4.jpg";


import fab1 from "@/assets/services/fab1.jpg";
import fab2 from "@/assets/services/fab2.jpg";

const galleries = {
  residential: [house1, house2, house3, house4, house5, house6, k1, k2, k3, k4, k5, k6],
  showrooms: [showroom1, showroom2, showroom3],
  workshops: [workshop1, workshop2, workshop3],
  corporate: [corporate1, corporate2, corporate3, corporate4, corporate5, corporate6],
  painting: [paint1, paint2, paint3, paint4, paint5, paint6],
  renovation: [reno1, reno2, reno3, reno4],
  "home-design": [],
  office: [office1, office2, office3,office4],
  fabrication: [fab1, fab2],
};

const ServiceGallery = () => {
  const { slug } = useParams();
  const images = galleries[slug] || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

  <section className="pt-32 pb-20 container mx-auto px-4">
<div className="flex flex-wrap items-center gap-6 mb-10 text-sm">
       <Link
    to="/#services"
    className="text-accent font-semibold hover:underline"
  >
    ← Back to Services
  </Link>

  <span className="text-coffee/30">|</span>

  <Link
    to="/#hero"
    className="text-coffee/70 font-semibold hover:text-accent hover:underline"
  >
    ↑ Go to Home
  </Link>
</div>

        <h1 className="text-4xl font-display mb-10 capitalize">
          {slug?.replace("-", " ")} Projects
        </h1>

        {images.length === 0 ? (
          <p className="text-center text-foreground/60">Images will be added soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="service work"
                className="w-full h-[320px] object-cover rounded-lg shadow-warm"
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ServiceGallery;

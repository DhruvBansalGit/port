"use server"
import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const data = response.data.user;
  // console.log(response.data.user.services);
  return (
    <NoxfolioLayout>
      {/* Hero Section Start */}
      <Hero user={data} />
      {/* Hero Section End */}
      {/* About Area start */}
      <About user={data} />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume timeline={data.timeline} />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Services services={data.services}/>
      {/* Services Area end */}
      {/* Skill Area start */}
      <Skill items={data.skills}/>
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects projects={data.projects} />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      <Pricing />
      {/* Pricing Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* Client Log start */}
      <Clients />
      {/* Client Log end */}
    </NoxfolioLayout>
  );
}

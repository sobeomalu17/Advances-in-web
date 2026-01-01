import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Omalu Sobechukwu | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Omalu Sobechukwu - A passionate web developer specializing in modern frontend technologies. View my projects and get in touch."
        />
        <meta name="keywords" content="web developer, frontend, React, TypeScript, portfolio, Omalu Sobechukwu" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

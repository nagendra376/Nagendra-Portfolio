import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

const Index = () => {
  return (
    <div className="bg-portfolio-dark min-h-screen overflow-x-hidden w-full max-w-full">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      {/* <section id="about">
        <About />
      </section> */}
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <Skills />
    </div>
  );
};

export default Index;

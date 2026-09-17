import Hero from "./component/hero/hero";
import Navbar from "./component/navbar";
import About from "./component/about/about";
import Developer from "./component/developer/developer"
import Academic from "./component/about/Academic"
import Layout from "./component/layout/layout";
import GymLanding from "./component/gym/Landing";
import Project from "./component/project/Project";
import SkillsZoneProject from "./component/project/projects/SkillsZoneProject"

import { Routes, Route } from "react-router-dom";



function Home() {

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar
        logo="HOME"
        links={[
          { label: "About", href: "/about" },
          { label: "Academic", href: "/about/academic" },
          { label: "Projects", href: "/project" },
        ]}
        cta={{ label: "Hire Me", href: "/contact" }}
      />

      <Hero />
    </main>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about">
        <Route index element={<Layout> <About /> </Layout>} />
        <Route path="academic" element={<Layout> <Academic /> </Layout>} />
      </Route>

      <Route
        path="/developer"
        element={
          <Layout>
            <Developer />
          </Layout>
        }
      />


      <Route path="/project">
        <Route
          index
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />

        <Route
          path="skillzonesacademy"
          element={
            <Layout>
              <SkillsZoneProject />
            </Layout>
          }
        />
      </Route>



      <Route
        path="/gym"
        element={
          <>
            <Navbar
              logo="GYM"
              links={[
                { label: "3D-Model", href: "/gym/3d-Model" },
                { label: "Transformation", href: "/gym/Transformation" },
                { label: "Blog", href: "/gym/Blog" },
              ]}
              cta={{ label: "Contract", href: "/contact" }}
            />

            <GymLanding />
          </>
        }
      />





    </Routes>

  );
}

export default App;


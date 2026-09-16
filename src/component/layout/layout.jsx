import Navbar from "../navbar"; 

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar
        logo="HOME"
        links={[
          { label: "About", href: "/about" },
          { label: "Academic", href: "/about/academic" },
          { label: "Projects", href: "/project" },
        ]}
        cta={{ label: "Hire Me", href: "#contact" }}
      />
      
      {children} 
    </main>
  );
};

export default Layout;
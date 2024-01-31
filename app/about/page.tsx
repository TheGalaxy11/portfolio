import { Printer, Newspaper } from "lucide-react";
import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
import { ArrowBigLeft } from "lucide-react";

const printButtons = [
  {
    icon: <Printer size={20} />,
    href: "/resume.pdf",
    label: "Resume",
  },
  {
    icon: <Newspaper size={20} />, // Replace YourIconComponentHere with the appropriate icon component for transcript
    href: "/transcript.pdf",
    label: "Transcript",
  },
];

const navigation = [
  { icon: <ArrowBigLeft size={20} />, name: "Back to Home", href: "/" },
  // Add other navigation items as needed
];

const frontendSkills = [
  { language: "HTML", icon: "html-icon.png", level: "Advance" },
  { language: "CSS", icon: "css-icon.png", level: "Intermediate" },
  { language: "JavaScript", icon: "js-icon.png", level: "Intermediate" },
  { language: "React", icon: "react-icon.png", level: "Beginner" },
  
];

const backendSkills = [
  { language: "Python", icon: "python-icon.png", level: "Intermediate" },
  { language: "Node.js", icon: "nodejs-icon.png", level: "Intermediate" },
  { language: "PHP", icon: "php-icon.png", level: "Intermediate" },
  { language: "GitHub", icon: "github-icon.png", level: "Intermediate" },
  { language: "MySQL", icon: "mysql-icon.png", level: "Intermediate" },
  { language: "Laragon", icon: "laragon-icon.png", level: "Intermediate" },
  { language: "R", icon: "r-icon.png", level: "Beginner" },
];

const webFrameworkSkills = [
  { framework: "Laravel", icon: "laravel-icon.png", level: "Intermediate" },
  { framework: "Django", icon: "django-icon.png", level: "Intermediate" },
  { framework: "Next.js", icon: "next-icon.png", level: "Beginner" },
  { framework: "Bootstrap", icon: "bootstrap-icon.png", level: "Beginner" },
];

const graphic = [
  { app: "Canva", icon: "c-icon.png", level: "Advance" },
  { app: "Photoshop", icon: "photoshop-icon.png", level: "Intermediate" },
  { app: "Premier Pro", icon: "pp-icon.png", level: "Advance" },
  { app: "Illustrator", icon: "ai-icon.png", level: "Beginner" },
  { app: "After Effect", icon: "ae-icon.png", level: "Beginner" },
  { app: "Figma", icon: "figma-icon.png", level: "Intermediate" },
];

const network = [
  { app: "VMware", icon: "vm-icon.png", level: "Advance" },
  { app: "Cisco PT", icon: "cpt-icon.png", level: "Intermediate" },
  { app: "Kali Linux", icon: "kali-icon.png", level: "Beginner" },
];

export default function AboutMe() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-4 mr-auto">
        <ul className="flex items-center justify-start gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 flex items-center ml-6"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="my-8 text-center">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-64 h-64 rounded-full mb-4"
          style={{ margin: "0 auto" }}
        />
        <br />
        <h1 className="text-4xl text-white mb-2 font-display">
          Ahmad Danial
        </h1>
        <p className="text-sm text-zinc-500 mb-8">
          Fresh Graduate | Full Stack Developer | Based in Malaysia
        </p>
        <h2 className="text-2xl text-white mb-4 font-display">
          About Me
        </h2>
        <p className="text-sm text-zinc-500 mb-4">
          Hello! I'm Danial, a dedicated Computer Science student with a passion
          for technology and a strong desire to make a meaningful impact in the
          world of <br ></br>software development. Currently, I am pursuing a
          Diploma in Computer Science at Kolej Profesional MARA Beranang,
          Selangor, where I have been gaining valuable insights into<br></br>
          the world of coding, algorithms, and problem-solving.
        </p>
        
       {/* Styled "Print Resume" and "Print Transcript" buttons with inline styles */}
        <div className="my-6 flex justify-center">
          {printButtons.map((button) => (
            <a
              key={button.href}
              href={button.href}
              download={button.label.toLowerCase() + ".pdf"}
              style={{
                backgroundColor: "#4a90e2", // Change to your desired background color
                color: "#fff", // Change to your desired text color
                padding: "1rem 2rem", // Adjust padding as needed
                borderRadius: "1.5rem", // Adjust border-radius as needed
                fontWeight: 600,
                transition: "all 300ms ease",
                cursor: "pointer",
                textDecoration: "none",
                display: "flex", // Use flex display to align items horizontally
                alignItems: "center", // Align items vertically in the center
                justifyContent: "center", // Center the content horizontally
                margin: "0 0.5rem", // Add margin between buttons if needed
              }}
            >
              {button.icon}
              <span className="ml-2">{button.label}</span>
            </a>
          ))}
        </div>
    </div>

      <div className="my-6 text-center">
        <h2 className="text-2xl text-white mb-10 font-display">
          Programming Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg text-white mb-8">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.language}
                  className="text-center mb-4"
                >
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.language}
                    className="w-12 h-12 mb-2 mx-auto"
                  />
                  <p className="text-sm text-zinc-500">
                    {skill.language} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg text-white mb-8">Backend</h3>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              {backendSkills.map((skill) => (
                <div key={skill.language} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.language}
                    className={`w-12 h-12 mb-2 mx-auto 
                      ${skill.language === 'PHP' ? 'php-logo' : ''} 
                      ${skill.language === 'R' ? 'r-logo' : ''} 
                      ${skill.language === 'MySQL' ? 'mysql-logo' : ''}`}
                    style={skill.language === 'PHP' ? { width: '90px' } : 
                          (skill.language === 'R' ? { width: '50px' } : 
                          (skill.language === 'MySQL' ? { width: '70px' } : 
                          {}))} 
                  />
                  <p className="text-sm text-zinc-500">
                    {skill.language} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg text-white mb-8">Web Framework</h3>
            <div className="grid grid-cols-2 gap-4 ">
              {webFrameworkSkills.map((skill) => (
                <div key={skill.framework} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.framework}
                    className={`w-12 h-12 mb-2 mx-auto ${skill.framework === 'Laravel' ? 'laravel-logo' : ''} ${skill.framework === 'Django' ? 'django-logo' : ''}`}
                    style={skill.framework === 'Laravel' ? { width: '150px' } : (skill.framework === 'Django' ? { width: '110px' } : {})} />
                  <p className="text-sm text-zinc-500">
                    {skill.framework} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-12 text-center">
      <h2 className="text-2xl text-white mb-10 font-display">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20">
        <div>
          <h3 className="text-lg text-white mb-8">Graphic Design & Multimedia</h3>
          <div className="grid grid-cols-2 gap-2">
            {graphic.map((skill) => (
              <div key={skill.app} className="text-center mb-4">
                <img
                  src={`/${skill.icon}`}
                  alt={skill.app}
                  className="w-12 h-12 mb-2 mx-auto"
                />
                <p className="text-sm text-zinc-500">
                  {skill.app} - {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>


          <div>
            <h3 className="text-lg text-white mb-8">Network & Security</h3>
            <div className="grid grid-cols-2 gap-2 justify-items-center">
              {network.map((skill) => (
                <div key={skill.app} className="text-center mb-4">
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.app}
                    className={`w-12 h-12 mb-2 mx-auto 
                      ${skill.app === 'VMware' ? 'vm-logo' : ''} 
                      `}
                    style={skill.app === 'VMware' ? { width: '80px' } : 
                          {}} 
                  />
                  <p className="text-sm text-zinc-500">
                    {skill.app} - {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>

      <Particles className="absolute inset-0 -z-10" quantity={100} />
    
    </div>
  );
}

import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with Next.js and Stripe integration",
      image: "/project1.jpg",
      tech: ["Next.js", "TailwindCSS", "Stripe", "MongoDB"]
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media management",
      image: "/project2.jpg",
      tech: ["React", "Firebase", "TailwindCSS", "ChartJS"]
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI API",
      image: "/project3.jpg",
      tech: ["Python", "Next.js", "OpenAI", "PostgreSQL"]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 gradient-bg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card-gradient rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 glow">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="gradient-border px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-16 gradient-bg">
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-text-secondary mb-8 text-lg">
          Crafting beautiful and functional web experiences with modern technologies.
        </p>
        <div className="flex gap-4">
          <button className="button-gradient text-white px-6 py-3 rounded-lg">
            View Projects
          </button>
          <button className="gradient-border text-primary px-6 py-3 rounded-lg hover:text-white hover:button-gradient">
            Contact Me
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 glow">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <form className="space-y-6 card-gradient p-8 rounded-2xl glow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full gradient-border bg-background-light text-text-primary rounded-lg px-4 py-3 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full gradient-border bg-background-light text-text-primary rounded-lg px-4 py-3 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full gradient-border bg-background-light text-text-primary rounded-lg px-4 py-3 focus:outline-none"
              placeholder="Project Inquiry"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full gradient-border bg-background-light text-text-primary rounded-lg px-4 py-3 focus:outline-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="button-gradient text-white px-8 py-3 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

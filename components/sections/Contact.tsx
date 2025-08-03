"use client";

import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // e.g., send data to an API endpoint.
    alert("Thank you for your message! I will get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm currently open to new opportunities and collaborations. If you have a project in mind, or just want to say hello, feel free to reach out.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary dark:hover:text-primaryDark"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-md bg-light dark:bg-dark border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"/>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-md bg-light dark:bg-dark border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"/>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your Message" required className="w-full px-4 py-2 rounded-md bg-light dark:bg-dark border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

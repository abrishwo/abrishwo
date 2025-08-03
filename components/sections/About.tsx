import { education, certificates } from "@/lib/data";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              I am a passionate and results-driven Senior Software Engineer with a journey that began in 2018. My expertise lies in full-stack development, where I excel at building robust and scalable applications using the MERN stack and Next.js. I also have a strong command of mobile app development with Flutter and a keen interest in data science with Python.
            </p>
            <p>
              From launching an AI-powered chatbot like EnatGPT to developing a comprehensive eLearning platform, I thrive on turning complex ideas into practical, user-friendly solutions. My goal is to continuously learn, innovate, and contribute to projects that make a meaningful impact.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaGraduationCap className="mr-3 text-primary dark:text-primaryDark" /> Education
              </h3>
              <div className="p-4 rounded-lg bg-light dark:bg-dark border border-gray-200 dark:border-gray-700">
                <p className="font-bold text-lg">{education.degree}</p>
                <p className="text-md">{education.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{education.date}</p>
                <p className="text-sm mt-1">{education.details}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaCertificate className="mr-3 text-primary dark:text-primaryDark" /> Certifications
              </h3>
              <ul className="space-y-2">
                {certificates.map((cert) => (
                  <li key={cert.id} className="p-3 rounded-lg bg-light dark:bg-dark border border-gray-200 dark:border-gray-700">
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} - {cert.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

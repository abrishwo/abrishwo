import { experiences } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12">
              <div className="flex items-center">
                {/* Circle on the timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary dark:bg-primaryDark rounded-full z-10 border-4 border-light dark:border-dark" />
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto text-left"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg bg-light dark:bg-dark shadow-md border border-gray-200 dark:border-gray-700`}
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                    <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    <p className="text-md font-semibold text-primary dark:text-primaryDark">{exp.company}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

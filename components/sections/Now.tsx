import { now } from "@/lib/data";
import { FaLightbulb, FaBookOpen, FaMusic, FaCode } from "react-icons/fa";

export const Now = () => {
    return (
        <section id="now" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">What I'm Doing Now</h2>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-3 flex items-center"><FaCode className="mr-3 text-primary dark:text-primaryDark" /> Currently Working On</h3>
                        <p className="text-gray-600 dark:text-gray-400">{now.currentlyWorkingOn}</p>
                    </div>
                    <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-3 flex items-center"><FaLightbulb className="mr-3 text-primary dark:text-primaryDark" /> Learning</h3>
                        <p className="text-gray-600 dark:text-gray-400">{now.learning}</p>
                    </div>
                    <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-3 flex items-center"><FaBookOpen className="mr-3 text-primary dark:text-primaryDark" /> Reading</h3>
                        <p className="text-gray-600 dark:text-gray-400">{now.reading}</p>
                    </div>
                    <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-3 flex items-center"><FaMusic className="mr-3 text-primary dark:text-primaryDark" /> Listening To</h3>
                        <p className="text-gray-600 dark:text-gray-400">{now.listeningTo}</p>
                    </div>
                </div>
                 <p className="text-center text-sm text-gray-500 mt-8">Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary dark:hover:text-primaryDark">nownownow.com</a></p>
            </div>
        </section>
    );
}

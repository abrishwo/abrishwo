import { socialLinks } from "@/lib/data";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-20">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary dark:hover:text-primaryDark"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Abreham Wondimu Shiferaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Jason Jarrell</h2>
          <p className="text-lg text-gray-600 mb-6">
            Freelancer specializing in web design, SEO, and IT services,
            dedicated to providing exceptional local service to clients.
          </p>
          <button className="px-6 py-2 text-white bg-black rounded-full shadow-md hover:bg-gray-800">
            Contact
          </button>
        </div>
        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
          <div className="w-full sm:w-1/2">
            <Image
              src="/img/laptop-design.jpg" 
              alt="Web Application Design"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src="/img/laptop-simple.jpg" 
              alt="Simple Design"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

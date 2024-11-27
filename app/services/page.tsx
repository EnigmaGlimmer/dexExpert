"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/home/ServiceCard";
import ClientFeedback from "../components/services/ClientFeedback";

const services = [
    {
        title: "Professional Web Design",
        description: "Custom web design solutions to enhance your online presence and attract more customers.",
        imgSrc: "/img/web-design.jpg",
    },
    {
        title: "SEO Optimization Services",
        description: "Boost your website's visibility and ranking with our effective SEO strategies and techniques.",
        imgSrc: "/img/seo-optimization.jpg",
    },
    {
        title: "Reliable IT Services",
        description: "Comprehensive IT solutions to support your business operations and enhance productivity.",
        imgSrc: "/img/it-services.jpg",
    },
];

export default function Services() {
    return (
        <div>
            <Header />
            <div className="py-10">
                <div className="my-6 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold mb-2">Freelance Web Solutions</h1>
                    <p className="text-gray-600 text-center">
                        Expert web design, SEO and IT services tailored for your local business needs. Let's connect today!
                    </p>
                </div>
            </div>
            <div className="bg-blue-900 text-white py-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Web Services Offered</h1>
                    <p className="mt-4 text-gray-300">Providing expert web design, SEO, and IT services tailored to your local business needs.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imgSrc={service.imgSrc}
                        />
                    ))}
                </div>
            </div>
            <ClientFeedback />
            <Footer />
        </div>
    );
}
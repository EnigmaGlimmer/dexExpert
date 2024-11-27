import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
    const images = [
        '/img/port_1.jpg',
        '/img/port_2.jpg',
        '/img/port_3.jpg',
        '/img/port_4.jpg',
        '/img/port_5.jpg',
        '/img/port_6.jpg',
    ];

    return (
        <div>
            <Header />
            <div className="py-16 px-8">
                <h2 className="text-3xl font-bold mb-8">Web Design</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Creative and responsive web design tailored to client needs.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/img/service1.jpg"
                            alt="Service 1"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                        <p className="font-semibold mt-4">SEO Services</p>
                        <p className="text-gray-500">Expert services to boost traffic.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/img/service2.jpg"
                            alt="Service 2"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                        <p className="font-semibold mt-4">Local Support</p>
                        <p className="text-gray-500">
                            Providing IT services tailored for businesses.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Creative Solutions</h2>
                    <p className="text-gray-600 mb-8">
                        Freelance web design, SEO, and IT services for local clients.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
                            >
                                <Image
                                    src={src}
                                    alt={`Creative solution ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Portfolio;

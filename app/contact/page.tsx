"use client"
import Image from "next/image";
import React from "react";

const Contact: React.FC = () => {
    return (
        <div>
            <div className="bg-gray-50">
                <div className="my-6 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-2">Get in Touch with Us</h1>
                    <p className="text-gray-600 mb-10 text-center">
                        Reach out for web design, SEO, and IT services inquiries.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="bg-limeGreen p-6 rounded-lg shadow-md w-full max-w-md">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Message*
                                    </label>
                                    <textarea
                                        placeholder="Type your message here"
                                        rows={4}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-buttonSend text-white py-3 rounded-lg transition duration-300"
                                >
                                    Send Your Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="w-full max-w-md">
                            <Image
                                src="/img/contact.jpg"
                                alt="Contact Us"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="my-6 flex flex-col items-center justify-center p-6">
                    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold">Contact Us</h1>
                            <p className="text-gray-600">
                                We provide local web design, SEO, and IT services. Reach out for
                                personalized assistance tailored to your needs.
                            </p>

                            <div>
                                <h2 className="font-bold">Location</h2>
                                <p>14 MINTHAL DR, SOUTHINGTON, CT, 06489, USA</p>
                            </div>

                            <div>
                                <h2 className="font-bold">Email</h2>
                                <p>
                                    <a
                                        href="mailto:JASONJARRELLLLC@outlook.com"
                                        className="text-teal-600 underline"
                                    >
                                        JASONJARRELLLLC@outlook.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h2 className="font-bold">Phone</h2>
                                <p>+ (475) 349-1632</p>
                            </div>

                            <div>
                                <h2 className="font-bold">Hours</h2>
                                <p>Mon-Fri 9am</p>
                            </div>
                        </div>

                        <div>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.6113712455527!2d-72.87727198421286!3d41.5889416792458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7c9ab240d4f79%3A0xe2757f1dfd9d162f!2s14%20Minthal%20Dr%2C%20Southington%2C%20CT%2006489%2C%20USA!5e0!3m2!1sen!2sin!4v1691151023161!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

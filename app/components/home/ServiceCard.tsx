"use client"
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
      <Image src={imgSrc} alt={title} className="w-full h-40 object-cover rounded-t-md" />
      <h3 className="text-lg text-black font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;

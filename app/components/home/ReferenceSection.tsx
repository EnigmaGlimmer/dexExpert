"use client"
import Image from 'next/image';

interface ReferenceModel {
  id: number;
  rating: number;
  content: string;
  author: string;
  authorImage: string; 
}

const references: ReferenceModel[] = [
  {
    id: 1,
    rating: 5,
    content: "Jason's web design skills transformed my online presence. Highly recommend his SEO and IT services!",
    author: 'Emily Smith',
    authorImage: '/img/emily-smith.jpg',
  },
  {
    id: 2,
    rating: 5,
    content: "Exceptional service! Jason's expertise in web research helped my business grow significantly in local markets.",
    author: 'Michael Lee',
    authorImage: '/img/michael-lee.jpg',
  },
];

const ReferenceSection: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white py-10">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/img/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((referencemodel) => (
            <div
              key={referencemodel.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="flex space-x-1">
                {Array.from({ length: referencemodel.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="w-72 text-lg font-light italic md:w-full">&rdquo;{referencemodel.content}&rdquo;</p>
              <div className="flex items-center space-x-4">
                <Image
                  src={referencemodel.authorImage}
                  alt={referencemodel.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="font-semibold">{referencemodel.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;

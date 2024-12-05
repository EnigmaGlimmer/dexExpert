import React from 'react'
import FeedbackCard from './FeedbackCard';

type Props = Record<string, unknown>;

const clients: ClientModel[] =[
    {
        id:1,
        rating: 5,
        content:"I was impressed with the web research and IT services provided. Jason's expertise is invaluable and made my project a success!",
        author:"Mark Smith",
        authorImage: "/img/feedback1.jpg",
        location: "Los Angeles",
    },
    {
        id:2,
        rating: 5,
        content:"Jason provided excellent web design and SEO services. Highly recommend him for any project!",
        author:"Emily Johnson",
        authorImage: "/img/feedback2.jpg",
        location: "New York",
    },
];

export default function ClientFeedback({}: Props) {
  return (
    <div className='py-10'>
        <div className='my-6 flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold mb-2'>Client Feedback</h1>
            <p className='text-gray-600 text-center'>
                Discover what our clients say about our web design and SEO services.
            </p>
        </div>
        <div className='relative z-10 max-w-6xl mx-auto px-4 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {clients.map((client) => (
                    <FeedbackCard key={client.id} client={client}/>
                ))}
            </div>
        </div>
    </div>
  )
}
import React from 'react';
import Image from 'next/image';

type Props = {
    client: ClientModel
}

export default function FeedbackCard({ client }: Props) {
    return (
        <div className='flex flex-col justify-between items-left bg-limeGreen text-left p-8'>
            <div className='flex space-x-1'>
                {Array.from({ length: client.rating }).map((_, i) => (
                    <span key={i} className='text-black'>★</span>
                ))}
            </div>
            <p className='w-72 text-lg font-light italic md:w-full'>{client.content}</p>
            <div className='flex items-center space-x-4 mt-9'>
                <Image
                    src={client.authorImage}
                    alt={client.author}
                    width={50}
                    height={50}
                    className='rounded-full'
                />
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>{client.author}</span>
                    <span className='text-gray-600'>{client.location}</span>
                </div>
            </div>
        </div>
    )
}
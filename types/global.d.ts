declare global {
    interface ClientModel {
        id: number;
        rating: number;
        content: string;
        author: string;
        authorImage: string;
        location?: string;
    };    
}

export {}
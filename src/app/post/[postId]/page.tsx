import { Metadata } from "next";
import { FC } from "react";

interface pageProps {
    params: {
        postId: string
    }
}

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

// get dynamic metadata
export async function generateMetadata({ params } : pageProps ): Promise<Metadata> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {title: data.title}
}

const page: FC<pageProps> = ({ params }) => {
    return ( 
        <div>
            {params.postId}
        </div>
     );
}
 
export default page; 
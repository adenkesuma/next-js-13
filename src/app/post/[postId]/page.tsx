import { FC } from "react";

interface pageProps {
    params: {
        postId: string
    }
}

const page: FC<pageProps> = ({ params }) => {
    console.log(params.postId)

    return ( 
        <div>
            page
            {params.postId}
        </div>
     );
}
 
export default page; 
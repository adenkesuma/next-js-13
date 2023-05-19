import { FC } from 'react';


// export async function generateStaticParams() {
//     const products = ['post-one', 'post-two', 'post-three'];

//     console.log(products)
    
//     return products.map((product) => {
//         return {
//             productId: product
//         }
//     })
// }

interface pageProps {
    params: {
        productId: string;
    }
}

const page: FC<pageProps> = ({ params }) => {
    // [...productID], jika kita menggunakan ... di dalam penamaan folder dynamic 
    // menggunakan [] maka semua url yang kita ketikan misal /products/3/shoes/red maka semua route itu akan tersimpan di dalam params 
    
    const { productId } = params;

    return ( 
        <div>
            product id
            {productId}
        </div>
    );
}
 
export default page;
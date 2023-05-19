import axios from 'axios';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    await wait(5000)

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default page;

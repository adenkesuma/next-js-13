import { FC } from 'react';
import { AuthRequiredError } from '@/lib/exceptions';

interface HomeProps {}

// const session = null;

const Home: FC<HomeProps> = () => {
  // if (!session) throw new AuthRequiredError();

  return ( 
    <div>
      this is an auth-only page
    </div>
   );
}
 
export default Home;
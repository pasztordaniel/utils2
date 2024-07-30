import { Button } from '@package/ui';
import { PUBLIC_ENV } from '../env';

const Home = () => (
  <main>
    {/* eslint-disable-next-line no-alert */}
    <Button onClick={() => alert('Works!')}>Button</Button>
    <div>{`public env: ${PUBLIC_ENV}`}</div>
  </main>
);

export default Home;

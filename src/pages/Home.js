import './Home.css';

import {
  Title,
  ComingSoon,
  Mint,
  Faq,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <Title />
      <ComingSoon />
      <Mint />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

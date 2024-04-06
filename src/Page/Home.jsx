import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Message from '../components/Message';

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <Navbar />
      <div className="mt-5 mb-5 md:mt-10 md:mb-10 max-w-7xl mx-auto">
        <Message />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

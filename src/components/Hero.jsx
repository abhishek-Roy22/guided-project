import LoginForm from './LoginForm';
import leftImg from '../assets/2.png';
import Logo from '../assets/logo2.png';

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="hidden md:flex items-center justify-center relative flex-col  md:max-w-[600px] h-screen bg-[#f2d184]">
        <div className="absolute left-0 right-0 md:top-10 md:left-10 flex flex-col">
          <img src={Logo} alt="logo" width={100} height={20} />
          <p className="text-[#876317] font-bold text-sm text-wrap md:text-3xl">
            Discover the world's top Desiginers & Creatives.
          </p>
        </div>
        <img src={leftImg} alt="register-img" className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto md:flex-grow flex items-center justify-center relative">
        <span className="absolute hidden md:block md:top-2 md:right-5 text-black text-lg font-bold">
          Already a member?{' '}
          <button to="/signin" className="cursor-pointer text-purple-500">
            Sign In
          </button>
        </span>
        <LoginForm />
      </div>
    </div>
  );
};

export default Hero;

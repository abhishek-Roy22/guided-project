import Logo from '../assets/logo2.png';
import CardImg1 from '../assets/card.jpg';
import CardImg2 from '../assets/card1.svg';
import CardImg3 from '../assets/card2.jpg';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { useStep } from '../context/StepContext';

const informations = [
  {
    id: 1,
    imgUrl: CardImg1,
    title: "I'm designer looking to share my work",
  },
  {
    id: 2,
    imgUrl: CardImg2,
    title: "I'm Looking to hire a designer",
  },
  {
    id: 3,
    imgUrl: CardImg3,
    title: "I'm Looking for design inspiration",
  },
];

const Services = () => {
  const { stepDecrease } = useStep();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="max-w-7xl mx-auto md:h-screen flex items-center justify-center">
      <div className="fixed w-full bg-white md:bg-transparent mb-5 md:mb-2 top-0 left-0 flex items-center space-x-2">
        <img src={Logo} alt="logo" width={100} className="object-cover" />
        <div
          onClick={() => stepDecrease()}
          className="w-10 h-10 border-none bg-gray-300 text-gray-500 font-bold flex items-center justify-center rounded-md cursor-pointer"
        >
          {'<'}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-28 mb-5 md:mb-0 md:mt-2">
        <div className="flex flex-col items-center justify-center gap-2 sm:mb-10">
          <h1 className="text-black font-bold text-xl md:text-3xl font-sans">
            What brings you to Dribbble?
          </h1>
          <p className="text-sm text-wrap text-center md:text-base text-slate-400">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="mt-5 w-full flex justify-center md:mt-10 md:mb-10 md:flex-row gap-2 md:gap-5 flex-wrap">
          {informations &&
            informations.map((information) => (
              <Card key={information.id} information={information} />
            ))}
        </div>
        <div className="sm:mt-5 md:mt-5 flex flex-col items-center justify-center gap-2">
          <h3 className="font-bold text-black">
            Anything else? You can select multiple
          </h3>
          <button
            onClick={handleClick}
            className="bg-[#ce5297] text-white py-2 px-6 w-full md:w-[250px] rounded-md"
          >
            Finish
          </button>
          <span
            onClick={() => stepDecrease()}
            className="text-sm text-gray-400 cursor-pointer"
          >
            or Press RETURN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;

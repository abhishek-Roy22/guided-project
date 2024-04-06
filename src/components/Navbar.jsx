import Logo from '../assets/logo2.png';
import SearchIcon from '../assets/search.svg';
import BagIcon from '../assets/bag.svg';
import User from '../assets/user.svg';

const links = [
  {
    id: 1,
    name: 'Inspiration',
  },
  {
    id: 2,
    name: 'Find Work',
  },
  {
    id: 3,
    name: 'Learn Design',
  },
  {
    id: 4,
    name: 'Go Pro',
  },
  {
    id: 5,
    name: 'Hire Designers',
  },
];

const Navbar = () => {
  return (
    <nav className="max-w-full h-20 flex items-center justify-between bg-white border-b border-gray-300 overflow-hidden px-2">
      <div className="flex items-center gap-8">
        <img src={Logo} alt="logo" width={80} className="object-fit" />
        <ul className="hidden md:flex items-center gap-5">
          {links &&
            links.map((link) => (
              <li
                key={link.id}
                className="block font-semibold text-gray-400 font-sans cursor-pointer"
              >
                {link.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <div className="hidden bg-gray-300 md:flex items-center justify-start py-1 px-3 w-44 rounded-md">
          <img src={SearchIcon} alt="SearchIcon" width={20} />
          <input
            type="text"
            placeholder="Search"
            className="border-none focus:outline-none bg-transparent w-full"
          />
        </div>
        <img src={BagIcon} alt="BagIcon" width={20} />
        <span className="w-8 h-8 rounded-full bg-gray-300">
          <img src={User} alt="user" className="w-full object-cover" />
        </span>
        <button
          type="submit"
          className="bg-[#ce5297] text-white py-2 px-6 w-fit rounded-md"
        >
          Upload
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

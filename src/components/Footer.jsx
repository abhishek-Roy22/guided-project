import logo from '../assets/logo2.png';
import Football from '../assets/football.svg';
import Facebook from '../assets/facebook (1).png';
import Instagram from '../assets/instagram (2).png';
import Pinterest from '../assets/pinterest.png';
import Twitter from '../assets/twitter2.svg';
import {
  designers,
  hireDesigners,
  companies,
  directories,
  designAssets,
  resources,
} from '../data';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-between bg-[#fafafa]">
      <div className="flex flex-wrap mb-2 gap-5">
        <div className="flex flex-col gap-2 w-52">
          <img src={logo} alt="Logo" width={80} className="object-fit" />
          <p className="text-sm text-wrap">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <div className="flex items-center gap-5">
            <img src={Football} alt="football" width={20} />
            <img src={Twitter} alt="twitter" width={20} />
            <img src={Facebook} alt="facebook" width={20} />
            <img src={Instagram} alt="instagram" width={20} />
            <img src={Pinterest} alt="pinterest" width={20} />
          </div>
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">For designers</h2>
          {designers.map((design) => (
            <p className="text-gray-500 text-sm" key={design.id}>
              {design.title}
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Hire designers</h2>
          {hireDesigners.map((deisgner) => (
            <p className="text-gray-500 text-sm" key={deisgner.id}>
              {deisgner.title}
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Brands</h2>
          <p className="text-gray-500 text-sm">Advertise with us</p>
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Company</h2>
          {companies.map((company) => (
            <p className="text-gray-500 text-sm" key={company.id}>
              {company.title}
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Directories</h2>
          {directories.map((direc) => (
            <p className="text-gray-500 text-sm" key={direc.id}>
              {direc.title}
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Design Assets</h2>
          {designAssets.map((asset) => (
            <p className="text-gray-500 text-sm" key={asset.id}>
              {asset.title}
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-bold font-sans mb-2">Design Resources</h2>
          {resources.map((resouce) => (
            <p className="text-gray-500 text-sm" key={resouce.id}>
              {resouce.title}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full py-2 px-1 border-t border-gray-300 flex items-center justify-around gap-5">
        <p className="text-sm text-gray-400">
          &copy; 2024 Dribbble. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          <span className="text-gray-500 font-bold">20,501,853</span> shots
          dribbbld ⚽
        </p>
      </div>
    </footer>
  );
};

export default Footer;

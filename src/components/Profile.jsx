import React from 'react';
import ProfileForm from './ProfileForm';
import Logo from '../assets/logo2.png';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center justify-center relative">
      <img src={Logo} alt="logo" width={100} className="fixed top-0 left-0" />
      <div className="w-full flex flex-col items-center mt-32 md:mt-2 gap-5">
        <h1 className="font-sans font-bold text-black text-lg text-wrap sm:text-4xl">
          Welcome! Let's create your profile
        </h1>
        <p className="sm:text-base text-center text-sm text-wrap text-gray-400">
          Let others get to know you better! You can do these leter
        </p>
        <div className="mt-5">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;

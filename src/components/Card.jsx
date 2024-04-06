import { useState } from 'react';

const Card = ({ information }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className="w-60 h-72 flex flex-col justify-evenly items-center border border-gray-200 rounded-xl shadow-lg shadow-gray-300 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-red-400">
      <img
        src={information.imgUrl}
        alt="card-img"
        className={`object-cover w-full rounded-xl transition-all ${
          isChecked && '-translate-y-10'
        }`}
      />
      <h2
        className={`text-center font-sans font-bold transition-all text-black py-1 px-2 leading-4 mb-1 ${
          isChecked && '-translate-y-10'
        }`}
      >
        {information.title}
      </h2>
      {isChecked && (
        <p
          className={`text-sm relative font-sans transition-all text-gray-400 text-wrap leading-4 py-1 px-2 text-center ${
            isChecked && '-translate-y-10'
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          commodi quos eligendi, ducimus ullam quaerat
        </p>
      )}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className={`form-checkbox mb-2 outline-none transition-all rounded-full p-2 text-rose-400 appearance-none focus:ring-0 focus:outline-none ${
          isChecked && '-translate-y-10'
        }`}
      />
    </label>
  );
};

export default Card;

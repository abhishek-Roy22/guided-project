import { useState } from 'react';
import Camera from '../assets/camera1.svg';
import { useStep } from '../context/StepContext';

const ProfileForm = () => {
  const { stepIncrement, stepDecrease } = useStep();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    stepIncrement();
  };

  return (
    <form
      className="w-full flex flex-col items-start justify-center gap-5"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-bold text-black font-sans">Add an avatar</h3>
      <label className="w-full flex flex-col sm:flex-row gap-2 space-x-10 cursor-pointer mb-5">
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full object-cover"
            />
          )}
          {!selectedImage && (
            <img
              src={Camera}
              alt="camera-img"
              className="object-cover w-10 h-10 text-gray-400"
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <button className="border border-gray-300 font-semibold rounded-md py-2 px-4 text-black h-10 w-fit">
            Choose image
          </button>
          <div className="flex gap-2 items-center bottom-0 right-0">
            <span className="text-gray-400">{'>'}</span>
            <p className="text-gray-400">Or choose one of our defaults</p>
          </div>
        </div>
      </label>

      <h3 className="text-3xl font-bold text-black font-sans">
        Add your location
      </h3>
      <input
        type="text"
        placeholder="Enter a location"
        required
        className="w-full border-dashed border-t-0 border-r-0 border-l-0 border-gray-400 outline-none  focus:outline-none py-2 px-4"
      />
      <button
        type="submit"
        className="bg-[#ce5297] text-white py-2 px-6 w-full md:w-[250px] rounded-md"
      >
        Next
      </button>
      <span
        onClick={() => stepDecrease()}
        className="text-sm text-gray-400 cursor-pointer"
      >
        or Press RETURN
      </span>
    </form>
  );
};

export default ProfileForm;

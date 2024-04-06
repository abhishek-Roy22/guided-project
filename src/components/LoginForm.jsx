import { useStep } from '../context/StepContext';

const LoginForm = () => {
  const { stepIncrement } = useStep();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (
      form.name.value !== '' &&
      form.username.value !== '' &&
      form.email.value !== '' &&
      form.password.value !== ''
    ) {
      stepIncrement();
    }
  };

  return (
    <form
      className="flex flex-col gap-5 md:gap-8 max-w-[500px] p-5"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl md:text-2xl font-bold">Sign up to Dribbble</h1>
      <div className="flex flex-col gap-8 md:gap-5 md:flex-row items-center justify-between w-full md:mt-8">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="name" className="font-bold text-black">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John"
            className="bg-gray-300 outline-none border-none px-4 py-2 text-black rounded-md invalid:ring-2 invalid:ring-rose-400"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="username" className="font-bold text-black">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="John"
            min={4}
            className="bg-gray-300 outline-none border-none px-4 py-2 text-black rounded-md invalid:ring-2 invalid:ring-rose-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold text-black">
          Email
        </label>
        <input
          type="email"
          name="email"
          pattern="/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i
          "
          placeholder="John@gmail.com"
          className="bg-gray-300 outline-none border-none px-4 py-2 text-black rounded-md invalid:ring-2 invalid:ring-rose-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold text-black">
          Password
        </label>
        <input
          type="password"
          name="password"
          min={8}
          pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/
          "
          placeholder="6+ characters"
          className="bg-gray-300 outline-none border-none px-4 py-2 text-black rounded-md invalid:ring-rose-400"
        />
      </div>
      <div className="flex gap-2 items-baseline">
        <input type="checkbox" required />
        <p className="text-wrap text-base font-normal text-gray-500">
          Create an account means you'r okay with our{' '}
          <span className="font-semibold text-purple-500">
            Term of Service, Privacy Policy
          </span>
          , and our default{' '}
          <span className="font-semibold text-purple-500">
            Notification Settings.
          </span>
        </p>
      </div>
      <button
        type="submit"
        className="bg-[#ce5297] text-white py-2 px-6 w-full md:w-fit rounded-md hover:ring-2 ring-purple-700"
      >
        Create Account
      </button>
      <span className="md:hidden text-black text-lg font-normal">
        Already a member?{' '}
        <button to="/signin" className="cursor-pointer text-purple-500">
          Sign In
        </button>
      </span>
      <p className="text-sm w-80 text-wrap text-gray-400">
        This site is protected reCAPTCHA and the Goolgle{' '}
        <span className="font-semibold text-purple-500">Privacy Policy</span>{' '}
        and{' '}
        <span className="font-semibold text-purple-500">Terms of Service</span>{' '}
        apply.
      </p>
    </form>
  );
};

export default LoginForm;

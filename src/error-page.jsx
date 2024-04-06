import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center justify-center flex-col gap-8">
      <h1 className="text-xl md:text-3xl text-black font-serif font-bold">
        Oops!
      </h1>
      <p className="text-lg font-serif text-gray-700 font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-rose-600 font-serif underline">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="py-2 px-4 border-none bg-rose-600 hover:bg-rose-700 text-gray-50 font-bold font-serif rounded-md"
      >
        Back to Home
      </Link>
    </div>
  );
}

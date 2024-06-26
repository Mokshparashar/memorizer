import { useGlobalContext } from "../context/globalContext";

function Landing() {
  const { setIsSignupOpen } = useGlobalContext();
  const { setIsLoginOpen } = useGlobalContext();

  function handleSingup() {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  }
  function handleLogin() {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  }

  return (
    <div className=" ">
      <h1 className="font-600 uppercase w-full m-auto px-4  text-center mt-6 text-lg">
        Your daily routine memorizer initiate just by saying_
      </h1>
      <img
        src="https://res.cloudinary.com/dd43id5pp/image/upload/v1711971284/nb9i4onopsodjvpdrpd0.png"
        alt="img"
      />
      <div className="flex items-center justify-center flex-col mt-8 gap-4">
        <button
          onClick={handleSingup}
          className="bg-blue-500 text-white w-1/2 py-2 rounded-sm border-blue-500 border-2 text-center"
        >
          Sign up
        </button>
        <button
          className="border-blue-500 border-2 text-blue-500 w-1/2 py-2 rounded-sm text-center"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Landing;

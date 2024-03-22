function Landing() {
  return (
    <div className="">
      <h1 className="font-600 uppercase w-full m-auto px-4  text-center mt-6 text-lg">
        Your daily routine memorizer initiate just by saying_
      </h1>
      <div className="flex items-center justify-center flex-col mt-8 gap-4">
        <button className="bg-blue-500 text-white w-1/2 py-2 rounded-sm border-blue-500 border-2">
          Sign up
        </button>
        <button className="border-blue-500 border-2 text-blue-500 w-1/2 py-2 rounded-sm">
          Login
        </button>
      </div>
    </div>
  );
}

export default Landing;

function Signup() {
  return (
    <div className=" w-screen h-screen blur-parent-bg ">
      <h1 className=" bg-transparent absolute z-10 left-6 text-2xl ">
        Create account{" "}
      </h1>
      {/* <img
        src="https://img.freepik.com/premium-vector/hanging-light-bulbs-glowing-white-background-concept-idea_322958-1442.jpg?w=360"
        alt=""
        className="absolute -z-10"
      /> */}
      <div className=" blur-child-bg w-5/6 m-auto flex items-center justify-start pt-16 gap-4 flex-col  h-2/3 ">
        <input
          type="text"
          className="outline-none border-2 border-solid border-blue-500 w-full h-8 rounded-md pl-4"
          placeholder="Your name"
        />
        <input
          type="email"
          className="outline-none border-2 border-solid border-blue-500 w-full h-8 rounded-md pl-4"
          placeholder="your Email"
        />
        <input
          type="password"
          className="outline-none border-2 border-solid border-blue-500 w-full h-8 rounded-md pl-4"
          placeholder="password"
        />
        <input
          type="password"
          className="outline-none border-2 border-solid border-blue-500 w-full h-8 rounded-md pl-4"
          placeholder="confirm password"
        />
      </div>
    </div>
  );
}

export default Signup;

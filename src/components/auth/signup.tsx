function Signup() {
  return (
    <div className=" w-screen h-screen blur-parent-bg pt-20">
      <div className=" blur-child-bg w-full m-auto flex items-center justify-start pt-16 gap-4 flex-col border-2 border-green-300  h-2/3 ">
        <input
          type="text"
          className="outline-none border-2 border-solid border-blue-500 w-3/4 h-8 rounded-md pl-4"
          placeholder="Your name"
        />
        <input
          type="email"
          className="outline-none border-2 border-solid border-blue-500 w-3/4 h-8 rounded-md pl-4"
          placeholder="your Email"
        />
        <input
          type="password"
          className="outline-none border-2 border-solid border-blue-500 w-3/4 h-8 rounded-md pl-4"
          placeholder="password"
        />
        <input
          type="password"
          className="outline-none border-2 border-solid border-blue-500 w-3/4 h-8 rounded-md pl-4"
          placeholder="confirm password"
        />
      </div>
    </div>
  );
}

export default Signup;

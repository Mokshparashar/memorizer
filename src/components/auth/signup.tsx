import { useGlobalContext } from "../../context/globalContext";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { globalInstance } from "../../api/globalInstance";
import React, { useState } from "react";
import ButtonLoader from "../loaders/ButtonLoader";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup: React.FC = () => {
  const { setIsSignupOpen, isSignupOpen, buttonLoading, setButtonLoading } =
    useGlobalContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // let [formData, setFormData] = useState<FormData>(Object);
  const formData: FormDataInterface = {
    name,
    email,
    password,
    confirmPassword,
  };

  async function handleSingupRequest() {
    console.log(formData);
    setButtonLoading(true);

    const data = await globalInstance.post("/api/v1/users/register", formData);
    console.log(data);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setButtonLoading(false);
    if (!data?.data?.ok) {
      toast.error(data?.data?.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success(`Welcome ${data?.data?.userData?.name}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <div
      className={`${
        isSignupOpen ? "universal-visible-sidebar" : "universal-hidden-sidebar"
      } w-full h-full blur-parent-bg relative z-20 top-0`}
    >
      <ToastContainer />
      <div className="flex items-center justify-between px-6">
        <h1 className=" bg-transparent  z-10  text-2xl text-blue-800 border-b-2 border-blue-800">
          Create account
        </h1>
        <div>
          <RxCross1
            className="w-6 h-6 text-red-500 font-extrabold"
            onClick={() => setIsSignupOpen(false)}
          />
        </div>
      </div>

      {/* <img
        src="https://img.freepik.com/premium-vector/hanging-light-bulbs-glowing-white-background-concept-idea_322958-1442.jpg?w=360"
        alt=""
        className="absolute -z-10"
      /> */}
      <div className="flex items-center justify-between flex-col gap-20">
        <div className=" blur-child-bg w-5/6 m-auto flex items-center justify-start pt-16 gap-4 flex-col  h-2/3 ">
          <input
            type="text"
            className="outline-none border-2 border-solid border-blue-500 w-full h-12 rounded-md pl-4"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <input
            type="email"
            className="outline-none border-2 border-solid border-blue-500 w-full h-12 rounded-md pl-4"
            placeholder="your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="outline-none border-2 border-solid border-blue-500 w-full h-12 rounded-md pl-4"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="outline-none border-2 border-solid border-blue-500 w-full h-12 rounded-md pl-4"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border border-blue-500 w-full h-10 relative bg-blue-500 text-white rounded-sm"
            onClick={handleSingupRequest}
          >
            {buttonLoading ? <ButtonLoader /> : "Create"}
          </button>
        </div>
        <div>
          <div className="flex items-center justify-center w-3/4 m-auto -mt-12 ">
            <span className="w-1/2 border border-gray-400 mr-2 "></span>
            <h1>OR</h1>
            <span className="w-1/2 border border-gray-400 ml-2"></span>
          </div>
          <div className="w-full flex items-center justify-between m-auto border-2 border-blue-500 px-6 mt-6 py-2 rounded-sm ">
            <FcGoogle className="w-8 h-8 mr-2" />
            <h2 className="font-600">Signup with Google</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

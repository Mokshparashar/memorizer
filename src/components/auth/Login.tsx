import { useGlobalContext } from "../../context/globalContext";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { globalInstance } from "../../api/globalInstance";
import { FormEvent, useState } from "react";

import ButtonLoader from "../loaders/ButtonLoader";
import { useNavigate } from "react-router-dom";
import ErrorComp from "../events/Error";

function Login() {
  const navigate = useNavigate();
  const { setIsLoginOpen, isLoginOpen, buttonLoading, setButtonLoading } =
    useGlobalContext();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [responseData, setResponseData] = useState<LoginDataInterface>();
  const [errorModal, setErrorModal] = useState<boolean>();

  const formData = {
    email,
    password,
  };
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        setEmailError("*Email is required");
        throw new Error(" email required");
      } else if (!regex.test(email)) {
        setEmailError("*Invalid email format");
        throw new Error(" email format invalid");
      } else {
        setEmailError("");
      }

      if (!password) {
        setPasswordError("*Password is required");
        throw new Error("password is required");
      } else {
        setPasswordError("");
      }
      setButtonLoading(true);
      const data = await globalInstance.post("/api/v1/users/login", formData);
      console.log(data);
      setResponseData(data?.data);
      setButtonLoading(false);

      if (data?.data?.code == 404) {
        setErrorModal(true);
        throw new Error("Invalid credentials");
      } else {
        setErrorModal(false);
      }
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  function handleErrorclick() {
    setErrorModal(false);
  }
  return (
    <div id="login">
      {errorModal && !responseData?.ok && (
        <ErrorComp
          message={responseData?.message}
          additionalButton={true}
          onClickFunction={handleErrorclick}
        />
      )}
      <div
        className={`${
          isLoginOpen ? "universal-visible-sidebar" : "universal-hidden-sidebar"
        } w-screen h-screen bg-white relative z-20 top-0`}
      >
        <div className="flex items-center justify-between px-6 pt-4">
          <h1 className=" bg-transparent  z-10  text-2xl text-blue-800 border-b-2 border-blue-800">
            Welcome back{" "}
          </h1>
          <div>
            <RxCross1
              className="w-6 h-6 text-red-500 font-extrabold"
              onClick={() => setIsLoginOpen(false)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between flex-col gap-20">
          <div className=" blur-child-bg w-5/6 m-auto flex items-center justify-start pt-16 gap-4 flex-col  h-2/3 ">
            <div className="w-full">
              <input
                type="email"
                className="outline-none border border-solid border-blue-500 w-full h-12 rounded-md pl-4"
                placeholder="your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="text-red-500 font-normal text-sm">
                {emailError}
              </span>
            </div>
            <div className="w-full">
              <input
                type="password"
                className="outline-none border border-solid border-blue-500 w-full h-12 rounded-md pl-4"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-red-500 font-normal text-sm">
                {passwordError}
              </span>
            </div>

            <button
              type="submit"
              className="border border-blue-500 w-full h-10 relative bg-blue-500 text-white rounded-sm"
              onClick={handleLogin}
            >
              {buttonLoading ? <ButtonLoader /> : "Login"}
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
              <h2 className="font-500">Login with Google</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

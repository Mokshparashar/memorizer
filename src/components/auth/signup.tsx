import { useGlobalContext } from "../../context/globalContext";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { globalInstance } from "../../api/globalInstance";
import { FormEvent, useState } from "react";
import ButtonLoader from "../loaders/ButtonLoader";

import Success from "../events/Success";
import ErrorComp from "../events/Error";
import FrontendWarning from "../events/FrontendWarning";

const Signup: React.FC = () => {
  const {
    setIsSignupOpen,
    isSignupOpen,
    buttonLoading,
    setButtonLoading,
    setIsLoginOpen,
  } = useGlobalContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [responseData, setResponseData] = useState<ResponseDataInterface>();
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [warningModal, setWarningModal] = useState<boolean>(false);

  const formData: FormDataInterface = {
    name,
    email,
    password,
    confirmPassword,
  };

  async function handleSingupRequest(e: FormEvent) {
    e.preventDefault();

    try {
      if (!name) {
        setNameError("*Name is required");
        throw new Error("name is required");
      } else {
        setNameError("");
      }
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
      } else if (password.length < 6) {
        setPasswordError("*Password length should not be less than 6 ");
        throw new Error("password lenth is concern due to security reasons");
      } else {
        setPasswordError("");
      }

      if (password !== confirmPassword) {
        setWarningModal(true);
        setPasswordError("Passwords do not match");
        setButtonLoading(false);
        throw new Error("passwords do not match");
      }

      console.log(formData);

      setButtonLoading(true);

      const data = await globalInstance.post(
        "/api/v1/users/register",
        formData
      );
      setResponseData(data?.data);
      console.log(data);
      if (data?.data?.ok) {
        setSuccessModal(true);
      } else if (!data?.data?.ok) {
        setErrorModal(true);
        setButtonLoading(false);
        throw new Error("Something went wrong");
      }

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const message = "Account created click here to ";

  function onClickFunction() {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
    setSuccessModal(false);
  }

  function handleErrorclick() {
    setErrorModal(false);
  }

  function handleWarningClick() {
    setWarningModal(false);
  }
  return (
    <div id="signup">
      {successModal && responseData?.ok && (
        <Success
          message={message}
          additionalButton={true}
          onClickFunction={onClickFunction}
        />
      )}
      {errorModal && !responseData?.ok && (
        <ErrorComp
          message={responseData?.message}
          additionalButton={true}
          onClickFunction={handleErrorclick}
        />
      )}
      {warningModal && (
        <FrontendWarning
          message={passwordError}
          additionalButton={true}
          onClickFunction={handleWarningClick}
        />
      )}

      <div
        className={`${
          isSignupOpen
            ? "universal-visible-sidebar"
            : "universal-hidden-sidebar"
        } w-full h-full bg-white relative z-20 top-0`}
      >
        <div className="w-full flex items-center justify-between px-6 pt-4">
          <h1 className=" bg-transparent  z-10  text-2xl text-blue-800 border-b-2 border-blue-800">
            Create account
          </h1>
          <div>
            <RxCross1
              className="w-6 h-6 text-red-600 font-black"
              onClick={() => setIsSignupOpen(false)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between flex-col gap-20">
          <div className=" blur-child-bg w-5/6 m-auto flex items-center justify-start pt-16 gap-4 flex-col  h-2/3 ">
            <div className="w-full">
              <input
                type="text"
                className="outline-none border border-solid border-blue-500 w-full h-12 rounded-md pl-4"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={buttonLoading ? true : false}
              />
              <span className="text-red-500 font-normal text-sm">
                {nameError}
              </span>
            </div>
            <div className="w-full">
              <input
                type="email"
                className="outline-none border border-solid border-blue-500 w-full h-12 rounded-md pl-4"
                placeholder="your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={buttonLoading ? true : false}
                required
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
                disabled={buttonLoading ? true : false}
                required
              />
              <span className="text-red-500 font-normal text-sm">
                {passwordError}
              </span>
            </div>
            <div className="w-full">
              <input
                type="password"
                className="outline-none border border-solid border-blue-500 w-full h-12 rounded-md pl-4"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={buttonLoading ? true : false}
                required
              />
            </div>
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
              <h2 className="font-500 ">Signup with Google</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

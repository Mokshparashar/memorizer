import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdTurnRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div
      className="w-screeen h-screen"
      style={{ background: "rgb(250,250,250)" }}
    >
      <nav className="w-screen h-14 bg-white shadow-gray-300 shadow-sm flex items-center justify-between px-4">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full">M</div>
        <button
          className="text-red-500 bg-red-100 px-2 py-1 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      <section className="mt-10 flex items-center justify-center flex-col gap-4">
        <div className="w-screen flex items-center justify-center">
          <div className="w-1/6 h-16 bg-blue-500 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
            <MdTurnRight className="text-3xl text-white" />
          </div>
          <div className="w-2/3 bg-white shadow-gray-300 shadow-sm h-16 flex items-center justify-between px-2">
            <div className="w-3/4 flex items-start justify-center flex-col ">
              <h1 className="text-md font-bold">HDFC Debit card</h1>
              <span className="text-xs leading-3">
                This card incudes my online expenses.
              </span>
            </div>
            <div>
              <FaMoneyCheckAlt className="text-5xl" />
            </div>
          </div>
        </div>
        <div className="w-screen flex items-center justify-center">
          <div className="w-1/6 h-16 bg-blue-500 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
            <MdTurnRight className="text-3xl text-white" />
          </div>
          <div className="w-2/3 bg-white shadow-gray-300 shadow-sm h-16 flex items-center justify-between px-2">
            <div className="w-3/4 flex items-start justify-center flex-col ">
              <h1 className="text-md font-bold">Offline expenses</h1>
              <span className="text-xs leading-3">
                This Service incudes my offline expenses.
              </span>
            </div>
            <div>
              <FaMoneyCheckAlt className="text-5xl" />
            </div>
          </div>
        </div>
        <div className="w-5/6 h-20 flex items-center justify-center border border-gray-600 rounded-sm bg-gray-200 gap-2">
          <span className="text-blue-500 text-xl">Add portfolio</span>
          <GoPlus className="text-blue-500 text-xl" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

import Landing from "./Landing";
import Navbar from "./Navbar";
import Signup from "./auth/signup";
import Login from "./auth/Login";

function LandingPage() {
  return (
    <div className="sm:overflow-x-hidden ">
      <Navbar />
      <Landing />
      <Signup />
      <Login />
    </div>
  );
}

export default LandingPage;

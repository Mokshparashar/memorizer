import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Signup from "../components/auth/signup";
import Login from "../components/auth/Login";

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

import Landing from "./Landing";
import Navbar from "./Navbar";
import Signup from "./auth/signup";
import Login from "./auth/Login";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Landing />
      <Signup />
      <Login />
    </>
  );
}

export default LandingPage;

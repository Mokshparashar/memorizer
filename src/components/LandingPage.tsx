import Landing from "./Landing";
import Navbar from "./Navbar";
import Signup from "./auth/signup";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Landing />
      <Signup />
    </>
  );
}

export default LandingPage;

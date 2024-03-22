import logo from "../../public/logo-transparent-svg.svg";
function Navbar() {
  return (
    <nav className="border-solid border-b border-gray-200">
      <img src={logo} alt="" className="w-2/3 h-fit m-auto" />
    </nav>
  );
}

export default Navbar;

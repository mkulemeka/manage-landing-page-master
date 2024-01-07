import { Button } from "../components";
import Logo from "../images/logo.svg";

const Nav = () => {
  const navLinks = ["Pricing", "Product", "About Us", "Careers", "Community"];
  return (
    <nav className="navigation flex flex-row items-center justify-between py-10">
      <div className="nav_logo flex">
        <img src={Logo} alt="Logo" className="h-auto w-full cursor-pointer" />
      </div>
      <div className="nav_links flex gap-8 text-12 font-500">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#` + link}
            className=" transition-all ease-in-out duration-200 hover:text-darkGrayishBlue"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="action_button">
        <Button styles="bg-brightRed text-veryLightGray" />
      </div>
    </nav>
  );
};

export default Nav;

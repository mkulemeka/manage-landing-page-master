import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useRef, useState } from "react";

import ManageLogo from "../images/logo.svg";

const Footer = () => {
  const [showError, setShowError] = useState(false);
  const footerLinks = ["Home", "Pricing", "Products", "About Us"];
  const companyLinks = ["Careers", "Community", "Privacy Policy"];
  const socialMedia = [
    FaFacebookSquare,
    FaYoutube,
    FaTwitter,
    FaPinterest,
    FaInstagram,
  ];

  const emailInput = useRef(null);

  const handleEmail = () => {
    const email = emailInput.current.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      setShowError(true);
    } else setShowError(false);
  };

  return (
    <footer className="footer__section bg-veryDarkBlue text-veryLightGray min-h-44">
      <section className="footer__content flex flex-col-reverse items-center md:flex-row justify-between h-full py-9">
        <section className="footer_content-assets flex flex-col-reverse md:flex-col justify-between gap-12">
          <div className="footer_logo-container">
            <img src={ManageLogo} alt="Logo" />
          </div>
          <div className="footer_social-links flex gap-3">
            {socialMedia.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-24 md:text-18 hover:text-brightRed transition ease-in-out duration-300"
              >
                {link()}
              </a>
            ))}
          </div>
        </section>
        <section className="footer_links flex flex-col gap-2 text-12">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="footer_link hover:text-brightRed transition ease-in-out duration-300"
            >
              {link}
            </a>
          ))}
        </section>
        <section className="company_links flex flex-col text-12 gap-2">
          {companyLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="footer_link hover:text-brightRed transition ease-in-out duration-300"
            >
              {link}
            </a>
          ))}
        </section>
        <section className="footer__inputs flex flex-col justify-between">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <input
                ref={emailInput}
                type="email"
                placeholder="Updates in your inbox..."
                className=" self-end text-12 text-brightRed h-8 rounded-2xl w-44 p-4 outline-transparent border-transparent"
              />
              <small className={`text-[.65rem] text-brightRed px-4 italic`}>
                {showError && "Please insert a valid email"}
              </small>
            </div>
            <button
              className="footer__button bg-brightRed font-500 rounded-2xl h-8 w-12 text-12"
              onClick={handleEmail}
            >
              Go
            </button>
          </div>
          <div className="text-right">
            <p className="text-[.65rem] text-darkGrayishBlue">
              © 2021 Manage. All Rights Reserved
            </p>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

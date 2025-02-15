import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 flex justify-center align-middle text-white text-xs lg:text-lg text-center pt-[8px] pb-[8px]    shadow-lg sticky bottom-0">
      <p>
        For more information, visit our{" "}
        <span className="lg:hover:text-2xl hover:text-base transition-all ease-in-out"><a href="https://dharmawiki.org/index.php/Main_Page" className="text-blue-400 ">
        Dharma Wiki
        </a></span >.
      </p>
    </footer>
  );
};

export default Footer;

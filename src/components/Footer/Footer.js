import Logo from "static/images/pokestore.png";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-gray-default border-t-8">
      <div className="container flex justify-center items-center max-w-7xl py-10">
        <img className="w-80" src={Logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;

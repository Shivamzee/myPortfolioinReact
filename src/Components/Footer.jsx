import linkedin from "../assets/icons8-linkedin.svg";
import github from "../assets/icons8-github-48.png";
import x from "../assets/icons8-twitterx.svg";
import email from "../assets/icons8-email-48.png";
const Footer = () => {
  return (
    <>
      <main className="container mx-auto mt-8  bg-cyan-100 mb-3">
        <h2 className="text-2xl ml-3 text-teal-700 font-semibold ">
          Contact Me
        </h2>

        <div className="flex justify-between pr-5 pl-5">
          <div className=" pt-2 pb-8">
            <a target="_blank" href="https://rb.gy/4jdvvf">
              <img className="ml-5" src={linkedin} />
            </a>
          </div>
          <div className=" pt-2 pb-8">
            <a target="_blank" href="https://github.com/Shivamzee">
              <img className="ml-5" src={github} />
            </a>
          </div>
          <div target="_blank" className=" pt-2 pb-8">
            <a href="#">
              <img className="ml-5" src={x} />
            </a>
          </div>
        </div>
        <div className=" pt-2 pb-8">
          <a href="#">
            <img className="ml-10" src={email} />
          </a>
          <p className="pl-10">shivambinoy@gmail.com</p>
        </div>
      </main>
    </>
  );
};

export default Footer;

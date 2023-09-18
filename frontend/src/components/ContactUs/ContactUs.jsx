import "./ContactUs.css";
import insta from "./insta.png";
import linkedin from "./linkedin.jpeg";
import insta2 from "./insta2.avif";
import linkedin2 from "./linkedin2.png";
import github from "./github.png";
import Aditya from "./Aditya.jpeg";
import Dhruv from "./Dhruv.jpeg";
import gaurav from "./gaurav1.jpg";
import Footer from "../MainPage/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="contact"></div>
      <div className="content h-[200%]">
        <h1 className="text-center">Connect With Us</h1>
        <hr></hr>
        <div className="flex items-center justify-center mt-5 gap-4">
          <div className="gaurav">
            <h2>
              <b>Gaurav Sharma</b>
            </h2>
            <div className="ContactProfiles">
              <div>
                <a href="https://github.com/Gaurav9-sh">
                  <img src={github} alt="error" className="SocialMedia" />
                </a>
                <a href="https://www.linkedin.com/in/gaurav-sharma-1603b020a">
                  <img src={linkedin2} alt="LinkedIN" className="SocialMedia" />
                </a>
              </div>
              <div>
                <img src={gaurav} alt="Gaurav" className="ProfilePicture" />
              </div>
            </div>
          </div>
          <hr />
          <div className="gaurav">
            <h2>
              <b>Aditya Chaudhary</b>
            </h2>
            <div className="ContactProfiles">
              <div>
                <a href="https://github.com/AdityaTheJaat">
                  <img src={github} alt="error" className="SocialMedia" />
                </a>
                <a href="https://www.linkedin.com/in/aditya-chaudhary-763047249/">
                  <img src={linkedin2} alt="LinkedIN" className="SocialMedia" />
                </a>
              </div>
              <div>
                <img src={Aditya} alt="Aditya" className="ProfilePicture" />
              </div>
            </div>
          </div>
          <hr />
          <div className="gaurav">
            <h2>
              <b>Dhruv Chandak</b>
            </h2>
            <div className="ContactProfiles">
              <div>
                <a href="https://github.com/dhruvchandak30">
                  <img src={github} alt="error" className="SocialMedia" />
                </a>
                <a href="https://in.linkedin.com/in/dhruvchandak30">
                  <img src={linkedin2} alt="LinkedIN" className="SocialMedia" />
                </a>
              </div>
              <div>
                <img src={Dhruv} alt="Dhruv" className="ProfilePicture" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;

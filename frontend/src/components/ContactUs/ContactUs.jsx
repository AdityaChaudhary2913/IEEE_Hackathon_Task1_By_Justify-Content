import "./ContactUs.css";
import insta from "./insta.png";
import linkedin from "./linkedin.jpeg";
import insta2 from "./insta2.avif";
import linkedin2 from "./linkedin2.png";

const ContactUs = () => {
  return (
    <>
      <div className="contact"></div>
      <div className="content">
        <h1>Connect With us:-</h1>
        <h2>
          <b>Gaurav Sharma</b>
        </h2>
        <a href="https://instagram.com/the_gaurav_sh?igshid=YTQwZjQ0NmI0OA==">
          <img src={insta2} alt="error" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-sharma-1603b020a">
          <img src={linkedin2} alt="" />
        </a>
        <hr />
        <h2>
          <b>Aditya Chaudhry</b>
        </h2>
        <a href="https://instagram.com/the_gaurav_sh?igshid=YTQwZjQ0NmI0OA==">
          <img src={insta2} alt="error" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-sharma-1603b020a">
          <img src={linkedin2} alt="" />
        </a>
        <hr />
        <h2>
          <b>Dhruv Chandak</b>
        </h2>
        <a href="https://instagram.com/the_gaurav_sh?igshid=YTQwZjQ0NmI0OA==">
          <img src={insta2} alt="error" />
        </a>
        <a href="https://in.linkedin.com/in/dhruvchandak30">
          <img src={linkedin2} alt="" />
        </a>
      </div>
    </>
  );
};
export default ContactUs;

import Card from "../Cards/Card";
import "./Landing.css";
// import companyImage1 from "../Cards/Company.webp";
import Part from '../ParticleBg';
import c1 from "./co1.png";
import c2 from "./co2.jpg";
import c3 from "./co3.jpg";
import c4 from "./co4.jpg";
import c5 from "./co5.jpg";

const Landing = () => {
  return <>
          <div className="main">
          <div className="first">
             <h1>"Discover your environmental impact with our Carbon Footprint Calculator – taking a step towards a sustainable future."</h1>
          </div>
          <div className="second">
            <h2>Welcome to the home of carbon footprinting, carbon calculators, CO2 reduction, carbon offsetting and caring for the climate.</h2>
            <h1>
            <b>Helping you</b> to reduce carbon emissions and energy costs all year round. Measure your Carbon Footprint, Get Weekly Tips<br/>
            <b>Keeping you compliant</b> with carbon/energy law Energy Savings Opportunity Scheme (ESOS), Streamlined Energy & Carbon Reporting (SECR),  TCFD , Net Zero Carbon Procurement & Green Claims<br/>
            <b>Target Setting</b> robust carbon/energy & environmental management ISO 14001,  Science Based Targets , Supply Chain Footprinting<br/>
            <b>Carbon Neutrality/Net Zero Carbon</b> to enhance your brands, products & services via  Quality Assurance Standard approved carbon offsetting<br/>
            <b>Caring for the Climate and Communities</b> with our unique Carbon Offset projects - UK, Americas, Global 
            </h1>
          </div>
          {/* <div className="about">
            <h1>Some Companies and NGO that works towards reduction in co2 emission:-</h1>
          </div>
          <div className="three">
          
            <Card  title="As You Sow"  about="Empowering shareholders to change corporations for good."  link="https://www.asyousow.org/"/>
            <Card  title="BG Alliance"  about="America for Americans." link="https://www.bluegreenalliance.org/"/>
            <Card  title="CFPA"  about="Accelerating growth of the clean transportation." link="https://www.politicalaccountability.net/"/>
            <Card  title="CATF"  about="Push the technology to achieve a zero-emissions." link="https://www.catf.us/support/?gclid=CjwKCAjw6dmSBhBkEiwA_W-EoINTHYfjUfo2CetRQlh1LUMFUohW4hNuyapPGf3ekGiWgx_Cym0ajhoClUUQAvD_BwE"/>
            <Card  title="Grid Alternatives"  about="Making renewable energy technology and job training accessible to underserved communities." link="https://gridalternatives.org/"/>
          </div>
          <div className="three">
            <Card  title="IEN"  about="Protect the sacredness of Earth Mother from contamination and exploitation." link="https://www.ienearth.org/"/>
            <Card  title="OPLN"  about="Activist to industry: Bringing all sides of the ocean crisis to the table." link="https://opln.org/"/>
            <Card  title="SELC"  about="To protect the basic right to clean air, clean water, and a livable climate." link="https://www.southernenvironment.org/"/>
            <Card title="Sunrise Movement"  about="We are the climate revolution." link="https://www.sunrisemovement.org/"/>
            <Card  title="Calstart"  about="Accelerating growth of the clean transportation technology industry." link="https://calstart.org/"/>
            
          </div> */}
          <hr />
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <h1>More About Carbon Dioxide Emission:-</h1>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={c2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={c4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={c5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
       </>;
};
export default Landing;

import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="container_text">
        <div className="footerContact">
          <h3>Contactanos</h3>
          <p>a19morales89@gmail.com</p>
          <p>
            Av. del Sesquicentenario 2687, Pablo Nogues, Malvinas Argentinas
          </p>
        </div>
        <div className="footerSocial">
          <h3>Facebook</h3>
          <div className="footerSocialIcon footerList">
            {/* <li><a href="https://twitter.com/soyhenry_ok?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterIcon/></a></li> */}
            <a href="https://www.facebook.com/alejandro.morales.399">
              <FacebookIcon sx={{ width: "50px", height: "50px" }} />
            </a>
            {/* <li><a href="https://www.youtube.com/channel/UCyPi0AHwcuCP-QJxrxq-f2Q"><YouTubeIcon/></a></li>
                <li><a href="https://www.instagram.com/soyhenry_ok/?hl=es"><InstagramIcon/></a></li> */}
          </div>
        </div>
        {/* <div>
        <h3 className="footerLinkedinTitle">Trabaja con Nosotros</h3>
            <div className="footerLinkedin">
                <div className="footerLinkedinItem">
                    <ul>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/alejandro-morales-42b47123b"><h6>Alejandro Morales</h6></a></li>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/david-omar-olivera89/"><h6>David Olivera</h6></a></li>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/enzo-maidana-9810211a4/"><h6>Enzo Maidana</h6></a></li>
                        <li><LinkedInIcon/><a href="www.linkedin.com/in/gaston-frissiones-59ba4a253"><h6>Gaston Frissiones</h6></a></li>
                    </ul>
                </div>
                <div className="footerLinkedinItem">
                    <ul>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/rosim24/"><h6>Rosibel Mendoza</h6></a></li>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/react-front/"><h6>Luis Acosta</h6></a></li>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/juan-david-piedrahita-l%C3%B3pez-ab9b57b2/"><h6>Juan Lopez</h6></a></li>
                        <li><LinkedInIcon/><a href="https://www.linkedin.com/in/bernardo-broscheit-94b567144/"><h6>Bernardo Broscheit</h6></a></li>
                        
                    </ul>
                </div>
            </div>
      </div> */}
        <div className="footerContact">
          <p>
            <CopyrightIcon
              className="copyright"
              sx={{ width: "13px", height: "13px" }}
            />{" "}
            2020-2022 Alejando Morales
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

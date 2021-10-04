import React from "react";
import "./Location.css";
import LocationIcon from "../../images/icon/ic_location_on_128_28437.ico";
import GmailIcon from "../../images/icon/4202011emailgmaillogomailsocialsocialmedia-115677_115624.ico";
import WhatsappIcon from "../../images/icon/Whatsapp_37229.ico";
const Location = () => {
  return (
    <>
      <div>
        <div>
          <ul className="list-location">
            <li className="list-location">
              <img src={WhatsappIcon} alt="Whatsapp" />
              <a
                className="list-location-text"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+5492214092724&text=Hola%20Adri%20!%20Quiero%20saber%20sobre%20tus%20productos"
              >
                1123456789
              </a>
            </li>
            <li className="list-location">
              <img src={GmailIcon} alt="Correo electronico" />
              <a
                className="list-location-text"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                correo_electronico@gmail.com
              </a>
            </li>
            <li className="list-location">
              <img src={LocationIcon} alt="Ubicación" />
              <a
                className="list-location-text"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?ll=-34.724301,-58.24672&z=11&t=m&hl=es-419&gl=AR&mapclient=embed&q=Quilmes+Provincia+de+Buenos+Aires"
              >
                Quilmes, zona sur.
              </a>
            </li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52467.91573466545!2d-58.28173934716688!3d-34.724225043954796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1631823303123!5m2!1ses-419!2sar"
            width="100%"
            height="250"
            allowfullscreen=""
            loading="lazy"
            title="Ubicación"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;

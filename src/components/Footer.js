import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <ul>
        <li><FaWhatsapp /> <a href="https://api.whatsapp.com/message/LJRMZN2HIFALL1?autoload=1&app_absent=0">(11) 94366-0029</a></li>
        <li><FaInstagram /> <a href="https://www.instagram.com/psico.camilapatricio?igsh=Y3N5Mm16dHIzMHB0&utm_source=qr">@psico.camilapatricio</a></li>
        <li><MdOutlineEmail /> <a href="mailto:psico.camilapatricio@outlook.com">psico.camilapatricio@outlook.com</a></li> {/* E-mail com link mailto */}
      </ul>
    </footer>
  );
};

export default Footer;

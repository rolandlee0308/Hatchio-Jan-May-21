/*
 * File: Footer.js
 * Functionality: Footer for homepage and authentication pages
 * Author: Jose
 */

// CSS
import "../../css/Theme.css";
// Iconfiy
import { Icon } from "@iconify/react";
import baselineCopyright from "@iconify-icons/ic/baseline-copyright";

const Footer = () => {
  return (
    <footer className='footer subtext'>
      <p>
        <b>
          Copyright <Icon icon={baselineCopyright} className='icon-copyright' />{" "}
          2021 Hatchio
        </b>{" "}
        <br />
        cookie policy | privacy policy | terms & conditions
      </p>
    </footer>
  );
};

export default Footer;

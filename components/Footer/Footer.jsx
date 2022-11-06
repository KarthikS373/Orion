import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";

import styles from "./Footer.module.css";

import logo from "../../assets/Images/logo-light.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <Image src={logo} alt="Orion footer logo" height={100} width={100} />
      </div>

      <div className={styles.box}>
        <div className={styles.input}>
          <input type="email" placeholder="Email" />
          <RiSendPlaneFill />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.social}>
          <TiSocialTwitter />
          <TiSocialInstagram />
          <TiSocialFacebook />
          <TiSocialLinkedin />
          <TiSocialGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import { TbChartArrowsVertical } from "react-icons/tb";

import styles from "./PriceFeeds.module.css";

import logo from "../../assets/Images/logo-light.png";
import etherLogo from "/assets/Images/ethereum-logo.png";

const PriceFeeds = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.price}>
          <Image src={etherLogo} alt={"Ethereum logo"} width={100} height={100} />
          <div>
            <h4>Ether Price</h4>
            <p>$1234</p>
            <p>BTC 1234</p>
            <p>Updated price</p>
          </div>
        </div>
        <div className={styles.supply}>
          <TbChartArrowsVertical className={styles.supply__icon} />
          <div>
            <h4>Ether Supply</h4>
            <p>$1234</p>
            <p>BTC 1234</p>
            <p>Updated price</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.token}>
          <Image src={logo} alt="Logo" height={200} width={200} />
        </div>
        <div className={styles.table}>
          <p>ERC20 Token</p>
          <p>ERC21 Token</p>
          <p>ERC1155 Token</p>
          <p>Contracts</p>
        </div>
      </div>
    </div>
  );
};

export default PriceFeeds;

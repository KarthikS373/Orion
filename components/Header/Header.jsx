import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineClose } from "react-icons/md";

import styles from "./Header.module.css";
import { LATEST_ETHER_PRICE, LATEST_ETHER_SUPPLY } from "../API/etherscan";
import WalletExist from "../Utils/walletExist";

import logo from "../../assets/Images/logo-light.png";
import defaultProfilePic from "/assets/Images/default-profile-pic.jpeg";
import PriceFeeds from "../Home/PriceFeeds";

const Header = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");
  const [supply, setSupply] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const [isModel, setIsModel] = useState(true);

  const openUserProfile = () => {
    if (isModel) {
      setIsModel(false);
    } else {
      setIsModel(true);
    }
  };

  const getEthereumPriceAndSupply = async () => {
    try {
      axios
        .get(LATEST_ETHER_PRICE)
        .then((response) => {
          setPrice(response.data.result);

          const date = new Date(Number(response.data.result.ethusd_timestamp));
          setUpdatedAt(`${date.getHours()} : ${date.getMinutes()}`);
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      axios
        .get(LATEST_ETHER_SUPPLY)
        .then((response) => {
          setSupply(response.data.result);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    } catch (error) {
      console.warn(error.message);
      toast.error(error.message);
    }
  };

  const fetchAccounts = useCallback(() => {
    try {
      WalletExist().then(async () => {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length) {
          setAccount(accounts[0]);
        }
      });
    } catch (error) {
      console.warn(error.message);
      toast.error(error.message);
    }
  }, []);

  const walletConnect = useCallback(() => {
    WalletExist().then(async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length) {
          setAccount(accounts[0]);
        } else {
          toast.warn("Please select an account and try again");
        }

        window.location.reload();
      } catch (error) {
        toast.warn("Please select an account and try again");
      }
    });
  }, []);

  useEffect(() => {
    getEthereumPriceAndSupply();
    fetchAccounts();
    // walletConnect();
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link href={"/"}>
              <h1 className={styles.desktop}>Orion</h1>
              <h1 className={styles.mobile}>
                <Image src={logo} height={50} width={50} alt={""} />
              </h1>
            </Link>
          </div>
          <div className={styles.right}>
            {account.length ? (
              <div className={styles.modal__container}>
                <button onClick={() => openUserProfile()}>
                  Acc: {account.slice(0, 4)}...{account.slice(-4)}
                </button>
                {isModel ? (
                  <div className={styles.modal}>
                    <div className={styles.modal__box}>
                      <div className={styles.closeBtn}>
                        <MdOutlineClose onClick={() => openUserProfile()} />
                      </div>
                      <Image
                        src={defaultProfilePic}
                        height={50}
                        width={50}
                        alt="Avatar"
                      />
                      <p>
                        Acc: &nbsp; {account.slice(0, 4)}...{account.slice(-4)}
                      </p>
                      <p>Balance: &nbsp; {balance || 0} ETH</p>
                      <p>Total transactions: &nbsp; o</p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <button onClick={() => walletConnect()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </nav>
      <PriceFeeds />
    </>
  );
};

export default Header;

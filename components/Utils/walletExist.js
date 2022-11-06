import { toast } from "react-toastify";

const WalletExist = async () => {
  return new Promise((resolve, reject) => {
    if (!window.ethereum) {
      toast.dismiss();
      toast.warn("Please install Metamask", {
        closeOnClick: false,
        toastId: "metamask",
        onClick: () => {
          window.open("https://metamask.io/download/");
          toast.dismiss("metamask");
        },
        autoClose: false,
      });

      return reject();
    }

    resolve();
  });
};

export default WalletExist;

const API_KEY = process.env.NEXT_APP_ETHERSCAN_API_KEY;

export const LATEST_ETHER_PRICE = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`;

export const LATEST_ETHER_SUPPLY = `https://api.etherscan.io/api
?module=stats
&action=ethsupply
&apikey=${API_KEY}`;

import "babel-register";
import "babel-polyfill";
require("dotenv").config();

export const networks = {
  development: {
    host: "127.0.0.1",

    port: 7545,
    network_id: "*",
  },
};
export const contracts_directory = "./src/contracts/";
export const contracts_build_directory = "./src/abis/";
export const compilers = {
  solc: {
    optimizer: {
      enabled: true,
      run: 200,
    },

    version: "0.8.16", // Fetch exact version from solc-bin (default: truffle's version)
  },
};

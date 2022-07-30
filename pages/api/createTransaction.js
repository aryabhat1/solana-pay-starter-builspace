import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import products from "./products.json";

const sellerAddress = "E79UbMxRXmvGpgG4stPFShy6UU7dxaT763oBo8LG2qaM";
const sellerPublicKey = new PublicKey(sellerAddress);

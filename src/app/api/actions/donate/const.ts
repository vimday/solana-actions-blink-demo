import { PublicKey, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

export const DEFAULT_SOL_ADDRESS: PublicKey = new PublicKey(
  process.env.RECIPIENT ?? "586xszipHeu8wP5M2joCBnyUH1UPsf71FZUUgAdfvHcU" // donate wallet
);

export const DEFAULT_SOL_AMOUNT: number = process.env.DEFAULT_AMOUNT
  ? parseFloat(process.env.DEFAULT_AMOUNT)
  : 0.1;

export const DEFAULT_RPC =
  process.env.RPC_URL_MAINNET ?? clusterApiUrl("mainnet-beta");

export const DEFAULT_TITLE = process.env.TITLE ?? "Crypto Never Dies";

export const DEFAULT_AVATAR = process.env.AVATAR;

export const DEFAULT_DESCRIPTION =
  process.env.DESCRIPTION ?? "It's time to build";

import React, { useEffect, useState } from "react";
import HeadComponent from "../components/Head";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Product from "../components/Product";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch("/api/fetchProducts")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
        alt="emoji"
      ></img>
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      {/* <HeadComponent /> */}
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 IncognitoBuy Store 😈</p>
          <p className="sub-text">The E-Commerce store that accepts AceCoins</p>
        </header>

        <main>
          {/* <img
            src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
            alt="emoji"
          /> */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          {/* <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a> */}
        </div>
      </div>
    </div>
  );
};

export default App;

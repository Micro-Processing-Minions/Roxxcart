import React from "react";
import Footer from "../Footer/Footer";
import NewsLetter from "../NewLetter/NewLetter";
import Ads from "../Ad/Ads";
import SelectedForYou from "../SelectedForYou/SelectedForYou";
import OrderPage from "../OrderPage/OrderPage";

const Home = () => {
  return (
    <div>
      <Ads/>
      <SelectedForYou/>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

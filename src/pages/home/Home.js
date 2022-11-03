import React from "react";
import "./home.scss";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ProductList from "../../components/productlist/ProductList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="list-container">
          <div className="list-title">Recent Transcations</div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;

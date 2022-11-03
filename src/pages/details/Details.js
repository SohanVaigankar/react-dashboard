import React from "react";
import "./details.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ProductList from "../../components/productlist/ProductList";

// icons
import { Edit } from "@mui/icons-material";

const Details = () => {
  return (
    <div className="details">
      <Sidebar />
      <div className="details-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-btn">
              <Edit />
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="info"
                className="item-image"
              />
              <div className="item-details">
                <h1 className="item-title">Sohan</h1>
                <div className="info">
                  <span className="item-key">Email:</span>
                  <span className="item-value">myemail@google.com</span>
                </div>
                <div className="info">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+91 8888888888</span>
                </div>
                <div className="info">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    Loki Street, Odin Palace, Assgardpur
                  </span>
                </div>
                <div className="info">
                  <span className="item-key">Country:</span>
                  <span className="item-value">CyberTron</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} chartTitle="User Spendings (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Details;

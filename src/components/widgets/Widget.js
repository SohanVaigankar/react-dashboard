import React, { useEffect, useState } from "react";
import "./widget.scss";
import { Link } from "react-router-dom";

// material icons
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  PersonOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";

// firebase
import { db } from "../../configs/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Widget = ({ type }) => {
  // state to keep track of amount
  const [amount, setAmount] = useState(null);
  const [percentage, setPercentage] = useState(null);
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "view all users",
        query: "users",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        query: "orders",
        link: "view all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        query: "earnings",
        link: "view net earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        query: "products",
        link: "view transactions",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  // useEffect hook to fetch user data
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthDataQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthDataQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthDataQuery);
      const prevMonthData = await getDocs(prevMonthDataQuery);

      setAmount(lastMonthData.docs.length);
      setPercentage(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
  }, [data.query]);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <Link to={`/${type}`} className="link" style={{ textDecoration: "none" }}>
          {data.link}
        </Link>
      </div>
      <div className="right">
        <div
          className={
            percentage > 0 ? "percentage positive" : "percentage negative"
          }
        >
          {percentage > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {`${percentage}%`}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

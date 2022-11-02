import React from "react";
import "./featured.scss";

// progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// icons
import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          eveniet.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="item-amount">$12.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="item-amount">$12.6k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="item-amount ">$12.6k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

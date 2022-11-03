import React, { useState } from "react";
import "./new.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

// icons
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ inputs, title }) => {
  // state to store image
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="no-image-icon"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="item-image">
                  <span>Image: </span>
                  <DriveFolderUploadOutlined className="file-img" />
                </label>
                <input
                  type="file"
                  id="item-image"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label htmlFor={input.htmlFor}>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder ? input.placeholder : ""}
                  />
                </div>
              ))}
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

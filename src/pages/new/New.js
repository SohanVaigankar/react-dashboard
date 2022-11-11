import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./new.scss";

// firebase imports
import { db, auth, storage } from "../../configs/firebase";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

// icons
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ inputs, title }) => {
  const navigate = useNavigate();

  // state to store image
  const [file, setFile] = useState("");

  // state to store user/product data
  const [data, setData] = useState({});

  // state to keep track of upload percentage
  const [uploadPercentage, setUploadPercentage] = useState(null);

  // useEffect hook to upload image to storage
  useEffect(() => {
    const uploadFile = () => {
      // creating storage ref to store file
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);

      // uploading file
      const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadtask stages
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadPercentage(progress);
          console.log(`upload progress: ${progress}`);

          // upload status
          switch (snapshot.status) {
            case "paused":
              console.log("upload paused");
              break;
            case "running":
              console.log("uploading...");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL })); //same as setData(...data, img:downloadURL) but this avoids the need of specifying the dependancy to the useEffect hook
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  // fn to handle input formats of data
  const handleInputData = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAddNew = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", response.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="temp"
            />
          </div>
          <div className="right">
            <form onSubmit={handleAddNew}>
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
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder ? input.placeholder : ""}
                    onChange={handleInputData}
                  />
                </div>
              ))}
              <button
                disabled={uploadPercentage < 100 && uploadPercentage !== null}
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

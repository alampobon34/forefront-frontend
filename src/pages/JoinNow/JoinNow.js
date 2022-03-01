import React, { useState } from "react";
import Header1 from "../../components/Header/Header1";
import Footer from "../../components/Footer/Footer";
import { createJoinNow } from "../../api/api";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "./JoinNow.css";
function JoinNow() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [CV_file, setCV_file] = useState("");
  const [error, setError] = useState([]);
  const [CV_file, setCV_file] = useState([]);
  const [joinNowInput, setJoinNowInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    e.persist();

    setJoinNowInput({ ...joinNowInput, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    e.persist();

    setCV_file({ CV_file: e.target.files[0] });
  };

  const addJoinNow = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", joinNowInput.name);
    formData.append("email", joinNowInput.email);
    formData.append("phone", joinNowInput.phone);
    formData.append("CV_file", CV_file.CV_file);

    createJoinNow(formData).then((res) => {
      if (res.data.status === 200) {
        // alert(res.data.success);
        Swal.fire({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          confirmButtonText: "OK!",
        }).then(function () {
          window.location.href = "/";
        });
      } else if (res.data.status === 422) {
        // alert(res.data.status);
        console.log(res.data.error);
        setError(res.data.error);
      }
    });
  };
  return (
    <div>
      <Header1 />
      <div className="container col-lg-4 border mt-2 rounded">
        <h3 className="text-center mt-4">Join Now</h3>
        <form encType="multipart/form-data" onSubmit={addJoinNow}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={joinNowInput.name}
              onChange={handleInput}
              name="name"
            />
            <div
              id="emailHelp"
              className="form-text form-error text-danger text-bold"
            >
              {error.name}
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={joinNowInput.email}
              onChange={handleInput}
              name="email"
            />
            <div id="emailHelp" className="form-text text-danger">
              {error.email}
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={joinNowInput.phone}
              onChange={handleInput}
              name="phone"
            />
            <div id="emailHelp" className="form-text text-danger">
              {error.phone}
            </div>
          </div>
          <div class="form-group mb-2 border rounded p-1">
            <input
              type="file"
              className="custom-file-input"
              name="CV_file"
              onChange={handleFile}
              value={joinNowInput.CV_File}
            />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>

            <div id="emailHelp" className="form-text text-danger">
              {error.CV_file}
            </div>
          </div>
          <div class="d-grid mb-4">
            <button class="btn btn-primary join-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default JoinNow;

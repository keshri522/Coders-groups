import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

const ShowmoreConsultancy = () => {
  const [alldata, Setalldata] = useState([]); // for  storing all the data
  const [loading, Setloading] = useState(false);
  const [data, Setdata] = useState({
    title: "",
    description: "",
  });
  const [url, Seturl] = useState("");
  const [preview, Setpreview] = useState(""); // just for showing the image in the ui
  // this function will upload the image or the icons to cloud storage that will access anywhere using the url
  // this function will fetch all the dat from backend
  useEffect(() => {
    getalldata();
  }, [loading]);
  const getalldata = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/getconsultingdata`
      );
      if (response.data.success) {
        //  for showing some dealy i am using debouncing
        Setalldata(response.data.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const UloadImagetoCloud = async (e) => {
    try {
      const file = e.target.files[0];
      const previewurl = URL.createObjectURL(file); // create the url of this
      Setpreview(previewurl);
      // uploading to cloudinary
      const formdata = new FormData();
      formdata.append("file", file);
      formdata.append("upload_preset", process.env.REACT_APP_PRESET_NAME);
      formdata.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      // making request to cloudinary
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,

        formdata //once i clikc on the signup the photo is uploaded to cloudinary server and give a link that link is added in our datab user collection
      );
      Seturl(res.data.url);
      // console.log(res.data.url); // this will be send to backend
      // console.log(res.data.url); // this is the url of cloudinary
    } catch (error) {
      // console.log(error.message);
      toast.error(`${error.message}`);
    }
  };
  // this function will subit all the data in the backend
  const SubmitData = async (e) => {
    e.preventDefault(); // Prevent the page from being submitted
    Setloading(true); // handling the state
    try {
      // Assuming 'data' and 'url' are variables containing the necessary data
      const dataToSend = {
        data: data,
        url: url,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/consulting`,
        dataToSend
      );

      // Example: Assuming the server responds with a success message
      if (response.data.success) {
        //  for showing some dealy i am using debouncing
        setTimeout(() => {
          Setloading(false);
          toast.success("Course Added Successfully");
          Setdata({
            title: "",
            description: "",
          });
          Setpreview("");
          Seturl("");
        }, 1000);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      Setloading(false);
      // console.error("Error making POST request:", error);
      toast.error("Something went wrong");
      // Handle errors
    }
  };

  // this function will handle all the changes in the input tag
  const HandleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); just for debugging
    Setdata({ ...data, [name]: value });
  };
  // this function wil deelte the service based on the index
  const deleteService = async (index) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/deleteitem/`,
        {
          id: index,
        }
      );
      // console.log(response.data.remainingData); // Log the response if needed
      Setalldata(response.data.remainingData);
      // Handle success, update your state or perform any other necessary actions
    } catch (error) {
      console.error("Error deleting service:", error.message);
      // Handle the error, show a notification or perform other error-handling actions
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"></div>
      </nav>
      <div className="content-wrapper">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 ">
              <h2 className="text-primary">Service Dashboard</h2>
              <div className="row">
                {/* Sample cards with random data */}
                {/* need to call the api which will show all the data based on the database have */}
                {/* Use map to dynamically render cards based on alldata */}
                {alldata.map((item) => (
                  <div className="col-md-6 mb-3" key={item.id}>
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{item.Title}</h5>
                          <button
                            onClick={() => deleteService(item.id)}
                            type="button"
                            className="btn btn-danger"
                          >
                            <FaTrashAlt size={10}></FaTrashAlt>
                          </button>
                        </div>
                        <p className="card-text">{item.Description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* End of sample cards */}
              </div>
            </div>
            <div className="col-md-4">
              {/* conditional rendering of the images and titles  */}
              {preview ? (
                <>
                  <img
                    className="p-3"
                    src={preview}
                    alt="Preview"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      borderRadius: "20px",
                    }}
                  />
                  <button
                    onClick={() => {
                      Setpreview("");
                    }}
                    className="btn text-danger font-weight-bold"
                  >
                    X
                  </button>
                </>
              ) : (
                <h1 className="text-primary">Add Service</h1>
              )}
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={data.title}
                    required
                    onChange={HandleChange}
                    placeholder="Add Service Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={data.description}
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    required
                    onChange={HandleChange}
                    placeholder="Add Service Description"
                  />
                </div>

                <label
                  htmlFor="fileInput"
                  className="btn btn-outline-primary btn-block"
                >
                  <input
                    type="file"
                    id="fileInput"
                    hidden
                    onChange={UloadImagetoCloud}
                  />
                  Add Image
                </label>

                <button
                  disabled={
                    data.title.length === 0 ||
                    data.description.length === 0 ||
                    url.length === 0
                  }
                  onClick={SubmitData}
                  type="submit"
                  className="btn btn-outline-primary w-100"
                >
                  {loading ? "...Adding" : "Add Service"}
                </button>
              </form>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowmoreConsultancy;

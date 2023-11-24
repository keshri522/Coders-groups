import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assuming roleOptions array is fetched from an API or defined elsewhere

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      title: "Counsulting",
      items: [
        {
          title: "New Orders",
          description: "Bounce Rate",
          icon: "ion ion-bag",
          class: "bg-info",
          paths: "consultingpage",
        },
        // ... other options for Training
      ],
    },
    {
      title: "Training",
      items: [
        {
          title: "Bounce Rate",
          description: "Bounce Rate",
          icon: "ion ion-stats-bars",
          class: "bg-success",
          paths: "trainingpage",
        },
        // ... other options for Counseling
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "User Registrations",
          description: "User Registrations",
          icon: "ion ion-person-add",
          class: "bg-danger",
          paths: "analytics",
        },
      ],
    },
    {
      title: "Others",
      items: [
        {
          title: "Others",
          description: "Other Options",
          icon: "ion ion-pie-graph",
          class: "bg-secondary",
          paths: "others",
        },
      ],
    },
  ]);
  // this function will redircet user to particular page
  const handleLinkClick = (destination) => {
    navigate(`/${destination}`);
    // console.log(destination);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <h1 className="m-0">Dashboard</h1>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row d-flex justify-content-around">
            {data.map((option, index) => (
              <div key={index} className="col-lg-3 col-6">
                <div className={`small-box ${option.items[0].class}`}>
                  <div className="inners">
                    <h3>{option.title}</h3>
                    <p>{option.items[0].description}</p>
                  </div>
                  <div className="icon">
                    <i className={option.items[0].icon}></i>
                  </div>
                  <div
                    // sending dynamic data of title based on that we will redircts user
                    onClick={() => handleLinkClick(option.items[0].paths)}
                    className="small-box-footer"
                  >
                    <label type="button">
                      {" "}
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

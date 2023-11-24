import React, { useState } from "react";

// Assuming roleOptions array is fetched from an API or defined elsewhere

const AdminDashboard = () => {
  const [data, setData] = useState([
    {
      title: "Counsulting",
      items: [
        {
          title: "New Orders",
          description: "Bounce Rate",
          icon: "ion ion-bag",
          class: "bg-info",
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
          class: "bg-warning",
        },
        // ... other options for Analytics
      ],
    },
    // ... other options for the main array
  ]);
  // Get all options from all roles

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
                  <div className="inner">
                    <h3>{option.title}</h3>
                    <p>{option.items[0].description}</p>
                  </div>
                  <div className="icon">
                    <i className={option.items[0].icon}></i>
                  </div>
                  <a href={option.link} className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
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

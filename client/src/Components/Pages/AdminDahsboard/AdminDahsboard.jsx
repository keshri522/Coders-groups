import React from "react";

// Assuming roleOptions array is fetched from an API or defined elsewhere
const roleOptions = {
  "Master admin": [
    {
      title: "Training",
      description: "New Orders",
      icon: "ion ion-bag",
      class: "bg-info",
      link: "C.php",
    },
    // ... other options for Master admin
  ],
  Training: [
    {
      title: "Counsulting",
      description: "New Orders",
      icon: "ion ion-bag",
      class: "bg-info",
      link: "C.php",
    },
    // ... other options for Training
  ],
  Counsulting: [
    {
      title: "Analytics",
      description: "Bounce Rate",
      icon: "ion ion-stats-bars",
      class: "bg-success",
      link: "C.php",
    },
    // ... other options for Counseling
  ],
  Analytics: [
    {
      title: "Others",
      description: "User Registrations",
      icon: "ion ion-person-add",
      class: "bg-warning",
      link: "create_ana.php",
    },
    // ... other options for Analytics
  ],
};

const AdminDashboard = () => {
  // Get all options from all roles
  const allOptions = Object.values(roleOptions).flat();

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <h1 className="m-0">Dashboard</h1>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {allOptions.map((option, index) => (
              <div key={index} className="col-lg-3 col-6">
                <div className={`small-box ${option.class}`}>
                  <div className="inner">
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                  </div>
                  <div className="icon">
                    <i className={option.icon}></i>
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

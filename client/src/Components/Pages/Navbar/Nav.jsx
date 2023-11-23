// this componets show a navbar valong with drop down actions
import React, { useState, useEffect, useRef } from "react";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // handle the local state of the componetns
  const dropdownRef = useRef(null); // for the reference to maipulate the dfom directs
  // to handle side effect of react applicatio i used useeffect hooks
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    // adding event listeners for automatic open or close the drop down onc clicked
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add logout logic here
    // console.log("Logging out..."); // just for debugging purposes
    setDropdownOpen(false); // Close the dropdown after logout
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="../admin/index.php" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>

      {/* Right navbar links */}
      <div className="dropdown" ref={dropdownRef}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded={isDropdownOpen}
          onClick={handleDropdownToggle}
        >
          User
        </button>
        <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}>
          <li>
            <a className="dropdown-item" href="#">
              Another Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <button
            type="button"
            onClick={handleLogout}
            className="dropdown-item"
          >
            Logout
          </button>
        </ul>
      </div>

      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="navbar-search"
            href="#"
            role="button"
          >
            <i className="fas fa-search"></i>
          </a>
        </li>

        {/* Control Sidebar */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-controlsidebar-slide="true"
            href="#"
            role="button"
          >
            <i className="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

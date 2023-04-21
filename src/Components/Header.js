import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import SearchButton from "./SearchButton";
import MainContent from "./MainContent";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/**  Sidebar **/}
      <div
        style={{
          width: "20%",
          height: "700vh",
          backgroundColor: "#4e73df",
          padding: "1rem",
        }}
      >
        <div>
          <img
            src="https:/www.kroo.in/wp-content/uploads/2023/02/kroologo.png"
            style={{ width: "70%", paddingLeft: "1.5rem" }}
          />
        </div>
        <section
          style={{
            color: "white",
            paddingLeft: ".5rem",
            paddingRight: ".5rem",
            borderBottom: "1px solid #edeff1",
          }}
        >
          <p
            style={{
              borderTop: "1px solid #edeff5",
              borderBottom: "1px solid #edeff5",
              paddingTop: ".9rem",
              paddingBottom: ".9rem",
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            Dashboard
          </p>
          <p
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              fontWeight: 400,
              fontSize: ".9rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            KYC Form
          </p>
          <p
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              fontWeight: 400,
              fontSize: ".9rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            Enquiry
          </p>
          <p
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              fontWeight: 400,
              fontSize: ".9rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            Courses
          </p>
          <p
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              fontWeight: 400,
              fontSize: ".9rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            Add Master Courses
          </p>
          <p
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              fontWeight: 400,
              fontSize: ".9rem",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginRight: "5px" }}
            />
            Add Sub Courses
          </p>
        </section>
      </div>

      <div style={{ width: "80%" }}>

        {/**  Navbar **/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "1rem",
          }}
        >
          {/**  Search bar **/}
          <SearchButton />

          {/* Icons */}
          <div style={{ display: "flex", alignItems: "center", color: "gray" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "2rem" }}
            />
            <FontAwesomeIcon icon={faBell} style={{ marginRight: "2rem" }} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>

        {/*  main content */}
        <MainContent/>
      </div>
    </div>
  );
};

export default Header;

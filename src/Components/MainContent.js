import React from "react";
import Box from "./box";

const MainContent = () => {
  return (
    <section
      style={{
        backgroundColor: "#f2f3f5",
        paddingTop: "10px",
        height: "700vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ marginLeft: "1rem", fontSize: "1.7rem", color: "#262711" }}>
          Dashboard
        </p>
        <p
          style={{
            backgroundColor: "#4390de",
            fontSize: ".8rem",
            color: "#ffffff",
            marginRight: "1rem",
            padding: ".4rem",
            cursor: "pointer",
          }}
        >
          Generate Report
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1rem",
          marginTop:'-10px',
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "1rem",
            borderLeft: "3px solid #4390de",
            height: "4rem",
            width: "12rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: ".8rem", color: "#2a5cad" }}>
                EARNINGS(MONTHLY)
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "#262729",
                  marginTop: "-10px",
                }}
              >
                $40,000
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Box />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "1rem",
            borderLeft: "3px solid #1cc88a",
            height: "4rem",
            width: "12rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: ".8rem", color: "#1cc88a" }}>
                EARNINGS(ANNUAL)
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "#262729",
                  marginTop: "-10px",
                }}
              >
                $215,000
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Box />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "1rem",
            borderLeft: "3px solid #36b9cc",
            height: "4rem",
            width: "12rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: ".8rem", color: "#36b9cc" }}>TASKS</p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "#262729",
                  marginTop: "-10px",
                }}
              >
                50%
              </p>
            </div>
            <progress
              value="50"
              max="100"
              style={{
                marginTop: "10px",
                width: "5rem",
                marginLeft: "4px",
                marginRight: "8px",
              }}
            />
            <div style={{ marginTop: "10px", marginRight: "10px" }}>
              <Box />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "1rem",
            borderLeft: "3px solid #f6c23e",
            height: "4rem",
            width: "12rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: ".8rem", color: "#f6c23e" }}>
                PENDING REQUESTS
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "#262729",
                  marginTop: "-10px",
                }}
              >
                18
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Box />
            </div>
          </div>
        </div>
      </div>

      {/** Earnings section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div
          style={{
            height: "60vh",
            backgroundColor: "#ffffff",
            width: "65%",
            paddingLeft: "1rem",
          }}
        >
          <p
            style={{
              color: "#2a5cad",
              paddingBottom: "1rem",
              fontWeight: "500",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            Earnings Overview
          </p>
          <p
            style={{
              color: "#858796",
              paddingBottom: "1rem",
              fontWeight: "300",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            $40,000
          </p>
          <p
            style={{
              color: "#858796",
              paddingBottom: "1rem",
              fontWeight: "300",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            $30,000
          </p>
          <p
            style={{
              color: "#858796",
              paddingBottom: "1rem",
              fontWeight: "300",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            $20,000
          </p>
          <p
            style={{
              color: "#858796",
              paddingBottom: "1rem",
              fontWeight: "300",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            $10,000
          </p>
          <p
            style={{
              color: "#858796",
              paddingBottom: "1rem",
              fontWeight: "300",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            $0
          </p>
        </div>

        <div
          style={{ height: "60vh", backgroundColor: "#ffffff", width: "30%" }}
        >
          <p
            style={{
              color: "#2a5cad",
              paddingLeft: "1rem",
              paddingBottom: "1rem",
              fontWeight: "500",
              borderBottom: "2px solid #f2f3f5",
            }}
          >
            Revenue Sources
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;

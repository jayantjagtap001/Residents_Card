import { useEffect, useState } from "react";
import connectbackend from "../src/api/connect";
import "./Card.css";

const Card = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    connectbackend
      .get("/getData")
      .then((res) => {
        setResidents(res.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const linkedinIcon =
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg";
  const twitterIcon =
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg";

  return (
    <div style={{width:"70vw",margin:"auto"}}>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Resident List</h2>
      <div className="container">
        {residents.map((value, index) => (
          <div key={index} className="card">
            <img
              src={value.ProfileImg}
              alt="Profile"
              className="profile-img"
            />
            <h1>
              <span className="label">Name:</span> {value.First_Name} {value.Last_Name}
            </h1>
            <p>
              <span className="role-label">Role:</span> {value.Role}
            </p>
            <div className="social-links">
              {value.LinkedIn && (
                <a
                  href={value.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="social-icon"
                  />
                </a>
              )}
              {value.Twitter && (
                <a
                  href={value.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="social-icon"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

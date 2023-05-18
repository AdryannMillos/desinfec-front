import React, { useEffect, useState } from "react";
import "../css/service-sheet.css";
import axios from "axios";
const CreateServiceSheet = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  let authToken = localStorage.getItem("authToken");
  authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwicm9sZV9pZCI6MSwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQ0MzM5NDksImV4cCI6MTY4NDQ0MTE0OX0.ICRK9_D4AB8uz5UE_x_ynq7Wm73U2aZqYFIwHtUHLEg";

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/service/list`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setServices(response.data);
        console.log(services);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/service/create",
        {
          name: name,
          cost: cost,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        setName("");
        setCost("");
        window.location.reload();
      })
      .catch((error) => {
        // Handle error response here
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-data">
          <span>Nome:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-complement">
          <span>Preço:</span>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>

        <div className="schedule">
          <button type="submit">Criar</button>
        </div>
      </form>
      <hr />
      {services.map((service) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-data">
            <span style={{marginRight: "20px"}}>Nome: {service.name}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Preço: {service.cost}</span>
          </div>
        </form>
      ))}
    </div>
  );
};

export default CreateServiceSheet;

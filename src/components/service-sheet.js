import React, { useEffect, useState } from "react";
import axios from "axios";
import { cliente, servico, funcionario } from "./data";
import "../css/service-sheet.css";

const ServiceSheet = () => {
  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(1);
  const [observations, setObservations] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [userId, setUserId] = useState("");
  const [serviceId, setServiceId] = useState("");

  let authToken = localStorage.getItem("authToken");
  authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwicm9sZV9pZCI6MSwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQ0MzcxNDcsImV4cCI6MTY4NDQ0NDM0N30.wSTiQAGP-9UyGPFV8ss0HV9F2wMWkBh4yV6e0yBGv-8";

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/user/list`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/customer/list`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCustomers(response.data);
        console.log(customers);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/service/list`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
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
        process.env.REACT_APP_API_BASE_URL + "/customer-historic/create",
        {
          customerId: customerId,
          userId: userId,
          serviceId: serviceId,
          date: date,
          status: status,
          observations: observations,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        // Handle error response here
        console.log(error);
      });
  };

  return (
    services &&
    users &&
    customers && (
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-data">
            <span>Usuário responsável:</span>
            <select name="select" onChange={(e) => setUserId(e.target.value)}>
              <option value={0}>{"Selecione"}</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstname}
                </option>
              ))}
            </select>

            <span>Cliente:</span>
            <select
              name="select"
              onChange={(e) => setCustomerId(e.target.value)}
            >
              <option value={0}>{"Selecione"}</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.firstname}
                </option>
              ))}
            </select>
          </div>
          <div className="form-complement">
            <span>Serviço</span>
            <select
              name="select"
              onChange={(e) => setServiceId(e.target.value)}
            >
              <option value={0}>{"Selecione"}</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-complement">
            <span>Observações</span>
            <input
              type="text"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              required
            />
            <span>Data</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="schedule">
            <button type="submit">Criar</button>
          </div>
        </form>
        <hr />
      </div>
    )
  );
};
export default ServiceSheet;

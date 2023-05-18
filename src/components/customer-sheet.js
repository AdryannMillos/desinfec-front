import React, { useEffect, useState } from "react";
import "../css/service-sheet.css";
import axios from "axios";
const CustomerSheet = () => {
  const [customers, setCustomers] = useState([]);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [reference, setReference] = useState("");

  let authToken = localStorage.getItem("authToken");
  authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwicm9sZV9pZCI6MSwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQ0MjM4MjcsImV4cCI6MTY4NDQzMTAyN30.JqZe5fgsye9VJKrMVHx7v1JiFjwJIxgs7Aj9hfFIbOQ";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/customer/create",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          state: state,
          city: city,
          zipcode: zipcode,
          neighborhood: neighborhood,
          street: street,
          number: number,
          complement: complement,
          reference: reference,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        setEmail("");
        setFirstname("");
        setLastname("");
        setPhone("");
        setState("");
        setCity("");
        setZipcode("");
        setNeighborhood("");
        setStreet("");
        setNumber("");
        setComplement("");
        setReference("");

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
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <span>Sobrenome:</span>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="form-complement">
          <span>Telefone</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-complement">
          <span>Estado</span>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <span>Cidade</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-complement">
          <span>Bairro</span>
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            required
          />
          <span>Rua</span>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="form-complement">
          <span>CEP</span>
          <input
            type="number"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <span>Número</span>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-complement">
          <span>Complemento</span>
          <input
            type="text"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            
          />
          <span>Referencia</span>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            required
          />
        </div>

        <div className="schedule">
          <button type="submit">Criar</button>
        </div>
      </form>
      <hr />
      {customers.map((customer) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-data">
            <span style={{marginRight: "20px"}}>Nome: {customer.firstname}</span>
            <span>Sobrenome: {customer.lastname}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Telefone: {customer.phone}</span>
            <span>Email: {customer.email}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Estado: {customer.state}</span>
          <span>Cidade: {customer.city}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Bairro: {customer.neighborhood}</span>
          <span>Rua: {customer.street}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>CEP: {customer.zipcode}</span>
          <span>Numero: {customer.number}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Complemento: {customer.complement}</span>
          <span>Referencia: {customer.reference}</span>
          </div>
        </form>
      ))}
    </div>
  );
};

export default CustomerSheet;

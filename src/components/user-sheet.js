import React, { useEffect, useState } from "react";
import "../css/service-sheet.css";
import axios from "axios";
const UserSheet = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [roleId, setRoleId] = useState("");

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/user/list`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/user/create",
        {
          firstname: firstname,
          password: password,
          lastname: lastname,
          email: email,
          phone: phone,
          roleId: roleId,
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
        setPassword("");
        setFirstname("");
        setLastname("");
        setPhone("");
        setRoleId("");
        window.location.reload();
      })
      .catch((error) => {
        // Handle error response here
        console.log(error);
      });
  };

  return (
    <div className="f-container">
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
          <span>Cargo</span>
          <input
            type="number"
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            required
          />
        </div>

        <div className="form-complement">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="schedule">
          <button type="submit">Criar</button>
        </div>
      </form>
      <hr />
      {users.map((user) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-data">
            <span style={{marginRight: "20px"}}>Nome: {user.firstname}</span>
            <span>Sobrenome: {user.lastname}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Telefone: {user.phone}</span>
            <span>Cargo: {user.role_id}</span>
          </div>

          <div className="form-complement">
          <span style={{marginRight: "20px"}}>Email: {user.email}</span>
          </div>
        </form>
      ))}
    </div>
  );
};

export default UserSheet;

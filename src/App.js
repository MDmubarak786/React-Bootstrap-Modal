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

  // function handleChnage(event) {
  //   this.setState({ name: event.target.value });
  // }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log({ email, phone, password });

    // const user = {
    //   name: this.state.name
    // };

    axios
      .post(`https://webhook.site/abe3c2be-ad9e-40b7-853c-dfea7f739f36`, {
        firstname: { email },
        lastname: { phone },
        pass: { password }
      })
      .then(function(response) {
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
        <Form.Group size="lg" controlId="email">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            autoFocus
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

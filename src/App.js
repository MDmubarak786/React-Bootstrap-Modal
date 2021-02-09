import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter'
import './style.css';
function MyVerticallyCenteredModal(props) {
  const name = () => {
    alert('hi daa');

  }
  // const myVar = setInterval(name, milliseconds);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" >
              <option>Select Category</option>
              <option>Sofa</option>
              <option>Chair</option>
              <option>Table</option>
              <option>Large select</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="Rs" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Stocks</Form.Label>
            <Form.Control placeholder="Stocks" />
          </Form.Group>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Image Upload" />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className='button' onClick={() => setModalShow(true)}>
        Add Product
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./style.css";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0 && phone.length > 0;
//   }


//   function handleSubmit(event) {
//     state ={

//     }
//     event.preventDefault();

//     const data = {
//       'email': email,
//       'password': password,
//       'phone': phone
//     }
//     // 
//     axios
//       .post('https://webhook.site/83eeb86e-29f2-4b44-b1ec-897a8dc0da01', data)
//       .then(response => {
//         localStorage.setItem('token',)
//       }).catch(
//         err => { console.log(err); }
//       )
//   };

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="phone">
//           <Form.Label>Phone</Form.Label>
//           <Form.Control

//             type="phone"
//             value={phone}
//             onChange={e => setPhone(e.target.value)}
//           />
//         </Form.Group>


//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

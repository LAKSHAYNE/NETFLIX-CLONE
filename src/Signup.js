import React, { useState } from "react";
import "./Signup.css";
import { Button, Row, Col } from "react-bootstrap";
import { auth } from "./firebase";
import { useHistory } from "react-router";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Register(e){
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){
        history.push("/content")
      }
    }).catch(err=>alert(err))
  }

  function Signin(e){
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){
        history.push("/content");
      }
    }).catch(err=>alert(err))
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <img
          className="logo__img"
          src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
        />
        <div className="input__fields">
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="input__email"
            placeholder="Email"
          />
        </div>
        <div className="input__fields">
          <h5>Password</h5>
          <input
            type="password"
            className="input__password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="signIn"
          variant="primary"
          style={{
            backgroundColor: "#e50914",
            width: "100%",
            margin: "30px 0 0 0",
          }}
          onClick={Register}
        >
          Register
        </Button>
        <Button
          className="signIn"
          variant="primary"
          style={{
            backgroundColor: "#e50914",
            width: "100%",
            margin: "30px 0 0 0",
          }}
          onClick={Signin}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Signup;

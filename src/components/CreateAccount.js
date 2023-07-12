import React, { useState } from "react";
import Card from "./Card";

//Only to use with UserContext thru the use of UserProvider
//import { useNewUserContext, useUserContext } from "../context/UserContext";

const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  //Only to use with UserContext thru the use of UserProvider
  //const users = useUserContext();

  return (
    <>
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={
          show ? (
            <CreateForm setShow={setShow} />
          ) : (
            <CreateMsg setShow={setShow} />
          )
        }
      ></Card>
      <div>{JSON.stringify(user)}</div>
    </>
  );
};

const CreateMsg = (props) => {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Add another account
      </button>
    </>
  );
};

const CreateForm = (props) => {
  //Only to use with UserContext thru the use of UserProvider
  //const users = useUserContext();
  //const setNewUser = useNewUserContext();

  //console.log(JSON.stringify(users));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle = () => {
    console.log(name, email, password);

    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      let res = await fetch(url);
      let data = await res.json();
      console.log('Mi Data: ', data);
    })();
    //Only to use with UserContext thru the use of UserProvider
    //setNewUser({name, email, password});

    props.setShow(false);
  };

  return (
    <>
      Name
      <input
        type="input"
        className="form-control m-1"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      Email adress
      <input
        type="input"
        className="form-control m-1"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      Password
      <input
        type="password"
        className="form-control m-1"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit" className="btn btn-light m-1" onClick={handle}>
        Create Account
      </button>
    </>
  );
};

export default CreateAccount;

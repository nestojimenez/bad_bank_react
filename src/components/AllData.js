import React, { useEffect, useState } from "react";
//Only to use UserContex thru UserProvider
//import { useUserContext } from "../context/UserContext";

const AllData = () => {
  //const users = useUserContext();

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  console.log(data);
  return (
    <div>
      <h1>All Data</h1>
      {data}
    </div>
  );
};

export default AllData;

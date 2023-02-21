import React, { useContext } from "react";
import { FirstName, LastName } from "./Component";

function ComponentB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <div>
      <h1>
        My Name Is {fname} {lname}
      </h1>
    </div>
  );
}

export default ComponentB;
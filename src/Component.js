import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();

function Component() {
  return (
    <div>
      <FirstName.Provider value={"Vishwa"}>
        <LastName.Provider value={"Dave"}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default Component;
export { FirstName, LastName };
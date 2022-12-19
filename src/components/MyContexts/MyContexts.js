import React, { createContext, useState } from "react";

const MyContexts = createContext();

function MyContextsProvider({ children }) {
    const [myClassList, setMyClassList] = useState(['Full Body Workout', 'Up Body Workout', 'leg workout', 'biceps workout', 'abs workout' ]);

  return (
    <MyContexts.Provider value={{ myClassList, setMyClassList}}>
      {children}
    </MyContexts.Provider>
  );
}

export { MyContexts, MyContextsProvider };
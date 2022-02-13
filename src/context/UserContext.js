import React,{createContext, useState} from 'react';

export const userContext = createContext()

const userMockup = [{
    id: 1,
    name: "TzuzulCode",
    password: "contraseña"
},{
    id: 2,
    name: "Sancho6040",
    password: "12345"
},{
    id: 3,
    name: "Ivan",
    password: "Ivan_"
}]

export default function UserContext({children}) {

    const [users, setUsers] = useState(userMockup);

    const [activeUser, setActiveUser] = useState({});

    

  return <userContext.Provider value={{users, setUsers, activeUser, setActiveUser}}>
      {children}
  </userContext.Provider>
}


'use client';

import Context from "./context/userContext";

const Provider = ({ children }) => {
  return (
    <Context>
        {children}
    </Context>
  )
}

export default Provider
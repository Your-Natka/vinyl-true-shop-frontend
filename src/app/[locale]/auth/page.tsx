import React from "react";

interface AuthProps {
  children?: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  return (
    <div>
      <h1>Authentication Page</h1>
      {children}
    </div>
  );
};

export default Auth;

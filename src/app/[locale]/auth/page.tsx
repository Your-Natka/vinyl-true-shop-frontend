import React from "react";

interface authProps {
  children?: React.ReactNode;
}

const Auth = ({ children }: authProps) => {
  return (
    <div>
      <h1>Authentication Page</h1>
      {children}
    </div>
  );
};

export default Auth;

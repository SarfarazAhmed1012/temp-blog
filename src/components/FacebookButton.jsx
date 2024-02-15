import React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";

const FacebookButton = () => {
  function handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <FacebookProvider appId="366700416143572">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        Login via Facebook
      </LoginButton>
    </FacebookProvider>
  );
};

export default FacebookButton;

import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookButton = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="366700416143572"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default FacebookButton;

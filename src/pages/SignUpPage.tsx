import React from "react";
import { FormBottom, FormStyle, H1, SignWap } from "../styles";
import SocialBtn from "../components/SocialBtn/SocialBtn";
import MyInput from "../components/MyInput/MyInput";
import Or from "../components/Or/Or";
import MyButton from "../components/Button/Button";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <SignWap>
      <FormStyle>
        <H1>Sign up</H1>
        <SocialBtn
          variant="google"
          value={"asdasd"}
          onClick={() => console.log(123132)}
        />
        <SocialBtn
          variant="facebook"
          value={"asdasd"}
          onClick={() => console.log(123132)}
        />
        <Or />

        <MyInput title="Your name" placeholder={"Enter your name"} />
        <MyInput title="Your email" placeholder={"Enter your email"} />
        <MyInput title="Your username" placeholder={"Enter your username"} />

        <MyButton />

        <FormBottom>
          Already signed up? <Link to="/signin">Go to sign in.</Link>
        </FormBottom>
      </FormStyle>
    </SignWap>
  );
};

export default SignUpPage;


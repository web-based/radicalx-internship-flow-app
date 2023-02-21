import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "@emotion/styled";

import logo from "../assets/radicalx_logo.png";
import email from "../assets/email.png";
import lock from "../assets/lock.png";
import eye from "../assets/eye.png";



function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginPassword, setloginPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.debug(res);
      navigate("/dashboard");
    } catch (error) {
      console.debug(error.message);
      setErrorMsg(error.message);
    }
  };

  return (
    <LoginContainer>
      <GridOne />
      <GridTwo>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <div>
          <LoginTitle>Login</LoginTitle>
          <form onSubmit={handleLogin}>
            <EyeContainer>
              <Icon src={email} alt="Email Icon" />
              <LoginInput
                type="text"
                name="Email"
                placeholder="Email"
                onChange={(e) => {
                  setloginEmail(e.target.value);
                }}
                required
              />
            </EyeContainer>
            <EyeContainer>
              <Icon src={lock} alt="Lock Icon" />
              <LoginInput
                type={showPassword ? "text" : "password"}
                name="Password"
                placeholder="Password"
                onChange={(e) => {
                  setloginPassword(e.target.value);
                }}
                required
              />
              <MainEyeIcon
                src={eye}
                alt="eye_icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </EyeContainer>
            <LoginOptions>
              <p>Remember me</p>
              <ForgotText>Forgot password?</ForgotText>
            </LoginOptions>
            <SubmitButton type="submit">Login</SubmitButton>
            {errorMsg && <p style={{ maxWidth: "300px" }}>Error: {errorMsg}</p>}
          </form>
        </div>
      </GridTwo>
    </LoginContainer>
  );
}

export default Login;


const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: auto;
`;
const GridOne = styled.div`
  background-color: #7041ec;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex: 0 0 0;
  }
`;
const GridTwo = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 50%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 40px;
    padding-top: 77px;
  }

  @media screen and (max-height: 450px) {
    display: none;
  }
`;
const LoginTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.4px;
  padding-bottom: 5px;
`;
const EyeContainer = styled.div`
  position: relative;
  padding-bottom: 12px;
  margin: 0;
`;
const Icon = styled.img`
  position: absolute;
  top: 14px;
  left: 16px;
  width: 20px;
  height: 20px;
`;
const MainEyeIcon = styled.img`
  position: absolute;
  top: 14px;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const LoginInput = styled.input`
  font-family: "Space Grotesk";
  box-sizing: border-box;
  width: 360px;
  height: 48px;
  background: #f5f5f7;
  border: 1px solid #cecece;
  border-radius: 16px;
  padding-left: 44px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.3px;
`;
const LoginOptions = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1rem;
  line-height: 0px;
  text-align: center;
  letter-spacing: 0.4px;
  color: grey;
  padding-bottom: 18px;
`;
const ForgotText = styled.p`
font-size: 1rem;
font-weight: 500;
color: #7041ec;
`;
const SubmitButton = styled.button`
background: #793ef5;
border-radius: 16px;
border: none;
color: #fff;
  font-family: "Space Grotesk";
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  line-height: 20px;
  width: 360px;
  height: 48px;
  cursor: pointer;
`;
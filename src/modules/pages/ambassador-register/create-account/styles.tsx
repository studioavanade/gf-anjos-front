import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 50px 32px 0px 32px;

  @media (max-width: 600px) {
    padding: 32px 32px 0px 32px;
  }
`;

export const TitleLogin = styled.div`
  font-size: 44px;
  font-family: "KG Life is Messy";
  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const DivSubmitButton = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const LoginLink = styled.div`
  margin-top: 50px;
  color: white;
  text-align: center;
`;

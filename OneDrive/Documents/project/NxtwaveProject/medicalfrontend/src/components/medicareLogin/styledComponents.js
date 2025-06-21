import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  background-color: lightcyan;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SmallLoginImg = styled.img`
  @media (min-width: 768px) {
    display: none;
  }

  width: 78vw;
  border-radius: 4px;
`;
export const LoginImage = styled.img`
  padding: 0px;
  border-radius: 4px;
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  width: 60vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Form = styled.form`
  width: 90%;
  padding-left: 30px;
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  color: #1e3a8a;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 24px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  color: #334155;
`;

export const Input = styled.input`
  width: 93%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1e40af;
  }
`;

export const RegisterText = styled.p`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  color: #334155;
`;

export const RegisterButton = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  text-decoration: underline;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;

export const LoginInner = styled.div`
  dispaly: flex;
  flex-direction: column;
  width: 100%;
`;

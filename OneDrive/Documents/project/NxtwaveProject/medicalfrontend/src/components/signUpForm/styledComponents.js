import styled from "styled-components";

export const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: lightcyan;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const Title = styled.h2`
  text-align: center;
  color: #1e293b;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 93%;
  padding: 10px 14px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #2563eb;
  }
`;

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin: 8px 0;
  text-align: center;
`;

export const Popup = styled.div`
  margin-top: 16px;
  background-color: #22c55e;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

export const TopImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

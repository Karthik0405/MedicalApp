import styled from "styled-components";

export const Container = styled.div`
  width: 78vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 16px;
`;

export const ToggleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  align-items: center;
`;

export const ToggleLabel = styled.label`
  font-weight: 500;
`;

export const ToggleSwitch = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: black;
  }

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    height: 16px;
    width: 16px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  &:checked::before {
    transform: translateX(20px);
  }
`;

export const InputField = styled.input`
  width: 98%;
  padding: 10px;
  margin: 10px 0 16px 0;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0 16px 0;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`;

export const EmailPreview = styled.div`
  background-color: #f0fdf4;
  padding: 16px;
  border-radius: 8px;
`;

export const EmailLine = styled.p`
  margin: 4px 0;
  color: #1f2937;
`;

export const SaveButton = styled.button`
  align-self: flex-end;
  background-color: #22c55e;
  color: white;
  padding: 12px 24px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #16a34a;
  }
`;

export const EmailiconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const EmailMesssage = styled.div`
  background-color: white;
  padding: 16px;
`;

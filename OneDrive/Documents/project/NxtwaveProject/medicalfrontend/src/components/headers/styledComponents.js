import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #e6f0fa;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoIcon = styled.div`
  background: linear-gradient(135deg, #3b82f6, #10b981);
  color: white;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 14px;
  border-radius: 12px;
`;

export const TitleText = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #111827;
`;

export const SubtitleText = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 0;
`;

export const RoleSwitchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d1d5db;
  padding: 8px 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const SwitchIcon = styled.span`
  font-size: 16px;
`;

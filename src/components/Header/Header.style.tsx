import styled from "styled-components";
import { Header } from 'antd/es/layout/layout';

export const HEADER_HEIGHT = 60;

export const theme = {
  colors: {
    primary: "#001529",
  },
  maxWidth: 1440,
};

export const Container = styled(Header) <{ height: number }>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${theme.colors.primary};
  padding: 0;
  z-index: 10;
`;

export const BaseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${theme.maxWidth};
  margin: auto;
  padding: 0px 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 16px;
  background: #ffffff;
  cursor: pointer;
`;

export const Text = styled.span<{ active: boolean }>`
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: ${({ active }) => (active ? 600 : 400)};
`;

export const Name = styled.span`
  font-size: 14px;
  color: #ffffff;
  margin-right: 8px;
`;

// export const Mony = styled.span`
//   font-size: 16px;
//   font-weight: 700;
//   color: #ffffff;
//   margin-right: 16px;
// `;

export const UserContainerInfo = styled.div`
  margin-right: 40px;
`


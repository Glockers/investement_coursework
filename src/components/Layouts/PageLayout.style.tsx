import { Layout } from "antd";
import styled from "styled-components";

export const Container = styled(Layout) <{ headerheight: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - ${({ headerheight }) => `${headerheight}px`});
  overflow-x: hidden;
  background-color: transparent;
`;

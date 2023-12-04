import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 64px;
`;

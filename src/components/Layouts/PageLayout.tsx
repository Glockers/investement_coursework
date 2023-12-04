import { Layout } from 'antd';
import { ComponentProps, ReactElement } from 'react';
import { HEADER_HEIGHT } from '../Header/Header.style';
import { Container } from './PageLayout.style';

type TProps = ComponentProps<typeof Layout>;

export const PageLayout = ({ children, ...props }: TProps): ReactElement => {
  return (
    <Container {...props} headerheight={HEADER_HEIGHT}>
      {children}
    </Container>
  );
};

import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { EAppRoutes } from '../../common/routes.config';
import {
  BaseWrapper,
  Container,
  HEADER_HEIGHT,
  Name,
  Wrapper,
  Text,
  UserContainerInfo
} from './Header.style';
import { useAuthContext } from '../../mock/authContext';
import logo from '../../assets/default-avatar.png';


export const AppHeader = (): ReactElement => {
  const { isAuthorized, user, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <Container style={{ height: HEADER_HEIGHT }} height={HEADER_HEIGHT}>
      <BaseWrapper>
        <Wrapper>
          <Text active>Glockers Finance</Text>
        </Wrapper>
        <Wrapper>
          {!isAuthorized && (
            <Button type="primary" onClick={() => navigate(EAppRoutes.LOGIN)}>
              Войти
            </Button>
          )}

          {isAuthorized && (
            <>
              {/* <Mony>{user?.balance} USD</Mony> */}
              <UserContainerInfo>
                <Name>{user?.firstName}</Name>
                <Avatar
                  src={logo}
                  alt=""
                  onClick={() => navigate(EAppRoutes.PROFILE)}
                />
              </UserContainerInfo>
              <Button
                type="dashed"
                onClick={() => {
                  logout();
                  navigate(EAppRoutes.HOME);
                }}
              >
                Выйти
              </Button>
            </>
          )}
        </Wrapper>
      </BaseWrapper>
    </Container>
  );
};

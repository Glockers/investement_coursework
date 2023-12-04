import { Menu } from 'antd';
import { ReactElement, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { Container, Logo, LogoContainer } from './AppBar.style';
import logo from '../../assets/default-avatar.png';
import getAppBarList, { MenuItem } from './menu.config';

export const AppBar = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed2] = useState(true);

  const navigate = useNavigate();

  const menuItems = useMemo<MenuItem[]>(
    () => getAppBarList(navigate),
    []
  );

  return (
    <>
      {
        collapsed2 ? <Container>
          <Sider
            collapsible
            collapsed={collapsed}
            theme="dark"
            onCollapse={(value) => setCollapsed(value)}
          >
            <LogoContainer>
              <Link to="/">
                <Logo src={logo} alt="" />
              </Link>
            </LogoContainer>
            <Menu
              theme="dark"
              defaultSelectedKeys={['1']}
              mode="inline"
              items={menuItems}
            />
          </Sider>
        </Container> : <></>
      }
    </>
  );
};

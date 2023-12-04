import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { AppBar } from '../components/AppBar/AppBar';
import styled from 'styled-components';
import { PageLayout } from '../components/Layouts/PageLayout';
import { AppHeader } from '../components/Header';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { routes } from './router.config';

const StyledLayout = styled(PageLayout)`
  display: block;
  width: 100%;
`;

const Main = styled.main``;

const Routing = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppBar />
      <StyledLayout style={{ display: 'block' }}>
        <AppHeader />
        <Main>
          <ReactRoutes>
            {Object.keys(routes).map((key) => {
              return (
                <Route
                  key={key}
                  path={key}
                  element={
                    <ProtectedRoute permissions={routes[key].permissions}>
                      {routes[key].element}
                    </ProtectedRoute>
                  }
                />
              );
            })}
          </ReactRoutes>
        </Main>
        <Footer
          style={{
            borderTop: '1px solid #e8e8e8',
            width: '100%',
            backgroundColor: 'white',
            textAlign: 'center'
          }}
        >
          ©{new Date().getFullYear()} Created by Litvishko Maxim
        </Footer>
      </StyledLayout>
    </Layout>
  );
};

export default Routing;

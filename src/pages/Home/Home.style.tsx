import styled from 'styled-components';
import { PageLayout } from '../../components/Layouts';

export const Container = styled(PageLayout)`
  width: 100%;
  display: grid;
  min-width: 320px;
  grid-template-rows: 72px 1fr;
  grid-template-columns: 1fr;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const BlogNews = styled.div`
  margin: 0px 30px 0 30px;
  display: flex;
  flex-direction: column;
`;

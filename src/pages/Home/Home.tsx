/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement } from 'react';
import { BlogNews, Container, Title } from './Home.style';
import News from './News/News';
import { PanelManagerNews } from './PanelManagerNews/PanelManagerNews';
import { useAuthContext } from '../../mock/authContext';

const newsData = [
  {
    id: 1,
    title: 'Волатильность рынка выросла',
    text: 'На прошлой неделе волатильность на рынке значительно увеличилась, вызвав беспокойство среди инвесторов.'
  },
  {
    id: 2,
    title: 'Рост технологических компаний',
    text: 'Акции технологических компаний увеличились после анонса о выходе нового продукта, что привлекло внимание инвесторов.'
  },
  {
    id: 3,
    title: 'Падение стоимости нефти',
    text: 'Цены на нефть продолжают падать из-за увеличения производства и снижения спроса.'
  },
  {
    id: 4,
    title: 'Восстановление рынка недвижимости',
    text: 'После нескольких месяцев снижения, рынок недвижимости начал показывать признаки восстановления.'
  },
  {
    id: 5,
    title: 'Новые инвестиционные возможности',
    text: 'Эксперты обсуждают перспективы новых инвестиционных возможностей в сфере зеленых технологий.'
  }
];

export const Home = (): ReactElement => {
  const { role } = useAuthContext()
  return (
    <Container>
      <Title>Новостная лента</Title>

      {role === 'admin' && <PanelManagerNews />}

      <BlogNews>
        {newsData.map((news, index) => (
          <News
            key={index + 1}
            id={index + 1}
            title={news.title}
            text={news.text}
          />
        ))}
      </BlogNews>
    </Container>
  );
};

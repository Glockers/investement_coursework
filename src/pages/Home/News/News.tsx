import { NewsBlock, NewsNumber, NewsText, NewsTitle } from "./News.style";

interface NewsProps {
  title: string,
  id: number,
  text: string
}

const News = ({ title, id, text }: NewsProps) => {
  return (
    <NewsBlock>
      <NewsTitle>
        <NewsNumber>№{id}</NewsNumber>
        {title}
      </NewsTitle>
      <NewsText>{text}</NewsText>
    </NewsBlock>
  );
};

export default News;
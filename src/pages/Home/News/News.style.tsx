import styled from 'styled-components';
// Стили для блока новости
export const NewsBlock = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// Стили для заголовка новости
export const NewsTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

// Стили для номера новости
export const NewsNumber = styled.span`
  font-size: 1.1em;
  color: #666;
  margin-right: 10px;
`;

// Стили для текста новости
export const NewsText = styled.p`
  font-size: 1.2em;
  color: #444;
`;
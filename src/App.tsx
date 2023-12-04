import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Router';

const Global = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: aliceblue;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

function App() {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;

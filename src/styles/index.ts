import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Alteramos aqui de Roboto para Montserrat */
    font-family: 'Montserrat', sans-serif; 
    list-style: none;
  }

  body {
    background-color: #eee;
    /* Um ajuste fino para deixar o texto mais suave */
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    /* Se quiser que o grid ocupe a tela toda */
    height: 100vh; 
  }
`;

export const BotaoAdicionar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: #38a629;
  }
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export default EstiloGlobal;

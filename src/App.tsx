import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from './store';
import EstiloGlobal, {
  BotaoAdicionar,
  Container,
  MainContainer,
} from './styles';
import Formulario from './containers/Formulario';
import ListaDeContatos from './containers/ListaDeContatos';
import BarraLateral from './containers/BarraLateral';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container>
        <BarraLateral mostrarFiltros={true} />
        <MainContainer>
          <ListaDeContatos />
          <BotaoAdicionar title="Adicionar novo contato" to="/novo">
            +
          </BotaoAdicionar>
        </MainContainer>
      </Container>
    ),
  },
  {
    path: '/novo',
    element: (
      <Container>
        <BarraLateral mostrarFiltros={false} />
        <MainContainer>
          <Formulario />
        </MainContainer>
      </Container>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  );
}

export default App;

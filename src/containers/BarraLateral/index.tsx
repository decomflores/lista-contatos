import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { Categoria } from '../../models/Contato';
import { alterarFiltro } from '../../store/reducers/filtro';
import * as S from './styles';

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itens } = useSelector((state: RootState) => state.contatos);
  const filtro = useSelector((state: RootState) => state.filtro);

  const contaContatos = (categoria: Categoria) => {
    return itens.filter((item) => item.categoria === categoria).length;
  };

  const verificaEstaAtivo = (criterio: string, valor?: Categoria) => {
    return filtro.criterio === criterio && filtro.valor === valor;
  };

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.FiltroCard
              ativo={verificaEstaAtivo('categoria', Categoria.FAMILIA)}
              onClick={() =>
                dispatch(
                  alterarFiltro({
                    criterio: 'categoria',
                    valor: Categoria.FAMILIA,
                  })
                )
              }
            >
              <span>{contaContatos(Categoria.FAMILIA)}</span>
              <span>Família</span>
            </S.FiltroCard>

            <S.FiltroCard
              ativo={verificaEstaAtivo('categoria', Categoria.PROFISSIONAL)}
              onClick={() =>
                dispatch(
                  alterarFiltro({
                    criterio: 'categoria',
                    valor: Categoria.PROFISSIONAL,
                  })
                )
              }
            >
              <span>{contaContatos(Categoria.PROFISSIONAL)}</span>
              <span>Profissional</span>
            </S.FiltroCard>

            <S.FiltroCard
              ativo={verificaEstaAtivo('categoria', Categoria.PESSOAL)}
              onClick={() =>
                dispatch(
                  alterarFiltro({
                    criterio: 'categoria',
                    valor: Categoria.PESSOAL,
                  })
                )
              }
            >
              <span>{contaContatos(Categoria.PESSOAL)}</span>
              <span>Pessoal</span>
            </S.FiltroCard>

            <S.FiltroCard
              ativo={verificaEstaAtivo('categoria', Categoria.OUTROS)}
              onClick={() =>
                dispatch(
                  alterarFiltro({
                    criterio: 'categoria',
                    valor: Categoria.OUTROS,
                  })
                )
              }
            >
              <span>{contaContatos(Categoria.OUTROS)}</span>
              <span>Outros</span>
            </S.FiltroCard>

            <S.FiltroCard
              ativo={verificaEstaAtivo('todos')}
              onClick={() => dispatch(alterarFiltro({ criterio: 'todos' }))}
            >
              <span>{itens.length}</span>
              <span>Todos</span>
            </S.FiltroCard>
          </>
        ) : (
          <S.FiltroCard onClick={() => navigate('/')}>
            <span>⬅</span>
            <span>Voltar à lista</span>
          </S.FiltroCard>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;

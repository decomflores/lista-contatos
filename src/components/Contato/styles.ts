import styled from 'styled-components';
import { Categoria } from '../../models/Contato';

const retornaCorPorCategoria = (categoria: Categoria): string => {
  switch (categoria) {
    case Categoria.FAMILIA:
      return '#18e876';
    case Categoria.PROFISSIONAL:
      return '#1e90ff';
    case Categoria.PESSOAL:
      return '#f1c40f';
    default:
      return '#7f8c8d';
  }
};

export const Tag = styled.span<{ categoria: Categoria }>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorPorCategoria(props.categoria)};
  border-radius: 8px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
`;

export const Nome = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  background-color: transparent;
`;

export const Dados = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  border: none;
  background-color: transparent;
  border-bottom: ${(props) => (props.disabled ? 'none' : '1px solid #ccc')};
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  gap: 8px;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 6px 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: #c23616;
`;

export const BotaoEditar = styled(Botao)`
  background-color: #2f3640;
`;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';
import { Categoria } from '../../models/Contato';

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'André Silva',
      email: 'andre@dev.com',
      telefone: '51988887777',
      categoria: Categoria.PESSOAL,
    },
    {
      id: 2,
      nome: 'Alice Santos',
      email: 'alice.s@familia.com',
      telefone: '51911112222',
      categoria: Categoria.FAMILIA,
    },
    {
      id: 3,
      nome: 'Ricardo Mendes',
      email: 'ricardo.tech@empresa.com',
      telefone: '11977770000',
      categoria: Categoria.PROFISSIONAL,
    },
    {
      id: 4,
      nome: 'Beatriz Oliveira',
      email: 'bia.oli@gmail.com',
      telefone: '21955554444',
      categoria: Categoria.PESSOAL,
    },
    {
      id: 5,
      nome: 'Carlos Eduardo',
      email: 'caduzinho@familia.com',
      telefone: '51922223333',
      categoria: Categoria.FAMILIA,
    },
    {
      id: 6,
      nome: 'Mariana Costa',
      email: 'mariana.vendas@work.com',
      telefone: '31944448888',
      categoria: Categoria.PROFISSIONAL,
    },
    {
      id: 7,
      nome: 'Fernando Souza',
      email: 'fer.souza@outros.com',
      telefone: '41966661111',
      categoria: Categoria.OUTROS,
    },
    {
      id: 8,
      nome: 'Juliana Paiva',
      email: 'ju.paiva@pessoal.com',
      telefone: '51977773333',
      categoria: Categoria.PESSOAL,
    },
    {
      id: 9,
      nome: 'Roberto Junior',
      email: 'beto.dev@freela.com',
      telefone: '11999992222',
      categoria: Categoria.PROFISSIONAL,
    },
    {
      id: 10,
      nome: 'Helena Rocha',
      email: 'helena.r@outros.com',
      telefone: '21911115555',
      categoria: Categoria.OUTROS,
    },
  ],
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      );

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome');
      } else {
        state.itens.push(action.payload);
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
  },
});

export const { adicionar, remover, editar } = contatosSlice.actions;
export default contatosSlice.reducer;

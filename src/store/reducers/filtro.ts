import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categoria } from '../../models/Contato';

type FiltroState = {
  termo?: string;
  criterio: 'categoria' | 'todos';
  valor?: Categoria;
};

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos',
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alterarFiltro } = filtroSlice.actions;
export default filtroSlice.reducer;

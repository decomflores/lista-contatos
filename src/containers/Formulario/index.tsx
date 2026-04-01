import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store';
import Contato, { Categoria } from '../../models/Contato';
import { adicionar } from '../../store/reducers/contatos';
import * as S from './styles';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itens } = useSelector((state: RootState) => state.contatos);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [categoria, setCategoria] = useState(Categoria.PESSOAL);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const ultimoContato = itens[itens.length - 1];
    const novoId = ultimoContato ? ultimoContato.id + 1 : 1;

    const contatoParaAdicionar = new Contato(
      nome,
      email,
      telefone,
      categoria,
      novoId
    );

    dispatch(adicionar(contatoParaAdicionar));
    navigate('/');
  };

  return (
    <S.Form onSubmit={cadastrarContato}>
      <h2>Novo Contato</h2>
      <S.Campo
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Nome Completo"
        required
      />
      <S.Campo
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
        required
      />
      <S.Campo
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
        placeholder="Telefone (DDD + Número)"
        required
      />

      {}
      <label htmlFor="categoria">Categoria</label>
      <S.Campo
        as="select"
        id="categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value as Categoria)}
      >
        {Object.values(Categoria).map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </S.Campo>

      <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>

      <S.BotaoSalvar
        style={{ backgroundColor: '#666', marginTop: '8px' }}
        type="button"
        onClick={() => navigate('/')}
      >
        Cancelar
      </S.BotaoSalvar>
    </S.Form>
  );
};

export default Formulario;

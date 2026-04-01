import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { remover, editar } from '../../store/reducers/contatos';
import ContatoClass, { Categoria } from '../../models/Contato';

type Props = ContatoClass;

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  categoria: categoriaOriginal,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNome] = useState(nomeOriginal);
  const [email, setEmail] = useState(emailOriginal);
  const [telefone, setTelefone] = useState(telefoneOriginal);
  const [categoria, setCategoria] = useState(categoriaOriginal);

  useEffect(() => {
    setNome(nomeOriginal);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal);
    setCategoria(categoriaOriginal);
  }, [nomeOriginal, emailOriginal, telefoneOriginal, categoriaOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setNome(nomeOriginal);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal);
    setCategoria(categoriaOriginal);
  }

  return (
    <S.Card>
      {}
      <S.Tag categoria={estaEditando ? categoria : categoriaOriginal}>
        {estaEditando ? `Editando: ${categoria}` : categoriaOriginal}
      </S.Tag>

      <S.Nome
        disabled={!estaEditando}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <S.Dados
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <S.Dados
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
      />

      {estaEditando && (
        <S.Dados
          as="select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as Categoria)}
        >
          {Object.values(Categoria).map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </S.Dados>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(editar({ nome, email, telefone, categoria, id }));
                setEstaEditando(false);
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;

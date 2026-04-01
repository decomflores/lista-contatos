import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Contato from '../../components/Contato';

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos);
  const { criterio, valor } = useSelector((state: RootState) => state.filtro);

  const filtraEOrdenaContatos = () => {
    let contatosExibidos = [...itens]; // Criamos uma cópia para não mexer no original da Store

    // 1. Aplicamos o Filtro
    if (criterio !== 'todos') {
      contatosExibidos = contatosExibidos.filter(
        (item) => item.categoria === valor
      );
    }

    // 2. Aplicamos a Ordem Alfabética (A-Z)
    return contatosExibidos.sort((a, b) => {
      return a.nome.toLowerCase().localeCompare(b.nome.toLowerCase());
    });
  };

  const contatosParaExibir = filtraEOrdenaContatos();

  return (
    <main>
      <ul>
        {contatosParaExibir.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              categoria={c.categoria}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListaDeContatos;

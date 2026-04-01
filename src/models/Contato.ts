export enum Categoria {
  FAMILIA = 'família',
  PROFISSIONAL = 'profissional',
  PESSOAL = 'pessoal',
  OUTROS = 'outros'
}

class Contato {
  nome: string
  email: string
  telefone: string
  categoria: Categoria
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    categoria: Categoria,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.categoria = categoria
    this.id = id
  }
}

export default Contato
import Localizavel from '../interfaces/Localizavel';

let currentId = 0;

type Disponibilidade = 'Disponivel' | 'Indisponivel' | 'Alugado' | 'Reservado';

abstract class ItemAcervo implements Localizavel {
    id: number;
    titulo: string;
    ano: number;
    localizacao: string;
    disponibilidade: Disponibilidade;

    constructor(titulo: string, ano: number, localizacao: string, disponibilidade: Disponibilidade = 'Disponivel') {
        if (!titulo || !ano || !localizacao) {
            throw new Error("Todos os campos são obrigatórios");
        }

        const disponibilidadesPermitidas: Disponibilidade[] = ['Disponivel', 'Indisponivel', 'Alugado', 'Reservado'];
        if (!disponibilidadesPermitidas.includes(disponibilidade)) {
            throw new Error(`Disponibilidade inválida. Valores permitidos são: ${disponibilidadesPermitidas.join(', ')}`);
        }

        this.id = ++currentId;
        this.titulo = titulo;
        this.ano = ano;
        this.localizacao = localizacao;
        this.disponibilidade = disponibilidade;
    }
}

export default ItemAcervo;
export type { Disponibilidade };
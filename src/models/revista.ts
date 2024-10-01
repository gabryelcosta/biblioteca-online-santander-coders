import Publicacao from './Publicacao';

class Revista extends Publicacao {
    constructor(titulo: string, editora: string, ano: number, localizacao: string) {
        super(titulo, ano, localizacao, editora);
    }
}

export default Revista;
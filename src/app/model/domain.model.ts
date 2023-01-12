export class EstadoDTO {
    id : number | undefined;
	codigo: number | undefined;
	nome : string | undefined;
	sigla  : string | undefined;
}

export class MunicipioDTO {
    id : number | undefined;
	codigo: number | undefined;
    nome : string | undefined;
    estado: EstadoDTO | undefined;
}

export class BairroDTO {
    id : number | undefined;
	codigo: string | undefined;
    nome : string | undefined;
    municipio: MunicipioDTO | undefined;
}
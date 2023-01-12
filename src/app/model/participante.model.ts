import { BairroDTO } from "./domain.model";
import { UserDTO } from "./user.model";

export class ParticipanteDTO {
    id : number | undefined;
    nome: string | undefined;
    usuarioResponsavel: UserDTO | undefined;
    bairro: BairroDTO | undefined;
    dataNascimento: Date | undefined;
}
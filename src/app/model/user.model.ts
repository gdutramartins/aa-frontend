export enum RoleNameEnum {
    ROLE_USER = 'ROLE_USER', 
	ROLE_MODERATOR = 'ROLE_MODERATOR', 
	ROLE_ADMIN = 'ROLE_ADMIN'
}

export class RoleDTO {
    public id: number | undefined;
	public name: RoleNameEnum | undefined;
}

export class UserDTO {
    public id: number | undefined;
	public username: string | undefined;
    public nome: string | undefined;
    public roles: RoleDTO[] | undefined;
}


export interface UserName {
	familyName?: string;
	givenName?: string;
	middleName?: string;
}

export interface UserEmail{
	type: string;
	value: string;
}

export interface UserPhoto {
	value: string;
}

export interface AuthProvider{
	id: string;
	userId: string;
	provider: string;
	displayName: string;
	name?: UserName,
	emails?: UserEmail[],
	photos?: UserPhoto[],
}

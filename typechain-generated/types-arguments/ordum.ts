import type BN from 'bn.js';

export enum Categories {
	defi = 'Defi',
	identity = 'Identity',
	privacy = 'Privacy',
	infrastructure = 'Infrastructure',
	networkChanges = 'NetworkChanges',
	art = 'Art',
	media = 'Media',
	gaming = 'Gaming',
	events = 'Events',
	education = 'Education',
	nfTs = 'NFTs',
	translation = 'Translation',
	governance = 'Governance',
	publicGood = 'PublicGood'
}

export type AccountId = string | number[]

export enum MemberRole {
	admin = 'Admin',
	regular = 'Regular'
}

export type IssuerProfile = {
	name: string,
	id: (number | string | BN),
	chain: Chains,
	isActive: boolean,
	registrationDate: (number | string | BN),
	categories: Array<Categories> | null,
	description: string,
	mission: string,
	members: Array<[AccountId, MemberRole]> | null,
	applications: Array<(number | string | BN)> | null,
	role: UserRole
}

export enum Chains {
	polkadot = 'Polkadot',
	kusama = 'Kusama',
	offChain = 'OffChain'
}

export enum UserRole {
	individual = 'Individual',
	foundation = 'Foundation'
}

export type ApplicantProfile = {
	name: string,
	accountId: AccountId,
	description: string,
	members: Array<[AccountId, MemberRole]> | null,
	refTeam: (number | string | BN) | null,
	registeredTime: (number | string | BN),
	applications: (number | string | BN) | null,
	categories: Array<Categories> | null,
	links: Array<string> | null,
	role: UserRole
}

export type KeyManagement = {
	admin: AccountId,
	keyPointer: AccountId,
	allowedKeys: Array<AccountId>
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	accountExists = 'AccountExists',
	notAuthorized = 'NotAuthorized',
	accountDontExists = 'AccountDontExists',
	profileDontExists = 'ProfileDontExists',
	maxKeysExceeded = 'MaxKeysExceeded',
	accountExistsOrMaxExceeded = 'AccountExistsOrMaxExceeded',
	unexpectedError = 'UnexpectedError'
}

export enum KeyAction {
	add = 'ADD',
	remove = 'REMOVE',
	changeAdmin = 'ChangeAdmin'
}


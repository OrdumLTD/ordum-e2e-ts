import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

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
	id: number,
	chain: Chains,
	isActive: boolean,
	registrationDate: number,
	categories: Array<ReturnTypes.Categories> | null,
	description: string,
	mission: string,
	members: Array<[ReturnTypes.AccountId, ReturnTypes.MemberRole]> | null,
	applications: Array<number> | null,
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
	members: Array<[ReturnTypes.AccountId, ReturnTypes.MemberRole]> | null,
	refTeam: number | null,
	registeredTime: number,
	applications: number | null,
	categories: Array<ReturnTypes.Categories> | null,
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


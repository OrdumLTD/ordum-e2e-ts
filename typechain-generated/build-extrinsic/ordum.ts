/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/ordum';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * getIssuerProfile
	 *
	*/
	"getIssuerProfile" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getIssuerProfile", [], __options);
	}

	/**
	 * getApplicantProfile
	 *
	*/
	"getApplicantProfile" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getApplicantProfile", [], __options);
	}

	/**
	 * getAllApplicants
	 *
	*/
	"getAllApplicants" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAllApplicants", [], __options);
	}

	/**
	 * getAllIssuers
	 *
	*/
	"getAllIssuers" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAllIssuers", [], __options);
	}

	/**
	 * createApplicantProfile
	 *
	 * @param { string } name,
	 * @param { ArgumentTypes.AccountId | null } account,
	 * @param { string } description,
	 * @param { Array<ArgumentTypes.AccountId> | null } allowedAccounts,
	 * @param { Array<ArgumentTypes.Categories> | null } categories,
	 * @param { Array<[ArgumentTypes.AccountId, ArgumentTypes.MemberRole]> | null } members,
	 * @param { Array<string> | null } links,
	 * @param { ArgumentTypes.UserRole } role,
	*/
	"createApplicantProfile" (
		name: string,
		account: ArgumentTypes.AccountId | null,
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId> | null,
		categories: Array<ArgumentTypes.Categories> | null,
		members: Array<[ArgumentTypes.AccountId, ArgumentTypes.MemberRole]> | null,
		links: Array<string> | null,
		role: ArgumentTypes.UserRole,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::createApplicantProfile", [name, account, description, allowedAccounts, categories, members, links, role], __options);
	}

	/**
	 * createIssuerProfile
	 *
	 * @param { string } name,
	 * @param { ArgumentTypes.Chains } chain,
	 * @param { Array<ArgumentTypes.Categories> | null } categories,
	 * @param { string } description,
	 * @param { string } mission,
	 * @param { Array<[ArgumentTypes.AccountId, ArgumentTypes.MemberRole]> | null } members,
	 * @param { Array<ArgumentTypes.AccountId> } allowedAccounts,
	 * @param { ArgumentTypes.UserRole } role,
	*/
	"createIssuerProfile" (
		name: string,
		chain: ArgumentTypes.Chains,
		categories: Array<ArgumentTypes.Categories> | null,
		description: string,
		mission: string,
		members: Array<[ArgumentTypes.AccountId, ArgumentTypes.MemberRole]> | null,
		allowedAccounts: Array<ArgumentTypes.AccountId>,
		role: ArgumentTypes.UserRole,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::createIssuerProfile", [name, chain, categories, description, mission, members, allowedAccounts, role], __options);
	}

	/**
	 * updateKeys
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.KeyAction } action,
	*/
	"updateKeys" (
		account: ArgumentTypes.AccountId,
		action: ArgumentTypes.KeyAction,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::updateKeys", [account, action], __options);
	}

	/**
	 * updateIssuerProfile
	 *
	 * @param { string | null } description,
	 * @param { Array<ArgumentTypes.Categories> | null } categories,
	 * @param { ArgumentTypes.Chains | null } chain,
	 * @param { boolean | null } status,
	*/
	"updateIssuerProfile" (
		description: string | null,
		categories: Array<ArgumentTypes.Categories> | null,
		chain: ArgumentTypes.Chains | null,
		status: boolean | null,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::updateIssuerProfile", [description, categories, chain, status], __options);
	}

}
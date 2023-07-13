/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/ordum';
import type * as ReturnTypes from '../types-returns/ordum';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/ordum.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/ordum.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __callerAddress : string;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* getIssuerProfile
	*
	* @returns { Result<Result<ReturnTypes.IssuerProfile | null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getIssuerProfile" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.IssuerProfile | null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getIssuerProfile", [], __options, (result) => { return handleReturnType(result, getTypeDescription(33, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getApplicantProfile
	*
	* @returns { Result<Result<ReturnTypes.ApplicantProfile | null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getApplicantProfile" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.ApplicantProfile | null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getApplicantProfile", [], __options, (result) => { return handleReturnType(result, getTypeDescription(37, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAllApplicants
	*
	* @returns { Result<Result<Array<ReturnTypes.ApplicantProfile>, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getAllApplicants" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<Array<ReturnTypes.ApplicantProfile>, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAllApplicants", [], __options, (result) => { return handleReturnType(result, getTypeDescription(40, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAllIssuers
	*
	* @returns { Result<Result<Array<ReturnTypes.IssuerProfile>, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getAllIssuers" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<Array<ReturnTypes.IssuerProfile>, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAllIssuers", [], __options, (result) => { return handleReturnType(result, getTypeDescription(42, DATA_TYPE_DESCRIPTIONS)); });
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
	* @returns { void }
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
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::createApplicantProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [name, account, description, allowedAccounts, categories, members, links, role], __options);
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
	* @returns { void }
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
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::createIssuerProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [name, chain, categories, description, mission, members, allowedAccounts, role], __options);
	}

	/**
	* updateKeys
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { ArgumentTypes.KeyAction } action,
	* @returns { void }
	*/
	"updateKeys" (
		account: ArgumentTypes.AccountId,
		action: ArgumentTypes.KeyAction,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::updateKeys", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [account, action], __options);
	}

	/**
	* updateIssuerProfile
	*
	* @param { string | null } description,
	* @param { Array<ArgumentTypes.Categories> | null } categories,
	* @param { ArgumentTypes.Chains | null } chain,
	* @param { boolean | null } status,
	* @returns { void }
	*/
	"updateIssuerProfile" (
		description: string | null,
		categories: Array<ArgumentTypes.Categories> | null,
		chain: ArgumentTypes.Chains | null,
		status: boolean | null,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::updateIssuerProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [description, categories, chain, status], __options);
	}

}
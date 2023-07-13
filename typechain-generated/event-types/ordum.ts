import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/ordum';

export interface IssuerAccountCreated {
	name: string;
	time: number;
}

export interface ApplicantAccountCreated {
	name: string;
	time: number;
}

export interface IssuerUpdated {
	name: string;
	time: number;
}

export interface ApplicantUpdated {
	name: string;
	time: number;
}


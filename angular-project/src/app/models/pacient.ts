import { Address } from "./address";

export interface Pacient{
    id: number;
    firstName: string;
    lastName: string;
    disease: string;
    address: Address
}
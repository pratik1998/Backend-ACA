import { Address } from "./Address";
import { ContactInfo } from "./ContactInfo";

export class PersonalInfo{
    constructor(
        public fullName : string,
        public gName: string,
        public dob: string,
        public gender: string,
        public address: Address,
        public contactInfo: ContactInfo
    ){}
}
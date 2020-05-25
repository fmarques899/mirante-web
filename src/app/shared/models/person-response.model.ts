import { PhoneResponse } from "./phone-response.model";

export class PersonResponse {
    constructor(
        public id?: number,
        public name?: string,
        public docNumber?: string,
        public birthDate?: Date,
        public type?: number,
        public motherName?: string,
        public fatherName?: string,
        public phones?: PhoneResponse[]
    ) {}
}


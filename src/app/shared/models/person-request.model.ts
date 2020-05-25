import { PhoneRequest } from "./phone-request.model";

export class PersonRequest {
    constructor(
        public id?: number,
        public name?: string,
        public docNumber?: string,
        public birthDate?: Date,
        public type?: number,
        public motherName?: string,
        public fatherName?: string,
        public phones?: PhoneRequest[]
    ) {}
}
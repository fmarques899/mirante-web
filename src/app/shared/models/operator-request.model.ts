export class OperatorRequest {
    constructor(
    public id?: number,
    public name?: string,
    public creationDate?: Date,
    public login?: string,
    public password?: string,
    public profileName?: string
    ) {}
}
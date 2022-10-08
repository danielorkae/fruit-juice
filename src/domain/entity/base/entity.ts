export class Entity<Type> {
    private _id: string;
    private _attributes: Type;
    
    constructor (attributes: Type) {
        this._attributes = attributes;
    }

    get id() {
        return this._id;
    }

    get attributes(): Type {
        return this._attributes;
    }
}

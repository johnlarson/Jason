import { ulid } from 'ulid';
import constants from './constants';

const idToValue: Map<string, any> = new Map();
const valueToId: Map<any, string> = new Map();

for(const [name, value] of constants.all()) {
    idToValue.set(name, value);
    valueToId.set(value, name);
}

export function fromId(id: string): any {
    if(!idToValue.has(id)) throw new Error('Id not found.')
    return idToValue.get(id);
}

export function id(thing: any, newId?: string): string {
    if(!valueToId.has(thing)) {
        newId = newId || ulid();
        valueToId.set(thing, newId);
        idToValue.set(newId, thing);
    }
    return valueToId.get(thing) as string;
}
import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
const animal = faker.animal.type();
const animalName = faker.person.firstName();
const animalFullName = faker.person.fullName({ firstName: animalName });

export const objBlockScopeReassign: JS_Type = {
    level: 1,
    points: 1,
    title: `Assuming \"block scope\", write a variable named \"${animal}\", assign it the value \"${animalName}\", then reassign the variable the value \"${animalFullName}\"`,
    data: {
        scope: "block scope",
        keyword: 'let',
        variable: animal,
        declaration: animalName,
        reassign: animalFullName
    },
    result: {
        resultDeclare: `let ${animal} = ${animalName}`,
        resultReassign: `${animal} = ${animalFullName}`
    },
    conditions: null,
    constraints: null,
    category: 'Variable',
    category_sub: 'scope',
    tags: null,
    refs: null
};

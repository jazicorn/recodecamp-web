import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';

export const objBlockScopeReassign = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        level: 1,
        points: 2,
        task: `Assuming \"block scope\", write a variable named \"${animal}\", assign it the value \"${animalName}\", then reassign the variable the value \"${animalFullName}\"`,
        data: {
            scope: "block scope",
            keyword: 'let',
            variable: animal,
            declaration: animalName,
            reassign: animalFullName
        },
        result: {
            0: {
                all: true,
            },
            1 : {
                resultDeclare: `let ${animal} = ${animalName}`,
                completed: false,
                optional: false
            },
            2 : {
                resultReassign: `${animal} = ${animalFullName}`,
                completed: false,
                optional: false
            }
        },
        hints: {},
        boilerplate: '',
        conditions: {},
        constraints: {},
        category: 'Variable',
        category_sub: 'scope',
        tags: [],
        refs: {}
    }
    return data;
};

import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';

export const objGlobalScope = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        level: 1,
        points: 1,
        task: `Assuming \"global scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        data: { scope: "global scope", declaration: animal, value: animalName},
        result: {
            1 : {
                resultVar: `var ${animal} = ${animalName}`,
                completed: false
            },
            2 : {
                resultConst: `const ${animal} = ${animalName}`,
                completed: false
            },
            3: {
                resultLet: `let ${animal} = ${animalName}`,
                completed: false
            },
        },
        hints: {},
        conditions: {},
        constraints: {
            1: "Declare and assign all possible variable types."
        },
        category: 'Variable',
        category_sub: 'scope',
        tags: [],
        refs: {}
    }
    return data;
};

export const objFuncScope = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        level: 1,
        points: 1,
        task: `Assuming \"function scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        data: { scope: "function scope", keyword: 'var', declaration: animal, value: animalName},
        result: {
            1: {
                resultVar: `var ${animal} = ${animalName}`,
                completed: false
            }
        },
        hints: {},
        conditions: {},
        constraints: {
            1: "Declare and assign all possible variable types."
        },
        category: 'Variable',
        category_sub: 'scope',
        tags: [],
        refs: {}
    }
    return data;
};

export const objBlockScope = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        level: 1,
        points: 1,
        task: `Assuming \"block scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        data: { scope: "block scope", keyword: ['const', 'let'], declaration: animal, value: animalName},
        result: {
            1 : {
                resultConst: `const ${animal} = ${animalName}`,
                completed: false
            },
            2 : {
                resultLet: `let ${animal} = ${animalFullName}`,
                completed: false
            }
        },
        hints: {},
        conditions: {},
        constraints: {
            1: "Declare and assign all possible variable types."
        },
        category: 'Variable',
        category_sub: 'scope',
        tags: [],
        refs: {}
    }
    return data;
};

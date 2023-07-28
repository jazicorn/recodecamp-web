import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
const animal = faker.animal.type();
const animalName = faker.person.firstName();
const animalFullName = faker.person.fullName({ firstName: animalName });

export const objGlobalScope = {
    level: 1,
    points: 1,
    title: `Assuming \"global scope\", write a variable named "${animal}" and assign it the value "${animalName}" `,
    data: { scope: "global scope", declaration: animal, value: animalName},
    result: {
        resultVar: `var ${animal} = ${animalName}`,
        resultConst: `const ${animal} = ${animalName}`,
        resultLet: `let ${animal} = ${animalName}`
    },
    conditions: { 1: "Declare and assign all possible variable types "},
    constraints: null,
    category: 'Variable',
    category_sub: 'scope',
    tags: null,
    refs: null
};

export const objFuncScope: JS_Type = {
    level: 1,
    points: 1,
    title: `Assuming \"function scope\", write a variable named "${animal}" and assign it the value "${animalName}" `,
    data: { scope: "function scope", keyword: 'var', declaration: animal, value: animalName},
    result: {
        resultVar: `var ${animal} = ${animalName}`
    },
    conditions: { 1: "Declare and assign all possible variable types "},
    constraints: null,
    category: 'Variable',
    category_sub: 'scope',
    tags: null,
    refs: null
};

export const objBlockScope: JS_Type = {
    level: 1,
    points: 1,
    title: `Assuming \"block scope\", write a variable named "${animal}" and assign it the value "${animalName}" `,
    data: { scope: "block scope", keyword: ['const', 'let'], declaration: animal, value: animalName},
    result: {
        resultConst: `const ${animal} = ${animalName}`,
        resultLet: `let ${animal} = ${animalFullName}`
    },
    conditions: { 1: "Declare and assign all possible variable types "},
    constraints: null,
    category: 'Variable',
    category_sub: 'scope',
    tags: null,
    refs: null
};

import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../utils/index';
const animal = faker.animal.type();
const animalName = faker.person.firstName();
const animalFullName = faker.person.fullName({ firstName: animalName });

const random = getRandomInt(3);
const keyword = ['var', 'const', 'let'][random];

export const objRandom: JS_Type = {
    level: 1,
    points: 1,
    title: `
        Using the \"${keyword}\" keyword,
        declare a variable named "${animal},
        and assign it the value ${animalName}"`,
    data: { keyword: keyword, declaration: animal, value: animalName},
    result: { result: `${keyword} ${animal} = ${animalName}`},
    conditions: null,
    constraints: null,
    category: 'Variable',
    category_sub: null,
    tags: null,
    refs: null
};

export const objRandomVar: JS_Type = {
    level: 1,
    points: 1,
    title: `Using the \"var\" keyword, declare a variable named "${animal}"`,
    data: { keyword: 'var', declaration: animal },
    result: { result: `var ${animal}`},
    conditions: null,
    constraints: null,
    category: 'Variable',
    category_sub: 'var',
    tags: null,
    refs: null
};

export const objRandomConst: JS_Type = {
    level: 1,
    points: 1,
    title: `Using the \"const\" keyword, declare a variable named "${animal}" and assign it the value "${animalName}`,
    data: { keyword: 'const', declaration: animal, value: animalName},
    result: { result: `const ${animal} `},
    conditions: null,
    constraints: null,
    category: 'Variable',
    category_sub: 'const',
    tags: null,
    refs: null
};

export const objRandomLet: JS_Type = {
    level: 1,
    points: 1,
    title: `Using the \"let\" keyword, declare a variable named "${animal}"`,
    data: { keyword: 'let', value: animal},
    result: { result: `let ${animal}`},
    conditions: null,
    constraints: null,
    category: 'Variable',
    category_sub: 'let',
    tags: null,
    refs: null
};

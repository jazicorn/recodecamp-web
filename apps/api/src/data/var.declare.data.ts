import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../utils/index';

export const objRandom = (): JS_Type => {
    const random = getRandomInt(3);
    const keyword = ['var', 'const', 'let'][random];
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        level: 1,
        points: 1,
        title: `Using the \"${keyword}\" keyword, declare a variable named \"${animal}\", and assign it the value \"${animalName}\"`,
        data: { keyword: keyword, declaration: animal, value: animalName},
        result: { result: `${keyword} ${animal} = ${animalName}`},
        conditions: null,
        constraints: null,
        category: 'Variable',
        category_sub: null,
        tags: null,
        refs: null
    }
    return data;
};

export const objRandomVar = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        level: 1,
        points: 1,
        title: `Using the \"var\" keyword, declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        data: { keyword: 'var', declaration: animal, value: animalName },
        result: { result: `var ${animal} = ${animalName}`},
        conditions: null,
        constraints: null,
        category: 'Variable',
        category_sub: 'var',
        tags: null,
        refs: null
    }
    return data;
};

export const objRandomConst = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        level: 1,
        points: 1,
        title: `Using the \"const\" keyword, declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        data: { keyword: 'const', declaration: animal, value: animalName},
        result: { result: `const ${animal} = ${animalName}`},
        conditions: null,
        constraints: null,
        category: 'Variable',
        category_sub: 'const',
        tags: null,
        refs: null
    }
    return data;
};

export const objRandomLet = (): JS_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        level: 1,
        points: 1,
        title: `Using the \"let\" keyword, declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        data: { keyword: 'let', declaration: animal, value: animalName},
        result: { result: `let ${animal} = ${animalName}`},
        conditions: null,
        constraints: null,
        category: 'Variable',
        category_sub: 'let',
        tags: null,
        refs: null
    }
    return data;
};

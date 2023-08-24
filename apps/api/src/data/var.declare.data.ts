import { Q_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../utils/index';

export const objRandom = (): Q_Type => {
    const random = getRandomInt(3);
    const keyword = ['var', 'const', 'let'][random];
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using the \"${keyword}\" keyword declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        _QUESTION_DATA: { keyword: keyword, declaration: animal, value: animalName},
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1: {
                answer: `${keyword} ${animal} = ${animalName}`,
                completed: false,
                optional: false
            },
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'declaration',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {},
    }
    return data;
};

export const objRandomVar = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using the \"var\" keyword declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        _QUESTION_DATA: { keyword: 'var', declaration: animal, value: animalName },
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                answer: `var ${animal} = ${animalName}`,
                completed: false,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'declaration',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

export const objRandomConst = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using the \"const\" keyword declare a variable named \"${animal}\" and assign it the value \"${animalName}\"`,
        _QUESTION_DATA: { keyword: 'const', declaration: animal, value: animalName},
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                answer: `const ${animal} = ${animalName}`,
                completed: false,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'declaration',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

export const objRandomLet = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using the \"let\" keyword declare a variable named \"${animal}\" and assign it the value \"${animalName}\"` ,
        _QUESTION_DATA: { keyword: 'let', declaration: animal, value: animalName},
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                answer: `let ${animal} = ${animalName}`,
                completed: false,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: ``,
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'declaration',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

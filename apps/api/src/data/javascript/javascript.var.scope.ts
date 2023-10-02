import { Q_Type } from  '../../types/types.question';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const objGlobalScope = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-cDvOhQgs6teu`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Assuming \"global scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        _QUESTION_DATA: { scope: "global scope", declaration: animal, value: animalName},
        _QUESTION_ANSWER_REGEX: ``,
        _QUESTION_ANSWER: (userAnswer: string, answer: string) => {
            const regex =  new RegExp(answer);
            const result = userAnswer.match(regex);
            if(result) {
                return true
            } else {
                return false
            }
        },
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                resultVar: `var ${animal} = ${animalName}`,
                completed: false,
                optional: false
            },
            2 : {
                resultConst: `const ${animal} = ${animalName}`,
                completed: false,
                optional: false
            },
            3: {
                resultLet: `let ${animal} = ${animalName}`,
                completed: false,
                optional: false
            },
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {
            1: "Declare and assign all possible variable types."
        },
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'scope',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

export const objFuncScope = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-88ewLVROAL2Q`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Assuming \"function scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        _QUESTION_DATA: { scope: "function scope", keyword: 'var', declaration: animal, value: animalName},
        _QUESTION_ANSWER_REGEX: ``,
        _QUESTION_ANSWER: (userAnswer: string, answer: string) => {
            const regex =  new RegExp(answer);
            const result = userAnswer.match(regex);
            if(result) {
                return true
            } else {
                return false
            }
        },
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1: {
                resultVar: `var ${animal} = ${animalName}`,
                completed: false,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {
            1: "Declare and assign all possible variable types."
        },
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'scope',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

export const objBlockScope = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-NVjielbrJfo2`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Assuming \"block scope\", write a variable named "${animal}" and assign it the value "${animalName}".`,
        _QUESTION_DATA: { scope: "block scope", keyword: ['const', 'let'], declaration: animal, value: animalName},
        _QUESTION_ANSWER_REGEX: ``,
        _QUESTION_ANSWER: (userAnswer: string, answer: string) => {
            const regex =  new RegExp(answer);
            const result = userAnswer.match(regex);
            if(result) {
                return true
            } else {
                return false
            }
        },
        _QUESTION_RESULT: {
            0: {
                all:false
            },
            1 : {
                resultConst: `const ${animal} = ${animalName}`,
                completed: false,
                optional: true
            },
            2 : {
                resultLet: `let ${animal} = ${animalFullName}`,
                completed: false,
                optional: true
            },
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {
            1: "Declare and assign all possible variable types."
        },
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'scope',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

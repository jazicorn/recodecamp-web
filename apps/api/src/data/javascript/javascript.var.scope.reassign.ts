import { Q_Type } from  '../../types/types.question';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const objBlockScopeReassign = (): Q_Type => {
    const animal = faker.animal.type();
    const animalName = faker.person.firstName();
    const animalFullName = faker.person.fullName({ firstName: animalName });
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-PQDB2T-NKYtM`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 2,
        _QUESTION_TASK: `Assuming \"block scope\", write a variable named \"${animal}\", assign it the value \"${animalName}\", then reassign the variable the value \"${animalFullName}\"`,
        _QUESTION_DATA: {
            scope: "block scope",
            keyword: 'let',
            variable: animal,
            declaration: animalName,
            reassign: animalFullName
        },
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
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Variable',
        _QUESTION_CATEGORY_SUB: 'scope',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

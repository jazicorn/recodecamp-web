import { Q_Type } from  '../../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../../utils/index';
import { nanoid } from 'nanoid';

export const objSingle = (): Q_Type => {
    const personName = faker.person.firstName();
    const keyword = "SingleLine";
    const data = {
        _QUESTION_LANGUAGE: "Python",
        _QUESTION_ID: `py-5DQ00B9N6qWv`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using ${keyword} comments, comment the statement: Greeting User abouve the console.log('Hello ${personName}') method `,
        _QUESTION_DATA: { keyword: keyword, value: personName, returnValue: `console.log('Hello ${personName})` },
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
                answer: `function greetingUser() {// ⬇️ Only change code bellow this line // Greeting User console.log(\'Hello ${personName}\');// ⬆️ Only change code abouve this line}greetingUser()`,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: `function greetingUser() {\n// ⬇️ Only change code bellow this line \n\n Greeting User\nconsole.log(\'Hello ${personName}\');\n\n// ⬆️ Only change code abouve this line\n}\n\ngreetingUser()\n`,
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Comments',
        _QUESTION_CATEGORY_SUB: '',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {
            "javascript.info/comments": "https://javascript.info/comments",
            "javascript.info/structure": "https://javascript.info/structure"
        }
    }
    return data;
};

export const objMulti = (): Q_Type => {
    const personName = faker.person.firstName();
    const keyword = "MultiLine";
    const data = {
        _QUESTION_LANGUAGE: "Python",
        _QUESTION_ID: `py-eOwVGzeqEYaR`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using ${keyword} comments, comment the statement: "Hello ${personName}"`,
        _QUESTION_DATA: { keyword: keyword, value: personName},
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
                answer: `/** Hello ${personName} */`,
                completed: false,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: '',
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Comments',
        _QUESTION_CATEGORY_SUB: '',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {}
    }
    return data;
};

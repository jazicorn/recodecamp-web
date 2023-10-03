import { Q_Type } from  '../../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../../utils/index';
import { nanoid } from 'nanoid';

//const result = answer.match(regex);

export const objSingle = (): Q_Type => {
    const personName = faker.person.firstName();
    const keyword = "SingleLine";
    const data = {
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-fOQ1hNwIcCnU`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using \"${keyword}\" comments, comment the statement: \'Greeting User\'.`,
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
        _QUESTION_COMPILED: false,
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                answer:
                `function greetingUser() {
                    // ⬇️ Only change code bellow this line
                    // Greeting User
                    console.log(\'Hello ${personName}\');
                    // ⬆️ Only change code abouve this line
                }
                greetingUser()`,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE: `function greetingUser() {\n\t// ⬇️ Only change code bellow this line \n\n\tGreeting User\n\tconsole.log(\'Hello ${personName}\');\n\n\t\/\/ ⬆️ Only change code abouve this line\n}\n\ngreetingUser()\n`,
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
        _QUESTION_LANGUAGE: "Javascript",
        _QUESTION_ID: `js-9pxl_LJlAzFy`,
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using \"${keyword}\" comments, comment the statement: \'Program Purpose | function that prints statement to commandline\' .`,
        _QUESTION_DATA: { keyword: keyword, value: personName},
        _QUESTION_ANSWER_REGEX: `/^\/\/Only\schange\scode\sbellow\sthis\sline\s*\/\*\**Purpose\s*:\s*function\s*that\s*prints\s*statement\s*to\s*commandline\s*\s*\*\s*function\sgreetingUser\(\)\s\{\n\tconsole\.log\(\'Hello\s\$\{personName\}\'\)\;\n\}\;\n\ngreetingUser\(\)\;/;`,
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
                answer:
                `
                // ⬇️ Only change code bellow this line
                /*
                    Program Purpose | function that prints statement to commandline
                */
                // ⬆️ Only change code abouve this line
                function greetingUser() {
                    console.log(\'Hello ${personName}\');
                };
                greetingUser();
                `,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE:
        `\/\/ ⬇️ Only change code bellow this line\n\nProgram Purpose | function that prints statement to commandline\n\n\/\/ ⬆️ Only change code abouve this line\n\nfunction greetingUser() {\n\tconsole.log(\'Hello ${personName}\');\n};\n\ngreetingUser();\n`,
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

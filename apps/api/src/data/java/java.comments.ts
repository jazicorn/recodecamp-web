import { Q_Type } from  '../../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../../utils/index';

export const objSingle = (): Q_Type => {
    const personName = faker.person.firstName();
    const keyword = "SingleLine";
    const data = {
        _QUESTION_LANGUAGE: "Java",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK:
        `Using ${keyword} comments, comment the statement: 'Greeting User' abouve the 'System.out.println('Hello ' + user) method'.`,
        _QUESTION_DATA: { keyword: keyword, value: personName,
            returnValue: `System.out.println("Hello " + ${personName})` },
        _QUESTION_RESULT: {
            0: {
                all:true
            },
            1 : {
                answer: `class Main {
                    public static void main(String[] args) {
                        String user = "${personName}";
                        // Only change code bellow this line
                        // Greeting User
                        System.out.println("Hello " + user);
                        // Only change code abouve this line
                    }
                }`,
                optional: false
            }
        },
        _QUESTION_HINTS: {},
        _QUESTION_BOILERPLATE:
        `class Main {\n\tpublic static void main(String[] args) {\n\t\t// Only change code bellow this line\n\t\tString user = "${personName}";\n\n\t\tGreeting User\n\t\tSystem.out.println("Hello " + user);\n\t\t\n\t\t// Only change code abouve this line\n\t}\n}`,
        _QUESTION_CONDITIONS: {},
        _QUESTION_CONSTRAINTS: {},
        _QUESTION_CATEGORY: 'Comments',
        _QUESTION_CATEGORY_SUB: '',
        _QUESTION_TAGS: [],
        _QUESTION_REFS: {
            "java comments": "https://www.w3schools.com/java/java_comments.asp",
            "java syntax": "https://www.w3schools.com/java/java_syntax.asp"
        }
    }
    return data;
};

export const objMulti = (): Q_Type => {
    const personName = faker.person.firstName();
    const keyword = "MultiLine";
    const data = {
        _QUESTION_LANGUAGE: "Java",
        _QUESTION_ID: '',
        _QUESTION_LEVEL: 1,
        _QUESTION_POINTS: 1,
        _QUESTION_TASK: `Using ${keyword} comments, comment the statement: "Hello ${personName}"`,
        _QUESTION_DATA: { keyword: keyword, value: personName},
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

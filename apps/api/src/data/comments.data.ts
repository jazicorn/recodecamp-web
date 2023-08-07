import { JS_Type } from  '../types/types.question';
import { faker } from '@faker-js/faker';
import { getRandomInt } from '../utils/index';

// export const objRandom = (): JS_Type => {
//     const personName = faker.person.firstName();
//     const random = getRandomInt(3);
//     const keyword = [{method:"SingleLine", value: "//", value2: ""}, {method:"MultiLine", value: "/**", value2: "*/"}][random];
//     const data = {
//         level: 1,
//         points: 1,
//         task: `Using ${keyword.method} comments, comment the statement: "Hello ${personName}"`,
//         data: keyword,
//         result: {
//             1: {
//                 answer: `${keyword.value} Hello ${personName} ${keyword.value2}`,
//                 completed: false
//             },
//         },
//         hints: null,
//         conditions: null,
//         constraints: null,
//         category: 'Comments',
//         category_sub: null,
//         tags: null,
//         refs: null
//     }
//     return data;
// };

export const objSingle = (): JS_Type => {
    const personName = faker.person.firstName();
    const keyword = "SingleLine";
    const data = {
        level: 1,
        points: 1,
        task: `Using ${keyword} comments, comment the statement: "Hello ${personName}"`,
        data: { keyword: keyword, value: personName },
        result: {
            1 : {
                answer: `// Hello ${personName}`,
                completed: false
            }
        },
        hints: null,
        conditions: null,
        constraints: null,
        category: 'Comments',
        category_sub: null,
        tags: null,
        refs: null
    }
    return data;
};

export const objMulti = (): JS_Type => {
    const personName = faker.person.firstName();
    const keyword = "MultiLine";
    const data = {
        level: 1,
        points: 1,
        task: `Using ${keyword} comments, comment the statement: "Hello ${personName}"`,
        data: { keyword: keyword, value: personName},
        result: {
            1 : {
                answer: `/** Hello ${personName} */`,
                completed: false
            }
        },
        hints: null,
        conditions: null,
        constraints: null,
        category: 'Comments',
        category_sub: null,
        tags: null,
        refs: null
    }
    return data;
};

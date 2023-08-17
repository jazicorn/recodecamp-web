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
//             0: {
//                  all:false
//             },
//             1: {
//                 answer: `${keyword.value} Hello ${personName} ${keyword.value2}`,
//                 completed: false,
//                 optional: false
//             },
//         },
//         hints: {},
//         boilerplate: '',
//         conditions: {},
//         constraints: {},
//         category: 'Comments',
//         category_sub: '',
//         tags: [],
//         refs: {}
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
            0: {
                all:true
            },
            1 : {
                answer: `// Hello ${personName}`,
                completed: false,
                optional: false
            }
        },
        hints: {},
        boilerplate: '',
        conditions: {},
        constraints: {},
        category: 'Comments',
        category_sub: '',
        tags: [],
        refs: {}
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
            0: {
                all:true
            },
            1 : {
                answer: `/** Hello ${personName} */`,
                completed: false,
                optional: false
            }
        },
        hints: {},
        boilerplate: '',
        conditions: {},
        constraints: {},
        category: 'Comments',
        category_sub: '',
        tags: [],
        refs: {}
    }
    return data;
};

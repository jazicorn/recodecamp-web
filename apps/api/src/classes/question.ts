'use strict';
import { Q, Answer } from '../types/types.question';
import { nanoid } from 'nanoid';

export class Question implements Q {
    _QUESTION_CREATED_AT!: Date;
    _QUESTION_UPDATED_AT!: Date;
    _QUESTION_ID!: string;
    _QUESTION_LANGUAGE!: string;
    _QUESTION_LEVEL!: number;
    _QUESTION_POINTS!: number;
    _QUESTION_TASK !: string;
    _QUESTION_DATA!: object;
    _QUESTION_ANSWER_REGEX!: string;
    _QUESTION_ANSWER!: Answer | Answer[] | string | string[];
    _QUESTION_RESULT!: object;
    _QUESTION_HINTS!: object;
    _QUESTION_BOILERPLATE!: string;
    _QUESTION_CONDITIONS!: object;
    _QUESTION_CONSTRAINTS!: object;
    _QUESTION_CATEGORY!: string;
    _QUESTION_CATEGORY_SUB!: string;
    _QUESTION_TAGS!: string[];
    _QUESTION_REFS!: object;

    constructor(data) {
        const defaults = {
            _QUESTION_CREATED_AT: new Date(),
            _QUESTION_UPDATED_AT: new Date(),
            _QUESTION_ID: `js-${nanoid(12)}`,
            _QUESTION_LANGUAGE: "Javascript",
            _QUESTION_LEVEL: 1,
            _QUESTION_POINTS: 1,
            _QUESTION_TASK: "",
            _QUESTION_DATA: {},
            _QUESTION_ANSWER_REGEX: "",
            _QUESTION_ANSWER: (userAnswer: string, answer: string) => {
                const regex =  new RegExp(answer);
                const result = userAnswer.match(regex);
                if(result) {
                    return true
                } else {
                    return false
                }
            },
            _QUESTION_RESULT: {},
            _QUESTION_HINTS: {},
            _QUESTION_BOILERPLATE: "",
            _QUESTION_CONDITIONS: {},
            _QUESTION_CONSTRAINTS: {},
            _QUESTION_CATEGORY: "",
            _QUESTION_CATEGORY_SUB: "",
            _QUESTION_TAGS: [],
            _QUESTION_REFS: {},
        }
        let opts = Object.assign({}, defaults, data);
        // assign options to instance data (using only property names contained
        // in defaults object to avoid copying properties we don't want)
        // Object.keys(defaults).forEach(prop => {
        //     this[prop] = opts[prop];
        // });
        this._QUESTION_CREATED_AT = opts._QUESTION_CREATED_AT;
        this._QUESTION_UPDATED_AT = opts._QUESTION_UPDATED_AT;
        this._QUESTION_ID = opts._QUESTION_ID;
        this._QUESTION_LANGUAGE = opts._QUESTION_LANGUAGE;
        this._QUESTION_LEVEL = opts._QUESTION_LEVEL;
        this._QUESTION_POINTS = opts._QUESTION_POINTS;
        this._QUESTION_TASK  = opts._QUESTION_TASK;
        this._QUESTION_DATA = opts._QUESTION_DATA;
        this._QUESTION_ANSWER_REGEX = opts._QUESTION_ANSWER_REGEX;
        this._QUESTION_ANSWER = opts._QUESTION_ANSWER;
        this._QUESTION_RESULT = opts._QUESTION_RESULT;
        this._QUESTION_HINTS = opts._QUESTION_HINTS;
        this._QUESTION_BOILERPLATE = opts._QUESTION_BOILERPLATE;
        this._QUESTION_CONDITIONS = opts._QUESTION_CONDITIONS;
        this._QUESTION_CONSTRAINTS = opts._QUESTION_CONSTRAINTS;
        this._QUESTION_CATEGORY = opts._QUESTION_CATEGORY;
        this._QUESTION_CATEGORY_SUB = opts._QUESTION_CATEGORY_SUB;
        this._QUESTION_TAGS = opts._QUESTION_TAGS;
        this._QUESTION_REFS = opts._QUESTION_REFS;
    }

    public set_QUESTION_ID(_QUESTION_LANGUAGE) {
        switch(_QUESTION_LANGUAGE.toLowerCase()) {
            case('javascript'):
                this._QUESTION_ID = `js-${nanoid(12)}`;
                break
            case('java'):
                this._QUESTION_ID = `java-${nanoid(12)}`;
                break
            case('python'):
                this._QUESTION_ID = `py-${nanoid(12)}`;
                break
            default:
                return
                console.log(`Category ${_QUESTION_LANGUAGE} not listed.`);
        }
    };

    public set set_QUESTION_UPDATED_AT(_QUESTION_UPDATED_AT) {
        this._QUESTION_UPDATED_AT = _QUESTION_UPDATED_AT;
    }
}

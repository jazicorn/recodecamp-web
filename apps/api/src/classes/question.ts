'use strict';
import { Q } from '../types/types.question';
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
        this._QUESTION_CREATED_AT = new Date();
        this._QUESTION_UPDATED_AT = new Date();
        this._QUESTION_ID = data._QUESTION_ID || '';
        this._QUESTION_LANGUAGE = data._QUESTION_LANGUAGE;
        this._QUESTION_LEVEL = data._QUESTION_LEVEL || 1;
        this._QUESTION_POINTS = data._QUESTION_POINTS || 1;
        this._QUESTION_TASK  = data._QUESTION_TASK || '';
        this._QUESTION_DATA = data._QUESTION_DATA || {};
        this._QUESTION_RESULT = data._QUESTION_RESULT || {};
        this._QUESTION_HINTS = data._QUESTION_HINTS || {};
        this._QUESTION_BOILERPLATE = data._QUESTION_BOILERPLATE || '';
        this._QUESTION_CONDITIONS = data._QUESTION_CONDITIONS || {};
        this._QUESTION_CONSTRAINTS = data._QUESTION_CONSTRAINTS || {};
        this._QUESTION_CATEGORY = data._QUESTION_CATEGORY || '';
        this._QUESTION_CATEGORY_SUB = data._QUESTION_CATEGORY_SUB || '';
        this._QUESTION_TAGS = data._QUESTION_TAGS || [];
        this._QUESTION_REFS = data._QUESTION_REFS || {};
        this.set_QUESTION_ID(data._QUESTION_LANGUAGE);
    }

    public set_QUESTION_ID(_QUESTION_LANGUAGE) {
        switch(_QUESTION_LANGUAGE.toLowerCase()) {
            case('javascript'):
                this._QUESTION_ID = `js-${nanoid(10)}`;
                break
            case('java'):
                this._QUESTION_ID = `java-${nanoid(10)}`;
                break
            case('python'):
                this._QUESTION_ID = `py-${nanoid(10)}`;
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

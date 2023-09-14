import { Question } from './types.question'

export interface _Guest {
    _ID: string;
    _CREATED_AT: Date;
    _UPDATED_AT: Date;
    _ACCESS_TOKEN: string;
    _FIRST_LOGIN: boolean
    _ADMIN: boolean;
    _SUBSCRIPTION: Array<string | number> | string;
    _IP_ADDRESS: string;
    _PASSCODE: string;
    _PASSCODE_CONFIRMED: boolean;
    _EMAIL: string;
    _EMAIL_CONFIRMED: boolean;
    _EMAIL_PASSCODE: string;
    _PASSWORD: string;
    _DEFAULT_LANGUAGE: string;
    _DEFAULT_ROUTE: string;
    _POINTS_TOTAL: number;
    _POINTS_JAVASCRIPT: number;
    _POINTS_JAVA: number;
    _POINTS_PYTHON: number;
    _COURSES:  number[] | string[] | string;
}

export type Course = {
    _COURSE_ID: string;
    _COURSE_CREATED_AT: Date;
    _COURSE_UPDATED_AT: Date;
    _COURSE_COMPLETED_AT: Date | null;
    _COURSE_SUBJECT: string;
    _COURSE_ITEMS: Question[] | null;
    _COURSE_COMPLETE: boolean;
    _COURSE_POINTS: number;
};

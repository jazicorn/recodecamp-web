import { Question } from './types.question'

export interface Student extends User {
    _STUDENT_ID: string,
    _STUDENT_CREATED_AT: Date,
    _STUDENT_UPDATED_AT: Date,
    _STUDENT_PASSCODE: string,
    _STUDENT_PASSCODE_CONFIRMED: boolean,
    _STUDENT_ADMIN_STATUS: boolean,
    _STUDENT_POINTS: number | null,
    _STUDENT_COURSES: Course[] | null,
}

export interface Admin extends User {
    _ADMIN_ID: string,
    _ADMIN_CREATED_AT: Date,
    _ADMIN_UPDATED_AT: Date,
    _ADMIN_PASSCODE: string,
    _ADMIN_PASSCODE_CONFIRMED: boolean,
    _ADMIN_STATUS: boolean,
    _ADMIN_POINTS: number | null,
    _ADMIN_COURSES: Course[] | null,
}

export interface User {
    _USER_ID: string;
    _USER_CREATED_AT: Date;
    _USER_UPDATED_AT: Date;
    _USER_PASSCODE: string;
    _USER_PASSCODE_CONFIRMED: boolean
    _USER_EMAIL: string;
    _USER_EMAIL_CONFIRMED: boolean;
    _USER_PASSWORD: string;
    _USER_FIRST_NAME: string | null;
    _USER_LAST_NAME: string | null;
    _USER_DEFAULT_LANGUAGE: string | null;
    _USER_DEFAULT_ROUTE: string | null;
    _USER_POINTS: number | null;
    _USER_COURSES: Course[] | null;
}

export type Course = {
    id: string;
    created_at: Date;
    updated_at: Date;
    completed_at: Date | null;
    subject: string;
    items: Question[] | null;
    complete: boolean;
    points: number;
};

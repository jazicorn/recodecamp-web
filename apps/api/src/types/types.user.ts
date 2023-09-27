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
    _ID: string;
    _CREATED_AT: Date;
    _UPDATED_AT: Date;
    _GUEST: boolean;
    _ADMIN: boolean;
    _ACCESS_TOKEN: boolean;
    _SUBSCRIPTION: number;
    _IP_ADDRESS: string;
    _PASSCODE: string;
    _PASSCODE_CONFIRMED: boolean
    _EMAIL: string;
    _EMAIL_PASSCODE: string;
    _EMAIL_CONFIRMED: boolean;
    _PASSWORD: string;
    _USERNAME: string;
    _FIRST_NAME: string;
    _LAST_NAME: string;
    _SOCIAL_HANDLE_GITHUB: string;
    _SOCIAL_HANDLE_GOOGLE: string;
    _SOCIAL_HANDLE_APPLE: string;
    _SOCIAL_HANDLE_FACEBOOK: string;
    _SOCIAL_HANDLE_TWITTER: string;
    _SOCIAL_HANDLE_LINKEDIN: string;
    _DEFAULT_LANGUAGE: string;
    _DEFAULT_ROUTE: string;
    _POINTS_TOTAL: number;
    _COURSES: Course[] | string[] | string;

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

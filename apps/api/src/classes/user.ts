'use strict';
import { User } from '../types/types.user';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export class User implements User {
    _USER_ID!: string;
    _USER_CREATED_AT!: Date;
    _USER_UPDATED_AT!: Date;
    _USER_PASSCODE!: string;
    _USER_PASSCODE_CONFIRMED!: boolean
    _USER_EMAIL!: string;
    _USER_EMAIL_CONFIRMED!: boolean;
    _USER_PASSWORD!: string;
    _USER_FIRST_NAME!: string | null;
    _USER_LAST_NAME!: string | null;
    _USER_DEFAULT_LANGUAGE!: string | null;
    _USER_DEFAULT_ROUTE!: string | null;
    _USER_POINTS!: number | null;
    _USER_COURSES!: Course[] | null;

    constructor(data) {
        this._USER_ID = uuidv4();
        this._USER_CREATED_AT = new Date();
        this._USER_UPDATED_AT = new Date();
        this._USER_PASSCODE = uuidv4();
        this._USER_PASSCODE_CONFIRMED = false;
        this._USER_EMAIL = data.email.toLowerCase();
        this._USER_EMAIL_CONFIRMED = false;
        this._USER_PASSWORD = nanoid(10);
        this._USER_FIRST_NAME = data.firstName.toLowerCase() || '';
        this._USER_LAST_NAME = data.lastName.toLowerCase() || '';
        this._USER_DEFAULT_LANGUAGE = data.language || 'Javascript';
        this._USER_DEFAULT_ROUTE = data.route || '';
        this._USER_POINTS = data.points || 0;
        this._USER_COURSES = data.courses || [];
    };

    /** _USER_ID */
    public get get_USER_ID(): string {
        return this._USER_ID
    };

    public set set_USER_ID(_USER_ID: string) {
        this._USER_ID = _USER_ID
    };

    /** _USER_CREATED_AT */
    public get get_USER_CREATED_AT(): Date {
        return this._USER_CREATED_AT
    };

    /** _USER_UPDATED_AT */
    public get get_USER_UPDATED_AT(): Date {
        return this._USER_UPDATED_AT
    };

    public set set_USER_UPDATED_AT(_USER_UPDATED_AT: string) {
        this._USER_UPDATED_AT = _USER_UPDATED_AT
    };

    /** _USER_PASSCODE */
    public get get_USER_PASSCODE(): string {
        return this._USER_PASSCODE
    };

    public set set_USER_PASSCODE(_USER_PASSCODE: string) {
        this._USER_PASSCODE = _USER_PASSCODE
    };

    /** _USER_PASSCODE_CONFIRMED */
    public get get_USER_PASSCODE_CONFIRMED(): boolean {
        return this._USER_PASSCODE_CONFIRMED
    };

    public set set_USER_PASSCODE_CONFIRMED(_USER_PASSCODE_CONFIRMED: boolean) {
        this._USER_PASSCODE_CONFIRMED = _USER_PASSCODE_CONFIRMED
    };

    /** _USER_EMAIL */
    public get get_USER_EMAIL(): string {
        return this._USER_EMAIL
    };

    public set set_USER_EMAIL(_USER_EMAIL: string) {
        this._USER_EMAIL = _USER_EMAIL
    };

    /** _USER_EMAIL_CONFIRMED */
    public get get_USER_EMAIL_CONFIRMED(): boolean {
        return this._USER_EMAIL_CONFIRMED
    };

    public set set_USER_EMAIL_CONFIRMED(_USER_EMAIL_CONFIRMED: boolean) {
        this._USER_EMAIL_CONFIRMED = _USER_EMAIL_CONFIRMED
    };

    /** _USER_PASSWORD */
    public get get_USER_PASSWORD(): string {
        return this._USER_PASSWORD
    };

    public set set_USER_PASSCODE(_USER_PASSWORD: string) {
        this._USER_PASSWORD = _USER_PASSWORD
    };

    /** _USER_FIRST_NAME */
    public get get_USER_FIRST_NAME(): string {
        return this._USER_FIRST_NAME
    };

    public set set_USER_FIRST_NAME(_USER_FIRST_NAME: string) {
        this._USER_FIRST_NAME = _USER_FIRST_NAME
    };

    /** _USER_LAST_NAME */
    public get get_USER_LAST_NAME(): string {
        return this._USER_LAST_NAME
    };

    public set set_USER_LAST_NAME(_USER_LAST_NAME: string) {
        this._USER_LAST_NAME = _USER_LAST_NAME
    };

    /** _USER_DEFAULT_LANGUAGE */
    public get get_USER_DEFAULT_LANGUAGE(): string {
        return this._USER_DEFAULT_LANGUAGE
    };

    public set set_USER_DEFAULT_LANGUAGE(_USER_DEFAULT_LANGUAGE: string) {
        this._USER_DEFAULT_LANGUAGE = _USER_DEFAULT_LANGUAGE
    };

    /** _USER_DEFAULT_ROUTE */
    public get get_USER_DEFAULT_ROUTE(): string {
        return this._USER_DEFAULT_ROUTE
    };

    public set set_USER_DEFAULT_LANGUAGE(_USER_DEFAULT_ROUTE: string) {
        this._USER_DEFAULT_ROUTE = _USER_DEFAULT_ROUTE
    };

    /** _USER_POINTS */
    public get _USER_POINTS(): number {
        return this._USER_POINTS
    };

    public set set_USER_POINTS(_USER_POINTS: number) {
        this._USER_POINTS = _USER_POINTS
    };

    /** _USER_COURSES */
    public get _USER_COURSES() {
        return this._USER_COURSES
    };

    public set set_USER_COURSES(_USER_COURSES) {
        this._USER_COURSES = _USER_COURSES
    };
}

'use strict';
import { _Guest } from '../types/types.guest';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

/**
 * Note (Databases):
 * Convert array values to string before attempting to save to db
 */

export class Guest implements _Guest {
    _ID!: string;
    _CREATED_AT!: Date;
    _UPDATED_AT!: Date;
    _ACCESS_TOKEN!: string;
    _FIRST_LOGIN!: boolean;
    _ADMIN!: boolean;
    _SUBSCRIPTION!: Array<string | number> | string;
    _IP_ADDRESS!: string;
    _PASSCODE!: string;
    _PASSCODE_CONFIRMED!: boolean;
    _EMAIL!: string;
    _EMAIL_CONFIRMED!: boolean;
    _EMAIL_PASSCODE!: string;
    _PASSWORD!: string;
    _DEFAULT_LANGUAGE!: string;
    _DEFAULT_ROUTE!: string;
    _POINTS_TOTAL!: number;
    _POINTS_JAVASCRIPT!: number;
    _POINTS_JAVA!: number ;
    _POINTS_PYTHON!: number ;
    _COURSES!: number[] | string[] | string;

    constructor(data) {
        const defaults = {
            _ID: uuidv4(),
            _CREATED_AT: new Date(),
            _UPDATED_AT: new Date(),
            _ACCESS_TOKEN: 'Empty',
            _FIRST_LOGIN: false,
            _ADMIN: false,
            /** 1234 === Subscription(Guest Account)*/
            _SUBSCRIPTION: [1234, 'guest'],
            _IP_ADDRESS: 'Empty',
            _PASSCODE: uuidv4(),
            _PASSCODE_CONFIRMED: false,
            _EMAIL: 'john@doe.com',
            _EMAIL_CONFIRMED: false,
            _EMAIL_PASSCODE: uuidv4(),
            _PASSWORD: '',
            _DEFAULT_LANGUAGE: 'javascript',
            _DEFAULT_ROUTE: 'var/declare/var',
            _POINTS_TOTAL: 0,
            _POINTS_JAVASCRIPT: 0,
            _POINTS_JAVA: 0,
            _POINTS_PYTHON: 0,
            _COURSES: ['Empty'],
        };
        let opts = Object.assign({}, defaults, data);
        // assign options to instance data (using only property names contained
        // in defaults object to avoid copying properties we don't want)
        // Object.keys(defaults).forEach(prop => {
        //     this[prop] = opts[prop];
        // });
        this._ID = opts._ID ;
        this._CREATED_AT = opts._CREATED_AT;
        this._UPDATED_AT = opts._UPDATED_AT;
        this._ACCESS_TOKEN = opts._ACCESS_TOKEN;
        this._FIRST_LOGIN = opts._FIRST_LOGIN ;
        this._ADMIN = opts._ADMIN;
        /** 1234 === Subscription(Guest Account)*/
        this._SUBSCRIPTION = opts._SUBSCRIPTION,
        this._IP_ADDRESS = opts._IP_ADDRESS.trim();
        this._PASSCODE = opts._PASSCODE;
        this._PASSCODE_CONFIRMED = opts._PASSCODE_CONFIRMED;
        this._EMAIL = opts._EMAIL.toLowerCase().trim();
        this._EMAIL_CONFIRMED = opts._EMAIL_CONFIRMED;
        this._EMAIL_PASSCODE = opts._EMAIL_PASSCODE;
        this._PASSWORD = opts._PASSWORD.trim();
        this._DEFAULT_LANGUAGE = opts._DEFAULT_LANGUAGE.trim();
        this._DEFAULT_ROUTE = opts._DEFAULT_ROUTE.trim();
        this._POINTS_TOTAL = opts._POINTS_TOTAL;
        this._POINTS_JAVASCRIPT = opts._POINTS_JAVASCRIPT;
        this._POINTS_JAVA = opts._POINTS_JAVA;
        this._POINTS_PYTHON = opts._POINTS_PYTHON ;
        this._COURSES = opts._COURSES;
    };

    /** _ID */
    public get get_ID(): string {
        return this._ID
    };

    public set set_ID(_ID: string) {
        this._ID = _ID
    };

    /** _CREATED_AT */
    public get get_CREATED_AT(): Date {
        return this._CREATED_AT
    };

    /** _UPDATED_AT */
    public get get_UPDATED_AT(): Date {
        return this._UPDATED_AT
    };

    public set set_UPDATED_AT(_UPDATED_AT: Date) {
        this._UPDATED_AT = _UPDATED_AT
    };

    /** _ACCESS_TOKEN */
    public get get_ACCESS_TOKEN(): string {
        return this._ACCESS_TOKEN
    };

    public set set_ACCESS_TOKEN(_ACCESS_TOKEN: string) {
        this._ACCESS_TOKEN = _ACCESS_TOKEN
    };

    /** _FIRST_LOGIN */
    public get get_FIRST_LOGIN(): boolean {
        return this._FIRST_LOGIN
    };

    private set set_FIRST_LOGIN(_FIRST_LOGIN: boolean) {
        this._FIRST_LOGIN = _FIRST_LOGIN
    };

    /** _ADMIN */
    public get get_ADMIN(): boolean {
        return this._ADMIN
    };

    private set set_ADMIN(_ADMIN: boolean) {
        this._ADMIN = _ADMIN
    };

    /** _SUBSCRIPTION */
    public get get_SUBSCRIPTION(): Array<string | number> | string  {
        return this._SUBSCRIPTION
    };

    public set set_SUBSCRIPTION(_SUBSCRIPTION: Array<string | number> | string) {
        this._SUBSCRIPTION = _SUBSCRIPTION
    };

    /** _IP_ADDRESS */
    public get get_IP_ADDRESS(): string {
        return this._IP_ADDRESS
    };

    public set set_IP_ADDRESS(_IP_ADDRESS: string) {
        this._IP_ADDRESS = _IP_ADDRESS
    };

    /** _PASSCODE */
    public get get_PASSCODE(): string {
        return this._PASSCODE
    };

    public set set_PASSCODE(_PASSCODE: string) {
        this._PASSCODE = _PASSCODE
    };

    /** _PASSCODE_CONFIRMED */
    public get get_PASSCODE_CONFIRMED(): boolean {
        return this._PASSCODE_CONFIRMED
    };

    public set set_PASSCODE_CONFIRMED(_PASSCODE_CONFIRMED: boolean) {
        this._PASSCODE_CONFIRMED = _PASSCODE_CONFIRMED
    };

    /** _EMAIL */
    public get get_EMAIL(): string {
        return this._EMAIL
    };

    public set set_EMAIL(_EMAIL: string) {
        this._EMAIL = _EMAIL.toLowerCase().trim();
    };

    /** _EMAIL_CONFIRMED */
    public get get_EMAIL_CONFIRMED(): boolean {
        return this._EMAIL_CONFIRMED
    };

    public set set_EMAIL_CONFIRMED(_EMAIL_CONFIRMED: boolean) {
        this._EMAIL_CONFIRMED = _EMAIL_CONFIRMED
    };

    /** _EMAIL_PASSCODE */
    public get get_EMAIL_PASSCODE(): string {
        return this._EMAIL_PASSCODE
    };

    public set set_EMAIL_PASSCODE(_EMAIL_PASSCODE: string) {
        this._EMAIL_PASSCODE = _EMAIL_PASSCODE
    };

    /** _PASSWORD */
    public get get_PASSWORD(): string {
        return this._PASSWORD
    };

    public set set_PASSWORD(_PASSWORD: string) {
        this._PASSWORD = _PASSWORD.trim();
    };

    /** _DEFAULT_LANGUAGE */
    public get get_DEFAULT_LANGUAGE(): string {
        return this._DEFAULT_LANGUAGE
    };

    public set set_DEFAULT_LANGUAGE(_DEFAULT_LANGUAGE: string) {
        this._DEFAULT_LANGUAGE = _DEFAULT_LANGUAGE
    };

    /** _DEFAULT_ROUTE */
    public get get_DEFAULT_ROUTE(): string {
        return this._DEFAULT_ROUTE
    };

    public set set_DEFAULT_ROUTE(_DEFAULT_ROUTE: string) {
        this._DEFAULT_ROUTE = _DEFAULT_ROUTE
    };

    /** _POINTS_TOTAL */
    public get get_POINTS_TOTAL(): number {
        return this._POINTS_TOTAL
    };

    public set set_POINTS_TOTAL(_POINTS_TOTAL: number) {
        this._POINTS_TOTAL = _POINTS_TOTAL
    };

    /** _POINTS_JAVASCRIPT */
    public get get_POINTS_JAVASCRIPT(): number {
        return this._POINTS_JAVASCRIPT
    };

    public set set_POINTS_JAVASCRIPT(_POINTS_JAVASCRIPT: number) {
        this._POINTS_JAVASCRIPT = _POINTS_JAVASCRIPT
    };

    /** _POINTS_JAVA */
    public get get_POINTS_JAVA(): number {
        return this._POINTS_JAVA
    };

    public set set_POINTS_JAVA(_POINTS_JAVA: number) {
        this._POINTS_JAVA = _POINTS_JAVA
    };

    /** _POINTS_PYTHON */
    public get get_POINTS_PYTHON(): number {
        return this._POINTS_PYTHON
    };

    public set set_POINTS_PYTHON(_POINTS_PYTHON: number) {
        this._POINTS_PYTHON = _POINTS_PYTHON
    };

    /** _COURSES */
    public get get_COURSES():  number[] | string[] | string {
        return this._COURSES
    };

    public set set_COURSES(_COURSES:  number[] | string[] | string) {
        this._COURSES = _COURSES
    };
}

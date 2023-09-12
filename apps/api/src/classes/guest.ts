'use strict';
import { _Guest } from '../types/types.guest';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export class Guest implements _Guest {
    _GUEST_ID!: string;
    _GUEST_CREATED_AT!: Date;
    _GUEST_UPDATED_AT!: Date;
    _GUEST_ACCESS_TOKEN!: string;
    _GUEST_FIRST_LOGIN!: boolean;
    _GUEST_ADMIN!: boolean;
    _GUEST_SUBSCRIPTION!: number;
    _GUEST_IP_ADDRESS!: string;
    _GUEST_PASSCODE!: string;
    _GUEST_PASSCODE_CONFIRMED!: boolean;
    _GUEST_EMAIL!: string;
    _GUEST_EMAIL_CONFIRMED!: boolean;
    _GUEST_EMAIL_PASSCODE!: string;
    _GUEST_PASSWORD!: string;
    _GUEST_DEFAULT_LANGUAGE!: string;
    _GUEST_DEFAULT_ROUTE!: string;
    _GUEST_POINTS_TOTAL!: number;
    _GUEST_POINTS_JAVASCRIPT!: number;
    _GUEST_POINTS_JAVA!: number ;
    _GUEST_POINTS_PYTHON!: number ;
    _GUEST_COURSES!: string[] | string;

    constructor(data) {
        this._GUEST_ID = uuidv4() || data._GUEST_ID;
        this._GUEST_CREATED_AT = new Date() || data._GUEST_CREATED_AT;
        this._GUEST_UPDATED_AT = new Date() || data._GUEST_UPDATED_AT;
        this._GUEST_ACCESS_TOKEN = '' || data._GUEST_ACCESS_TOKEN.trim();
        this._GUEST_FIRST_LOGIN = false || data._GUEST_FIRST_LOGIN;
        this._GUEST_ADMIN = false || data._GUEST_ADMIN;
        /** 1234 === Subscription(Guest Account)*/
        this._GUEST_SUBSCRIPTION = 1234 || data._GUEST_SUBSCRIPTION,
        this._GUEST_IP_ADDRESS = 'Empty' || data._GUEST_IP_ADDRESS.trim();
        this._GUEST_PASSCODE = uuidv4() || data._GUEST_PASSCODE;
        this._GUEST_PASSCODE_CONFIRMED = false || data._GUEST_PASSCODE_CONFIRMED;
        this._GUEST_EMAIL = data._GUEST_EMAIL.toLowerCase().trim();
        this._GUEST_EMAIL_CONFIRMED = false || data._GUEST_EMAIL_CONFIRMED;
        this._GUEST_EMAIL_PASSCODE = uuidv4() || data._GUEST_EMAIL_PASSCODE;
        this._GUEST_PASSWORD = data._GUEST_PASSWORD.trim();
        this._GUEST_DEFAULT_LANGUAGE = 'javascript' || data._GUEST_DEFAULT_LANGUAGE.trim();
        this._GUEST_DEFAULT_ROUTE = 'var/declare/var' || data._GUEST_DEFAULT_ROUTE.trim();
        this._GUEST_POINTS_TOTAL = 0 || data._GUEST_POINTS_TOTAL;
        this._GUEST_POINTS_JAVASCRIPT = 0 || data._GUEST_POINTS_JAVASCRIPT;
        this._GUEST_POINTS_JAVA = 0 || data._GUEST_POINTS_JAVA;
        this._GUEST_POINTS_PYTHON = 0 || data._GUEST_POINTS_PYTHON;
        this._GUEST_COURSES = ['Empty'] || data._GUEST_COURSES;
    };

    /** Convert Declarations To Strings */
    public setDatabaseValues() {
        this._GUEST_COURSES = this._GUEST_COURSES.toString();
    }

    /** _GUEST_ID */
    public get get_GUEST_ID(): string {
        return this._GUEST_ID
    };

    public set set_GUEST_ID(_GUEST_ID: string) {
        this._GUEST_ID = _GUEST_ID
    };

    /** _GUEST_CREATED_AT */
    public get get_GUEST_CREATED_AT(): Date {
        return this._GUEST_CREATED_AT
    };

    /** _GUEST_UPDATED_AT */
    public get get_GUEST_UPDATED_AT(): Date {
        return this._GUEST_UPDATED_AT
    };

    public set set_GUEST_UPDATED_AT(_GUEST_UPDATED_AT: Date) {
        this._GUEST_UPDATED_AT = _GUEST_UPDATED_AT
    };

    /**_GUEST_ACCESS_TOKEN */
    public get get_GUEST_ACCESS_TOKEN(): string {
        return this._GUEST_ACCESS_TOKEN
    };

    public set set_GUEST_ACCESS_TOKEN(_GUEST_ACCESS_TOKEN: string) {
        this._GUEST_ACCESS_TOKEN = _GUEST_ACCESS_TOKEN
    };

    /** _GUEST_FIRST_LOGIN */
    public get get_GUEST_FIRST_LOGIN(): boolean {
        return this._GUEST_FIRST_LOGIN
    };

    private set set_GUEST_FIRST_LOGIN(_GUEST_FIRST_LOGIN: boolean) {
        this._GUEST_FIRST_LOGIN = _GUEST_FIRST_LOGIN
    };

    /** _GUEST_ADMIN */
    public get get_GUEST_ADMIN(): boolean {
        return this._GUEST_ADMIN
    };

    private set set_GUEST_ADMIN(_GUEST_ADMIN: boolean) {
        this._GUEST_ADMIN = _GUEST_ADMIN
    };

    /** _GUEST_SUBSCRIPTION */
    public get get_GUEST_SUBSCRIPTION(): number {
        return this._GUEST_SUBSCRIPTION
    };

    public set set_GUEST_SUBSCRIPTION(_GUEST_SUBSCRIPTION: number) {
        this._GUEST_SUBSCRIPTION = _GUEST_SUBSCRIPTION
    };

    /** _GUEST_IP_ADDRESS */
    public get get_GUEST_IP_ADDRESS(): string {
        return this._GUEST_IP_ADDRESS
    };

    public set set_GUEST_IP_ADDRESS(_GUEST_IP_ADDRESS) {
        this._GUEST_IP_ADDRESS = _GUEST_IP_ADDRESS
    };

    /** _GUEST_PASSCODE */
    public get get_GUEST_PASSCODE(): string {
        return this._GUEST_PASSCODE
    };

    public set set_GUEST_PASSCODE(_GUEST_PASSCODE: string) {
        this._GUEST_PASSCODE = _GUEST_PASSCODE
    };

    /** _GUEST_PASSCODE_CONFIRMED */
    public get get_GUEST_PASSCODE_CONFIRMED(): boolean {
        return this._GUEST_PASSCODE_CONFIRMED
    };

    public set set_GUEST_PASSCODE_CONFIRMED(_GUEST_PASSCODE_CONFIRMED: boolean) {
        this._GUEST_PASSCODE_CONFIRMED = _GUEST_PASSCODE_CONFIRMED
    };

    /** _GUEST_EMAIL */
    public get get_GUEST_EMAIL(): string {
        return this._GUEST_PASSCODE
    };

    public set set_GUEST_EMAIL(_GUEST_EMAIL: string) {
        this._GUEST_EMAIL = _GUEST_EMAIL.toLowerCase().trim();
    };

    /** _GUEST_EMAIL_CONFIRMED */
    public get get_GUEST_EMAIL_CONFIRMED(): boolean {
        return this._GUEST_EMAIL_CONFIRMED
    };

    public set set_GUEST_EMAIL_CONFIRMED(_GUEST_EMAIL_CONFIRMED: boolean) {
        this._GUEST_EMAIL_CONFIRMED = _GUEST_EMAIL_CONFIRMED
    };

    /** _GUEST_EMAIL_PASSCODE */
    public get get_GUEST_EMAIL_PASSCODE(): string {
        return this._GUEST_EMAIL_PASSCODE
    };

    public set set_GUEST_EMAIL_PASSCODE(_GUEST_EMAIL_PASSCODE: string) {
        this._GUEST_EMAIL_PASSCODE = _GUEST_EMAIL_PASSCODE
    };

    /** _GUEST_PASSWORD */
    public get get_GUEST_PASSWORD(): string {
        return this._GUEST_PASSWORD
    };

    public set set_GUEST_PASSWORD(_GUEST_PASSWORD: string) {
        this._GUEST_PASSWORD = _GUEST_PASSWORD.trim();
    };

    /** _GUEST_DEFAULT_LANGUAGE */
    public get get_GUEST_DEFAULT_LANGUAGE(): string {
        return this._GUEST_DEFAULT_LANGUAGE
    };

    public set set_GUEST_DEFAULT_LANGUAGE(_GUEST_DEFAULT_LANGUAGE: string) {
        this._GUEST_DEFAULT_LANGUAGE = _GUEST_DEFAULT_LANGUAGE
    };

    /** _GUEST_DEFAULT_ROUTE */
    public get get_GUEST_DEFAULT_ROUTE(): string {
        return this._GUEST_DEFAULT_ROUTE
    };

    public set set_GUEST_DEFAULT_ROUTE(_GUEST_DEFAULT_ROUTE: string) {
        this._GUEST_DEFAULT_ROUTE = _GUEST_DEFAULT_ROUTE
    };

    /** _GUEST_POINTS_TOTAL */
    public get get_GUEST_POINTS_TOTAL(): number {
        return this._GUEST_POINTS_TOTAL
    };

    public set set_GUEST_POINTS_TOTAL(_GUEST_POINTS_TOTAL: number) {
        this._GUEST_POINTS_TOTAL = _GUEST_POINTS_TOTAL
    };

    /** _GUEST_POINTS_JAVASCRIPT */
    public get get_GUEST_POINTS_JAVASCRIPT(): number {
        return this._GUEST_POINTS_JAVASCRIPT
    };

    public set set_GUEST_POINTS_JAVASCRIPT(_GUEST_POINTS_JAVASCRIPT: number) {
        this._GUEST_POINTS_JAVASCRIPT = _GUEST_POINTS_JAVASCRIPT
    };

    /** _GUEST_POINTS_JAVA */
    public get get_GUEST_POINTS_JAVA(): number {
        return this._GUEST_POINTS_JAVASCRIPT
    };

    public set set_GUEST_POINTS_JAVA(_GUEST_POINTS_JAVA: number) {
        this._GUEST_POINTS_JAVA = _GUEST_POINTS_JAVA
    };

    /** _GUEST_POINTS_PYTHON */
    public get get_GUEST_POINTS_PYTHON(): number {
        return this._GUEST_POINTS_PYTHON
    };

    public set set_GUEST_POINTS_PYTHON(_GUEST_POINTS_PYTHON: number) {
        this._GUEST_POINTS_PYTHON = _GUEST_POINTS_PYTHON
    };

    /** _GUEST_COURSES */
    public get get_GUEST_COURSES() {
        return this._GUEST_COURSES
    };

    public set set_GUEST_COURSES(_GUEST_COURSES) {
        this._GUEST_COURSES = _GUEST_COURSES
    };
}

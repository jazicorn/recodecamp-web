'use strict';
import { User } from '../types/types.user';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export class User implements User {
    _ID!: string;
    _CREATED_AT!: Date;
    _UPDATED_AT!: Date;
    _GUEST!: boolean;
    _ADMIN!: boolean;
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
    _USERNAME!: string;
    _FIRST_NAME!: string;
    _LAST_NAME!: string;
    _SOCIAL_HANDLE_GITHUB!: string;
    _SOCIAL_HANDLE_GOOGLE!: string;
    _SOCIAL_HANDLE_APPLE!: string;
    _SOCIAL_HANDLE_FACEBOOK!: string;
    _SOCIAL_HANDLE_TWITTER!: string;
    _SOCIAL_HANDLE_LINKEDIN!: string;
    _DEFAULT_LANGUAGE!: string;
    _DEFAULT_ROUTE!: string;
    _POINTS_TOTAL!: number;
    _COURSES!: Course[] | string[] | string;

    constructor(opts) {
        const default {
            _ID: uuidv4(),
            _CREATED_AT: new Date(),
            _UPDATED_AT: new Date(),
            _GUEST = false,
            _ADMIN = false,
            _FIRST_LOGIN = false,
            _ACCESS_TOKEN = '',
            /** 1000 === Subscription(Basic Account)*/
            _SUBSCRIPTION = [1000, user],
            _IP_ADDRESS = '',
            _PASSCODE = uuidv4(),
            _PASSCODE_CONFIRMED = false,
            _EMAIL = "",
            _EMAIL_PASSCODE = "",
            _EMAIL_CONFIRMED = false,
            _USERNAME = "",
            _PASSWORD = nanoid(10),
            _FIRST_NAME = '',
            _LAST_NAME = '',
            _SOCIAL_HANDLE_GITHUB = '',
            _SOCIAL_HANDLE_GOOGLE = '',
            _SOCIAL_HANDLE_APPLE = '',
            _SOCIAL_HANDLE_FACEBOOK = '',
            _SOCIAL_HANDLE_TWITTER = '',
            _SOCIAL_HANDLE_LINKEDIN = '',
            _DEFAULT_LANGUAGE = 'Javascript',
            _DEFAULT_ROUTE = '',
            _POINTS_TOTAL = 0,
            _COURSES = [],
        }
        let opts = Object.assign({}, defaults, opts);
        // assign options to instance opts (using only property names contained
        // in defaults object to avoid copying properties we don't want)
        // Object.keys(defaults).forEach(prop => {
        //     this[prop] = opts[prop];
        // });
        this._ID = opts._ID;
        this._CREATED_AT = opts._CREATED_AT;
        this._UPDATED_AT = opts._UPDATED_AT;
        this._GUEST = opts._USER_GUEST;
        this._ADMIN = opts._USER_ADMIN;
        this._ACCESS_TOKEN = opts._ACCESS_TOKEN;
        /** 1000 === Subscription(Basic Account)*/
        this._SUBSCRIPTION = opts._SUBSCRIPTION,
        this._IP_ADDRESS = opts._IP_ADDRESS,
        this._PASSCODE = opts.PASSCODE;
        this._PASSCODE_CONFIRMED = opts._PASSCODE_CONFIRMED;
        this._EMAIL = opts._EMAIL.toLowerCase().trim();
        this._EMAIL_PASSCODE = opts._EMAIL_PASSCODE,
        this._EMAIL_CONFIRMED = opts._EMAIL_CONFIRMED;
        this._PASSWORD = opts._PASSWORD;
        this._USERNAME = opts._USERNAME;
        this._FIRST_NAME = opts._FIRST_NAME.toLowerCase();
        this._LAST_NAME = opts._LAST_NAME.toLowerCase();
        this._SOCIAL_HANDLE_GITHUB = opts._SOCIAL_HANDLE_GITHUB;
        this._SOCIAL_HANDLE_GOOGLE = opts._SOCIAL_HANDLE_GOOGLE;
        this._SOCIAL_HANDLE_APPLE = opts._SOCIAL_HANDLE_APPLE;
        this._SOCIAL_HANDLE_FACEBOOK = opts._SOCIAL_HANDLE_FACEBOOK;
        this._SOCIAL_HANDLE_TWITTER = opts._SOCIAL_HANDLE_TWITTER;
        this._SOCIAL_HANDLE_LINKEDIN = opts._SOCIAL_HANDLE_LINKEDIN;
        this._DEFAULT_LANGUAGE = opts._DEFAULT_LANGUAGE;
        this._DEFAULT_ROUTE = opts._DEFAULT_ROUTE;
        this._POINTS_TOTAL = opts._POINTS_TOTAL;
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

    public set set_UPDATED_AT(_UPDATED_AT: string) {
        this._UPDATED_AT = _UPDATED_AT
    };

    /** _GUEST */
    public get get_GUEST(): boolean {
        return this._GUEST
    };

    private set set_GUEST(_GUEST: boolean) {
        this._GUEST = _GUEST
    };

    /** _ADMIN */
    public get get_ADMIN(): boolean {
        return this._ADMIN
    };

    private set set_ADMIN(_ADMIN: boolean) {
        this._ADMIN = _ADMIN
    };

    /** _SUBSCRIPTION */
    public get get_SUBSCRIPTION(): number {
        return this._SUBSCRIPTION
    };

    public set set_SUBSCRIPTION(_SUBSCRIPTION: number) {
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
        this._EMAIL = _EMAIL
    };

    /** _EMAIL_PASSCODE */
    public get get_EMAIL_PASSCODE(): string {
        return this._EMAIL_PASSCODE
    };

    public set set_EMAIL(_EMAIL_PASSCODE: string) {
        this._EMAIL_PASSCODE = _EMAIL_PASSCODE
    };

    /** _EMAIL_CONFIRMED */
    public get get_EMAIL_CONFIRMED(): boolean {
        return this._EMAIL_CONFIRMED
    };

    public set set_EMAIL_CONFIRMED(_EMAIL_CONFIRMED: boolean) {
        this._EMAIL_CONFIRMED = _EMAIL_CONFIRMED
    };

    /** _PASSWORD */
    public get get_PASSWORD(): string {
        return this._PASSWORD
    };

    public set set_PASSCODE(_PASSWORD: string) {
        this._PASSWORD = _PASSWORD
    };

    /** _USERNAME */
    public get get_USERNAME(): string {
        return this._USERNAME
    };

    public set set_USERNAME(_USERNAME: string) {
        this._USERNAME = _USERNAME
    };

    /** _FIRST_NAME */
    public get get_FIRST_NAME(): string {
        return this._FIRST_NAME
    };

    public set set_FIRST_NAME(_FIRST_NAME: string) {
        this._FIRST_NAME = _FIRST_NAME
    };

    /** _LAST_NAME */
    public get get_LAST_NAME(): string {
        return this._LAST_NAME
    };

    public set set_LAST_NAME(_LAST_NAME: string) {
        this._USER_LAST_NAME = _LAST_NAME
    };

    /** _SOCIAL_HANDLE_GITHUB */
    public get get_SOCIAL_HANDLE_GITHUB(): string {
        return this._SOCIAL_HANDLE_GITHUB
    };

    public set set_SOCIAL_HANDLE_GITHUB(_SOCIAL_HANDLE_GITHUB: string) {
        this._SOCIAL_HANDLE_GITHUB = _SOCIAL_HANDLE_GITHUB
    };

    /** _USER_SOCIAL_HANDLE_GOOGLE */
    public get get_SOCIAL_HANDLE_GOOGLE(): string {
        return this._USER_SOCIAL_HANDLE_GOOGLE
    };

    public set set_SOCIAL_HANDLE_GITHUB(_SOCIAL_HANDLE_GITHUB: string) {
        this._SOCIAL_HANDLE_GOOGLE = _SOCIAL_HANDLE_GOOGLE
    };

    /** _USER_SOCIAL_HANDLE_APPLE */
    public get get_SOCIAL_HANDLE_APPLE(): string {
        return this._SOCIAL_HANDLE_APPLE
    };

    public set set_SOCIAL_HANDLE_APPLE(_SOCIAL_HANDLE_APPLE: string) {
        this._USER_SOCIAL_HANDLE_APPLE = _USER_SOCIAL_HANDLE_APPLE
    };

    /** _SOCIAL_HANDLE_FACEBOOK */
    public get get_SOCIAL_HANDLE_FACEBOOK(): string {
        return this._SOCIAL_HANDLE_FACEBOOK
    };

    public set set_SOCIAL_HANDLE_FACEBOOK(_SOCIAL_HANDLE_FACEBOOK: string) {
        this._SOCIAL_HANDLE_FACEBOOK = _SOCIAL_HANDLE_FACEBOOK
    };

    /** _SOCIAL_HANDLE_TWITTER */
    public get get_SOCIAL_HANDLE_TWITTER(): string {
        return this._SOCIAL_HANDLE_TWITTER
    };

    public set set_SOCIAL_HANDLE_TWITTER(_SOCIAL_HANDLE_TWITTER: string) {
        this._SOCIAL_HANDLE_TWITTER = _SOCIAL_HANDLE_TWITTER
    };

    /** _SOCIAL_HANDLE_LINKEDIN */
    public get get_SOCIAL_HANDLE_LINKEDIN(): string {
        return this._SOCIAL_HANDLE_LINKEDIN
    };

    public set set_SOCIAL_HANDLE_LINKEDIN(_SOCIAL_HANDLE_LINKEDIN: string) {
        this._SOCIAL_HANDLE_LINKEDIN = _SOCIAL_HANDLE_LINKEDIN
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

    public set set_DEFAULT_LANGUAGE(_DEFAULT_ROUTE: string) {
        this._DEFAULT_ROUTE = _DEFAULT_ROUTE
    };

    /** _POINTS_POINTS */
    public get _POINTS_POINTS(): number {
        return this._POINTS_POINTS
    };

    public set set_POINTS_POINTS (_POINTS_POINTS : number) {
        this._POINTS_POINTS  = _POINTS_POINTS
    };

    /** _COURSES */
    public get _COURSES(): Course[] || string[] {
        return this._COURSES
    };

    public set set_COURSES(_COURSES): Course[] || string[] {
        this._COURSES = _COURSES
    };
}

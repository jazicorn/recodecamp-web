'use strict';
import { Guest } from '../types/types.guest';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export class Guest implements Guest {
    _GUEST_ID!: string;
    _GUEST_CREATED_AT!: Date;
    _GUEST_UPDATED_AT!: Date;
    _GUEST_ADMIN!: boolean;
    _GUEST_SUBSCRIPTION!: number;
    _GUEST_IP_ADDRESS!: string;
    _GUEST_PASSCODE!: string;
    _GUEST_PASSCODE_CONFIRMED!: boolean;
    _GUEST_EMAIL!: string;
    _GUEST_EMAIL_CONFIRMED!: boolean;
    _GUEST_DEFAULT_LANGUAGE!: string;
    _GUEST_DEFAULT_ROUTE!: string;
    _GUEST_POINTS_TOTAL!: number;
    _GUEST_POINTS_JAVASCRIPT!: number;
    _GUEST_POINTS_JAVA!: number ;
    _GUEST_POINTS_PYTHON!: number ;
    _GUEST_COURSES!: Course[] | string[];

    constructor(data) {
        this._GUEST_ID = uuidv4();
        this._GUEST_CREATED_AT = new Date();
        this._GUEST_UPDATED_AT = new Date();
        this._GUEST_ADMIN = data._GUEST_ADMIN || false;
        /** 001001001 === Subscription(Guest Account)*/
        this._GUEST_SUBSCRIPTION = data._GUEST_SUBSCRIPTION || 001001001,
        this._GUEST_IP_ADDRESS = data._GUEST_IP_ADDRESS || '';
        this._GUEST_EMAIL = data._GUEST_EMAIL.toLowerCase() || "";
        this._GUEST_PASSCODE = uuidv4();
        this._GUEST_EMAIL_CONFIRMED = _GUEST_EMAIL_CONFIRMED || false;
        this._GUEST_DEFAULT_LANGUAGE = data._GUEST_DEFAULT_LANGUAGE || 'javascript';
        this._GUEST_DEFAULT_ROUTE = data._GUEST_DEFAULT_ROUTE || '';
        this._GUEST_POINTS_TOTAL = data._GUEST_POINTS_TOTAL || 0;
        this._GUEST_POINTS_JAVASCRIPT = data._GUEST_POINTS_JAVASCRIPT || 0;
        this._GUEST_POINTS_JAVA = data._GUEST_POINTS_JAVA || 0;
        this._GUEST_POINTS_PYTHON = data._GUEST_POINTS_PYTHON || 0;
        this._GUEST_COURSES = data._GUEST_COURSES || [];
    };

    /** _GUEST_ID */
    public get get_GUEST_ID(): string {
        return this._GUEST_ID
    };

    public set set__GUEST_ID(_GUEST_ID: string) {
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

    public set set_GUEST_UPDATED_AT(_GUEST_UPDATED_AT: string) {
        this._GUEST_UPDATED_AT = _GUEST_UPDATED_AT
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

    public set set_GUEST_IP_ADDRESS(_GUEST_IP_ADDRESS: string) {
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
        this._GUEST_EMAIL = _GUEST_EMAIL
    };

    /** _GUEST_EMAIL_CONFIRMED */
    public get get_GUEST_EMAIL_CONFIRMED(): boolean {
        return this._GUEST_EMAIL_CONFIRMED
    };

    public set set_GUEST_EMAIL_CONFIRMED(_GUEST_EMAIL_CONFIRMED: boolean) {
        this._GUEST_EMAIL_CONFIRMED = _GUEST_EMAIL_CONFIRMED
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

    public set set_GUEST_DEFAULT_LANGUAGE(_GUEST_DEFAULT_ROUTE: string) {
        this._GUEST_DEFAULT_ROUTE = _GUEST_DEFAULT_ROUTE
    };

    /** _GUEST_POINTS_TOTAL */
    public get _GUEST_POINTS_TOTAL(): number {
        return this._GUEST_POINTS_TOTAL
    };

    public set set_GUEST_POINTS_TOTAL(_GUEST_POINTS_TOTAL: number) {
        this._GUEST_POINTS_TOTAL = _GUEST_POINTS_TOTAL
    };

    /** _GUEST_POINTS_JAVASCRIPT */
    public get _GUEST_POINTS_JAVASCRIPT(): number {
        return this._GUEST_POINTS_JAVASCRIPT
    };

    public set set_GUEST_POINTS_JAVASCRIPT(_GUEST_POINTS_JAVASCRIPT: number) {
        this._GUEST_POINTS_JAVASCRIPT = _GUEST_POINTS_JAVASCRIPT
    };

    /** _GUEST_POINTS_JAVA */
    public get _GUEST_POINTS_JAVA(): number {
        return this._GUEST_POINTS_JAVASCRIPT
    };

    public set set_GUEST_POINTS_JAVA(_GUEST_POINTS_JAVA: number) {
        this._GUEST_POINTS_JAVA = _GUEST_POINTS_JAVA
    };

    /** _GUEST_POINTS_PYTHON */
    public get _GUEST_POINTS_PYTHON(): number {
        return this._GUEST_POINTS_PYTHON
    };

    public set set_GUEST_POINTS_PYTHON(_GUEST_POINTS_PYTHON: number) {
        this._GUEST_POINTS_PYTHON = _GUEST_POINTS_PYTHON
    };

    /** _GUEST_COURSES */
    public get _GUEST_COURSES() {
        return this._GUEST_COURSES
    };

    public set set_GUEST_COURSES(_GUEST_COURSES) {
        this._GUEST_COURSES = _GUEST_COURSES
    };
}

'use strict';
import { User } from '../types/types.user';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export class User implements User {
    _USER_ID!: string;
    _USER_CREATED_AT!: Date;
    _USER_UPDATED_AT!: Date;
    _USER_GUEST!: boolean;
    _USER_ADMIN!: boolean;
    _USER_SUBSCRIPTION!: number;
    _USER_IP_ADDRESS!: string;
    _USER_PASSCODE!: string;
    _USER_PASSCODE_CONFIRMED!: boolean
    _USER_EMAIL!: string;
    _USER_EMAIL_CONFIRMED!: boolean;
    _USER_PASSWORD!: string;
    _USER_USERNAME!: string;
    _USER_FIRST_NAME!: string;
    _USER_LAST_NAME!: string;
    _USER_SOCIAL_HANDLE_GITHUB!: string;
    _USER_SOCIAL_HANDLE_GOOGLE!: string;
    _USER_SOCIAL_HANDLE_APPLE!: string;
    _USER_SOCIAL_HANDLE_FACEBOOK!: string;
    _USER_SOCIAL_HANDLE_TWITTER!: string;
    _USER_SOCIAL_HANDLE_LINKEDIN!: string;
    _USER_DEFAULT_LANGUAGE!: string;
    _USER_DEFAULT_ROUTE!: string;
    _USER_POINTS_TOTAL!: number;
    _USER_COURSES!: Course[] | string[];

    constructor(data) {
        this._USER_ID = uuidv4();
        this._USER_CREATED_AT = new Date();
        this._USER_UPDATED_AT = new Date();
        this._USER_GUEST = data._USER_GUEST || false
        this._USER_ADMIN = data._USER_ADMIN || false;
        /** 001001002 === Subscription(Basic Account)*/
        this._USER_SUBSCRIPTION = data._USER_SUBSCRIPTION || 001001002,
        this._USER_IP_ADDRESS = data._USER_IP_ADDRESS || '',
        this._USER_PASSCODE = uuidv4();
        this._USER_PASSCODE_CONFIRMED = false;
        this._USER_EMAIL = data._USER_EMAIL.toLowerCase();
        this._USER_EMAIL_CONFIRMED = false;
        this._USER_PASSWORD = nanoid(10);
        this._USER_FIRST_NAME = data._USER_FIRST_NAME.toLowerCase() || '';
        this._USER_LAST_NAME = data._USER_LAST_NAME.toLowerCase() || '';
        this._USER_SOCIAL_HANDLE_GITHUB = data._USER_SOCIAL_HANDLE_GITHUB || '';
        this._USER_SOCIAL_HANDLE_GOOGLE = data._USER_SOCIAL_HANDLE_GOOGLE || '';
        this._USER_SOCIAL_HANDLE_APPLE = data._USER_SOCIAL_HANDLE_APPLE || '';
        this._USER_SOCIAL_HANDLE_FACEBOOK = data._USER_SOCIAL_HANDLE_FACEBOOK || '';
        this._USER_SOCIAL_HANDLE_TWITTER = data._USER_SOCIAL_HANDLE_TWITTER || '';
        this._USER_SOCIAL_HANDLE_LINKEDIN = data._USER_SOCIAL_HANDLE_LINKEDIN || '';
        this._USER_DEFAULT_LANGUAGE = data._USER_DEFAULT_LANGUAGE || 'Javascript';
        this._USER_DEFAULT_ROUTE = data._USER_DEFAULT_ROUTE || '';
        this._USER_POINTS_TOTAL = data._USER_POINTS_TOTAL || 0;
        this._USER_COURSES = data._USER_COURSES || [];
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

    /** _USER_GUEST */
    public get get_USER_GUEST(): boolean {
        return this._USER_GUEST
    };

    private set set_USER_GUEST(_USER_GUEST: boolean) {
        this._USER_GUEST = _USER_GUEST
    };

    /** _USER_ADMIN */
    public get get_USER_ADMIN(): boolean {
        return this._USER_ADMIN
    };

    private set set_USER_ADMIN(_USER_ADMIN: boolean) {
        this._USER_ADMIN = _USER_ADMIN
    };

    /** _USER_SUBSCRIPTION */
    public get get_USER_SUBSCRIPTION(): number {
        return this._USER_SUBSCRIPTION
    };

    public set set_USER_SUBSCRIPTION(_USER_SUBSCRIPTION: number) {
        this._USER_SUBSCRIPTION = _USER_SUBSCRIPTION
    };

    /** _USER_IP_ADDRESS */
    public get get_USER_IP_ADDRESS(): string {
        return this._USER_IP_ADDRESS
    };

    public set set_USER_IP_ADDRESS(_USER_IP_ADDRESS: string) {
        this._USER_IP_ADDRESS = _USER_IP_ADDRESS
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

    /** _USER_USERNAME */
    public get get_USER_USERNAME(): string {
        return this._USER_USERNAME
    };

    public set set_USER_USERNAME(_USER_USERNAME: string) {
        this._USER_USERNAME = _USER_USERNAME
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

    /** _USER_SOCIAL_HANDLE_GITHUB */
    public get get_USER_SOCIAL_HANDLE_GITHUB(): string {
        return this._USER_SOCIAL_HANDLE_GITHUB
    };

    public set set_USER_SOCIAL_HANDLE_GITHUB(_USER_SOCIAL_HANDLE_GITHUB: string) {
        this._USER_SOCIAL_HANDLE_GITHUB = _USER_SOCIAL_HANDLE_GITHUB
    };

    /** _USER_SOCIAL_HANDLE_GOOGLE */
    public get get_USER_SOCIAL_HANDLE_GOOGLE(): string {
        return this._USER_SOCIAL_HANDLE_GOOGLE
    };

    public set set_USER_SOCIAL_HANDLE_GITHUB(_USER_SOCIAL_HANDLE_GITHUB: string) {
        this._USER_SOCIAL_HANDLE_GOOGLE = _USER_SOCIAL_HANDLE_GOOGLE
    };

    /** _USER_SOCIAL_HANDLE_APPLE */
    public get get_USER_SOCIAL_HANDLE_APPLE(): string {
        return this._USER_SOCIAL_HANDLE_APPLE
    };

    public set set_USER_SOCIAL_HANDLE_APPLE(_USER_SOCIAL_HANDLE_APPLE: string) {
        this._USER_SOCIAL_HANDLE_APPLE = _USER_SOCIAL_HANDLE_APPLE
    };

    /** _USER_SOCIAL_HANDLE_FACEBOOK */
    public get get_USER_SOCIAL_HANDLE_FACEBOOK(): string {
        return this._USER_SOCIAL_HANDLE_FACEBOOK
    };

    public set set_USER_SOCIAL_HANDLE_FACEBOOK(_USER_SOCIAL_HANDLE_FACEBOOK: string) {
        this._USER_SOCIAL_HANDLE_FACEBOOK = _USER_SOCIAL_HANDLE_FACEBOOK
    };

    /** _USER_SOCIAL_HANDLE_TWITTER */
    public get get_USER_SOCIAL_HANDLE_TWITTER(): string {
        return this._USER_SOCIAL_HANDLE_TWITTER
    };

    public set set_USER_SOCIAL_HANDLE_TWITTER(_USER_SOCIAL_HANDLE_TWITTER: string) {
        this._USER_SOCIAL_HANDLE_TWITTER = _USER_SOCIAL_HANDLE_TWITTER
    };

    /** _USER_SOCIAL_HANDLE_LINKEDIN */
    public get get_USER_SOCIAL_HANDLE_LINKEDIN(): string {
        return this._USER_SOCIAL_HANDLE_LINKEDIN
    };

    public set set_USER_SOCIAL_HANDLE_LINKEDIN(_USER_SOCIAL_HANDLE_LINKEDIN: string) {
        this._USER_SOCIAL_HANDLE_LINKEDIN = _USER_SOCIAL_HANDLE_LINKEDIN
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

    /** _USER_POINTS_POINTS */
    public get _USER_POINTS_POINTS(): number {
        return this._USER_POINTS_POINTS
    };

    public set set_USER_POINTS_POINTS (_USER_POINTS_POINTS : number) {
        this._USER_POINTS_POINTS  = _USER_POINTS_POINTS
    };

    /** _USER_COURSES */
    public get _USER_COURSES(): Course[] || string[] {
        return this._USER_COURSES
    };

    public set set_USER_COURSES(_USER_COURSES): Course[] || string[] {
        this._USER_COURSES = _USER_COURSES
    };
}

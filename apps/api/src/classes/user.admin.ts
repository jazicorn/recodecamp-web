'use strict';
import { Admin } from '../types/types.user';
import { v4 as uuidv4 } from 'uuid';

export class Admin extends User implements Admin {
    _ADMIN_ID!: string;
    _ADMIN_CREATED_AT!: Date;
    _ADMIN_UPDATED_AT!: Date;
    _ADMIN_PASSCODE!: string;
    _ADMIN_PASSCODE_CONFIRMED!: boolean;
    _ADMIN_STATUS!: string;
    _ADMIN_POINTS!: number;
    _ADMIN_COURSES!: Course[] | null;

    constructor(data, admin) {
        super(data);
        this._ADMIN_ID: uuidv4();
        this._ADMIN_CREATED_AT: new Date();
        this._ADMIN_UPDATED_AT: new Date();
        this._ADMIN_PASSCODE: uuidv4();
        this._ADMIN_PASSCODE_CONFIRMED!: false;
        this._ADMIN_STATUS: true;
        this._ADMIN_POINTS: admin.points || 0;
        this._ADMIN_COURSES: admin.courses || [];
    }

    // admin status
    public get get_ADMIN_STATUS(): boolean {
        return this._ADMIN_STATUS;
    }
    private set set_ADMIN_STATUS(_ADMIN_STATUS: boolean) {
        this._STUDENT_ADMIN_STATUS = _ADMIN_STATUS;
    }

}

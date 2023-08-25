'use strict';
import { User } from  './user';
import { Student } from '../types/types.user';
import { v4 as uuidv4 } from 'uuid';

export class Student extends User implements Student {
    _STUDENT_ID!: string;
    _STUDENT_CREATED_AT!: Date;
    _STUDENT_UPDATED_AT!: Date;
    _STUDENT_PASSCODE!: string;
    _STUDENT_PASSCODE_CONFIRMED!: boolean;
    _STUDENT_ADMIN_STATUS!: string;
    _STUDENT_POINTS!: number;
    _STUDENT_COURSES!: Course[] | null;

    constructor(data, student) {
        super(data);
        this._STUDENT_ID: uuidv4();
        this._STUDENT_CREATED_AT: new Date();
        this._STUDENT_UPDATED_AT: new Date();
        this._STUDENT_PASSCODE: uuidv4();
        this._STUDENT_PASSCODE_CONFIRMED: false;
        this._STUDENT_ADMIN_STATUS: true;
        this._STUDENT_POINTS: student.points || 0;
        this._STUDENT_COURSES: student.courses || [];
    }

    // admin status
    public get get_STUDENT_ADMIN_STATUS(): boolean {
        return this._STUDENT_ADMIN_STATUS;
    }
    private set set_STUDENT_ADMIN_STATUS(_STUDENT_ADMIN_STATUS: boolean) {
        this._STUDENT_ADMIN_STATUS = _STUDENT_ADMIN_STATUS;
    }

}

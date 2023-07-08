export interface Student extends User {
    courses: Course[];
}

export interface User {
    created_at: Date;
    updated_at: Date;
    id: string;
    email: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    points: number | null;
}

export type Course = {
    subject: string;
    items: Question[];
    complete: boolean;
    points: number | null;
};

export type Question = {
    id: string;
    created_at: Date;
    updated_at: Date;
    completed_at: Date | null;
    complete: boolean;
};

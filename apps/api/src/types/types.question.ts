export interface Q {
    created_at: Date;
    updated_at: Date;
    id: string | null;
    language: string | null;
    level: number | null;
    points: number | null;
    task: string | null;
    data: object | null;
    result: object | null;
    hints: object| null;
    conditions: object| null;
    constraints: object | null;
    category: string | null;
    category_sub: string | null;
    tags: string[] | null;
    refs: object | null;
}

export interface JS extends Omit<Q,'id' | 'language'>{
    id: string;
    language: string;
}

export type JS_Type = {
    level: number | null;
    points: number | null;
    task: string | null;
    data: object | null;
    result: object | null;
    hints: object| null;
    conditions: object | null;
    constraints: object | null;
    category: string | null;
    category_sub: string | null;
    tags: string[] | null;
    refs: object | null;
}


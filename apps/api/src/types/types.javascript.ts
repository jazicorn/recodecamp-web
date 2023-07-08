export interface Q<T, K> {
    created_at: Date;
    updated_at: Date;
    id: string;
    language: string;
    level: number;
    points: number;
    title: string | null;
    data: T | null;
    result: K | null;
    category: string | null;
    category_sub: string | null;
    tags: string[] | null;
    refs: object | null;
}

export interface Q_Str<T> extends Omit<Q, 'data' | 'answer'> {
    data: string | null;
    result: T | null;
}

export interface Q_Num<T> extends Omit<Q, 'data' | 'answer'> {
    data: number | null;
    result: T | null;
}

export interface Q_Arr<T, K> extends Omit<Q, 'data' | 'answer'> {
    data: T[] | null;
    result: K | null;
}

export interface Q_Obj extends Omit<Q, 'data' | 'answer'> {
    data: object | null;
    result: object | null;
}

export interface Q_Func<T, K, U> extends Omit<Q, 'data' | 'answer'> {
    data: (args: T) => K | null;
    result: U | null;
}

export interface Q {
    created_at: Date;
    updated_at: Date;
    id: string;
    language: string;
    level: number | null;
    points: number | null;
    title: string | null;
    data: object | null;
    result: object | null;
    category: string | null;
    category_sub: string | null;
    tags: string[] | null;
    refs: object | null;
}

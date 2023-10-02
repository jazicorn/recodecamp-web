export type Answer = (userAnswer: string, answer: string) => boolean;

export interface Q {
    _QUESTION_CREATED_AT: Date;
    _QUESTION_UPDATED_AT: Date;
    _QUESTION_LANGUAGE: string;
    _QUESTION_ID: string;
    _QUESTION_LEVEL: number;
    _QUESTION_POINTS: number;
    _QUESTION_TASK: string;
    _QUESTION_DATA: object;
    _QUESTION_ANSWER_REGEX: string;
    _QUESTION_ANSWER: Answer | Answer[] | string | string[];
    _QUESTION_RESULT: object;
    _QUESTION_HINTS: object;
    _QUESTION_BOILERPLATE: string;
    _QUESTION_CONDITIONS: object;
    _QUESTION_CONSTRAINTS: object;
    _QUESTION_CATEGORY: string;
    _QUESTION_CATEGORY_SUB: string;
    _QUESTION_TAGS: string[];
    _QUESTION_REFS: object;
}

export type Q_Type = {
    _QUESTION_LANGUAGE: string;
    _QUESTION_ID: string;
    _QUESTION_LEVEL: number;
    _QUESTION_POINTS: number;
    _QUESTION_TASK: string;
    _QUESTION_DATA: object;
    _QUESTION_ANSWER_REGEX: string;
    _QUESTION_ANSWER: Answer | Answer[] | string | string[];
    _QUESTION_RESULT: object;
    _QUESTION_HINTS: object;
    _QUESTION_BOILERPLATE: string;
    _QUESTION_CONDITIONS: object;
    _QUESTION_CONSTRAINTS: object;
    _QUESTION_CATEGORY: string;
    _QUESTION_CATEGORY_SUB: string;
    _QUESTION_TAGS: string[];
    _QUESTION_REFS: object;
}


export const ROUTES = [
    {
        "id": 1,
        "category": "comments",
        "subCategories": {
            "singleLine": ['comments/single/random'],
            "multiLine": ['comments/multi/random'],
        },
    },
    {
        "id": 2,
        "category": "variables",
        "subCategories": {
            "declare": ['var/declare/random','var/declare/var','var/declare/const','var/declare/let'],
            "scope": ['var/scope/random','var/scope/block','var/scope/func','var/scope/global'],
        }
    },
]

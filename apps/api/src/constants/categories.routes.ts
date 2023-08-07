export const ROUTES = [
    {
        "id": 1,
        "category": "comments",
        "subCategories": {
            "singleLine": ['comments/single/all'],
            "multiLine": ['comments/multi/all'],
        },
    },
    {
        "id": 2,
        "category": "variables",
        "subCategories": {
            "declare": ['var/declare/all','var/declare/var','var/declare/const','var/declare/let'],
            "scope": ['var/scope/all','var/scope/block','var/scope/func','var/scope/global'],
        }
    },
]

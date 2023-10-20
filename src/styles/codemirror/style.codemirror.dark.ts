import { createTheme } from '@uiw/codemirror-themes'
import { tags as t } from '@lezer/highlight'

const darkTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#00000',
    foreground: '#f5f5f5',
    caret: '#f5f5f5',
    selection: '#d7ecf0',
    selectionMatch: '#d7ecf0',
    gutterBackground: '#525252',
    gutterForeground: '#2ca9bc',
    gutterBorder: '#dddddd',
    gutterActiveForeground: '#2ca9bc',
    lineHighlight: '#737373',
  },
  styles: [
    { tag: t.comment, color: '#737373' },
    { tag: t.variableName, color: '#2ca9bc' },
    { tag: t.function, color: '#e5e5e5' },
    { tag: t.definition, color: '#2ca9bc' },
    { tag: [t.string, t.special(t.brace)], color: '#afd9e1' },
    { tag: t.number, color: '#2ca9bc' },
    { tag: t.bool, color: '#2ca9bc' },
    { tag: t.null, color: '#2ca9bc' },
    { tag: t.modifier, color: '#2ca9bc' },
    { tag: t.keyword, color: '#a3a3a3' },
    { tag: t.operator, color: '#8b5cf6' },
    { tag: t.definition(t.typeName), color: '#e5e5e5' },
    { tag: t.typeName, color: '#2ca9bc' },
    { tag: t.brace, color: '#2ca9bc' },
    { tag: t.quote, color: '#ff9300' },
    { tag: t.bracket, color: '#8b5cf6' },
    { tag: t.angleBracket, color: '#2ca9bc' },
    { tag: t.tagName, color: '#2ca9bc' },
    { tag: t.attributeName, color: '#2ca9bc' },
  ],
})

export default darkTheme

from pathlib import Path
text = Path('tmp_check.js').read_text(encoding='utf-8')
state = None
escaped = False
for i,ch in enumerate(text, start=1):
    if state is None:
        if escaped:
            escaped = False
        elif ch == '\\':
            escaped = True
        elif ch in ('"', "'", '`'):
            state = ch
        elif ch == '/':
            nxt = text[i] if i < len(text) else ''
            if nxt == '/':
                state = '//'
            elif nxt == '*':
                state = '/*'
    elif state == '//':
        if ch == '\n':
            state = None
    elif state == '/*':
        if ch == '*' and i < len(text) and text[i] == '/':
            state = None
    elif state in ('"', "'"):
        if escaped:
            escaped = False
        elif ch == '\\':
            escaped = True
        elif ch == state:
            state = None
    elif state == '`':
        if escaped:
            escaped = False
        elif ch == '\\':
            escaped = True
        elif ch == '`':
            state = None
print('state', state)

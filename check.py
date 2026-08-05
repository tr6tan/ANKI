from pathlib import Path
text = Path('tmp_check.js').read_text(encoding='utf-8')
state = None
esc = False
depth = 0
for i, ch in enumerate(text, start=1):
    if state is None:
        if esc:
            esc = False
        elif ch == '\\':
            esc = True
        elif ch in ('"', "'", '`'):
            state = ch
        elif ch == '/':
            nxt = text[i] if i < len(text) else ''
            if nxt == '/':
                state = '//'
            elif nxt == '*':
                state = '/*'
        elif ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
    elif state == '//':
        if ch == '\n':
            state = None
    elif state == '/*':
        if ch == '*' and (i < len(text) and text[i] == '/'):
            state = None
    elif state in ('"', "'"):
        if esc:
            esc = False
        elif ch == '\\':
            esc = True
        elif ch == state:
            state = None
    elif state == '`':
        if esc:
            esc = False
        elif ch == '\\':
            esc = True
        elif ch == '`':
            state = None
    if depth < 0:
        print('negative', i, line)
        break
    if i <= 800 and depth != 0:
        if i % 100 == 0:
            print('line', i, 'depth', depth)
print('final', depth, 'state', state)

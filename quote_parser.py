from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
state = 'code'
line = 1
col = 0
stack = []
for idx, ch in enumerate(text):
    col += 1
    if ch == '\n':
        if state == 'line_comment':
            state = 'code'
        line += 1
        col = 0
        continue
    prev = text[idx - 1] if idx else ''
    if state == 'code':
        if ch == '"':
            state = 'double'
        elif ch == "'":
            state = 'single'
        elif ch == '`':
            state = 'template'
            stack.append(('template', line, col))
        elif ch == '/' and idx + 1 < len(text) and text[idx+1] == '/':
            state = 'line_comment'
        elif ch == '/' and idx + 1 < len(text) and text[idx+1] == '*':
            state = 'block_comment'
    elif state == 'single':
        if ch == "'" and prev != '\\':
            state = 'code'
    elif state == 'double':
        if ch == '"' and prev != '\\':
            state = 'code'
    elif state == 'block_comment':
        if ch == '*' and idx + 1 < len(text) and text[idx+1] == '/':
            state = 'code'
    elif state == 'template':
        if ch == '`' and prev != '\\':
            state = 'code'
            stack.pop()
        elif ch == '$' and idx + 1 < len(text) and text[idx+1] == '{':
            stack.append(('template_expr', line, col))
        elif ch == '}' and stack and stack[-1][0] == 'template_expr':
            stack.pop()
print('final state:', state)
print('stack:', stack[-20:])
print('stack len:', len(stack))

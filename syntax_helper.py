from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
state = 'code'
stack = []
paren = 0
line = 1
col = 0
for idx, ch in enumerate(text):
    col += 1
    if ch == '\n':
        line += 1
        col = 0
        if state == 'line_comment':
            state = 'code'
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
        elif ch == '/' and idx + 1 < len(text) and text[idx + 1] == '/':
            state = 'line_comment'
        elif ch == '/' and idx + 1 < len(text) and text[idx + 1] == '*':
            state = 'block_comment'
        elif ch == '{':
            stack.append(('brace', line, col))
        elif ch == '}':
            if stack and stack[-1][0] == 'brace':
                stack.pop()
            else:
                stack.append(('unmatched}', line, col))
        elif ch == '(':
            paren += 1
        elif ch == ')':
            paren -= 1
    elif state == 'single':
        if ch == "'" and prev != '\\':
            state = 'code'
    elif state == 'double':
        if ch == '"' and prev != '\\':
            state = 'code'
    elif state == 'template':
        if ch == '`' and prev != '\\':
            state = 'code'
            if stack and stack[-1][0] == 'template':
                stack.pop()
        elif ch == '$' and idx + 1 < len(text) and text[idx + 1] == '{':
            stack.append(('template_expr', line, col))
    elif state == 'block_comment':
        if ch == '*' and idx + 1 < len(text) and text[idx + 1] == '/':
            state = 'code'
    # ignore line_comment until newline
print('final state:', state)
print('paren balance:', paren)
print('stack size:', len(stack))
for item in stack[-20:]:
    print(item)

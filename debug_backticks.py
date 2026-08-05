from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
state = 'code'
stack = []
line = 1
for idx, ch in enumerate(text):
    if ch == '\n':
        line += 1
    prev = text[idx-1] if idx else ''
    if state == 'code':
        if ch == '"':
            state = 'double'
        elif ch == "'":
            state = 'single'
        elif ch == '`':
            state = 'template'
            stack.append((line, idx, 'template'))
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
    elif state == 'line_comment':
        if ch == '\n':
            state = 'code'
    elif state == 'block_comment':
        if ch == '*' and idx + 1 < len(text) and text[idx+1] == '/':
            state = 'code'
    elif state == 'template':
        if ch == '`' and prev != '\\':
            state = 'code'
            pop = stack.pop()
            print(f'POP template {pop[0]} idx {pop[1]} close_line {line}')
        elif ch == '$' and idx + 1 < len(text) and text[idx+1] == '{':
            stack.append((line, idx, 'expr'))
        elif ch == '}' and stack and stack[-1][2] == 'expr':
            pop = stack.pop()
            print(f'POP expr {pop[0]} idx {pop[1]} close_line {line}')
print('final state', state)
print('stack length', len(stack))
print(stack[:20])

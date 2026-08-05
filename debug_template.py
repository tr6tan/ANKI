from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
state = 'code'
stack = []
for idx, ch in enumerate(text):
    prev = text[idx-1] if idx else ''
    if state == 'code':
        if ch == '"': state = 'double'
        elif ch == "'": state = 'single'
        elif ch == '`':
            state = 'template'
            stack.append(('template', idx+1, text.count('\n',0,idx)+1))
            print('push template at', idx+1, 'line', text.count('\n',0,idx)+1)
        elif ch == '/' and idx + 1 < len(text) and text[idx+1] == '/': state = 'line_comment'
        elif ch == '/' and idx + 1 < len(text) and text[idx+1] == '*': state = 'block_comment'
    elif state == 'single':
        if ch == "'" and prev != '\\': state = 'code'
    elif state == 'double':
        if ch == '"' and prev != '\\': state = 'code'
    elif state == 'block_comment':
        if ch == '*' and idx + 1 < len(text) and text[idx+1] == '/': state = 'code'
    elif state == 'line_comment':
        if ch == '\n': state = 'code'
    elif state == 'template':
        if ch == '`' and prev != '\\':
            stack.pop()
            state = 'code'
            print('pop template at', idx+1, 'line', text.count('\n',0,idx)+1)
        elif ch == '$' and idx + 1 < len(text) and text[idx+1] == '{':
            stack.append(('template_expr', idx+1, text.count('\n',0,idx)+1))
            print('push template_expr at', idx+1, 'line', text.count('\n',0,idx)+1)
        elif ch == '}' and stack and stack[-1][0] == 'template_expr':
            stack.pop()
            print('pop template_expr at', idx+1, 'line', text.count('\n',0,idx)+1)
print('final state:', state)
print('stack:', stack)
print('stack len:', len(stack))

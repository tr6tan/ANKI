from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
stack = []
state='code'
line=1
col=0
pairs={'(':')','[':']','{':'}'}
openers=set(pairs.keys())
closers=set(pairs.values())
for i,ch in enumerate(text):
    col += 1
    if ch=='\n':
        line += 1
        col = 0
        if state=='line_comment': state='code'
        continue
    prev = text[i-1] if i else ''
    if state=='code':
        if ch=='"': state='double'
        elif ch=="'": state='single'
        elif ch=='`': state='template'
        elif ch=='/' and i+1 < len(text) and text[i+1]=='/': state='line_comment'
        elif ch=='/' and i+1 < len(text) and text[i+1]=='*': state='block_comment'
        elif ch in openers:
            stack.append((ch,line,col))
        elif ch in closers:
            if not stack:
                print(f'unmatched closer {ch} at {line}:{col}')
                break
            last, lline, lcol = stack[-1]
            if pairs.get(last)!=ch:
                print(f'mismatch {last} opened at {lline}:{lcol} but closed by {ch} at {line}:{col}')
                break
            stack.pop()
    elif state=='single':
        if ch=="'" and prev!='\\': state='code'
    elif state=='double':
        if ch=='"' and prev!='\\': state='code'
    elif state=='block_comment':
        if ch=='*' and i+1<len(text) and text[i+1]=='/': state='code'
    elif state=='template':
        if ch=='`' and prev!='\\': state='code'
        if ch=='$' and i+1<len(text) and text[i+1]=='{': stack.append(('{',line,col));
        if ch=='}' and stack and stack[-1][0]=='{': stack.pop()

print('final state', state)
print('unclosed stack (last 40):')
for s in stack[-40:]:
    print(s)
print('stack len', len(stack))

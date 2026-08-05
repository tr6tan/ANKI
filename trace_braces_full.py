from pathlib import Path
text=Path('tmp_script.js').read_text(encoding='utf-8')
mode='code'
stack=[]
line=1
for i,ch in enumerate(text):
    col = (i - text.rfind('\n',0,i))
    if ch=='\n':
        line+=1; continue
    if mode=='code':
        if ch=='"': mode='double'
        elif ch=="'": mode='single'
        elif ch=='`': mode='template'
        elif ch=='/' and i+1<len(text) and text[i+1]=='/': mode='line_comment'
        elif ch=='/' and i+1<len(text) and text[i+1]=='*': mode='block_comment'
        elif ch in '([{': stack.append((ch,line,col))
        elif ch in ')]}':
            if not stack:
                print('unmatched closer',ch,'at',line,col); break
            last, lline, lcol = stack[-1]
            expected = {'(':')','[':']','{':'}'}.get(last)
            if ch!=expected:
                print('mismatch',last,'opened at',lline,lcol,'but closed by',ch,'at',line,col); break
            stack.pop()
    elif mode=='double':
        if ch=='\\': i+=1
        elif ch=='"': mode='code'
    elif mode=='single':
        if ch=='\\': i+=1
        elif ch=="'": mode='code'
    elif mode=='block_comment':
        if ch=='*' and i+1<len(text) and text[i+1]=='/': mode='code'
    elif mode=='line_comment':
        if ch=='\n': mode='code'
    elif mode=='template':
        if ch=='`': mode='code'
        elif ch=='\\': i+=1
        elif ch=='$' and i+1<len(text) and text[i+1]=='{': stack.append(('{',line,col));
        elif ch=='}':
            if stack and stack[-1][0]=='{': stack.pop()
            else: print('template-closing } with no { on stack at',line,col)

print('remaining stack:')
for s in stack: print(s)
print('len', len(stack))

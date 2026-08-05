from pathlib import Path
text=Path('tmp_script.js').read_text(encoding='utf-8')
line_to_trace=475
line=1
mode='code'
i=0
col=0
stack=[]
while i<len(text):
    ch=text[i]
    col+=1
    if ch=='\n':
        line+=1;col=0
        if mode=='line_comment': mode='code'
        i+=1;continue
    if line==line_to_trace:
        print(f'pos {line}:{col} char={repr(ch)} mode={mode} stack_top={stack[-1] if stack else None}')
    if mode=='code':
        if ch=='"': mode='double'
        elif ch=="'": mode='single'
        elif ch=='`': mode='template'
        elif ch=='/' and i+1<len(text) and text[i+1]=='/': mode='line_comment';i+=1;col+=1
        elif ch=='/' and i+1<len(text) and text[i+1]=='*': mode='block_comment';i+=1;col+=1
        elif ch in '([{': stack.append((ch,line,col))
        elif ch in ')]}':
            last, lline, lcol = stack[-1] if stack else (None,None,None)
            expected = {'(':')','[':']','{':'}'}.get(last)
            if not stack:
                print('unmatched closer',ch,'at',line,col);break
            if ch!=expected:
                print('mismatch',last,'opened at',lline,lcol,'but closed by',ch,'at',line,col);break
            stack.pop()
    elif mode=='double':
        if ch=='\\': i+=1;col+=1
        elif ch=='"': mode='code'
    elif mode=='single':
        if ch=='\\': i+=1;col+=1
        elif ch=="'": mode='code'
    elif mode=='block_comment':
        if ch=='*' and i+1<len(text) and text[i+1]=='/': i+=1;col+=1;mode='code'
    elif mode=='line_comment':
        pass
    elif mode=='template':
        if ch=='`': mode='code'
        elif ch=='\\': i+=1;col+=1
        elif ch=='$' and i+1<len(text) and text[i+1]=='{': stack.append(('{',line,col)); i+=1;col+=1
        elif ch=='}': # pop corresponding {
            if stack and stack[-1][0]=='{': stack.pop()
            else:
                print('template-closing } with no { on stack at',line,col)
    i+=1

print('end stack',stack[-10:])

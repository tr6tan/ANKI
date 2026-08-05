from pathlib import Path
text=Path('tmp_script.js').read_text(encoding='utf-8')
stack=[]
mode='code'
i=0
line=1
col=0
pairs={'(':')','[':']','{':'}'}
while i<len(text):
    ch=text[i]
    col+=1
    if ch=='\n':
        line+=1;col=0
        if mode=='line_comment': mode='code'
        i+=1;continue
    if mode=='code':
        if ch=='"': mode='double'
        elif ch=="'": mode='single'
        elif ch=='`': mode='template'
        elif ch=='/' and i+1<len(text) and text[i+1]=='/': mode='line_comment';i+=1;col+=1
        elif ch=='/' and i+1<len(text) and text[i+1]=='*': mode='block_comment';i+=1;col+=1
        elif ch in '([{': stack.append((ch,line,col))
        elif ch in ')]}':
            if not stack:
                print('unmatched closer',ch,'at',line,col);break
            last, lline, lcol = stack[-1]
            expected = pairs[last]
            if ch!=expected:
                print('mismatch',last,'opened at',lline,lcol,'but closed by',ch,'at',line,col)
                break
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
    i+=1

print('final mode',mode)
print('stack length',len(stack))
for s in stack[-50:]: print(s)

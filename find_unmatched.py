from pathlib import Path
s=Path('tmp_script.js').read_text(encoding='utf-8')
stack=[]
pairs={'{':'}','[':']','(':')'}
openers=set(pairs.keys())
closers={v:k for k,v in pairs.items()}
for lineno,line in enumerate(s.splitlines(),1):
    for col,ch in enumerate(line,1):
        if ch in openers:
            stack.append((ch,lineno,col))
        elif ch in closers:
            if stack and stack[-1][0]==closers[ch]:
                stack.pop()
            else:
                print('Unmatched closer',ch,'at',lineno,col)
print('Remaining stack:')
for entry in stack:
    print(entry)
print('len',len(stack))

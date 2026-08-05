from pathlib import Path
s=Path('tmp_script.js').read_text(encoding='utf-8')
bal=0
maxbal=0
maxline=0
lines=s.splitlines()
for i,line in enumerate(lines,1):
    bal += line.count('{') - line.count('}')
    if bal>maxbal:
        maxbal=bal; maxline=i
print('max bal',maxbal,'at',maxline)
start=max(1,maxline-8)
end=min(len(lines),maxline+8)
for i in range(start,end+1):
    print(f"{i:04d}: {lines[i-1]}")
print('\nfinal balance',bal)
# show last 20 lines
print('\n--- tail ---')
for i in range(max(1,len(lines)-20),len(lines)+1):
    print(f"{i:04d}: {lines[i-1]}")

from pathlib import Path
text=Path('tmp_script.js').read_text(encoding='utf-8')
lines=text.splitlines()
ln=475
line=lines[ln-1]
print('LINE',ln,repr(line))
for i,ch in enumerate(line, start=1):
    print(f'{i:03} {ch} {ord(ch)}')

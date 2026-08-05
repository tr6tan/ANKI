from pathlib import Path
lines=Path('tmp_script.js').read_text(encoding='utf-8').splitlines()
for i,line in enumerate(lines,1):
    if '`' in line:
        print(i, line.count('`'), line)

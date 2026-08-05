import sys
from pathlib import Path
if len(sys.argv)<3:
    print('Usage: python line_reader.py start end')
    sys.exit(1)
start=int(sys.argv[1])
end=int(sys.argv[2])
lines=Path('tmp_script.js').read_text(encoding='utf-8').splitlines()
for i in range(start-1, min(end, len(lines))):
    print(f'{i+1}: {lines[i]}')

from pathlib import Path
import subprocess
text = Path('tmp_script.js').read_text(encoding='utf-8')
lines = text.splitlines(True)
lo = 0
hi = len(lines)
best = None
while lo < hi:
    mid = (lo + hi) // 2
    candidate = ''.join(lines[:mid])
    Path('prefix.js').write_text(candidate, encoding='utf-8')
    result = subprocess.run(['node', '--check', 'prefix.js'], capture_output=True, text=True)
    if result.returncode == 0:
        best = mid
        lo = mid + 1
    else:
        hi = mid
print('best good lines', best)
print('error', result.stderr.strip())

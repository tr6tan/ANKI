from pathlib import Path
import subprocess
import sys
lines=Path('tmp_script.js').read_text(encoding='utf-8').splitlines(True)
for i in range(len(lines)-30, len(lines)+1):
    candidate=''.join(lines[:i])
    Path('prefix.js').write_text(candidate, encoding='utf-8')
    result=subprocess.run(['node','--check','prefix.js'], capture_output=True, text=True)
    print(i, 'ok' if result.returncode==0 else 'err', result.stderr.splitlines()[-1] if result.stderr else '')

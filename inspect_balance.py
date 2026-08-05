from pathlib import Path
lines = Path('tmp_check.js').read_text(encoding='utf-8').splitlines()
balance = 0
for i, line in enumerate(lines, start=1):
    balance += line.count('{') - line.count('}')
    if i <= 150 or 250 <= i <= 330 or 330 <= i <= 430 or 430 <= i <= 520 or balance != 0:
        if balance != 0:
            print(i, balance, line)
    if i > 520 and balance == 0:
        break
print('final', balance)

from pathlib import Path
text = Path("tmp_check.js").read_text(encoding="utf-8")
print('backticks', text.count('`'))
print('opens', text.count('{'), 'closes', text.count('}'))
lines = text.splitlines()
balance = 0
for i, line in enumerate(lines, start=1):
    balance += line.count('{') - line.count('}')
    if balance < 0:
        print('negative at', i, balance)
        break
    if 560 <= i <= 630:
        print(i, balance, line)
print('final balance', balance)

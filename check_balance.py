from pathlib import Path
text = Path('tmp_check.js').read_text(encoding='utf-8')
lines = text.splitlines()
paren = 0
brace = 0
bracket = 0
for i,line in enumerate(lines, start=1):
    brace += line.count('{') - line.count('}')
    paren += line.count('(') - line.count(')')
    bracket += line.count('[') - line.count(']')
    if i >= 540:
        print(i, 'brace', brace, 'paren', paren, 'bracket', bracket, line)
print('final', brace, paren, bracket)

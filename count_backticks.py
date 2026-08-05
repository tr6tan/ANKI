from pathlib import Path
s=Path('tmp_script.js').read_text(encoding='utf-8')
print('backticks',s.count('`'))
print('single quotes',s.count("'"))
print('double quotes',s.count('"'))
print('open paren',s.count('('),'close paren',s.count(')'))
print('open brace',s.count('{'),'close brace',s.count('}'))
print('open bracket',s.count('['),'close bracket',s.count(']'))

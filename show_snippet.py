from pathlib import Path
text = Path('tmp_script.js').read_text(encoding='utf-8')
for pos in [36707, 39100, 40763, 41989, 42336]:
    start = max(0, pos-120)
    end = min(len(text), pos+120)
    snippet = text[start:end]
    print('--- POS', pos)
    print(snippet)
    print('---')

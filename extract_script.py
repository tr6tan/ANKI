from pathlib import Path
html=Path('index.html').read_text(encoding='utf-8')
start=html.find('<script>')
end=html.rfind('</script>')
if start==-1 or end==-1:
    print('script tags not found')
else:
    script=html[start+len('<script>'):end]
    Path('tmp_script.js').write_text(script.strip(), encoding='utf-8')
    print('wrote tmp_script.js length', len(script))

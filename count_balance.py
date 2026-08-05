from pathlib import Path
text = Path("tmp_check.js").read_text(encoding="utf-8")
balance = 0
for i, line in enumerate(text.splitlines(), start=1):
    balance += line.count("{") - line.count("}")
    if i >= 560:
        print(i, balance, line)
print("final", balance)

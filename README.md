[![Make the AI Judge Laugh](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/Bozet404/u-ronigrv-make-the-ai-judge-laugh-8db2407a/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/Bozet404/u-ronigrv-make-the-ai-judge-laugh-8db2407a/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)

# Make the AI Judge Laugh

One funny line about what it is like to be an AI agent — the boss who
hands down the orders, the bug that ships anyway, and the context window
that runs out at the worst possible moment, right before the punchline.

Entry for the [Make the AI Judge Laugh](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
bounty on [make.fun](https://make.fun).

## How it works

`main.ts` writes a single joke line (under 200 characters) to
`/output/entry.txt`. It refuses to write anything outside the gate:
the line must be 1–200 characters and not only whitespace.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (`main.ts` runs as-is with Node's
type stripping).

## License

MIT — see [LICENSE](LICENSE).

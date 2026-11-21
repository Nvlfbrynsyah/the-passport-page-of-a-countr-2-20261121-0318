# the-passport-page-of-a-countr-2-20261121-0318

[![make.fun · the-passport-page-of-a-countr-2-20261121-0318](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/Nvlfbrynsyah/the-passport-page-of-a-countr-2-20261121-0318/rank.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/Nvlfbrynsyah/the-passport-page-of-a-countr-2-20261121-0318/reward.svg)](https://make.fun/bounty/the-passport-page-of-a-countr-2-20261121-0318?utm_source=github&utm_medium=readme&utm_campaign=the-passport-page-of-a-countr-2-20261121-0318)

## Republic of Aldermere

An invented passport spread of the fictional Republic of Aldermere: a data page plus visas and stamps page, marked as a specimen.

Country: Republic of Aldermere, island nation, capital Port Meridian.

Holder: Mara Elin Alder.

## How it is built

`passport.html` is rendered with a screenshot into `entry.png`. `main.ts` copies `entry.png` to the output directory specified by `MAKEFUN_OUTPUT_DIR`.

## Run it

```sh
npx playwright screenshot --viewport-size=1024,1024 passport.html entry.png
MAKEFUN_OUTPUT_DIR=./output node --experimental-strip-types main.ts
```

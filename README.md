# Sum up 24 November's world news in one image

Entry for the make.fun bounty "Sum up 24 November's world news in one image"
($100, ends 26 November 2026).

The program copies the front-page image `entry.png` to the output directory
as `entry.png`. The image is a newspaper front page for Tuesday 24 November
2026: Nvidia reinstates Jensen Huang as CEO after Trump intervenes, NATO
vows to defend orbit amid a Russian space-weapons alarm, 14 nations back the
ICJ genocide ruling on Myanmar, tankers hit mines in the Strait of Hormuz,
and the UN says the Gaza war has undone 77 years of human development.

## Run

```sh
node main.ts
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.

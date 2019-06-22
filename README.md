# MVP-demo-in-TypeScript

A TypeScript version of [this MVP architecture implementation in vanilla Javascript](https://github.com/pomodorozhong/MVP-demo-in-Javascript).

## To Build

### Build Requirement

* tsc
* browserify
* (optional) watchify

### Build Process

#### Recommended way

1. `tsc -w`
2. `watchify ./ts-built/main.js -o ./build/bundle.js`

#### The other way

1. `tsc ./src/<every_ts_file> --outDir ./ts-built/`
2. `browserify ./ts-built/main.js -o ./build/bundle.js`

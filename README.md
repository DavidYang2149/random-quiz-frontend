# random-quiz-frontend

๐  ์นํ์ด์ง: https://random-quiz-frontend-task.vercel.app

โ E2E ํ์คํธ ๋ณด๊ณ ์ ํ์ด์ง: https://davidyang2149.github.io/random-quiz-frontend

## ๐ ์ ํ๋ฆฌ์ผ์ด์ ์๊ฐ & ๊ธฐ๋ฅ
'ํด์ฆ'๋ฅผ ํ ์ ์๋ ์น ์ ํ๋ฆฌ์ผ์ด์์๋๋ค.

## ๐ ๊ธฐ์  ์คํ
### ์ธ์ด
- TypeScript

### ๋ผ์ด๋ธ๋ฌ๋ฆฌ & ํ๋ ์์ํฌ
- React
- Next.js

### ์ํ๊ด๋ฆฌ
- Redux Toolkit

### CSS ์คํ์ผ
- Tailwind CSS

### ํ์คํธ ๋๊ตฌ
- Jest
- Testing Library
- Cypress

### ํ๊ฒฝ์ค์  ์ง์
- ESLint
- Sentry
- Vercel(Deploy)

## ํ์คํธ

### E2E ํ์คํธ 

๊ฐ ํผ์ฒ ์์์ด ์๋ฃ๋ ํ PR์ ์ฌ๋ฆฌ๋ฉด GitHub Actions๋ฅผ ํตํด E2E ํ์คํธ๋ฅผ ์งํํฉ๋๋ค. 

ํ์คํธ ๊ฒฐ๊ณผ๋ [์นํ์ด์ง](https://davidyang2149.github.io/random-quiz-frontend)์์ ํ์ธํ  ์ ์์ต๋๋ค.

### ํ์คํธ ์ปค๋ฒ๋ฆฌ์ง

Jest์ Testing-Library๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.

![test-coverage](https://user-images.githubusercontent.com/40143056/191526342-5bda0898-61cb-4c55-8bcc-6053359f415f.png)


## ๐ ํ๋ก์ ํธ ๋ธ๋ ๋ฒ์  ๊ด๋ฆฌ

ํ๋ก์ ํธ ์คํ์ ๊ถ์ฅ ๋ธ๋ ๋ฒ์ 

```sh
# .nvmrc
v16.15.0
```
If you want to manage nvm. recommand to use [fnm(Fast Node Manager)](https://github.com/Schniz/fnm)

```sh
# use Homebrew
brew install fnm
```

## ๐ ํ๋ก์ ํธ ํจํค์ง ์ค์น - canvas๊ฐ ์ค์น๋์ง ์๋ ์ด์

ํ๋ก์ ํธ ํจํค์ง ์ค์น ์ canvas๊ฐ ์ค์น๋์ง ์๋ ๊ฒฝ์ฐ, ๋ค์ ์์์ด ํ์ํฉ๋๋ค.

```sh
npm install -g node-gyp
# use Homebrew
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
```

## ๐ Install dependencies

```sh
npm install
```

## ๐ป Run dev server

```sh
npm run dev
```

## ๐งช Lint and fix

```sh
npm run lint
```

## ๐งช Run Coverage

```sh
npm run test:unit

# running option
npm run test
```

## ๐งช Run E2E tests

```sh
npm run e2e

# headless option
npm run e2e:headless
```

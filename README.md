# bank-counter-assignment

- 首先, 因為專案是以 [NuxtJS](https://nuxtjs.org/docs/2.x/get-started/installation) 建置, 環境需要依照其要求:

> node - at least v10.13 We recommend you have the latest LTS version installed.

- 接著, 若是第一次執行, 請先下載相依套件

```bash
npm install
```

- 在啟動前, 若要更改 bank counter 之數量與名稱, 請至 `/nuxt.config.env.js`

```javascript
import config from './nuxt.config'

export default {
  env: {
    ...
    COUNTER_NAMES: ['Amy', 'Bob', 'Cory', 'Dora'],
    ...
  },
}

```

- 最後, 啟動 nuxt dev server

```bash
npm run dev
```

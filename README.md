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

---

## Bank Counter Assignment

### Goal

完成一個模擬抽號碼牌，及處理狀況的 App。

想像一個客戶走進銀行，先看到目前等待人數，之後走到號碼機抽一張號碼牌。每個櫃檯有一個行員，會依照號碼的順序來服務這些客戶。當櫃檯出現了號碼時，相對應的客戶則會走到該櫃檯辦理。

在模擬當中，用一個 Button 來模擬許多客戶到號碼機抽號碼牌的行為。一開始會顯示 “1”，在按下之後，就代表有第一個客戶來了，而號碼機上就顯示 “2”，以此類推，號碼為連續的正整數。

行員的數量、名字皆為 build time 設定，在 App 執行期間不會變動。每個行員的處理速度是隨機的，範圍落在 0.5 秒到 1.5 秒之間。

介面示意圖：

1. 列出有幾個行員，跟他們的名字。
2. 每個櫃檯的執行狀況。如果沒事做就顯示 “idle”，如果在服務客戶中，就顯示號碼。
3. 列出這個櫃檯已經處理過的號碼。
4. 目前等待人數。
5. 號碼機，顯示下一個人的號碼。按下 button 表示多進來一個各戶。

也請參考執行過程示意影片。

### Requirement

- 請寫一個 iOS / Android / Web App 滿足以上需求，介面請重新設計一下，方便呈現在 mobile 中。
- 請將 App source code 放在目錄中，打包成 zip 檔，並在目錄中附上 README.md，告訴我們該怎麼 build，該怎麼執行，還有怎麼調整櫃檯數量的設定。
- 整份 code 不算 framework 產生的東西，應該不會超過 500 行。依照使用程式語言的不同，可能會有些差異，如果是 dynamic type 如 javascript，應該在 100 行左右。如果評估會超過，可以想想簡化的方法，或來信討論清楚規格。

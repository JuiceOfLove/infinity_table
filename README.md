# CRUD‐таблица с бесконечной подгрузкой (Infinite Loader)

Проект на **React TS + MobX + Tailwind**:
- **Динамическая таблица**
- **Бесконечная подгрузка**
- **Форма создания новой записи**
- **API**
- **Структура FSD**
- **Тесты**

---

## 📁 Структура проекта
```
/
├── db.json
├── package.json
├── vite.config.ts
├── vitest.config.ts
│
└── src
├── assets
│ └── styles
│ └── global.css
│
├── app
│ └── store.ts
│
├── entities
│ └── record
│ ├── api.ts
│ └── types.ts
│
├── features
│ ├── RecordForm
│ │ ├── model
│ │ │ ├── formStore.ts
│ │ │ └── formStore.test.ts
│ │ └── ui
│ │ └── RecordForm.tsx
│ │
│ └── TableInfiniteLoad
│ ├── model
│ │ ├── tableStore.ts
│ │ └── tableStore.test.ts
│ └── ui
│ └── Table.tsx
│
├── pages
│ └── TablePage
│ └── TablePage.tsx
│
├── shared
│ ├── lib
│ │ └── httpClient.ts
│ └── ui
│ ├── Button.tsx
│ ├── Input.tsx
│ └── Loader.tsx
│
├── global.css
└── main.tsx
```

---

## 🧩 Как запустить

```bash
   npm install
```

```bash
   npx json-server --watch db.json --port 3001
```


```bash
   npm run dev
```

```bash
   npm test
```

---

## 📝 О MobX

- **Почему MobX?**
  1. MobX позволяет очень просто сделать реактивные объекты без лишнего boilerplate.
  2. `makeAutoObservable(this)` автоматически делает все поля и методы реактивными. Компонент-наблюдатель (`observer`) сам подписывается на изменения.
  3. Между формой и таблицей легко передавать данные через один общий `rootStore`.
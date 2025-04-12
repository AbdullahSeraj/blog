## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AbdullahSeraj/blog.git
cd blog
```

### 2. Install Dependencies

```bash
npm install
```

or using Yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

or:

```bash
yarn dev
```

By default, the app will be running at [http://localhost:5173](http://localhost:5173)

---

## 🧪 Running Tests with Jest

If Jest is already configured, run:

```bash
yarn jest
```

or:

```bash
npx jest
```

> If Jest is not yet installed:

```bash
yarn add --dev jest ts-jest @types/jest
```

Then initialize it:

```bash
npx ts-jest config:init
```

---

## 📜 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Build the app for production |
| `npm run preview` | Preview the production build |
| `yarn jest`       | Run unit tests using Jest    |

---

## 📦 Build for Production

```bash
npm run build
```

Then preview with:

```bash
npm run preview
```

---

## 🙌 Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## ✅ Requirements

- Node.js >= 16.x
- npm or Yarn
- Modern browser (for development)

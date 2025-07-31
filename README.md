# web-sauce-playwright-js
Automated end-to-end testing project using Playwright with JavaScript. This repository contains a suite of UI tests for validating user workflows on Sauce Demo, a sample web application commonly used for automation practice.

---

## 📁 Project Structure

```
web-sauce-playwright-js/
├── tests/                  # All Playwright test specs
│   ├── example.spec.js     # Example Playwright test
│   └── sauce-demo-home.spec.js  # Sauce Demo home page test
├── playwright.config.js    # Playwright configuration
├── package.json            # Project metadata and scripts
├── README.md               # Project documentation
└── ...                     # Other config or helper files
```

---

## 🔧 Tech Stack
- **Framework:** Playwright
- **Language:** JavaScript
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Assertion & Reporting:** Built-in Playwright assertions and HTML reports

---

## 🚀 How to Install

```sh
npm install
```

---

## 🧪 How to Run

Run all tests:
```sh
npx playwright test
```

Run a specific test (e.g., Sauce Demo home):
```sh
npx playwright test tests/sauce-demo-home.spec.js
```

Run tests in headed mode:
```sh
npx playwright test --headed
```

View HTML report:
```sh
npx playwright show-report
```

---

## 📊 Sample HTML Report

After running your tests, Playwright generates an HTML report. To view it, use:

```sh
npx playwright show-report
```

This will open a browser window with a detailed, interactive report of your test results, including passed/failed tests, traces, and screenshots (if configured).

---

For more details, see the [Playwright documentation](https://playwright.dev/).

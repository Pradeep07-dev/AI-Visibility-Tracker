# 🤖 AI Visibility Tracker

A minimal **AI visibility tracker** tool to track how often brands appear in AI-generated answers for category-based queries — built with **Node.js / TypeScript**, **React / Typescript**, integrated with **OpenAI**'s LLM.

---

## 🌟 Features

- Enter a category (e.g. AI video editing tools)
- Enter brands to track (comma-separated)
- Query an AI model with multiple prompts
- Analyze AI responses to extract:
  - Brand mentions
  - AI visibility %
  - Citation share %
- Interactive dashboard showing:
  - Key metrics per brand
  - Brand leaderboard
  - Prompt-level breakdown of mentions.

---

## 🧠 Tech Stack

| Layer        | Technology                       |
| ------------ | -------------------------------- |
| Frontend     | React + TypeScript + TailwindCSS |
| Backend      | Node.js + TypeScript + Express   |
| LLM Provider | OpenAI (`gpt-4o-mini`)           |
| Deployment   | Vercel / Render                  |

---

## 📦 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pradeep07-dev/AI-Visibility-Tracker.git
cd ai-visibility-tracker

```

### 2️⃣ Install Dependencies Repository

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3️⃣ Environment Variables

Create a .env file inside the backend folder:

```bash
# Server
PORT=3000


# OpenAI
OPENAI_KEY=sk-your-openai-key

# CORS
FRONTEND_ORIGIN=http://localhost:5173
```

### 4️⃣ Run the Backend

```bash
cd backend
npm run dev
```

#### For production:

```bash
npm run build
npm start
```

### 5️⃣ Run the Frontend

```bash
cd frontend
npm run dev
```

---

## ⚙️ Key Design Decisions

### 1️⃣ Brands are Mandatory

To avoid complexity and incorrect word extraction, brands must be provided by the user.

This ensures:

- Accurate counting
- No random keyword matches
- Clear comparison between known competitors

### 2️⃣ Mentions vs Prompts

A brand can be mentioned multiple times in a single prompt.

### 3️⃣ Stateless Backend for Faster Iteration

The backend is stateless and does not persist analysis results.

## 🔧 What I’d Improve With More Time

If given more time, I would focus on the following improvements to make this production-ready and more valuable for real users.

- More Accurate Brand Detection (High Impact).
- Prompts Weighing & Include more prompts.
- Historical Tracking & Trends.
- Multi-Model Comparison.
- UX & Product Polish.

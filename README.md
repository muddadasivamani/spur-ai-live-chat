Starter Folder Structure
spur-ai-chat/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── chat.ts
│   │   ├── services/
│   │   │   ├── chat.service.ts
│   │   │   └── llm.service.ts
│   │   ├── db/
│   │   │   ├── prisma.ts
│   │   │   └── schema.prisma
│   │   ├── utils/
│   │   │   └── validate.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── lib/api.ts
│   │   ├── components/Chat.svelte
│   │   └── routes/+page.svelte
│   ├── package.json
│   └── svelte.config.js
│
└── README.md




# spur-ai-live-chat
A mini AI-powered live chat support agent built with TypeScript, Svelte, and a real LLM, simulating a production-ready customer support workflow.


# Spur AI Live Chat Agent

This project is a mini AI-powered customer support chat widget built as a take-home
assignment for the Founding Full-Stack Engineer role at Spur.

## Tech Stack
- Backend: Node.js, TypeScript, Express
- Frontend: SvelteKit
- Database: PostgreSQL (Prisma)
- LLM: OpenAI
- Deployment: Render + Vercel

## Features
- Live chat UI with typing indicator
- Session-based conversation persistence
- Chat history restored on reload
- Real LLM-powered responses
- Robust input validation and error handling

## Running Locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev

### Frontend
```bash
cd frontend
npm install
npm run dev
OPENAI_API_KEY=your_key
DATABASE_URL=postgresql://...
LLM Notes

Provider: OpenAI

Prompt includes store FAQ + guardrails

Last messages included for context

Token limits applied for cost control

Trade-offs & Future Improvements

Streaming responses

Redis for session caching

Tool calling for order status / refunds

Admin dashboard

Multi-channel support

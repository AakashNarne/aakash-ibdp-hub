import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Dev-server proxy for FreeLLMAPI (github.com/tashfeenahmed/freellmapi).
 * When the app is running via `npm run dev` on http://localhost:5173,
 * requests to `/api/llm/*` are forwarded to the local FreeLLMAPI container
 * on http://localhost:3001/v1/*. This sidesteps browser CORS and lets the
 * chat component fetch as if from the same origin.
 *
 * On Vercel prod, this proxy does not exist — the AI chat panel detects
 * that gracefully and shows a "start FreeLLMAPI locally" message.
 */
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/api/llm': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/llm/, '/v1'),
      },
    },
  },
})

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/chat-app",
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
})

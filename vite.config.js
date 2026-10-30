import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repository name for GitHub Pages
// (https://<user>.github.io/<repo>/). Repo name assumed: "portfolio".
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Abdullah/", // <-- Add this line (Use your GitHub repo name)
  plugins: [react()],
});


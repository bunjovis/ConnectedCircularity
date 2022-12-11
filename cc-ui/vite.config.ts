import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/mtAuth':
        'https://test-auth.materiaalitori.fi/connect/token?grant_type=client_credentials&scope=ym-tietoalusta-api',
    },
  },
});

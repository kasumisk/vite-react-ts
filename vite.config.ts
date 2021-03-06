import { defineConfig, resolveConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './public',
  plugins: [reactRefresh()],
  resolve: {
    alias:{
      '/@': resolve(__dirname, 'src')
    }
  },
  css: {
    modules: {
      scopeBehaviour: 'local'
    }
  }

})

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
    vueJsx()
=======
    vueJsx({
      transformOn: true,
      mergeProps: true,
    })
>>>>>>> ccae82f (feat: vite + tsx)
  ]
})

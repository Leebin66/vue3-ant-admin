import { defineConfig } from 'vite' // 代码提示支持
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('mode', mode)
  console.log('process.env.VITE_APP_TITLE', process.env.VITE_APP_TITLE)
  return defineConfig({
    plugins: [
      vue(),
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
        globalComponentsDeclaration: true
      }),
    ],
    alias: { // 别名
      "@": path.resolve(__dirname, "src"), 
      "views": path.resolve(__dirname, "src/views")
    },
    server: {
      host: '0.0.0.0' // 新增内容
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局引入变量和 mixin
          additionalData: `
            @import "@/assets/scss/variable.scss";
            @import "@/assets/scss/mixin.scss";
          `,
        },
      },
    }
  })
}

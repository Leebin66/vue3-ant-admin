import { defineConfig } from 'vite' // 代码提示支持
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents, { AntDesignVueResolver, ElementPlusResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('mode', mode)
  console.log('process.env.VITE_APP_TITLE', process.env.VITE_APP_TITLE)
  return defineConfig({
    plugins: [
      vue(),
      // 按需引入框架组件
      ViteComponents({
        customComponentResolvers: [ElementPlusResolver(), AntDesignVueResolver()],
        globalComponentsDeclaration: true
      })
    ],
    resolve: {
      alias: { // 别名
        "@": path.resolve(__dirname, "src"),
        "views": path.resolve(__dirname, "src/views"),
        "comps": path.resolve(__dirname, "src/components"),
        "hooks": path.resolve(__dirname, "src/hooks"),
      }
    },    
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
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

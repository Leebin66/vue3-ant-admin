# Vue 3 + Typescript + Vite

## 解决vite.config.ts 文件引入 path 模块 找不到的问题

yarn add @types/node -D

## 项目使用 ant-design-vue UI框架

yarn add ant-design-vue@next -S

## 项目使用 sass

yarn add sass
yarn add sass-loader -D
yarn add node-sass -D

## 项目使用 vue-router

yarn add vue-router@4

## 安装 vite-plugin-mock 插件（提供本地和生产模拟服务）

- 安装：yarn add mockjs vite-plugin-mock --dev
- 编写Mock用例：
- import ViteComponents, { AntDesignVueResolver, ElementPlusResolver } from 'vite-plugin-components'

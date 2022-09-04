import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    base: '/ViteNotes/',
    dest: './dist',
    repo:
        'https://github.com/changhengheng/ViteNotes',
    theme: defaultTheme({
        navbar: [
            '/viteFjq/README.md',
        ],
        sidebar: [
            '/viteFjq/README.md',
        ],
    }),
})
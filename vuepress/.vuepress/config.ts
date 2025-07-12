import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/",
  title: "FE-JS/TS系列",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "./favicon.ico" }]],
  port: 8000,
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "wangtao",
    docsRepo: "https://github.com/W-HanYu/FE-JS-TS.git",
    docsBranch: "master",
    docsDir: "example",
    lastUpdatedText: "",
    subSidebar: "auto",
    commentConfig: {
      type: "valine",
      options: {
        appId: "ruETVFJr7b2RWtzUVt27xcgl-gzGzoHsz", // your appId
        appKey: "zQaIwV58xzD8AS6GKTh55KyD", // your appKey
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },

    series: {
      "/docs/you-dont-know-js/volume-1/": [
        {
          text: "作用域和闭包",
          children: [
            "rollup-1",
            "rollup-2",
            "rollup-3",
            "rollup-4",
            "rollup-5",
            "scope-closures-appA",
            "scope-closures-appB",
            "scope-closures-appC",
          ],
        },
        {
          text: "this与对象原型",
          children: [
            "rollup-6",
            "rollup-7",
            "rollup-8",
            "rollup-9",
            "rollup-10",
            "rollup-11",
            "this-object-prototype-appA",
          ],
        },
      ],
      "/docs/you-dont-know-js/volume-2/": [
        {
          text: "类型与语法",
          children: [
            "types-grammar-1",
            "types-grammar-2",
            "types-grammar-3",
            "types-grammar-4",
            "types-grammar-5",
            "types-grammar-apA",
          ],
        },
        {
          text: "异步与性能",
          children: [
            "async-performance-ch1",
            "async-performance-ch2",
            "async-performance-ch3",
            "async-performance-ch4",
            "async-performance-ch5",
            "async-performance-ch6",
            "async-performance-apA",
            "async-performance-apB",
          ],
        },
      ],
      "/docs/you-dont-know-ts/": [
        {
          text: "第一卷:基础概念篇",
          children: [
            "base-1",
            "base-2",
            "base-3",
            "base-4",
            "base-5",
            "base-6",
            "base-7",
            "base-8",
            "base-9",
            "base-10",
            "base-11",
            "base-12",
            "base-13",
            "base-14",
            "base-15",
            "base-16",
            "base-17",
          ],
        },
        {
          text: "第二卷:原理进阶篇",
          children: [
            "Advanced-1",
            "Advanced-2",
            "Advanced-3",
            "Advanced-4",
            "Advanced-5",
          ],
        },
        {
          text: "提高卷：拓展阅读",
          children: ["Extended-article-1"],
        },
      ],
      "/docs/graphicalNetwork/": [
        {
          text: "基础篇",
          children: ["basic-1", "basic-2", "basic-3"],
        },
        {
          text: "HTTP篇",
          children: [
            "http-interview",
            "http-optimize",
            "https-rsa",
            "https-ecdhe",
            "https-optimize",
            "http-2",
            "http-3",
            "http-rpc",
            "http-websocket",
          ],
        },
        {
          text: "TCP篇",
          children: [
            "tcp-interview",
            "tcp-feature",
            "tcp-dump",
            "tcp-queue",
            "tcp-optimize",
            "tcp-stream",
            "tcp-isn-deff",
            "tcp-syn",
            "tcp-challenge-ack",
            "tcp-out-of-order-fin",
          ],
        },
        {
          text: "IP篇",
          children: ["ip-base", "ip-ping", "ip-ping_io"],
        },
      ],
      "/docs/challenge/": [
        {
          text: "第一章:简单",
          children: [
            "1.1.hello-world",
            "1.2.Pick",
            "1.3.Awaited",
            "1.4.Readonly",
            "1.5.Tuple-to-object",
            "1.6.First-of-array",
            "1.7.Length-of-Tuple",
            "1.8.concat",
            "1.9.exclude",
            "1.10.if",
            "1.11.includes",
            "1.12.parameters",
            "1.13.push",
            "1.14.unshift",
          ],
        },
        {
          text: "第二章:中等",
          children: ["2.1.Get-Return-Type", "2.2.omit", "2.3.Readonly2"],
        },
        {
          text: "第三章:困难",
          children: [
            "hard/Simple-Vue",
            "hard/Simple-Vue",
            "hard/Simple-Vue",
            "hard/Simple-Vue",
          ],
        },
      ],
      "/docs/ts-type-gymnastics/": [
        {
          text: "TypeScript 体操训练营",
          children: ["Routine1:pattern-matching-for-extraction"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },

      {
        text: "JS",
        children: [
          { text: "上卷", link: "/docs/you-dont-know-js/volume-1/rollup-1" },
          {
            text: "中卷",
            link: "/docs/you-dont-know-js/volume-2/types-grammar-1",
          },
          { text: "下卷", link: "/docs/you-dont-know-js/rollup-1" },
        ],
      },
      {
        text: "TS",
        children: [
          { text: "基础篇", link: "/docs/you-dont-know-ts/base-1" },
          { text: "进阶篇", link: "/docs/you-dont-know-ts/Advanced-1" },
          {
            text: "扩展阅读篇",
            link: "/docs/you-dont-know-ts/Extended-article-1",
          },
        ],
      },
      {
        text: "TS类型体操训练营",
        link: "/docs/ts-type-gymnastics/Routine1:pattern-matching-for-extraction",
      },
      {
        text: "图解网络",
        link: "/docs/graphicalNetwork/basic-1",
      },
      {
        text: "挑战",
        children: [
          { text: "简单", link: "/docs/challenge/1.1.hello-world.html" },
          { text: "中等", link: "/docs/challenge/2.1.Get-Return-Type" },
          { text: "困难", link: "/docs/challenge/3.1.Simple-Vue" },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/W-HanYu/FE-JS-TS",
      },
    ],

    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 这是一个专注研究JS/TS的网站，在这里你可以全面深入学习JS/TS相关知识，你还可以挑战TS内置体操类型原理实现的相关题目，快来学习吧`,
          style: "font-size: 12px;",
        },
        { type: "hr" },
        { type: "title", content: "QQ 群" },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1453300745</li>
            <li>QQ群2：1453300745</li>
            <li>QQ群3：1453300745</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        { type: "hr" },
        { type: "title", content: "GitHub" },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/W-HanYu/FE-JS-TS/issues">Issues<a/></li>
            <li><a href="https://github.com/W-HanYu/FE-JS-TS/discussions/17">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        { type: "hr" },
        {
          type: "buttongroup",
          children: [{ text: "打赏", link: "/FE-JS-TS/docs/others/donate" }],
        },
      ],
    },

    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});

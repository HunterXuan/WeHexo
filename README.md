# WeHexo
## 这是什么
前一阵看有一个 WeTypecho 挺火的，搜了下没看到有 Hexo 转小程序的，难道是 Hexo 太冷门了？出于好奇，尝试了下，于是有这个代码仓库。

## 怎么实现的
Hexo 博客安装 [yscoder/hexo-generator-restful](https://github.com/yscoder/hexo-generator-restful) 插件，生成 Restful 风格的 json 数据，其它的就是一些简单的前端了。
本项目使用的 [sbfkcel/towxml](https://github.com/sbfkcel/towxml)，将 HTML 内容转成小程序可使用的 WXML 格式内容。

## 可以改进的地方
大概有以下几点吧：
1. UI 方面可以改得适合大众审美一点
2. yscoder/hexo-generator-restful 转 HTML 内容时，图片链接需要修复
3. 文章内插代码等样式问题

## 什么时候改进呢？
大概是不会改进了

## 为什么呢？
因为我突然觉得没什么意义，当时用 Hexo 来搭博客的一个原因，就是想化繁为简，轻松码字。而且将 HTML 内容搬到微信小程序上，确实要做太多的事情了，与其花费这些时间，不如把垃圾博客的内容整理下，发微信公众号，而且公众号的文章可以被搜索到。那么我顺便再奉上我的垃圾公众号吧！

![猎人杂货铺 • 微信公众号](https://hunterx.xyz/images/wechat-qrcode.jpg "猎人杂货铺 • 微信公众号")

## 目前的效果
![demo](https://github.com/HunterXuan/WeHexo/blob/master/demo.gif "demo")

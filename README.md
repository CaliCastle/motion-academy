## Cali 前端动效魔法学院

![Poster](./app/opengraph-image.png)

克隆到本地以后安装 npm 依赖：
```bash
pnpm install
# 或者
npm install
```

然后开启本地服务器：
```bash
pnpm dev
# 或者
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可看到页面。

### 目录引导

我们可以看到 `app/lessons` 目录里有着对应的每节课的源码：

- 可以在浏览器访问 http://localhost:3000/lessons/n 即可查看到第**n**节可的初始效果。
  - 如果你想跟着视频教学一起来的话，可以打开 `app/lessons/n/page.tsx` 来跟着教学一起实现。
- 可以在浏览器访问 http://localhost:3000/lessons/n/final 即可查看到第**n**节课的最终效果。
    - 如果你只想看最终实现的代码，可以打开 `app/lessons/n/final/page.tsx` 即可。

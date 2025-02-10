<div align="center">
  <img src="ollama-nextjs-ui.gif">
</div>

<h1 align="center">
  Ollama LLMs 的全功能 Web 界面
</h1>

<div align="center">
  
![GitHub Repo stars](https://img.shields.io/github/stars/jakobhoeg/nextjs-ollama-llm-ui)
  
</div>

**快速**、**本地化**甚至**离线**运行大型语言模型。
这个项目旨在为您提供最简单的 LLMs 使用方式。无需繁琐的设置！

> 这是一个业余项目。如果您想要更完整的体验，建议看看[这个项目](https://github.com/open-webui/open-webui)。

# 特性 ✨

- **美观直观的界面：** 灵感来自 ChatGPT，提供相似的用户体验。
- **完全本地化：** 聊天记录存储在本地存储中，无需运行数据库。
- **完全响应式：** 在手机上聊天与桌面一样方便。
- **简单设置：** 无需繁琐的设置。只需克隆仓库即可开始使用！
- **代码语法高亮：** 包含代码的消息会高亮显示，方便查看。
- **轻松复制代码块：** 一键复制高亮显示的代码。
- **下载/拉取和删除模型：** 直接在界面中轻松下载和删除模型。
- **切换模型：** 快速点击切换不同模型。
- **聊天历史：** 聊天记录会被保存并方便访问。
- **明暗主题：** 支持切换明暗主题模式。

# 预览

https://github.com/jakobhoeg/nextjs-ollama-llm-ui/assets/114422072/08eaed4f-9deb-4e1b-b87a-ba17d81b9a02

# 系统要求 ⚙️

使用此 Web 界面需要满足以下要求：

1. 下载并运行 [Ollama](https://ollama.com/download)，或在 Docker 容器中运行。查看[文档](https://github.com/ollama/ollama)获取说明。
2. 需要 Node.js (18+) 和 npm。[下载](https://nodejs.org/en/download)

# Docker 快速开始

## 使用预构建的 Docker 镜像安装

- **如果 Ollama 在您的电脑上运行**：

```
docker run -d -p 8080:3000 --add-host=host.docker.internal:host-gateway -e OLLAMA_URL=http://host.docker.internal:11434 --name nextjs-ollama-ui --restart always jakobhoeg/nextjs-ollama-ui:latest
```

- **如果 Ollama 在不同于 Web UI 的服务器上**：

```
docker run -d -p 8080:3000 --add-host=host.docker.internal:host-gateway -e OLLAMA_URL=http://example.com:11434 --name nextjs-ollama-ui --restart always jakobhoeg/nextjs-ollama-ui:latest
```

> 您也可以根据需要更改默认的 8080 端口。

# 本地安装 📖

[![Packaging status](https://repology.org/badge/vertical-allrepos/nextjs-ollama-llm-ui.svg?columns=3)](https://repology.org/project/nextjs-ollama-llm-ui/versions)

使用支持的包管理器中的预构建包来运行 Web 界面的本地环境。
或者您可以按照以下说明从源代码安装。

> [!注意]  
> 如果您的前端运行在 `http://localhost` 或 `http://127.0.0.1` 以外的地址，您需要将 OLLAMA_ORIGINS 设置为您的前端 URL。
>
> 这也在[文档](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server)中说明：
>
> `Ollama 默认允许来自 127.0.0.1 和 0.0.0.0 的跨域请求。可以通过 OLLAMA_ORIGINS 配置其他来源`

## 从源代码安装

**1. 通过命令提示符将仓库克隆到您电脑上的目录：**

```
git clone https://github.com/jakobhoeg/nextjs-ollama-llm-ui
```

**2. 打开文件夹：**

```
cd nextjs-ollama-llm-ui
```

**3. 将 `.example.env` 重命名为 `.env`：**

```
mv .example.env .env
```

**4. 如果您的 Ollama 实例没有运行在默认 IP 地址和端口上，请更改 .env 文件中的变量以适应您的情况：**

```
OLLAMA_URL="http://localhost:11434"
```

**5. 安装依赖：**

```
npm install
```

**6. 启动开发服务器：**

```
npm run dev
```

**7. 访问 [localhost:3000](http://localhost:3000) 并开始与您喜欢的模型聊天！**

# 即将推出的功能

这是即将推出功能的待办事项列表。

- ✅ 语音输入支持
- ✅ 代码语法高亮
- ✅ 能够在提示中发送图片以利用视觉语言模型
- ✅ 能够重新生成回复
- ⬜️ 导入和导出聊天记录

# 技术栈

[NextJS](https://nextjs.org/) - Web 的 React 框架

[TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架

[shadcn-ui](https://ui.shadcn.com/) - 使用 Radix UI 和 Tailwind CSS 构建的 UI 组件

[shadcn-chat](https://github.com/jakobhoeg/shadcn-chat) - NextJS/React 项目的聊天组件

[Framer Motion](https://www.framer.com/motion/) - React 的动画库

[Lucide Icons](https://lucide.dev/) - 图标库

# 引用

本项目基于 [nextjs-ollama-llm-ui](https://github.com/jakobhoeg/nextjs-ollama-llm-ui) 开源项目进行二次开发，主要改进包括：

- 优化了用户体验
- 修复了已知 bug
- 修复了代码警告
- 完整的中文本地化支持
- 优化了图片显示比例
- 改进了移动端适配
- 优化了主题切换体验

感谢原作者 [@jakobhoeg](https://github.com/jakobhoeg) 的开源贡献。

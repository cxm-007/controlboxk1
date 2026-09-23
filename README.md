# 数据转换盒子 · 产品宣传网站

多协议工业数据转换网关的产品介绍静态网站。纯 HTML / CSS / JavaScript 构建，无任何外部依赖与构建步骤。

## 产品简介

数据转换盒子是一款面向工业自动化场景的多协议数据转换网关：

- **六大接口**：USB（主机/从机双模）、以太网 RJ45、RS485（光电隔离）、RS232、IO（3.3V）、CONFIG/DEBUG
- **全协议覆盖**：Modbus RTU/TCP（主站+从站）、Profinet（从站）、EtherNet/IP（从站）、TCP/IP Server/Client、UDP
- **内置数据编辑**：前缀/后缀、字符插入/删除、查找替换、字段提取，无需修改 PLC 程序
- **简单易用**：Putty 终端中文菜单配置，5 分钟上手；35mm 标准 DIN 导轨安装

## 网站结构

```
宣传网站/
├── index.html          # 单页站点（全部内容）
├── .nojekyll           # GitHub Pages 跳过 Jekyll 处理
├── assets/
│   ├── css/style.css   # 样式（深色工业科技风，响应式）
│   ├── js/main.js      # 交互（导航、进场动画、图片放大等）
│   ├── favicon.ico
│   └── img/            # 产品图、接线场景图、尺寸图（已压缩）
└── downloads/          # 规格书、使用指南、协议说明、GSD/EDS 配置文件
```

## 页面内容

- 首屏总览 + 痛点分析
- 六大接口与协议矩阵
- 核心亮点（USB 双模 / Modbus 主从双向 / 数据编辑 / 工业可靠性）
- 5 个典型应用场景（含接线示意图）
- 三步配置说明
- 规格参数表 + 尺寸图
- 同价位竞品功能对比
- 资料下载（GSD / EDS / PDF 文档）
- 常见问题 FAQ
- 批量采购联系

## 本地预览

直接双击 `index.html` 即可在浏览器打开；或启动本地服务器：

```bash
cd 宣传网站
python -m http.server 8080
# 浏览器访问 http://localhost:8080
```

## GitHub Pages 部署

1. 将本目录推送至 GitHub 仓库
2. 仓库 Settings → Pages → Source 选择 `main` 分支 / `(root)` 目录
3. 访问 `https://<用户名>.github.io/<仓库名>/`

---

技术支持：explore-E@foxmail.com

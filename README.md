<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Tech Navigator

Tech Navigator 是一个现代化的开发者工具导航站，基于 Angular 和 TailwindCSS 构建。它帮助开发者快速找到工作流所需的工具，支持分类筛选、关键词搜索以及国际化（中/英）切换。

## ✨ 功能特性

- 🛠 **精选工具**: 汇集开发、设计、运维、AI 等领域的优质工具。
- 🔍 **智能搜索**: 支持通过名称、描述或标签进行快速检索。
- 🏷️ **分类管理**: 清晰的分类结构（Code & Dev, Design, DevOps 等）。
- 🌐 **国际化支持**: 默认中文，支持中英文一键切换。
- 📱 **响应式设计**: 完美适配桌面端和移动端。
- 🎨 **现代 UI**: 基于 TailwindCSS 打造的深色模式界面。

## 📖 数据录入指南

本项目的数据存储在 `src/data` 目录下的 TypeScript 文件中。

### 1. 录入新分类 (Category)

如果要添加一个新的工具分类：

1.  **打开数据文件**:
    编辑 `src/data/categories.data.ts`。

2.  **添加分类对象**:
    在 `CATEGORIES` 数组中追加一个新的对象，需符合 `Category` 接口：
    ```typescript
    {
      name: 'New Category Name', // 这里填写分类的英文名称（也是翻译的 Key）
      iconSvg: 'M12 2...'        // SVG 路径字符串 (path 的 d 属性值)
    }
    ```

3.  **添加多语言翻译**:
    分别打开 `src/assets/i18n/zh.json` 和 `src/assets/i18n/en.json`。
    添加对应的翻译键值对：
    ```json
    // zh.json
    {
      "New Category Name": "新的分类名称"
    }
    ```

### 2. 录入新导航项 (Navigation Item)

如果要添加一个新的工具或资源：

1.  **打开数据文件**:
    编辑 `src/data/navigation.data.ts`。

2.  **添加导航项对象**:
    在 `NAVIGATION_DATA` 数组中追加一个新的对象：
    ```typescript
    {
      id: "tool-id",                      // 唯一标识符
      name: "TOOLS.TOOL_ID.NAME",         // 名称的 i18n Key
      description: "TOOLS.TOOL_ID.DESC",  // 描述的 i18n Key
      url: "https://example.com",         // 工具链接
      iconSvg: "...",                     // SVG 图标路径
      category: "Code & Dev",             // 必须匹配已有的分类名称
      tags: ["TAGS.TAG1", "TAGS.TAG2"]    // 标签的 i18n Keys
    }
    ```

3.  **添加多语言翻译**:
    在 `src/assets/i18n/zh.json` 和 `src/assets/i18n/en.json` 中添加对应的内容。

    *   **工具详情 (TOOLS)**:
        ```json
        "TOOLS": {
          "TOOL_ID": {
            "NAME": "工具名称",
            "DESC": "工具的一句话简短描述"
          }
        }
        ```

    *   **标签 (TAGS)**:
        ```json
        "TAGS": {
          "TAG1": "标签1",
          "TAG2": "标签2"
        }
        ```

## 🚀 本地运行

**前置要求:**  Node.js 环境

1.  安装依赖:
    ```bash
    npm install
    ```

2.  启动开发服务器:
    ```bash
    npm run dev
    ```
    应用将在 `http://localhost:4200/` 启动。

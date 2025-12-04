import { NavigationItem } from "../models/navigation-item.model";

export const NAVIGATION_DATA: NavigationItem[] = [
  {
    id: "vscode",
    name: "TOOLS.VSCODE.NAME",
    description: "TOOLS.VSCODE.DESC",
    url: "https://code.visualstudio.com/",
    iconSvg:
      "M 20.25 2.25 L 14.25 0 L 9 3.75 L 4.5 0 L 0 5.25 L 3.75 9 L 0 12.75 L 4.5 18 L 9 14.25 L 14.25 18 L 20.25 15.75 V 2.25 Z M 15.75 13.5 L 11.25 11.25 V 6.75 L 15.75 4.5 V 13.5 Z",
    category: "Code & Dev",
    tags: ["TAGS.CODE", "TAGS.EDITOR", "TAGS.IDE", "TAGS.MICROSOFT"],
  },
  {
    id: "figma",
    name: "TOOLS.FIGMA.NAME",
    description: "TOOLS.FIGMA.DESC",
    url: "https://www.figma.com/",
    iconSvg:
      "M 7.5,7.5 m 3.75,0 a 3.75,3.75 0 1,1 -7.5,0 a 3.75,3.75 0 1,1 7.5,0 M 3.75,11.25 m 3.75,0 a 3.75,3.75 0 1,1 -7.5,0 a 3.75,3.75 0 1,1 7.5,0 M 3.75,18.75 m 3.75,0 a 3.75,3.75 0 1,1 -7.5,0 a 3.75,3.75 0 1,1 7.5,0 M 11.25,15 m 3.75,0 a 3.75,3.75 0 1,1 -7.5,0 a 3.75,3.75 0 1,1 7.5,0 M 11.25,7.5 m 3.75,0 a 3.75,3.75 0 1,1 -7.5,0 a 3.75,3.75 0 1,1 7.5,0",
    category: "Design & Creative",
    tags: ["TAGS.UI", "TAGS.UX", "TAGS.DESIGN", "TAGS.PROTOTYPE"],
  },
  {
    id: "postman",
    name: "TOOLS.POSTMAN.NAME",
    description: "TOOLS.POSTMAN.DESC",
    url: "https://www.postman.com/",
    iconSvg:
      "M 21.6 8.52 L 19.32 6.24 C 18.36 5.28 17.04 4.8 15.6 4.8 C 12.72 4.8 10.32 7.08 10.08 9.96 C 9.72 9.96 9.36 10.08 9 10.32 C 7.8 11.52 7.8 13.44 9 14.64 L 11.28 16.92 C 12.24 17.88 13.56 18.36 15 18.36 C 17.88 18.36 20.28 16.08 20.52 13.2 C 20.88 13.2 21.24 13.08 21.6 12.84 C 22.8 11.64 22.8 9.72 21.6 8.52 Z M 15 16.2 C 14.16 16.2 13.32 15.84 12.72 15.24 L 10.44 12.96 C 9.84 12.36 9.84 11.4 10.44 10.8 C 11.04 10.2 12 10.2 12.6 10.8 L 15 13.2 L 17.4 10.8 C 18 10.2 18.96 10.2 19.56 10.8 C 20.16 11.4 20.16 12.36 19.56 12.96 L 17.28 15.24 C 16.68 15.84 15.84 16.2 15 16.2 Z",
    category: "Code & Dev",
    tags: ["TAGS.API", "TAGS.TESTING", "TAGS.BACKEND", "TAGS.REQUEST"],
  },
  {
    id: "notion",
    name: "TOOLS.NOTION.NAME",
    description: "TOOLS.NOTION.DESC",
    url: "https://www.notion.so/",
    iconSvg:
      "M 5.25 3 L 5.25 19.5 L 8.25 19.5 L 8.25 8.25 L 14.25 19.5 L 17.25 19.5 L 17.25 3 L 14.25 3 L 14.25 14.25 L 8.25 3 L 5.25 3 Z",
    category: "Productivity & Comms",
    tags: ["TAGS.NOTES", "TAGS.DOCS", "TAGS.TASKS", "TAGS.ORGANIZATION"],
  },
  {
    id: "github",
    name: "TOOLS.GITHUB.NAME",
    description: "TOOLS.GITHUB.DESC",
    url: "https://github.com/",
    iconSvg:
      "M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.78 8.2 11.35.6.11.82-.26.82-.58v-2.05c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.82 1.23 1.82 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.65-.3-5.43-1.33-5.43-5.9 0-1.3.47-2.36 1.23-3.19-.12-.3-.54-1.51.12-3.15 0 0 1-.32 3.28 1.23.95-.26 1.97-.4 2.99-.4s2.04.13 2.99.4c2.28-1.55 3.28-1.23 3.28-1.23.66 1.64.24 2.85.12 3.15.77.83 1.23 1.89 1.23 3.19 0 4.58-2.78 5.6-5.45 5.9.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.58A12.02 12.02 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z",
    category: "Code & Dev",
    tags: [
      "TAGS.GIT",
      "TAGS.VERSION_CONTROL",
      "TAGS.CODE",
      "TAGS.COLLABORATION",
    ],
  },
  {
    id: "docker",
    name: "TOOLS.DOCKER.NAME",
    description: "TOOLS.DOCKER.DESC",
    url: "https://www.docker.com/",
    iconSvg:
      "M23.15 9.22c-.27-.78-.96-1.5-2.2-1.87-.45-.14-.93-.2-1.42-.2-1.2 0-2.3.34-3.1.9-.48-.93-1.15-1.69-2.03-2.28-.88-.59-1.92-.94-3.13-.94-2.88 0-5.1 1.52-5.71 3.75H1.43c-.48 0-.87.39-.87.87v3.5c0 .48.39.87.87.87h.52v.54c.16 3.4 2.2 6.09 5.08 6.09 2.82 0 5.09-2.61 5.2-6.12v-.01h.01v-.52h.53c.32 0 .62-.08.89-.2.4 1.15 1.4 2 2.6 2 1.43 0 2.6-1.16 2.6-2.6 0-.56-.18-1.08-.48-1.52 1.3-.13 2.44-.88 2.88-1.96.32-.77.31-1.59-.04-2.3zM7.05 10.61H5.32v-1.7h1.73v1.7zm2.55 0H7.88V8.91h1.73v1.7zm2.56 0h-1.73V8.91h1.73v1.7zm2.55 0h-1.73V8.91h1.73v1.7zm2.56 0h-1.73V8.91h1.73v1.7z",
    category: "DevOps & Cloud",
    tags: [
      "TAGS.CONTAINER",
      "TAGS.DEVOPS",
      "TAGS.DEPLOYMENT",
      "TAGS.VIRTUALIZATION",
    ],
  },
  {
    id: "canva",
    name: "TOOLS.CANVA.NAME",
    description: "TOOLS.CANVA.DESC",
    url: "https://www.canva.com/",
    iconSvg:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.23c-.27.53-1.1.6-1.4.1l-2.03-2.67c-.3-.4-.26-.98.1-1.33l2.2-2.1c.42-.4.42-1.1 0-1.5l-2.2-2.1c-.36-.35-.4-.93-.1-1.33l2.03-2.67c.3-.5 1.13-.43 1.4.1l1.8 3.53c.27.53 0 1.2-.4 1.5l-2.2 2.1c-.42.4-.42 1.1 0 1.5l2.2 2.1c.4.3.67.97.4 1.5l-1.8 3.54zM7.5 16.3c-.4-.4-.4-1.1 0-1.5L9.7 12.7c.36-.35.4-.93.1-1.33L7.77 8.7c-.3-.4-.26-.98.1-1.33l2.2-2.1c.42-.4.42-1.1 0-1.5L7.87 2.27c-.4-.4-1.1-.4-1.5 0l-3.6 3.6c-.4.4-.4 1.1 0 1.5l2.2 2.1c.36.35.4.93.1 1.33L3.04 14.5c-.3.4-.26.98.1 1.33l2.2 2.1c.4.4 1.1.4 1.5 0l1.66-1.63z",
    category: "Design & Creative",
    tags: ["TAGS.GRAPHICS", "TAGS.SOCIAL_MEDIA", "TAGS.PRESENTATION"],
  },
  {
    id: "photoshop",
    name: "TOOLS.PHOTOSHOP.NAME",
    description: "TOOLS.PHOTOSHOP.DESC",
    url: "https://www.adobe.com/products/photoshop.html",
    iconSvg:
      "M16.5 1.5h-9A5.006 5.006 0 002.5 6.5v9a5.006 5.006 0 005 5h9a5.006 5.006 0 005-5v-9a5.006 5.006 0 00-5-5zm-5.63 15.14h-2.55V7.86h2.55c2.34 0 3.51 1.28 3.51 3.39 0 2.12-1.17 3.39-3.51 3.39zm.28-4.75c0-.98-.6-1.5-1.73-1.5h-.82v3.01h.82c1.13 0 1.73-.52 1.73-1.51z",
    category: "Design & Creative",
    tags: ["TAGS.PHOTO_EDITING", "TAGS.GRAPHICS", "TAGS.RASTER", "TAGS.ADOBE"],
  },
  {
    id: "spline",
    name: "TOOLS.SPLINE.NAME",
    description: "TOOLS.SPLINE.DESC",
    url: "https://spline.design/",
    iconSvg:
      "M 12,2.5 L 2,7.5 L 12,12.5 L 22,7.5 L 12,2.5 Z M 2,8.5 L 2,15.5 L 12,21.5 L 22,15.5 L 22,8.5 L 12,13.5 L 2,8.5 Z",
    category: "Design & Creative",
    tags: ["TAGS.3D", "TAGS.DESIGN", "TAGS.WEB", "TAGS.INTERACTIVE"],
  },
  {
    id: "steam",
    name: "TOOLS.STEAM.NAME",
    description: "TOOLS.STEAM.DESC",
    url: "https://store.steampowered.com/",
    iconSvg:
      "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-4.68 16.8c-1.73 0-3.14-1.4-3.14-3.13 0-1.72 1.4-3.13 3.14-3.13 1.73 0 3.13 1.4 3.13 3.13 0 1.72-1.4 3.13-3.13 3.13zm5.76-6.36l-2.15.89c.12.43.2.89.2 1.36 0 .16-.01.31-.03.47l3.28 1.36c.5-.92.78-1.97.78-3.08 0-3.6-2.92-6.52-6.52-6.52-3.6 0-6.52 2.92-6.52 6.52 0 2.9 1.88 5.35 4.47 6.19l1.3-1.94c-1.38-.5-2.37-1.81-2.37-3.35 0-1.97 1.6-3.57 3.57-3.57 1.97 0 3.57 1.6 3.57 3.57 0 1.97-1.6 3.57-3.57 3.57-.12 0-.23-.01-.35-.02l-.75 1.12c.36.04.73.06 1.1.06 4.42 0 8-3.58 8-8s-3.58-8-8-8z",
    category: "Games",
    tags: ["TAGS.GAMES", "TAGS.STORE", "TAGS.PLATFORM", "TAGS.COMMUNITY"],
  },
  {
    id: "epic",
    name: "TOOLS.EPIC.NAME",
    description: "TOOLS.EPIC.DESC",
    url: "https://store.epicgames.com/",
    iconSvg:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-3H9V7h2v6z",
    category: "Games",
    tags: ["TAGS.GAMES", "TAGS.STORE", "TAGS.PLATFORM"],
  },
  {
    id: "wegame",
    name: "TOOLS.WEGAME.NAME",
    description: "TOOLS.WEGAME.DESC",
    url: "https://www.wegame.com.cn/",
    iconSvg:
      "M12 2L2 22h20L12 2zm0 3.5L18.5 19H5.5L12 5.5z",
    category: "Games",
    tags: ["TAGS.GAMES", "TAGS.PLATFORM", "TAGS.TENCENT"],
  },
  {
    id: "ali213",
    name: "TOOLS.ALI213.NAME",
    description: "TOOLS.ALI213.DESC",
    url: "https://www.ali213.net/",
    iconSvg:
      "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    category: "Games",
    tags: ["TAGS.GAMES", "TAGS.COMMUNITY", "TAGS.NEWS"],
  },  
  {
    id: "slack",
    name: "TOOLS.SLACK.NAME",
    description: "TOOLS.SLACK.DESC",
    url: "https://slack.com/",
    iconSvg:
      "M 11.025,3.75 H 8.625 C 7.587,3.75 6.75,4.587 6.75,5.625 V 8.625 H 5.625 C 4.587,8.625 3.75,9.462 3.75,10.5 V 11.025 C 3.75,12.063 4.587,12.9 5.625,12.9 H 8.25 V 15.3 C 8.25,16.338 9.087,17.175 10.125,17.175 H 10.688 C 11.725,17.175 12.562,16.338 12.562,15.3 V 12.562 H 15.3 C 16.338,12.562 17.175,11.725 17.175,10.688 V 10.125 C 17.175,9.087 16.338,8.25 15.3,8.25 H 12.9 V 5.625 C 12.9,4.587 12.063,3.75 11.025,3.75 Z",
    category: "Productivity & Comms",
    tags: [
      "TAGS.COMMUNICATION",
      "TAGS.TEAM",
      "TAGS.CHAT",
      "TAGS.COLLABORATION",
    ],
  },
  {
    id: "todoist",
    name: "TOOLS.TODOIST.NAME",
    description: "TOOLS.TODOIST.DESC",
    url: "https://todoist.com/",
    iconSvg:
      "M20.3 4.7l-1.4-1.4-11.2 11.2 4.2 4.2 8.4-8.4-1.4-1.4-7 7-2.8-2.8 11.2-11.2zM3.7 13.1L2.3 11.7l5.6-5.6 1.4 1.4-5.6 5.6z",
    category: "Productivity & Comms",
    tags: ["TAGS.TASKS", "TAGS.TODO", "TAGS.ORGANIZATION", "TAGS.GTD"],
  },
  {
    id: "raycast",
    name: "TOOLS.RAYCAST.NAME",
    description: "TOOLS.RAYCAST.DESC",
    url: "https://www.raycast.com/",
    iconSvg:
      "M 12 2 L 2 7 L 12 12 L 22 7 L 12 2 Z M 2 17 L 12 22 L 22 17 L 12 12 L 2 17 Z",
    category: "Utilities & Security",
    tags: ["TAGS.LAUNCHER", "TAGS.PRODUCTIVITY", "TAGS.MAC", "TAGS.EFFICIENCY"],
  },
  {
    id: "cleanshot",
    name: "TOOLS.CLEANSHOT.NAME",
    description: "TOOLS.CLEANSHOT.DESC",
    url: "https://cleanshot.com/",
    iconSvg:
      "M 3 5 A 2 2 0 0 1 5 3 L 19 3 A 2 2 0 0 1 21 5 L 21 19 A 2 2 0 0 1 19 21 L 5 21 A 2 2 0 0 1 3 19 Z M 5 5 L 19 5 L 19 19 L 5 19 Z M 12 7 A 5 5 0 1 0 12 17 A 5 5 0 0 0 12 7 Z M 12 9 A 3 3 0 1 1 12 15 A 3 3 0 0 1 12 9 Z",
    category: "Utilities & Security",
    tags: [
      "TAGS.SCREENSHOT",
      "TAGS.SCREEN_RECORDING",
      "TAGS.MAC",
      "TAGS.UTILITY",
    ],
  },
  {
    id: "1password",
    name: "TOOLS.1PASSWORD.NAME",
    description: "TOOLS.1PASSWORD.DESC",
    url: "https://1password.com/",
    iconSvg:
      "M12 2C9.24 2 7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3H9V7c0-1.66 1.34-3 3-3zm-1 9h2v3h-2v-3z",
    category: "Utilities & Security",
    tags: ["TAGS.PASSWORD", "TAGS.SECURITY", "TAGS.MANAGER", "TAGS.PRIVACY"],
  },
  {
    id: "warp",
    name: "TOOLS.WARP.NAME",
    description: "TOOLS.WARP.DESC",
    url: "https://www.warp.dev/",
    iconSvg: "M13.5 2L4 14h6.5l-1 8L19 10h-6.5L13.5 2z",
    category: "Utilities & Security",
    tags: ["TAGS.TERMINAL", "TAGS.CLI", "TAGS.DEVELOPER", "TAGS.RUST"],
  },
  {
    id: "jira",
    name: "TOOLS.JIRA.NAME",
    description: "TOOLS.JIRA.DESC",
    url: "https://www.atlassian.com/software/jira",
    iconSvg:
      "M11.93 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012.07 0zm.01 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zM12 6.36l-5.64 5.64 1.68 1.68L12 9.72l3.96 3.96 1.68-1.68L12 6.36z",
    category: "Business & Finance",
    tags: [
      "TAGS.AGILE",
      "TAGS.PROJECT_MANAGEMENT",
      "TAGS.TICKETS",
      "TAGS.ATLASSIAN",
    ],
  },
  {
    id: "huggingface",
    name: "TOOLS.HUGGINGFACE.NAME",
    description: "TOOLS.HUGGINGFACE.DESC",
    url: "https://huggingface.co/",
    iconSvg:
      "M15.58 11.08c-1.12-1.3-2.68-2.18-4.58-2.18s-3.46.88-4.58 2.18c-.28.32-.21.81.16 1.04.37.23.86.13 1.1-.22.82-.9 1.88-1.4 3.32-1.4s2.5.5 3.32 1.4c.24.35.73.45 1.1.22.37-.23.44-.72.16-1.04zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 10c-.83 0-1.5.67-1.5 1.5S7.67 13 8.5 13s1.5-.67 1.5-1.5S9.33 10 8.5 10zm7 0c-.83 0-1.5.67-1.5 1.5S14.67 13 15.5 13s1.5-.67 1.5-1.5S16.33 10 15.5 10z",
    category: "AI & Data",
    tags: [
      "TAGS.AI",
      "TAGS.MACHINE_LEARNING",
      "TAGS.MODELS",
      "TAGS.NLP",
      "TAGS.OPEN_SOURCE",
    ],
  },
];

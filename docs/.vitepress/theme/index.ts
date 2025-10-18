import Theme from "vitepress/theme"

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx);
  }
}
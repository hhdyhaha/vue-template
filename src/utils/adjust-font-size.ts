export function adjustRootValue() {
  const screenWidth = window.innerWidth;
  let fontSize;

  if (screenWidth <= 750) {
    // 移动端适配，设计稿宽度 750px
    // fontSize = (screenWidth / 750) * 75;
    fontSize = 75;
  } else {
    // PC 端固定值，因为我们的 postcss-pxtorem 配置的 rootValue 是 75
    fontSize = 75;
  }

  // 设置 html 根元素的字体大小
  document.documentElement.style.fontSize = `${fontSize}px`;

  // 添加调试信息
  // console.log('当前屏幕宽度：', screenWidth);
  // console.log('设置的字体大小：', fontSize);
}

// 页面加载和改变窗口大小时都要调用
window.addEventListener('resize', adjustRootValue);
window.addEventListener('DOMContentLoaded', adjustRootValue);
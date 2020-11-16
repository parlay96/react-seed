// https://github.com/GoogleChrome/web-vitals

// Largest Contentful Paint (LCP): 衡量加载体验：为了提供良好的用户体验， LCP 应该在页面首次开始加载后的 2.5 秒内发生。

// First Input Delay (FID): 衡量可交互性，为了提供良好的用户体验，页面的 FID 应当小于 100毫秒。

// Cumulative Layout Shift (CLS):衡量视觉稳定性，为了提供良好的用户体验，页面的CLS应保持小于 0.1。

// https://web.dev/fcp/ First Contentful Paint (FCP)：衡量从页面开始加载到屏幕上呈现页面内容的任何部分的时间

// https://web.dev/time-to-first-byte/  Reduce server response times (TTFB) ：浏览器接收页面内容的第一个字节所花费的时间

const reportWebVitals = (onPerfEntry: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

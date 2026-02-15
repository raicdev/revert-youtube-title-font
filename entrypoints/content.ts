export default defineContentScript({
  matches: ['*://youtube.com/*', '*://www.youtube.com/*'],
  main() {
    const style = document.createElement('style');
    style.textContent = `
      #title > h1 > yt-formatted-string {
        font-family: "YouTube Sans", "Roboto", sans-serif !important;
      }
    `;
    document.head.appendChild(style);
  },
});

const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
  important: true, // See https://tailwindcss.com/docs/configuration#important
  content: {
    files: ["./hugo_stats.json", "./layouts/**/*.html"],
    extract: [
      {
        extract: (content) => {
          let els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ["json"],
      },
    ],
  },
  plugins: [typography],
};

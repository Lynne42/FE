<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [使用google字体](#%E4%BD%BF%E7%94%A8google%E5%AD%97%E4%BD%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 使用google字体
- [google fonts](https://fonts.google.com/)
- 选择要使用的字体 Mulish
- css引入字体
	- [css](https://fonts.googleapis.com/css?family=Roboto)
    - 设置
  ```
  html, body {
	  font-family: 'Mulish', sans-serif;
  }
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/mulish/v3/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aivHZ47LTdNwPak.woff) format('woff');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/mulish/v3/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8amvHZ47LTdNwPak.woff) format('woff');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/mulish/v3/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aevHZ47LTdNwA.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  ```
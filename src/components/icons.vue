<template>
  <div class="icon" :id="id" :color="this.color">
    <svg
      :id="id"
      v-if="this.size == 'sm'"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == 'middle'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == '32'"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == 'large'"
      width="36"
      height="36"
      viewBox="0 0 36 36 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else-if="this.size == '48'"
      width="48"
      height="48"
      viewBox="0 0 48 48 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
    <svg
      :id="id"
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24 "
      :fill="this.color"
      :stroke="this.stroke"
      v-html="chosenIcon"
      mlns="http://www.w3.org/2000/svg"
    ></svg>
  </div>
</template>
<script>
export default {
  name: "chosenIcon",
  props: {
    icon: String,
    size: String,
    color: {
      type: String,
      default: "none",
    },
    stroke: {
        type: String,
        default: '#A4ABBD'
    },
    id: String,
  },

  data() {
    return {
      icons: {
        faq: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/><path d="M12.1 7.3H12c-1 0-1.9.5-2.4 1.3-.4.5-.3 1.1.2 1.4.5.3 1.1.2 1.4-.3.2-.3.5-.4.8-.4h.1c.5 0 .9.4.9.9 0 .4-.3.8-.6.9l-.7.2c-.4.1-.7.5-.7.9v.8c0 .6.4 1 1 1 .5 0 1-.4 1-.9 1.2-.4 2-1.5 2-2.8 0-1.6-1.3-3-2.9-3z"/><circle cx="12" cy="16" r="1"/>`,
        dBed: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="0.5" d="M20,3.5H4a3,3,0,0,0-3,3v13a1,1,0,0,0,1,1H6a1,1,0,0,0,.83-.45L8.54,17.5h6.92l1.71,2.55a1,1,0,0,0,.83.45h4a1,1,0,0,0,1-1V6.5A3,3,0,0,0,20,3.5Zm1,15H18.54L16.83,16A1,1,0,0,0,16,15.5H8a1,1,0,0,0-.83.45L5.46,18.5H3v-5H21Zm-14-7v-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1Zm6,0v-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1Zm8,0H19v-1a3,3,0,0,0-3-3H14a3,3,0,0,0-2,.78,3,3,0,0,0-2-.78H8a3,3,0,0,0-3,3v1H3v-5a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1Z"/>`,
        sBed: `<path d="M29,27v-4v-8V7c0-1.7-1.3-3-3-3H6C4.3,4,3,5.3,3,7v8v8v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h22v3c0,0.6,0.4,1,1,1S29,27.6,29,27z M5,16h5h12h5v1.5l-1.4,1c-0.3,0.2-0.8,0.2-1.1,0l-0.8-0.5c-1-0.7-2.3-0.7-3.3,0l-0.8,0.5c-0.3,0.2-0.8,0.2-1.1,0l-0.8-0.5c-1-0.7-2.3-0.7-3.3,0l-0.8,0.5c-0.3,0.2-0.8,0.2-1.1,0l-0.8-0.5c-1-0.7-2.3-0.7-3.3,0l-0.8,0.5c-0.3,0.2-0.8,0.2-1.1,0l-1.4-1V16z M21,14H11v-3c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V14z M6,6h20c0.6,0,1,0.4,1,1v7h-4v-3c0-1.7-1.3-3-3-3h-8c-1.7,0-3,1.3-3,3v3H5V7C5,6.4,5.4,6,6,6z M5,22v-2.1l0.3,0.2c1,0.7,2.3,0.7,3.3,0l0.8-0.5c0.3-0.2,0.8-0.2,1.1,0l0.8,0.5c1,0.7,2.3,0.7,3.3,0l0.8-0.5c0.3-0.2,0.8-0.2,1.1,0l0.8,0.5c1,0.7,2.3,0.7,3.3,0l0.8-0.5c0.3-0.2,0.8-0.2,1.1,0l0.8,0.5c0.5,0.3,1.1,0.5,1.7,0.5s1.2-0.2,1.7-0.5l0.3-0.2V22H5z"/>`,
        calendar: `<path d="M8 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M3.5 9.09009H20.5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 13.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 16.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 13.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 16.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 13.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 16.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
          bar: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6v8z" opacity=".3"/><path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-5h-2V5h2v3z"/>`,
          family: `<path fill="#bec6c6" d="M42 12v11.55L37 23v-3.16A4.39 4.39 0 0 0 38.44 17l.56-5a3.21 3.21 0 0 1-2.89-1.79L36 10c-2.29 2.29-4.79 2-7 2l.56 5A4.39 4.39 0 0 0 31 19.84V23l-5 .55V12a8 8 0 1 1 16 0Z"/><path fill="#f8f9f9" d="m39 12-.56 5a4.47 4.47 0 0 1-8.88 0L29 12h2.17A6.84 6.84 0 0 0 36 10l.11.21A3.21 3.21 0 0 0 39 12Z"/><path fill="#f8f9f9" d="m37.9 23.1-1.07 1.07a4 4 0 0 1-5.66 0L30.1 23.1l.9-.1v-3.16a4.46 4.46 0 0 0 6 0V23Z"/><path fill="#bec6c6" d="M20 6.85V9c-1.6 0-2.82.18-4-1-3.37 1.11-4.16 1-8 1V6.39A4.38 4.38 0 0 1 12.39 2h2.76a3 3 0 0 1 2.68 1.66L18 4l.34.17A3 3 0 0 1 20 6.85Z"/><path fill="#f8f9f9" d="M19 9v4a5 5 0 0 1-10 0V9a16.87 16.87 0 0 0 7-1 3.41 3.41 0 0 0 2.41 1Z"/><path fill="#f8f9f9" d="m17.9 20.1-1.07 1.07a4 4 0 0 1-5.66 0L10.1 20.1l.9-.1v-3a5 5 0 0 0 6 0v3Z"/><path fill="#bec6c6" d="M25.87 23.57a4 4 0 0 0-3.87 4V46H2V24.58a4 4 0 0 1 3.56-4l4.54-.5 1.07 1.07a4 4 0 0 0 5.66 0l1.07-1.05 4.54.5a4 4 0 0 1 3.43 2.97Z"/><path fill="#f8f9f9" d="m16.91 39.16-.57.71a3 3 0 0 1-4.68 0l-.57-.71L12 39v-2.54a4 4 0 0 0 4 0V39Z"/><path fill="#f8f9f9" d="M22 42.54V46H6v-3.46a3 3 0 0 1 2.51-3l2.58-.42.57.71a3 3 0 0 0 4.68 0l.57-.71c.22 0-.18 0 2.58.42a3 3 0 0 1 2.51 3zM18 33a4 4 0 0 1-8 0v-2a4 4 0 0 1 6.83-2.83C18.23 29.59 18 31 18 33z"/><path fill="#f8f9f9" d="M2 32h4v14H2zM46 27.58V46H22V27.58a4 4 0 0 1 3.56-4l4.54-.5 1.07 1.07a4 4 0 0 0 5.66 0l1.07-1.05 4.54.5A4 4 0 0 1 46 27.58Z"/><path fill="#f8f9f9" d="M22 35h4v11h-4z"/><path fill="#414141" d="M20 10c-1.65 0-2.85.15-4.22-.87-3 1-4.75.87-7.78.87a1 1 0 0 1-1-1V6.39A5.4 5.4 0 0 1 12.39 1h2.76a4 4 0 0 1 3.57 2.21l.07.07A4 4 0 0 1 21 6.85V9a1 1 0 0 1-1 1Zm-4-3a1 1 0 0 1 .71.29 2.43 2.43 0 0 0 1.7.71H19V6.85a2 2 0 0 0-1.11-1.78c-.64-.33-.61-.28-1-1A2 2 0 0 0 15.15 3h-2.76A3.39 3.39 0 0 0 9 6.39V8a16.55 16.55 0 0 0 6-.72c.77-.28.8-.28 1-.28Z"/><path fill="#414141" d="M14 19a6 6 0 0 1-6-6V9a1 1 0 0 1 2 0v4a4 4 0 0 0 8 0V9a1 1 0 0 1 2 0v4a6 6 0 0 1-6 6Z"/><path fill="#414141" d="M2 47a1 1 0 0 1-1-1V24.58a5 5 0 0 1 4.45-5L10 19.1V17a1 1 0 0 1 2 0v3a1 1 0 0 1-.89 1l-5.44.6a3 3 0 0 0-2.67 3V46a1 1 0 0 1-1 1zm24 0a1 1 0 0 1-1-1V30a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1zm-.13-22.43a1 1 0 0 1-1-.75 3 3 0 0 0-2.57-2.23L16.89 21a1 1 0 0 1-.89-1v-3a1 1 0 0 1 2 0v2.11l4.54.5a5 5 0 0 1 4.29 3.71 1 1 0 0 1-.96 1.25z"/><path fill="#414141" d="M14 23.34c-2.35 0-3.44-1.37-4.61-2.53a1 1 0 0 1 1.42-1.42l1.07 1.07a3 3 0 0 0 4.24 0l1.07-1.07a1 1 0 0 1 1.42 1.42c-1.26 1.25-2.29 2.53-4.61 2.53zM6 47a1 1 0 0 1-1-1v-3.46a4 4 0 0 1 3.35-3.95l2.65-.43v-1.7a1 1 0 0 1 2 0V39a1 1 0 0 1-.83 1l-3.5.58a2 2 0 0 0-1.67 2V46a1 1 0 0 1-1 1zm16 0a1 1 0 0 1-1-1v-3.46a2 2 0 0 0-1.67-2l-3.5-.54a1 1 0 0 1-.83-1v-2.54a1 1 0 0 1 2 0v1.7l2.65.43A4 4 0 0 1 23 42.54V46a1 1 0 0 1-1 1z"/><path fill="#414141" d="M14 38a5 5 0 0 1-5-5v-2a5 5 0 0 1 10 0v2a5 5 0 0 1-5 5zm0-10a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3zM6 43a1 1 0 0 1-1-1V27a1 1 0 0 1 2 0v15a1 1 0 0 1-1 1z"/><path fill="#414141" d="M6 33H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm8 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm24-22.45a1 1 0 0 1-1-1V12a7 7 0 0 0-14 0v11.55a1 1 0 0 1-2 0V12a9 9 0 0 1 18 0v11.55a1 1 0 0 1-1 1z"/><path fill="#414141" d="M34 22a5.47 5.47 0 0 1-5.44-4.87l-.55-5A1 1 0 0 1 29 11h2.17a5.79 5.79 0 0 0 4.12-1.71 1 1 0 0 1 1.6.26l.11.21A2.22 2.22 0 0 0 39 11a1 1 0 0 1 1 1.11l-.55 5A5.47 5.47 0 0 1 34 22Zm-3.88-9 .43 3.91a3.47 3.47 0 0 0 6.9 0l.45-4.05a4.2 4.2 0 0 1-2.13-1.35A8.44 8.44 0 0 1 30.12 13Z"/><path fill="#414141" d="M22 47a1 1 0 0 1-1-1V27.58a5 5 0 0 1 4.45-5L30 22.1v-2.26a1 1 0 0 1 2 0V23a1 1 0 0 1-.89 1l-5.44.6a3 3 0 0 0-2.67 3V46a1 1 0 0 1-1 1zm24-15a1 1 0 0 1-1-1v-3.42a3 3 0 0 0-2.67-3L36.89 24a1 1 0 0 1-.89-1v-3.16a1 1 0 0 1 2 0v2.27l4.54.5a5 5 0 0 1 4.45 5V31a1 1 0 0 1-.99 1z"/><path fill="#414141" d="M34 26.34c-2.35 0-3.44-1.37-4.61-2.53a1 1 0 0 1 1.42-1.42l1.07 1.07a3 3 0 0 0 4.24 0l1.07-1.07a1 1 0 0 1 1.42 1.42c-1.26 1.25-2.29 2.53-4.61 2.53zM42 36a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm-16 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/><path fill="#6457ff" d="M47 35v4.92A7.18 7.18 0 0 1 41 47a7.18 7.18 0 0 1-6-7.08V35a3.25 3.25 0 0 0 3-2h6l.11.21A3.22 3.22 0 0 0 47 35Z"/><path fill="#f8f9f9" d="M40 43c-.54 0-.57-.15-2.71-2.29a1 1 0 0 1 1.42-1.42l1.29 1.3 3.29-3.3a1 1 0 0 1 1.42 1.42l-4 4A1 1 0 0 1 40 43Z"/><path fill="#414141" d="m10.88 40.49-.57-.7a1 1 0 1 1 1.56-1.26l.57.71a2 2 0 0 0 3.12 0l.57-.72a1 1 0 0 1 1.56 1.26l-.57.71a4 4 0 0 1-6.24 0Z"/>`,
          parking: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path stroke-width="0.5" :stroke="${this.stroke}" :fill="${this.color}" d="M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3zm.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>`,
          parking1: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M13,7H10A1,1,0,0,0,9,8v8a1,1,0,0,0,2,0V14h2a3,3,0,0,0,3-3V10A3,3,0,0,0,13,7Zm1,4a1,1,0,0,1-1,1H11V9h2a1,1,0,0,1,1,1ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>`,
          snow: `<path :strpke="${this.stroke}" d="M22.5,12h-.793l.147-.146a.5.5,0,0,0-.708-.708L20.293,12H18.707l.147-.146a.5.5,0,0,0-.708-.708L17.293,12H14.949a2.485,2.485,0,0,0-.365-.877l1.659-1.659H17.45a.5.5,0,0,0,0-1h-.207l.642-.642a.5.5,0,0,0-.707-.707l-.643.643V7.55a.5.5,0,0,0-1,0V8.758l-1.658,1.658A2.5,2.5,0,0,0,13,10.051V7.707l.854-.853a.5.5,0,0,0-.708-.708L13,6.293V4.707l.854-.853a.5.5,0,0,0-.708-.708L13,3.293V2.5a.5.5,0,0,0-1,0v.793l-.146-.147a.5.5,0,0,0-.708.708L12,4.707V6.293l-.146-.147a.5.5,0,0,0-.708.708L12,7.707v2.344a2.5,2.5,0,0,0-.877.365L9.465,8.758V7.55a.5.5,0,0,0-1,0v.208l-.627-.627a.5.5,0,0,0-.707.707l.626.626H7.55a.5.5,0,1,0,0,1H8.757l1.659,1.659a2.485,2.485,0,0,0-.365.877H7.707l-.853-.854a.5.5,0,0,0-.708.708L6.293,12H4.707l-.853-.854a.5.5,0,0,0-.708.708L3.293,12H2.5a.5.5,0,0,0,0,1h.793l-.147.146a.5.5,0,0,0,.708.708L4.707,13H6.293l-.147.146a.5.5,0,0,0,.708.708L7.707,13h2.344a2.485,2.485,0,0,0,.365.877L8.757,15.536H7.55a.5.5,0,0,0,0,1h.207L7.2,17.1a.5.5,0,0,0,.354.854A.5.5,0,0,0,7.9,17.8l.562-.561v.208a.5.5,0,0,0,1,0V16.242l1.658-1.658a2.5,2.5,0,0,0,.877.365v2.344l-.854.853a.5.5,0,0,0,.708.708L12,18.707v1.586l-.854.853a.5.5,0,0,0,.708.708L12,21.707V22.5a.5.5,0,0,0,1,0v-.793l.146.147a.5.5,0,0,0,.708-.708L13,20.293V18.707l.146.147a.5.5,0,0,0,.708-.708L13,17.293V14.949a2.5,2.5,0,0,0,.877-.365l1.658,1.658V17.45a.5.5,0,0,0,1,0v-.208l.562.561a.5.5,0,0,0,.707,0,.5.5,0,0,0,0-.707l-.561-.56h.207a.5.5,0,0,0,0-1H16.243l-1.659-1.659A2.485,2.485,0,0,0,14.949,13h2.344l.853.854a.5.5,0,0,0,.708-.708L18.707,13h1.586l.853.854a.5.5,0,0,0,.708-.708L21.707,13H22.5a.5.5,0,0,0,0-1Zm-10,2A1.5,1.5,0,1,1,14,12.5,1.5,1.5,0,0,1,12.5,14Z"/><circle cx="12.5" cy="12.5" r="1.155" fill="#f2f2f2"/>`,
          eye: `
          <path opacity="1" d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" :stroke="${this.stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" :stroke="${this.stroke}"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        wifi: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="0.5" d="M12,15a3,3,0,1,0,3,3A3,3,0,0,0,12,15Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm0-8a7.06,7.06,0,0,0-4.95,2.05,1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0,5,5,0,0,1,7.08,0,1,1,0,0,0,.7.3A1,1,0,0,0,17,13.05,7.06,7.06,0,0,0,12,11Zm0-4a11.08,11.08,0,0,0-7.78,3.22,1,1,0,0,0,1.42,1.42,9,9,0,0,1,12.72,0,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42A11.08,11.08,0,0,0,12,7Zm10.61.39a15,15,0,0,0-21.22,0A1,1,0,0,0,2.81,8.81a13,13,0,0,1,18.38,0,1,1,0,0,0,1.42,0A1,1,0,0,0,22.61,7.39Z"/>`,
        swimming: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" fill-rule="evenodd" d="M.103 21.971c.2.131 2.232-1.838 2.429-2.3h.131a1.22 1.22 0 0 0 .788-.459 6.763 6.763 0 0 1 3.284-2.359 7.428 7.428 0 0 1 2.364-.394c2.889 0 5.383 1.772 8.009 2.757a12.238 12.238 0 0 0 4.4.919 8 8 0 0 0 2.1-.262 7.833 7.833 0 0 0 4.135-2.3c.263-.262 1.839-2.035 2.035-2.3a1.245 1.245 0 0 0-.327-1.642 1.275 1.275 0 0 0-.658-.2 1.243 1.243 0 0 0-.983.526c-.067.131-.2.262-.264.394-.721.853-3.15 3.02-4.463 3.282a7.76 7.76 0 0 1-3.676-.131 22.059 22.059 0 0 1-3.741-1.445 30.4 30.4 0 0 0-4.268-1.641 9.138 9.138 0 0 0-2.3-.262 9.846 9.846 0 0 0-3.085.524 7.617 7.617 0 0 0-2.429 1.182 9.309 9.309 0 0 0-1.97 1.97l-.131.131c-.262.525-1.9 3.676-1.378 4Zm26.519-17a4.071 4.071 0 0 1 8.141 0 4.071 4.071 0 0 1-8.141 0Zm-15.36-.459 7.68-1.575.131.459.4 4.267c-.131 0-8.8 2.43-10.635 2.888a13.973 13.973 0 0 0 3.808 1.444c5.12 1.379 8.861.592 12.144.788L21.235 1.03h-.066V.966a1.294 1.294 0 0 0-1.575-.92l-8.859 1.773a1.342 1.342 0 0 0-1.116 1.575A1.441 1.441 0 0 0 11.26 4.51Z" data-name="boy swimming"/>`,
        fitnes: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M20.57 14.86l.72-.72c.39-.39.39-1.02 0-1.41l-.02-.02c-.39-.39-1.02-.39-1.41 0L17 15.57 8.43 7l2.86-2.86c.39-.39.39-1.02 0-1.41l-.02-.02c-.39-.39-1.02-.39-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72c-.39-.39-1.04-.39-1.43 0-.39.39-.39 1.04 0 1.43l.72.72L2.71 7c-.39.39-.39 1.02 0 1.41l.72.72-.72.73c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43 15.57 17l-2.86 2.86c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72L21.29 17c.39-.39.39-1.02 0-1.41l-.72-.73z"/>`,
        roomSer: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path :fill="${this.color} :stroke="${this.stroke}" stroke-width="1" d="M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13c-1.03-2.58-3.55-4.41-6.5-4.41z" opacity=".3"/><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21zM12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z"/>`,
          bath: `<path fill="none" stroke="none" d="M0 0h24v24.002H0z"/><g :fill="${this.color} :stroke="${this.stroke}" stroke-width="1""><circle cx="13.003" cy="6.004" r="1"/><circle cx="11.003" cy="8.504" r="1"/><circle cx="15.003" cy="8.504" r="1"/><circle cx="13.003" cy="11.004" r="1"/><circle cx="9.003" cy="11.004" r="1"/><circle cx="17.003" cy="11.004" r="1"/><path :fill="${this.color}" d="M22.003 14.004v-10c0-1.654-1.346-3-3-3h-7v3h2v-1h5c.551 0 1 .449 1 1v10h-20v2h24v-2h-2zM5.089 20.889l-1.586 2.115h2.5l1.5-2h9l1.5 2h2.5l-1.586-2.115a3.995 3.995 0 003.086-3.885h-20a3.995 3.995 0 003.086 3.885z"/></g>`,
          check: `<path :fill="${this.color}" :stroke="${this.stroke}" stroke-width="1" d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z"/>`,
        human: `<path fill="none" stroke="none" d="M0 0h24v24H0V0z"/><path :fil="${this.color}" :stroke="${this.stroke}" stroke-width="0.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"/>`,
        search: `
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 22L20 20" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
        share: `<path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>`,
        location: `
          <path opacity="0.7" d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" :stroke="${this.stroke}" stroke-width="1.5"/>
          <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" :stroke="${this.stroke}" stroke-width="1.5"/>`
        ,
        heart: `<path :stroke="${this.stroke}" stroke-width="1.5" d="M12 20a1 1 0 0 1-.561-.172c-.225-.151-5.508-3.73-7.146-5.371C2.462 12.626 2.25 10.68 2.25 9.375A5.38 5.38 0 0 1 7.625 4c1.802 0 3.398.891 4.375 2.256A5.373 5.373 0 0 1 16.375 4a5.38 5.38 0 0 1 5.375 5.375c0 1.305-.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371A1 1 0 0 1 12 20zM7.625 6A3.379 3.379 0 0 0 4.25 9.375c0 1.093.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668C19.75 7.514 18.236 6 16.375 6S13 7.514 13 9.375a1 1 0 1 1-2 0A3.379 3.379 0 0 0 7.625 6z"/>`,
        tag: `<g :fill="${this.color}" id="_01_align_center" data-name="01 align center"><path :stroke="${this.stroke}" stroke-width="0.5" d="M20.164,13H5.419L4.478,5H14V3H4.242L4.2,2.648A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836l.9-5H20.705Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><polygon points="21 3 21 0 19 0 19 3 16 3 16 5 19 5 19 8 21 8 21 5 24 5 24 3 21 3"/></g>`,
        done: `<path fill="#286ff9" d="M182.315 18.021 165.99 1.695a5.758 5.758 0 0 0-8.16 0L74.363 89.814 26.52 41.948a5.848 5.848 0 0 0-8.269 0L1.712 58.501a5.848 5.848 0 0 0 0 8.269l68.044 69.626a5.664 5.664 0 0 0 4.825 1.553 5.728 5.728 0 0 0 4.991-1.553l102.743-110.21a5.775 5.775 0 0 0 0-8.166Z"/>`,
        arrRight: `<path :stroke="${this.stroke}" d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        arrLeft: `<path :stroke="${this.stroke}" d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"  stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        arrDown: `<path :stroke="${this.stroke}" d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995"  stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        close: `<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" :stroke="${this.stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.16992 14.8299L14.8299 9.16992" :stroke="${this.stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.8299 14.8299L9.16992 9.16992" :stroke="${this.stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
      },
    };
  },
  computed: {
    chosenIcon() {
      return this.icons[this.icon];
    },
  },
};
</script>

import app from './config/app';
import build from './config/build';
import colorMode from './config/colorMode';
import css from './config/css';
import devtools from './config/devtools';
import experimental from './config/experimental';
import googleFonts from './config/googleFonts';
import modules from './config/modules';
import nitro from './config/nitro';
import postcss from './config/postcss';
import routeRules from './config/routeRules';
import runtimeConfig from './config/runtimeConfig';

export default defineNuxtConfig({
  app,
  build,
  colorMode,
  css,
  devtools,
  experimental,
  googleFonts,
  modules,
  nitro,
  postcss,
  routeRules,
  runtimeConfig,
  //swiper,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});

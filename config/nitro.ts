const nitro = {
  compressPublicAssets: true,
  esbuild: {
    options: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
};

export default nitro;

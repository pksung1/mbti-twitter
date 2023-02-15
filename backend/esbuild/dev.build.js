const { build, context } = require('esbuild');

(async () => {
  const builder = await context({
    bundle: true,
    sourcemap: true,
    platform: 'node',
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    entryPoints: ['./src/app.ts'],
    minify: false,
    outdir: './build/',
  });
  await builder.watch()
})();
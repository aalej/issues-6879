import * as esbuild from 'esbuild'

const args = process.argv.slice(2)
const watch = args.includes('--watch') || false

const ctx = await esbuild.context({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  platform: 'node',
  target: 'node16',
  format: 'esm',
  external: ['./node_modules/*'],
});

if (watch) {
  await ctx.watch()
  console.log('watching...')
} else {
  await ctx.rebuild()
  await ctx.dispose()
  console.log('build done')
}
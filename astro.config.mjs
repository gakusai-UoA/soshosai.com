import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  /* github.ioで公開する設定 soshosai.comで公開する場合は書き変える必要がある */
  site: 'https://gakusai-uoa.github.io',
  base: '/soshosai.com',
}); 
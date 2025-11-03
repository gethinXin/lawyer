import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWind4 from '@unocss/preset-wind4'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),

    presetWind4(),
    presetRemToPx({ baseFontSize: 4 }),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})

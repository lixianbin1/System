import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import { type UserModule } from '~/types'
import 'highlight.js/styles/vs2015.css'

export const install: UserModule = ({ app }) => {
  app.use(hljsVuePlugin)
}

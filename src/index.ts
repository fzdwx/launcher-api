import {App} from 'vue'
import * as components from './components'

function install(app: App) {
    for (const key in components) {
        // @ts-expect-error
        app.component(key, components[key])
    }
}

import './assets/main.scss'
import './assets/global.scss'
import './assets/raycast.scss'

export default {install}

export * from './components'
export * from './utils'
export * from './composables'
export * from './ext'

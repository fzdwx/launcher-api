export {get, set} from './config'

/**
 * @description 获取进入当前插件的命令
 */
export const getActionCommand = () => {
    // http://localhost:35677?ext=${ext.fullPath}&ts=${Date.now()}&command=${ext.action?.command}
    // get command
    const url = new URL(window.location.href)
    return url.searchParams.get('command')
};

interface Clipboard {
    set: (text: string) => void,
    get: () => string,
    getSelection: () => string
}

/**
 * @description 获取控制粘贴板相关的方法
 */
export const clipboard: Clipboard = {
    set: window.launcher.setClipText,
    get: window.launcher.getClipText,
    getSelection: window.launcher.getSelect
}

interface Config {
    set: (key: string, value: any) => Promise<void>,
    get: (key: string) => Promise<any>
}

/**
 * @description 获取配置相关的方法
 */
export const config: Config = {
    set: window.launcher.set,
    get: window.launcher.get
}

interface Shell {
    exec: (command: string, args?: Array<string>, terminal?: boolean) => Promise<any>,
    spawn: (command: string, args?: Array<string>) => Promise<any>,
    openPath: (path: string) => Promise<void>,
    openUrl: (url: string) => Promise<void>
}

/**
 * @description shell相关的方法
 */
export const shell: Shell = {
    exec: window.launcher.execCommand,
    spawn: window.launcher.spawn,
    openPath: window.launcher.openPath,
    openUrl: window.launcher.openUrl
}


interface MainView {
    hide: () => void,
    show: () => void,
    exit: () => void,
}

export const mainView: MainView = {
    hide: window.launcher.hide,
    show: window.launcher.show,
    exit: window.launcher.backToSelf,
}


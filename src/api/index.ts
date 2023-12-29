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

/**
 * @description 获取控制粘贴板相关的方法
 */
export const clipboard = () => {
    return {
        set: window.launcher.setClipText,
        get: window.launcher.getClipText,
        getSelection: window.launcher.getSelect
    }
}

/**
 * @description 获取配置相关的方法
 */
export const config = () => {
    return {
        get: window.launcher.get,
        set: window.launcher.set
    }
}

/**
 * @description 打开一个网址
 */
export const openUrl = window.launcher.openUrl

/**
 * @description 打开一个路径
 */
export const openPath = window.launcher.openPath


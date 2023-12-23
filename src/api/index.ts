export {get, set} from './config'


export const getActionCommand = () => {
    // http://localhost:35677?ext=${ext.fullPath}&ts=${Date.now()}&command=${ext.action?.command}
    // get command
    const url = new URL(window.location.href)
    return url.searchParams.get('command')
};

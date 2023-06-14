// @ts-ignore
import {
    buildEvent, changeInputStateAction, commandKeyDownAction,
    exitAction,
    ExtEvent,
    getClipTextAction,
    InputState, openUrlAction, setClipTextAction,
    setConfigAction,
    userInputAction
} from "./types";
import {ref} from "vue";
import {useCommandEvent} from "../../composables";

/**
 * exit current view
 */
function exit() {
    window.parent.postMessage(buildEvent(exitAction), '*');
}

/**
 * get clipboard text
 * @param callback
 */
function getClipText(callback: (text: string) => void) {
    window.parent.postMessage(buildEvent(getClipTextAction), '*');

    window.addEventListener('message', (event) => {
        const {action, data} = event.data as ExtEvent<string>;
        if (action === getClipTextAction) {
            callback(data || '');
        }
    }, {once: true})
}

function setClipText(text: string) {
    window.parent.postMessage(buildEvent(setClipTextAction, text), '*');
}

/**
 * listen user input
 * @param extName
 * @param callback
 */
function onUserInput(extName: string, callback: (text: string) => void) {
    userInputHandlerMap.set(extName, callback);
}

/**
 * change input state
 * @param state
 */
function changeInputState(state: InputState) {
    window.parent.postMessage(buildEvent(changeInputStateAction, JSON.stringify(state)), '*');
}

/**
 * open url
 * @param url
 */
function openUrl(url: string) {
    if (url.length === 0) {
        return
    }

    window.parent.postMessage(buildEvent(openUrlAction, url), '*');
}

const commandEvent = useCommandEvent();

const userInputHandlerMap = new Map<string, (text: string) => void>();
window.addEventListener('message', (event) => {
    const {action, data} = event.data as ExtEvent<string>;
    if (action === userInputAction) {
        userInputHandlerMap.forEach(c => {
            c(data || '');
        })
        return;
    }

    if (action === setConfigAction) {
        config.value = JSON.parse(data || '{}');
        return;
    }

    if (action === commandKeyDownAction) {
        commandEvent.emitter.emit('keydown', JSON.parse(data || '{}'));
    }

})

const config = ref<{ [key: string]: any }>({});

/**
 * get config
 */
function getConfig() {
    return config
}

export {
    exit, getClipText, setClipText,
    onUserInput, changeInputState, openUrl,
    userInputHandlerMap, getConfig
}

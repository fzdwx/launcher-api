import {
    exit,
    getClipText,
    onUserInput,
    userInputHandlerMap,
    getConfig,
    changeInputState,
    openUrl,
    setClipText
} from "./api";

import {
    exitAction,
    setConfigAction,
    getClipTextAction,
    userInputAction,
    changeInputStateAction,
    commandKeyDownAction,
    buildEvent, InputState, openUrlAction, setClipTextAction
} from './api/types'

export {
    exit, getClipText, setClipText, onUserInput, getConfig, changeInputState, openUrl,
}

export {
    userInputHandlerMap, buildEvent,
    exitAction, getClipTextAction, setClipTextAction,
    userInputAction, setConfigAction,
    changeInputStateAction, commandKeyDownAction, openUrlAction,
}

export type {
    InputState
}

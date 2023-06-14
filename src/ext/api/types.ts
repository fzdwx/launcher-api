export interface ExtEvent<T> {
    action: string;
    data?: T;
}

export interface InputState {
    loading?: boolean;
    disableFilter?: boolean;
}

const exitAction = 'exit';
const getClipTextAction = 'getClipText';
const setClipTextAction = 'setClipText';
const userInputAction = 'userInput';
const setConfigAction = 'setLauncherConfig';
const changeInputStateAction = 'changeInputState';
const commandKeyDownAction = 'commandKeyDown';
const openUrlAction = 'openUrl';

function buildEvent<T>(action: string, data?: T): ExtEvent<T> {
    return {
        action,
        data,
    }
}

export {
    exitAction, getClipTextAction, setClipTextAction,
    userInputAction, setConfigAction,
    changeInputStateAction, commandKeyDownAction, openUrlAction,
    buildEvent
}



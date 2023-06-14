import mitt, {Emitter} from 'mitt'

export type ItemInfo = {
    key: string
    value: string
}

export type Noop = () => void


type Events = {
    selectItem: ItemInfo
    rerenderList: Boolean
    selectCurrentItem: Boolean
    selectFirstItem: Boolean
    setInputValue: string
    keydown: KeyboardEvent
}

const emitter: Emitter<Events> = mitt<Events>()

const useCommandEvent = () => {

    return {
        emitter
    }
}

export {useCommandEvent}

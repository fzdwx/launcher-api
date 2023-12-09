const set = async <T>(key: string, value: T) => {
    return window.launcher.set(key, value)
}

const get = async <T>(key: string): Promise<T> => {
    return window.launcher.get(key)
}

export {get, set}

# Launcher api

提供了开发 [launcher](https://github.com/fzdwx/launcher) 扩展时需要的一些基础功能

```shell
pnpm i @fzdwx/launcher-api
```

## Api

1. `exit()` 退出当前扩展
2. ` getClipText(callback: (text: string) => void)` 获取剪贴板文本, 通过回调函数返回
3. `setClipText(text: string)` 设置剪贴板文本
4. `onUserInput(extName: string, callback: (text: string) => void)` 监听用户输入, 通过回调函数返回
5. `changeInputState(state: InputState)` 改变输入状态
6. `openUrl(url: string)` 打开链接
7. `executeCommand(command: string)` 执行命令

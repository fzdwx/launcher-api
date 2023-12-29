# Launcher Api

A collection of api for [launcher](https://github.com/fzdwx/launcher)

```shell
pnpm add launcher-api
```

call api:

```ts
/// <reference types="vite/client" />
import {clipboard, config, getActionCommand, mainView, shell} from "launcher-api";

clipboard.set("hello world");
clipboard.get();
```

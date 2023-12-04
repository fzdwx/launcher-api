# Launcher Api

A collection of api for [launcher](https://github.com/fzdwx/launcher)

```shell
pnpm add launcher-api
```

add to vite-env.d.ts

```ts
/// <reference types="vite/client" />
import {LauncherApi} from "launcher-api";

declare global {
    interface Window {
        launcher: LauncherApi
    }
}
```

#!/usr/bin/env just --justfile
export PATH := "./node_modules/.bin:" + env_var('PATH')

build:
  pnpm run build

pub: build
    pnpm publish --no-git-checks --access public

link:
  pnpm link

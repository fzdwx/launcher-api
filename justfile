#!/usr/bin/env just --justfile
export PATH := "./node_modules/.bin:" + env_var('PATH')

build:
  rm -rf dist
  node-sass ./global.scss ./dist/index.css
  pnpm run build

pub: build
    pnpm publish --access public

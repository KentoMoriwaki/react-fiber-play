# Try React Fiber

## Set up

まずは、このレポジトリをcloneする。

masterからビルドして使う。

```
git clone git@github.com:facebook/react.git
cd react
yarn
yarn build
```

yarnのlink機能を使って、ローカルのpackageを参照するようにする

```
cd build/packages/react
yarn link
cd ../react-dom
yarn link react
yarn link
```

これでlinkが完了したので、このレポジトリに戻って

```
cd path/to/react-fiber-play
yarn link react react-dom
```

# RafaelApps

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

你的全新 [Nx workspace](https://nx.dev) 幾乎完成了。

你可以先了解 [此 workspace 的設定與能力](https://nx.dev/nx-api/expo?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)，或執行 `npx nx graph` 以視覺化查看專案結構。接下來就開始上手吧。

## 完成遠端快取設定

[點這裡完成 workspace 設定](https://cloud.nx.app/connect/jTmGwhhB38)

## 執行任務

啟動開發伺服器：

```sh
npx nx serve rafael-test-app
```

## 疑難排解 2026/01/25

如果 Android 無法開啟 dev client，並出現：

```
Error: Couldn't open Android app with activity "<scheme>://expo-development-client/?url=..."
```

請確認 scheme 一致且 Android 原生檔案是最新的：

1) 確認 `apps/rafael-test-app/app.json` 內的 scheme（expo.scheme）
2) 確認 `apps/rafael-test-app/android/app/src/main/AndroidManifest.xml` 內的 scheme 相同
   找 `<data android:scheme="..."/>`
3) 如果修改過 scheme 但尚未重新 prebuild，請重新生成原生檔並安裝：

```sh
npx nx run rafael-test-app:run-android --clean
```

接著啟動 dev client，並按 `a`：

```sh
npx nx run rafael-test-app:start
```

建立 production bundle：

```sh
npx nx build rafael-test-app
```

查看專案可用的 targets：

```sh
npx nx show project rafael-test-app
```

這些 targets 可能是 [自動推斷](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) 或定義在 `project.json` / `package.json` 中。

[更多關於執行任務的說明 »](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 新增專案

你可以手動新增專案，但更推薦使用 [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) 及其 [程式碼產生](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) 功能。

透過 plugin 的 generator 來建立新專案。

新增一個 app：

```sh
npx nx g @nx/expo:app demo
```

新增一個 library：

```sh
npx nx g @nx/react:lib mylib
```

你可以先用 `npx nx list` 列出已安裝的 plugins，再用 `npx nx list <plugin-name>` 了解特定 plugin 的功能。也可以 [安裝 Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) 在 IDE 中瀏覽 plugins 與 generators。

[了解 Nx plugins »](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [瀏覽 plugin registry »](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[了解 Nx 在 CI 的使用 »](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 安裝 Nx Console

Nx Console 是一個 IDE 擴充套件，可以幫你執行任務、產生程式碼並提升自動補全體驗。支援 VSCode 與 IntelliJ。

[安裝 Nx Console »](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 相關連結

了解更多：

- [此 workspace 設定說明](https://nx.dev/nx-api/expo?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [使用 Nx release 發佈套件](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [什麼是 Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

加入 Nx 社群：
- [Discord](https://go.nx.dev/community)
- [X](https://twitter.com/nxdevtools) 或 [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [部落格](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

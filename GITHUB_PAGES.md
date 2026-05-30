# 用 GitHub Pages 免费上线

这条路不需要 Mac，也不需要 Xcode。

## 第一次发布

1. 打开 https://github.com
2. 登录或注册免费账号。
3. 点右上角 `+`，选择 `New repository`。
4. Repository name 建议填：

   ```text
   rhode-catch-pwa
   ```

5. 选择 `Public`。
6. 勾选 `Add a README file`。
7. 点 `Create repository`。
8. 进入新仓库后，点 `Add file`，再点 `Upload files`。
9. 把 `pwa` 文件夹里的所有文件和 `assets` 文件夹拖进去。
10. 点 `Commit changes`。
11. 进入仓库的 `Settings`。
12. 左侧点 `Pages`。
13. 在 `Build and deployment` 里：
    - Source 选 `Deploy from a branch`
    - Branch 选 `main`
    - Folder 选 `/root`
14. 点 `Save`。

几分钟后，GitHub 会给你一个网址，格式通常是：

```text
https://你的用户名.github.io/rhode-catch-pwa/
```

用 iPhone Safari 打开这个网址，然后点分享按钮，选择“添加到主屏幕”。

## 更新 App

以后如果我帮你改了功能：

1. 回到 GitHub 仓库。
2. 点 `Add file`，再点 `Upload files`。
3. 上传新的 `pwa` 文件夹内容，覆盖旧文件。
4. 点 `Commit changes`。

GitHub Pages 会自动更新网站，通常 1-3 分钟生效。

## 注意

- 不要只上传 `rhode-catch-pwa.zip`，GitHub Pages 不会自动解压 zip。
- 要上传 `index.html`、`app.js`、`styles.css`、`manifest.webmanifest`、`service-worker.js` 和 `assets` 文件夹这些真实文件。
- 这个阶段可以免费。

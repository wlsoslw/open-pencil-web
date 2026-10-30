# open-pencil-web

Static build of the [OpenPencil](https://github.com/open-pencil/open-pencil) web editor (MIT), commit `24461adec7073312d460d76f08f069de18e4fb78` (v0.16.0), served at https://wlsoslw.github.io/open-pencil-web/.

Unmodified except for the base path (build env: `OP_BASE=/open-pencil-web/`, `VITE_OPENPENCIL_CLOUD=off`). Patch:

```diff
-  history: createWebHistory(),
+  history: createWebHistory(import.meta.env.BASE_URL),
-    base: metrics ? '/admin/' : '/',
+    base: metrics ? '/admin/' : (process.env.OP_BASE ?? '/'),
```

`404.html` is a copy of `index.html` for SPA routing on GitHub Pages. License: see `LICENSE` and `LICENSES/` (upstream copyright retained).

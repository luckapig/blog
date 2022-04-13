const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-bde73081.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-b9dab7bb.mjs"
    ]
  },
  "_bootstrap-b9dab7bb.mjs": {
    "file": "bootstrap-b9dab7bb.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "layouts/home.vue",
      "pages/article/[id].vue",
      "pages/index.vue",
      "components/loading.vue"
    ],
    "css": [
      "bootstrap.9470bcb7.css"
    ]
  },
  "components/loading.vue": {
    "file": "loading-8d644460.mjs",
    "src": "components/loading.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b9dab7bb.mjs"
    ],
    "assets": [
      "onedrive.74f43d3f.png"
    ]
  },
  "pages/article/[id].vue": {
    "file": "_id_-e6161300.mjs",
    "src": "pages/article/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b9dab7bb.mjs",
      "_states-73e9eaab.mjs",
      "_index-982ea3c4.mjs"
    ]
  },
  "_states-73e9eaab.mjs": {
    "file": "states-73e9eaab.mjs",
    "imports": [
      "_bootstrap-b9dab7bb.mjs"
    ]
  },
  "_index-982ea3c4.mjs": {
    "file": "index-982ea3c4.mjs",
    "imports": [
      "_bootstrap-b9dab7bb.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-c09ba485.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b9dab7bb.mjs",
      "_states-73e9eaab.mjs",
      "_index-982ea3c4.mjs"
    ]
  },
  "layouts/home.vue": {
    "file": "home-6026886b.mjs",
    "src": "layouts/home.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-b9dab7bb.mjs",
      "_states-73e9eaab.mjs"
    ],
    "css": [
      "home.0a3938a1.css"
    ]
  }
};

export { client_manifest as default };

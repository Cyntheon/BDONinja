const presets = [
  [
    "next/babel",
    {
      "preset-react": {
        "runtime": "automatic",
        "importSource": "@emotion/react"
      }
    }
  ]
];

const plugins = [
  "@emotion/babel-plugin",
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/material",
      libraryDirectory: "",
      camel2DashComponentName: false
    },
    "core"
  ],
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/icons-material",
      libraryDirectory: "",
      camel2DashComponentName: false
    },
    "icons"
  ]
];

module.exports = {
  presets,
  plugins
};

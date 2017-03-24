# babel-plugin-remove-stylename

Don't care about CSS modules in your tests? Sick of React warnings? Ignore `styleName` props in your tests the brute force way: by removing them with the transpiler!


## Install

```shell
npm install babel-plugin-remove-stylename --save-dev
```

or

```shell
yarn add babel-plugin-remove-stylename --dev
```

## Use

In your Babel config (shown here as a `package.json` property):

```json
  "babel": {
    "env": {
      "test": {
        "plugins": [
          [ "remove-stylename" ]
        ]
      }
    }
  }
```

Obviously, your test runner will need to be configured to use Babel. Note that Jest agressively caches transpiled code, and might need to be run with a `--no-cache` for you to see the change after installing the plugin.

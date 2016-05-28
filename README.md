# karma-moxios

Moxios for Karma

## Intstalling

Install npm module

```bash
$ npm install karma-moxios --save-dev
```

Add `moxios` to the `frameworks` key in your Karma config

```js
module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'moxios']
  })
}
```

## Example

```js
describe('moxios example test', function () {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('test stuff', function () {
    axios.get('/foo/bar').then(function (res) {
      /* ... */
    })

    moxios.wait(function () {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        responseText: 'baz'
      }).then(function () {
        /* ... */
      })
    })
  })
})
```

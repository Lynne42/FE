
[document](https://dexidp.io/docs/getting-started/)
- clone and build
```
$ git clone https://github.com/dexidp/dex.git
$ cd dex/
$ make build
```

- start Configuration
```
$ ./bin/dex serve examples/config-dev.yaml
```

- Running a client
```
$ make examples
$ ./bin/example-app
```
# 预设颜色参数
## 提供方法
- 预设可选的颜色
- 可自定义颜色值

## 实现

### 定义预设的颜色值
- 根据状态预设的颜色值
```
const PresetStatusColorTypes = [
  'success',
  'processing',
  'error',
  'default',
  'warning',
  'info',
  'waiting',
];
```
- 根据颜色名预设的颜色值
```
const PresetColorTypes = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
```

### 检测传入的color值是否是预设值
- 根据预设值创建所有预设值的正则表达式(通过正则检测传入的是否是预设值)
```
const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColorTypes.join('|')})$`);
```

- 判断是否是预设的值
```
const isPresetColor = (): boolean => {
    if(!color) {
        return false
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color)
}
```

- 判断当前switch状态
  - 如果是预设的值， 直接走classname, 需要判断当前是否是开启状态， 开启状态时设置classname, 非开启状态不设置
  ```
  // @preset-colors 预设的所有颜色名

  // 根据预设的颜色名设置状态
  .make-color-classes(@i: length(@preset-colors)) when (@i > 0) {
    .make-color-classes(@i - 1);
    @color: extract(@preset-colors, @i);
    @lightColor: '@{color}-1';
    @lightBorderColor: '@{color}-3';
    @darkColor: '@{color}-6';
    &-@{color} {
      background-color: @@darkColor;
    }
    &-@{color}-inverse {
      background-color: @@darkColor;
    }
  }

  // 根据预设的状态值设置颜色 success, error...
  .make-status-color-classes(@color, @status) {
    @lightColor: '@{color}-1';
    @lightBorderColor: '@{color}-3';
    @darkColor: '@{color}-6';
    &-@{status} {
      background-color: @@darkColor; // @@lightColor;
    }
  }

  .make-color-classes();

  // 将制定的特定颜色与预设值值做映射
  .make-status-color-classes('blue', info);
  .make-status-color-classes('green', success);
  .make-status-color-classes('red', error);
  .make-status-color-classes('orange', warning);
  .make-status-color-classes('gray', processing);
  .make-status-color-classes('lightBlue', waiting);
  ```

  - 如果是自定义的颜色值，需要设置style backgroundColor， 需要判断当前是否是开启状态， 开启状态时设置classname, 非开启状态不设置

- 因为需要当前switch状态，新词需要修改rc-switch代码


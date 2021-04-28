# 是什么
一个简单的JavaScript实用程序，用于有条件地将className连接在一起， 使动态和有条件的className更易于使用

# 功能
- 可接收任意数量的参数，参数可以是字符串，数字，数组或者对象
- 如果参数是数组， 会将数组平铺， 在根据规则获取正确的classname
- 支持动态类名， 可以使用模板字符串，变量等
- 备用版本dedupe， 可删除重复数据
- 备用bind版本，用与使用caa-modules的文件

# 源码
- 循环传入的参数， 根据参数处理不同的样式
- 如果参数是非0数字或者字符串，则直接使用它作为class样式名
- 如果参数是数组，将数组扁平化处理后，获取为true的值作为class样式名
- 如果参数是对象，获取属性值为true的值作为class样式名

## 默认版本
```
(function () {
	'use strict';
	// 获取原型上的hasOwnProperty方法， 用来判断对象的属性中是否存在指定的属性值
	// hasOwnProperty不是被保护的JS属性，可以被作为对象的属性名，因此需要使用原型上的或者空对象上未被修改的该属性
	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];
		// 循环处理参数, classNames 可接受多个参数
		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if(arg.length) {
					// 如果参数是数组， 则递归调用该函数处理数组, 得到最终结果
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				// 如果是对象， 且有自己重置的toString方法， 则调用自己的toString方法
				if (arg.toString !== Object.prototype.toString) {
					classes.push(arg.toString());
				} else {
					// 循环对象的属性
					for (var key in arg) {
						// 取属于自身属性并且属性值为true的属性
						// 只会对对象进行一层循环， 如果某一属性值仍为对象， 不会对该对象进行处理
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
		}
		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
```

## dedupe版本
通过设置一个全局的对象， 出不同参数类型处理后的属性存放到该对象中， 用来避免对象属性的重复， 即达到删除重复数据的目的

- 获取arguments参数， 将参数保存到同等长度的一个数组中
- 创建一个原型是null的对象，使在遍历对象的时候不需要判断属性是否是自身属性还是原型属性
- 使用新创建的对象保存classname值， 从而删除重复的属性名
- 判断参数的类型
- 首先排除值为0, false, undefined, null的参数
- 如果参数是string类型，将参数通过空格分隔(因为多个class名由空格隔开的特性)，将参数作为key保存到创建的对象中
- 如果参数是数字，将该数字作为key保存到创建的对象中
- 如果参数是数组， 则递归调用处理函数， 处理每一个数组值
- 如果参数是对象，遍历对象， 将职位true的属性保存到创建的对象中
  
```
(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		// 构造函数
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		/**
		 * 处理参数是数组的情况
		 * 循环递归处理数组的每一项
		 */
		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		/**
		 * 处理参数是数字的情况
		 */
		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		/**
		 * 处理参数是对象的情况, 浅处理， 只处理一层
		 */
		function _parseObject(resultSet, object) {
			if(object.toString !== Object.prototype.toString) {
				resultSet[object.toString()] = true;
			} else {
				for (var k in object) {
					if (hasOwn.call(object, k)) {
						// set value to false instead of deleting it to avoid changing object structure
						// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
						resultSet[k] = !!object[k];
					}
				}
			}
		}

		/**
		 * 处理参数是字符串的情况
		 */
		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			// 字符串以空格隔开， 转为数组
			var array = str.split(SPACE);
			var length = array.length;

			// 循环数组，将每一个字符串值作为key设为true保存到对象中
			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			// 排除 0， null, undefined, false 等
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				// 如果参数是数组的话， 递归处理数组的每一项
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;

			/**
			 * 将参数保存到同等长度的数组中
			 * 可直接调用处理数组的方法
			 * 通过构造函数StorageObject创建一个对象， 用这个对象接收所有的属性
			 */
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}
			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
```

## bind版
用于使用了css-module样式的文件中

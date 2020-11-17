
- `浅拷贝`

创建一个对象，这个对象拥有对原对象属性的一份完全拷贝。

如果属性值是基本类型，拷贝后的值便是这个基本类型，新创建的对象该属性值改变不会影响原属性对应的值

如果属性值是引用类型，拷贝的是该对象的内存地址值，原对象与新对象的该属性值指向相同的内存地址，无论改变哪一个对象，两个对象中该值均会发生变化

- `深拷贝`
  
创建一个与原对象完全一致的对象并保存到堆内存中，无论原对象的属性值是基本类型还是引用类型，都会完全拷贝该值。修改某个对象并不影响另一个对象

## `浅拷贝的实现`
- Object.assign()
- 扩展运算符...
- 数组的concat, slice

## 深拷贝的实现
- JSON.parse(JSON.stringify(obj))
    
    会忽略undefined,symbol,函数

    不能处理正则，new Date()

- 浅拷贝+递归（只考虑对象+数组）

简单实现：
        
        function cloneDeep(data) {
            // 避免data为null的情况
            if(data && typeof data === 'object') {
                let currentData = Array.isArray(data) ? [] : {};
                // for in 可遍历对象和数组
                for(let i in data) {
                    // 避免原型上的属性值的拷贝
                if(Object.prototype.hasOwnProperty.call(data, i)) {
                    currentData[i] = cloneDeep(data[i])
                }
                
                }
                return currentData
            } 
            return data
        }


        function cloneDeep(target,map = new WeakMap()) {
            // 避免target=null的情况
            if(target && typeOf taret ==='object'){
                // 判断是对象还是数组
                let cloneTarget = Array.isArray(target) ? [] : {};
                
                if(map.get(target)) {
                    return target;
                }
                map.set(target, cloneTarget);
                for(const key in target){
                    if(Object.prototype.hasOwnProperty.call(target, key)) {
                        cloneTarget[key] = cloneDeep(target[key], map);
                    }
                    
                }
                return cloneTarget
            }else{
                return target
            }
        
        }



- 完整实现

        const mapTag = '[object Map]';
        const setTag = '[object Set]';
        const arrayTag = '[object Array]';
        const objectTag = '[object Object]';
        const argsTag = '[object Arguments]';

        const boolTag = '[object Boolean]';
        const dateTag = '[object Date]';
        const numberTag = '[object Number]';
        const stringTag = '[object String]';
        const symbolTag = '[object Symbol]';
        const errorTag = '[object Error]';
        const regexpTag = '[object RegExp]';
        const funcTag = '[object Function]';

        const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


        function forEach(array, iteratee) {
            let index = -1;
            const length = array.length;
            while (++index < length) {
                iteratee(array[index], index);
            }
            return array;
        }

        function isObject(target) {
            const type = typeof target;
            return target !== null && (type === 'object' || type === 'function');
        }

        function getType(target) {
            return Object.prototype.toString.call(target);
        }

        function getInit(target) {
            const Ctor = target.constructor;
            return new Ctor();
        }

        function cloneSymbol(targe) {
            return Object(Symbol.prototype.valueOf.call(targe));
        }

        function cloneReg(targe) {
            const reFlags = /\w*$/;
            const result = new targe.constructor(targe.source, reFlags.exec(targe));
            result.lastIndex = targe.lastIndex;
            return result;
        }

        function cloneFunction(func) {
            const bodyReg = /(?<={)(.|\n)+(?=})/m;
            const paramReg = /(?<=\().+(?=\)\s+{)/;
            const funcString = func.toString();
            if (func.prototype) {
                const param = paramReg.exec(funcString);
                const body = bodyReg.exec(funcString);
                if (body) {
                    if (param) {
                        const paramArr = param[0].split(',');
                        return new Function(...paramArr, body[0]);
                    } else {
                        return new Function(body[0]);
                    }
                } else {
                    return null;
                }
            } else {
                return eval(funcString);
            }
        }

        function cloneOtherType(targe, type) {
            const Ctor = targe.constructor;
            switch (type) {
                case boolTag:
                case numberTag:
                case stringTag:
                case errorTag:
                case dateTag:
                    return new Ctor(targe);
                case regexpTag:
                    return cloneReg(targe);
                case symbolTag:
                    return cloneSymbol(targe);
                case funcTag:
                    return cloneFunction(targe);
                default:
                    return null;
            }
        }

        function clone(target, map = new WeakMap()) {

            // 克隆原始类型
            if (!isObject(target)) {
                return target;
            }

            // 初始化
            const type = getType(target);
            let cloneTarget;
            if (deepTag.includes(type)) {
                cloneTarget = getInit(target, type);
            } else {
                return cloneOtherType(target, type);
            }

            // 防止循环引用
            if (map.get(target)) {
                return map.get(target);
            }
            map.set(target, cloneTarget);

            // 克隆set
            if (type === setTag) {
                target.forEach(value => {
                    cloneTarget.add(clone(value, map));
                });
                return cloneTarget;
            }

            // 克隆map
            if (type === mapTag) {
                target.forEach((value, key) => {
                    cloneTarget.set(key, clone(value, map));
                });
                return cloneTarget;
            }

            // 克隆对象和数组
            const keys = type === arrayTag ? undefined : Object.keys(target);
            forEach(keys || target, (value, key) => {
                if (keys) {
                    key = value;
                }
                cloneTarget[key] = clone(target[key], map);
            });

            return cloneTarget;
        }

        module.exports = {
            clone
        };


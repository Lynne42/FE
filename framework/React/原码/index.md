## ReactDom.render()

## legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback)

- 初次挂在组件
- 更新组建
```
legacyRenderSubtreeIntoContainer(
    parentComponent,
    children,  // 传进来的需要挂在的react组件（<app/>）
    container, // 挂载到的根节点(document.getElementById('root'))
    forceHydrate, // 服务端渲染相关
    callback,    // 组件挂在后的回调
) {
    let root: RootType = (container._reactRootContainer: any);
  let fiberRoot;
  if (!root) {
    // 初次挂在组件
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
      container,
      forceHydrate,
    );
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Initial mount should not be batched.
    unbatchedUpdates(() => {
      updateContainer(children, fiberRoot, parentComponent, callback);
    });
  } else {
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Update
    updateContainer(children, fiberRoot, parentComponent, callback);
  }
  return getPublicRootInstance(fiberRoot);
}
```
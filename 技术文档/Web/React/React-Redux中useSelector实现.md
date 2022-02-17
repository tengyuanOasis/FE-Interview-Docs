````
function useSelectorWithStoreAndSubscription(
  selector,
  equalityFn,
  store,
  contextSub
) {
  const [, forceRender] = useReducer((s) => s + 1, 0);  //如果需要刷新的时候，调用forceRender，就会重新获取数据

  const subscription = useMemo(() => new Subscription(store, contextSub), [
    store,
    contextSub,
  ])

  const latestSubscriptionCallbackError = useRef()
  const latestSelector = useRef()
  const latestStoreState = useRef()
  const latestSelectedState = useRef()

  const storeState = store.getState()
  let selectedState

  try {
    if (
      selector !== latestSelector.current ||
      storeState !== latestStoreState.current ||
      latestSubscriptionCallbackError.current
    ) {
      selectedState = selector(storeState)
    } else {
			// 直接用引用中的值来赋值状态
      selectedState = latestSelectedState.current
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`
    }

    throw err
  }

  useIsomorphicLayoutEffect(() => {
    latestSelector.current = selector
    latestStoreState.current = storeState
    latestSelectedState.current = selectedState
    latestSubscriptionCallbackError.current = undefined
  })

  useIsomorphicLayoutEffect(() => {
    function checkForUpdates() {
      try {
        const newSelectedState = latestSelector.current(store.getState())

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return
        }

        latestSelectedState.current = newSelectedState
      } catch (err) {
        latestSubscriptionCallbackError.current = err
      }

      forceRender() // 如果数据有变化，就强制刷新该hooks.
    }

		// 监听 Redux中的action,如果有action的时候，判断对应的数据是否有变化。
    subscription.onStateChange = checkForUpdates
    subscription.trySubscribe()

    checkForUpdates()

    return () => subscription.tryUnsubscribe()
  }, [store, subscription])

  return selectedState
}
````
[源码](https://github.com/reduxjs/react-redux)
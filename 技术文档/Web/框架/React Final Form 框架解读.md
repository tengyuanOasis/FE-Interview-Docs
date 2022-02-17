# <center>React Final Form 框架解读</center>

React Final Form 主要是用来方便表单提交功能， 使用Field包裹的直接子组件及函数，会接收一个可提交的输入组件。
1. 用户提交表单的时候，可以获取到表单下的所有输入元素， 方便表单提交。
2. 输入组件每次有值变化时，会进行表单验证

这些功能是如何做到的？
主要是有几个主要的组件组成： ReactFinalForm , Field, useField, useForm。

* ReactFinalForm
```
	return React.createElement(
		ReactFinalFormContext.Provider,
		{ value: form },
		renderComponent(
			{
				...rest,
				__versions: versions
			},
			renderProps,
			'ReactFinalForm'
		)
	)
```

此处会使用一个 ReactFinalFormContext， 将form传递到后续子组件中。

* Field

```
const field: FieldRenderProps = useField(name, {
    afterSubmit,
    allowNull,
    beforeSubmit,
    children,
    component,
    data,
    defaultValue,
    format,
    formatOnBlur,
    initialValue,
    isEqual,
    multiple,
    parse,
    subscription,
    type,
    validate,
    validateFields,
    value
  })
````
此处调用 useField，拿到对应的数据，包括 两个属性 {input, meta}。

* useField

```
	const form: FormApi<FormValues> = useForm<FormValues>('useField')
```
这里会拿到 ReactFinalForm 定义的一个上下文，form。

````
	 const handlers = {
    onBlur: React.useCallback(
      (event: ?SyntheticFocusEvent<*>) => {
        state.blur()
        if (formatOnBlur) {
          /**
           * Here we must fetch the value directly from Final Form because we cannot
           * trust that our `state` closure has the most recent value. This is a problem
           * if-and-only-if the library consumer has called `onChange()` immediately
           * before calling `onBlur()`, but before the field has had a chance to receive
           * the value update from Final Form.
           */
          const fieldState: any = form.getFieldState(state.name)
          state.change(format(fieldState.value, state.name))
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [state.blur, state.name, format, formatOnBlur]
    ),
    onChange: React.useCallback(
      (event: SyntheticInputEvent<*> | any) => {
        // istanbul ignore next
        if (process.env.NODE_ENV !== 'production' && event && event.target) {
          const targetType = event.target.type
          const unknown =
            ~['checkbox', 'radio', 'select-multiple'].indexOf(targetType) &&
            !type &&
            component !== 'select'

          const value: any =
            targetType === 'select-multiple' ? state.value : _value

          if (unknown) {
            console.error(
              `You must pass \`type="${
                targetType === 'select-multiple' ? 'select' : targetType
              }"\` prop to your Field(${name}) component.\n` +
                `Without it we don't know how to unpack your \`value\` prop - ${
                  Array.isArray(value) ? `[${value}]` : `"${value}"`
                }.`
            )
          }
        }

        const value: any =
          event && event.target
            ? getValue(event, state.value, _value, isReactNative)
            : event
        state.change(parse(value, name))
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, name, parse, state.change, state.value, type]
    ),
    onFocus: React.useCallback(
      (event: ?SyntheticFocusEvent<*>) => {
        state.focus()
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [state.focus]
    )
  }

  const meta = {}
  addLazyFieldMetaState(meta, state)
  const input: FieldInputProps = {
    name,
    get value() {
      let value = state.value
      if (formatOnBlur) {
        if (component === 'input') {
          value = defaultFormat(value, name)
        }
      } else {
        value = format(value, name)
      }
      if (value === null && !allowNull) {
        value = ''
      }
      if (type === 'checkbox' || type === 'radio') {
        return _value
      } else if (component === 'select' && multiple) {
        return value || []
      }
      return value
    },
    get checked() {
      let value = state.value;
      if (type === 'checkbox') {
        value = format(value, name)
        if (_value === undefined) {
          return !!value
        } else {
          return !!(Array.isArray(value) && ~value.indexOf(_value))
        }
      } else if (type === 'radio') {
        return format(value, name) === _value
      }
      return undefined
    },
    ...handlers
  }
````
这里 useField，生成对应的 onChange事件，以及其他的时间到 input上边，onChange事件又会讲输入组件的值赋给了 form的change方法，所以form中会存储表单下field中所有输入组件的数据。
同时 input中还会在register field的时候，拿到对应的初始值。并通过input上的value传递给输入组件，硬刺输入组件就能够显示出对应的值。

* useForm

````
function useForm<FormValues: FormValuesShape>(
  componentName?: string
): FormApi<FormValues> {
  const form: ?FormApi<FormValues> = React.useContext(ReactFinalFormContext)
  if (!form) {
    throw new Error(
      `${componentName || 'useForm'} must be used inside of a <Form> component`
    )
  }
  return form
}
````
这个hooks仅仅只是返回ReactFinalForm 中 ReactFinalFormContext的值

## 总结
因此 要使用React Final Form 必须有onChange事件， Final Form才能拿到对应的输入组件值。 同时输入组件需要有value值，才能显示出对应的数据。

[React Final HomePage](https://final-form.org/docs/react-final-form/types/FieldProps)
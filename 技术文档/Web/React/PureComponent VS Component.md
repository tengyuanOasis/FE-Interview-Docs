PureComponent 和 Component区别不大。
PureComponent会自动进行 shouldComponentUpdate 的浅比较实现， 所以如果是字符串、数字等简单类型会有性能优化，但遇到Object， Array等类型的时候，就会有失效的问题。
[When to use Component or PureComponent](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
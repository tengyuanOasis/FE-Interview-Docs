假定： React 的组件都是 有dom节点，并且是由根节点包裹。

````
function Card(props :CardProp ) {
	const { text, onClick, rRefComp } = props;
	
  const [type, dragRef] = useDrag({
    item: { type: "component", text, con: "t1" },
	});

  return 
		<>
			<Input {...props} />
			<div ref={(ref) => {
				dragRef(ref.current.previousElementSibling);
			}}></div>
		</>
}
````
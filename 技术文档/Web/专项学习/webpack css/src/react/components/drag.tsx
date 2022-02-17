import * as React from 'react'
import { useDrag, useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface CardProp {
	text: string;
	onClick?: Function;
	rRefComp?: any;
}

function Input (props :CardProp) {
	const { text, } = props;
	return (
		<input type='button' value={text}/>
  )
}
function Card(props :CardProp ) {
	const { text, onClick, rRefComp } = props;
	
  const [type, dragRef] = useDrag({
    item: { type: "component", text, con: "t1" },
	});
	/*
	React.useEffect(() => {
		let t = onClick?.();
		t && dragRef(t);
	}, []);
	*/
  return <>
		<Input {...props} />
		<div ref={(dom:any)=> {
			dragRef(dom.previousElementSibling);
		}} style={{display: "none"}}></div>
	</>
}

function Container () {
  const [collectedProps, drop] = useDrop({
		accept: ["component"],
		hover: () => {
			//console.log("hover...");
		},
		drop: (item, monitor) => {
			console.log("t...", item, monitor);
		}
  })
  return (
    <div ref={drop} style={
			{
				height: 600,
				width: 600,
				backgroundColor: "#AAA"
			}
		} >
      
    </div>
	)
}

export default function () {
	const rRef: any = React.useRef();
	const rRefComp: any = React.useRef([]);
	return <div>
		<DndProvider backend={HTML5Backend}>
			
			<div ref={rRef} style={{display: "none"}}></div>
			
			<Card text="test1"  onClick={() => {
				return rRef?.current?.parentElement.children[1];
			}}/>
			
			<Card text="test2" onClick={() => {
				return rRef?.current?.parentElement.children[2];
			}}/>
			
			<Card text="test3"  />
				
			<Container />
		</DndProvider>
	</div>
}
import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component'
interface HelloProps {
	title: string;
	desc: string;
};
export default function (props: HelloProps): JSX.Element {
	const {title, desc} = props;
	return <>
		<h1>{title}</h1>
		<h1>{desc}</h1>
		<Frame>
			<div >
				asdfa
				<input type="button" value="Submit" onClick={() => {alert("123")}}/>
			</div>
		</Frame>
	</>
};
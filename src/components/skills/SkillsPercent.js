import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { VictoryPie } from 'victory';

const Container = styled.div`
	width: 80px;
`;

function SkillPercent(props) {
	const [percent, setPercent] = useState([{ x: 1, y: 0 }, { x: 1, y: 100 }]);

	function getData(percent) {
		return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
	}

	useEffect(() => {
		const newData = getData(props.percent);
		setPercent(newData);
	}, [props.percent]);

	return (
		<Container>
			<VictoryPie
				data={percent}
				labels={() => null}
				innerRadius={60}
				cornerRadius={15}
				animate={{
					duration: 1000,
				}}
				style={{
					data: {
						fill: d => {
							const color = '#080ae3';
							return d.x === 1 ? color : 'transparent';
						},
					},
				}}
			/>
		</Container>
	);
}

export default SkillPercent;

import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal, css} from 'styled-components';
import Collapser from '../lib';

injectGlobal`
	html, body {
		padding: 0;
		margin: 0;
	}
	html {
		height: 100%;
		font-size: 16px;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
	}
	body {
		color: #333;
		min-height: 100%;
		height: 100%;
	}

	#app-root {
		min-height: 100%;
		padding: 15px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
`;

const hollowButtonTheme = {
	button: {
		borderColor: '#fff',
		borderColorHover: 'rgba(255, 255, 255, .7)',
		textColor: '#fff',
		textColorHover: 'rgba(255, 255, 255, .7)',
		color: 'transparent',
		colorHover: 'transparent',
	}
};

class App extends React.PureComponent {
	state = {
		unveiled: 0,
		collapsed3: true
	};

	render() {
		return <Container>
			<Example>
				<ExampleHeading>1. Carousel</ExampleHeading>
				<Button onClick={this.toggle1} expanded>
					{this.state.unveiled !== 1 ? 'Reveal' : 'Hide'}
				</Button>
				<Collapser collapsed={this.state.unveiled !== 1}>
					<p>It is a long established fact that a reader will be distracted
					by the readable content of a page when looking at its layout.</p>
					<p>The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content
					here, content here', making it look like readable English.</p>
					<p>Many desktop publishing packages and web page editors now use
					Lorem Ipsum as their default model text, and a search for 'lorem
					ipsum' will uncover many web sites still in their infancy.</p>
					<p>Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).</p>
				</Collapser>
				<Button onClick={this.toggle2} expanded>
					{this.state.unveiled !== 2 ? 'Reveal' : 'Hide'}
				</Button>
				<Collapser collapsed={this.state.unveiled !== 2}>
					<p>It is a long established fact that a reader will be distracted
					by the readable content of a page when looking at its layout.</p>
					<p>The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content
					here, content here', making it look like readable English.</p>
					<p>Many desktop publishing packages and web page editors now use
					Lorem Ipsum as their default model text, and a search for 'lorem
					ipsum' will uncover many web sites still in their infancy.</p>
					<p>Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).</p>
				</Collapser>
			</Example>
			<Example>
				<ExampleHeading>2. Half-open</ExampleHeading>
				<Button onClick={this.toggle3} expanded>
					{this.state.collapsed3 ? 'Reveal' : 'Hide'}
				</Button>
				<Collapser collapsed={this.state.collapsed3} collapsedHeight={80}>
					<p>It is a long established fact that a reader will be distracted
					by the readable content of a page when looking at its layout.</p>
					<p>The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content
					here, content here', making it look like readable English.</p>
					<p>Many desktop publishing packages and web page editors now use
					Lorem Ipsum as their default model text, and a search for 'lorem
					ipsum' will uncover many web sites still in their infancy.</p>
					<p>Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).</p>
				</Collapser>
			</Example>
		</Container>;
	}

	toggle1 = () => {
		this.setState(({unveiled}) => ({unveiled: unveiled !== 1 ? 1 : 0}));
	};

	toggle2 = () => {
		this.setState(({unveiled}) => ({unveiled: unveiled !== 2 ? 2 : 0}));
	};

	toggle3 = () => {
		this.setState(({collapsed3}) => ({collapsed3: !collapsed3}));
	};
}

const Container = styled.div`
	box-sizing: border-box;
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	max-width: 260px;
	margin: 0 auto;

	${Collapser} {
		margin: 0 0 15px;

		&:last-child { margin-bottom: 0; }

		p {
			margin: 15px 0;
			text-indent: 0;

			&:last-child { margin-bottom: 0; }
		}
	}
`;

const ExampleHeading = styled.h2`
	margin: 25px 0;
	padding: 0;
	font-family: inherit;
	font-size: 26px;
	font-weight: 600;
	color: #222;
	border-bottom: 1px solid #666;
    line-height: 1.5;

	&:first-child { margin-top: 0; }
`;

export const btnTheme = (propName, defaultValue) => (props) => {
	const prop = props.theme && props.theme.button && props.theme.button[propName];
	return prop !== undefined ? prop : defaultValue;
};

const Button = styled.button.attrs({type: 'button'})`
	box-sizing: border-box;
	background: ${btnTheme('color', '#3b71aa')};
	margin: 15px 0 0;
	line-height: 1.3;
	padding: 7px 16px;
	font-size: 16px;
	color: ${btnTheme('textColor', '#fff')};
	border: 1px solid ${btnTheme('borderColor', '#3b6592')};
	border-radius: 2px;
	cursor: pointer;
	outline: none;

	&:hover {
		background: ${btnTheme('colorHover', '#356190')};
		color: ${btnTheme('textColorHover', '#fff')};
		border-color: ${btnTheme('borderColorHover', '#3b6592')};
	}

	&:first-of-type {
		margin-top: 0;
	}

	${(props) =>  props.expanded && css`
		display: block;
		width: 100%;
	`}
`;

const Example = styled.div`
	margin: 25px 0;

	&:first-child { margin-top: 0; }
	&:last-child { margin-bottom: 0; }

	${Button} {
		display: table;
	}
`;

ReactDOM.render(<App />, document.getElementById('app-root'));

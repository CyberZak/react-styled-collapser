import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TransitionState = {
	None: 'none',
	Initial: 'initial',
	Processing: 'processing'
};

/**
 * Holds the content that should be collapsed and uncollapsed depending on the
 * value of input `collapsed`.
 */
class Collapser extends React.Component {
	static propTypes = {
		/**
		 * Collapsed-Uncollapsed state transition duration in milliseconds.
		 */
		duration: PropTypes.number,
		/**
		 * CSS transition easing function ('ease', 'linear', etc).
		 */
		easing: PropTypes.string,
		/**
		 * Current collapsing state.
		 */
		collapsed: PropTypes.bool,
		/**
		 * Maximum height of content shown in collapsed state.
		 */
		collapsedHeight: PropTypes.number,
		/**
		 * Whether to show a shrinked content indicator line in collapsed state.
		 */
		hasCropper: PropTypes.bool
	};

	static defaultProps = {
		duration: 200,
		easing: 'ease',
		collapsed: false,
		collapsedHeight: 0,
		hasCropper: true
	};

	constructor(props) {
		super(props);

		this.state = {
			transitionState: TransitionState.None,
            startTime: 0,
            collapsed: props.collapsed
		};

		this.contentRef = React.createRef();
    }
    
    static getDerivedStateFromProps(props, state) {
        return props.collapsed === state.collapsed ? null : {
            transitionState: TransitionState.Initial,
            startTime: Date.now(),
            collapsed: props.collapsed
        };
    }

	componentDidMount() {
		this.measureContentHeight();
	}

	componentDidUpdate() {
		this.measureContentHeight();
		if (this.state.transitionState === TransitionState.Initial) {
			// Ensure next render() won't be called in the current frame
			setTimeout(() => {
				delete this.timeoutId;
				this.setState({transitionState: TransitionState.Processing});
			}, 0);
			// Reset transition state after it completes
			setTimeout(() => {
				this.setState({
					transitionState: TransitionState.None,
					startTime: 0
				});
			}, this.props.duration);
		}
	}

	measureContentHeight() {
		this.contentHeight = this.contentRef.current.clientHeight;
	}

	render() {
		const {transitionState, collapsed} = this.state;
		const {duration, easing, collapsedHeight, hasCropper} = this.props;
        const crop = collapsedHeight && collapsed && transitionState === TransitionState.None;
        const transition = duration + 'ms ' + easing;
		
		const style = {
            transition: `height ${transition}`,
            maxHeight: crop ? collapsedHeight + 'px' : 'none'
        };
		if (transitionState === TransitionState.Initial)
			style.height = (collapsed ? this.contentHeight : collapsedHeight) + 'px';
		else if (transitionState === TransitionState.Processing)
			style.height = (collapsed ? collapsedHeight : this.contentHeight) + 'px';
		else if (collapsed && !collapsedHeight)
            style.display = 'none';
        
        const cropperStyle = {transition: `opacity ${transition}`};
		
		return <div className={this.props.className} style={style}>
            <Content innerRef={this.contentRef}>
                {this.props.children}
            </Content>
            {!!(hasCropper && collapsedHeight) && <Cropper
                className={crop ? 'shown' : ''}
                style={cropperStyle}
            />}
        </div>;
	}
}

export default styled(Collapser)`
    overflow-y: hidden;
	position: relative;
`;

const Cropper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 10px;
    opacity: 0;
    visibility: hidden;

    &.shown {
        opacity: 1;
		visibility: visible;
    }
`;

const Content = styled.div`
	overflow: hidden;
`;

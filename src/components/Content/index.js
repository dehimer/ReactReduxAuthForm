import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var classNames = require('classnames');

import { switchStage } from 'actions'
import styles from './index.css';



export class Content extends React.Component {
    render() {

		console.log(this.props.stages);

        return <div>
			<div className={ styles.stages }>
				{
					this.props.stages.map((stage, index) => {

						return <div key={ index } className={ classNames(styles.stage, 'shadow', 'white_bg_color', 'rounded_corners', {[styles.unactive]: +this.props.current_stage !== +index}) }>
							{ stage }
							</div>
					})
				}
			</div>
			<div className={ styles.content }>
			</div>
		</div>;
    }
}

function mapStateToProps(state) {
	return {
		stages: state.stages,
		current_stage: state.current_stage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		switchStage: bindActionCreators(switchStage, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
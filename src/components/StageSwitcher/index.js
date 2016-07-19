import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var classNames = require('classnames');

import { switchStage } from 'actions'
import styles from './index.css';



export class StageSwitcher extends React.Component {
	constructor (props)
	{
		super(props);

		if(this.props.stages[this.props.current_stage] === undefined)
		{
			this.props.switchStage(0);
		}
	}
	handleClick (e) {
		
		const dir = e.target.dataset.dir;
		
		let current_stage = this.props.current_stage;

		if(dir == 'prev'){
			
			current_stage -= 1;
			
			if(this.props.stages[current_stage] !== undefined)
			{
				this.props.switchStage(current_stage);
			}

		}
		else if (dir == 'next') {
			
			current_stage += 1;
			
			if(this.props.stages[current_stage] !== undefined)
			{
				this.props.switchStage(current_stage);
			}
		}

	}
    render() {

        return <div>
			<div className={ styles.prevnext }>
				{
					[{
						name: '<  Предыдущий',
						dir: 'prev'
					},
					{
						name: ''
					},
					{
						name: 'Следующий  >',
						dir: 'next'
					}].map((button, index)=> {

						
						const className = classNames(
							styles.prevnext_button,
							...(button.name?['shadow', 'white_bg_color', 'orange_text_color', 'rounded_corners']:[])
						);

						return <div key={ index } data-dir={ button.dir } className={ className } onClick={ ::this.handleClick }>
							{ button.name }
						</div>
					})
				}
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
)(StageSwitcher)
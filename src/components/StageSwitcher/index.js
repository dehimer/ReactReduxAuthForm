import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const classNames = require('classnames');

import { switchStage, resetAuthInfo } from 'actions'
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

		if(e.target.dataset.blocked === 'true')
		{
			return;
		}
		
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
			
			if(this.props.stages[current_stage] !== undefined || current_stage === 4)
			{
				this.props.switchStage(current_stage);
			}
		}
		else if (dir == 'again'){

			this.props.resetAuthInfo();
			this.props.switchStage(0);
		}

	}
    render() {

		const catselected = (this.props.authinfo && this.props.authinfo.animal && this.props.authinfo.animal.type !== 'dog');
		const isitend = (+this.props.current_stage >= 3);

		let buttons = [{
				name: '<  Предыдущий',
				dir: 'prev'
			},
			{
				name: ''
			},
			{
				name: isitend?'Завершить':'Следующий  >',
				dir: 'next'
			}];
		
		if(this.props.current_stage === 4)
		{
			buttons = [{name:'Пройти заново', dir:'again'}];
		}

        return <div>
			<div className={ styles.prevnext }>
				{
					buttons.map((button, index)=> {

						
						const className = classNames(
							styles.prevnext_button,
							'noselect',
							...(button.name?['shadow', 'white_bg_color', 'orange_text_color', 'rounded_corners']:[]),
							{[styles.invert_color]:isitend&&(button.dir === 'next' || button.dir === 'again')}
						);

						let blocked = false;
						if(button.dir === 'prev' && +this.props.current_stage === 0 || (button.dir === 'next') && (+this.props.current_stage === 3) && !catselected )
						{
							blocked = true;
						}

						return <div key={ index }
							data-dir={ button.dir }
							data-blocked={ blocked }
							className={ className }
							onClick={ ::this.handleClick }
							style={ {opacity:blocked?0.5:1, minWidth:button.name?'130px':'16px'} }>
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
		current_stage: state.current_stage,
		authinfo: state.authinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		switchStage: bindActionCreators(switchStage, dispatch),
		resetAuthInfo: bindActionCreators(resetAuthInfo, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageSwitcher)
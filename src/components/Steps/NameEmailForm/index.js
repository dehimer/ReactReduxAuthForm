import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class UserNameEmail extends React.Component {
	render() {

		const username = this.props.name || '';
		const useremail = this.props.email || '';

		const email_has_at = useremail.indexOf('@') >= 0;

		return <div>

			<div className={ 'label' }>
				1. Введите имя и e-mail
			</div>

			<div className={ styles.input_block }>
				<input
					type='text' 
					value={ username }
					className={ classNames(styles.input, 'rounded_corners', 'shadow', {'red_border_color':!username}) }
					onChange={ e => this.props.onNameChange(e.target.value) }
					placeholder='Имя'
				/>

				<div className={ 'red_text_color' } style={ {display:username?'none':'block'} }>
					<spam style={ {padding:'0px 5px'} }>&mdash;</spam>введите ваше имя
				</div>
			</div>

			<div style={ {height:'16px'} }/>
			
			<div className={ styles.input_block }>
				<input 
					type='text'
					value={ useremail }
					className={ classNames(styles.input, 'rounded_corners', 'shadow', {'red_border_color':!email_has_at}) }
					onChange={ e => this.props.onEmailChange(e.target.value) }
					placeholder='Email'
				/>

				<div className={ 'red_text_color' } style={ {display:email_has_at?'none':'block'} }>
					<spam style={ {padding:'0px 5px'} }>&mdash;</spam>в адресе должен быть символ &laquo;@&raquo;
				</div>

			</div>
			
			<div style={ {height:'150px'} }>
			</div>
		</div>;
	}
}
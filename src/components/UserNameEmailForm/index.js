import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class UserNameEmail extends React.Component {
    render() {

        return <div>

			<div className={ styles.label }>
				1. Введите имя и e-mail
			</div>

			<input
				type='text' 
				value={ this.props.name || '' }
				className={ classNames(styles.input, 'rounded_corners', 'shadow') }
				onChange={ e => this.props.onNameChange(e.target.value) }
				placeholder='Имя'
			/>

			<div style={ {height:'16px'} }/>
			
			<input 
				type='text'
				value={ this.props.email || '' }
				className={ classNames(styles.input, 'rounded_corners', 'shadow') }
				onChange={ e => this.props.onEmailChange(e.target.value) }
				placeholder='Email'
			/>

			<div style={ {height:'150px'} }>
			</div>
		</div>;
    }
}
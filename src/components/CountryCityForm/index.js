import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class CountryCityForm extends React.Component {
    render() {

		this.props.countries[0] = '';

		const citiesByCountry = Object.keys(this.props.cities).filter(id => {
			return +this.props.cities[id].country === +this.props.country;
		}).map(id => {
			return {id, ...this.props.cities[id]}
		});
		console.log(citiesByCountry);

        return <div>

			<div className={ styles.label }>
				2. Выберите страну и город
			</div>
			
			<select
				value={ this.props.country || 0 }
				placeholder='Страна'
				className={ classNames(styles.input, 'rounded_corners', 'shadow', 'white_bg_color') }
				onChange={e => this.props.onCountryChange(e.target.value) }
			>
				{
					Object.keys(this.props.countries).map(id => {
						return <option key={ id } value={ id } >{ this.props.countries[id] }</option>
					})
				}
			</select>

			
			<div style={ {height:'16px'} }/>

			<input
				type='text'
				value={ this.props.city || ''}
				list='cities'
				placeholder='Город'
				className={ classNames(styles.input, 'rounded_corners', 'shadow', 'white_bg_color') }
				onChange={e => this.props.onCityChange(e.target.value)}
			/>

			<datalist id='cities'>
				{
					citiesByCountry.map(city => {
						return <option key={ city.id } value={ city.name }/>
					})
				}
			</datalist>

			<div style={ {height:'148px'} }>
			</div>
		</div>;
    }
}



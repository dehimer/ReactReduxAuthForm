import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class CountryCityForm extends React.Component {
    render() {

		this.props.countries[0] = 'Страна';

		const citiesByCountry = Object.keys(this.props.cities).filter(id => {
			return +this.props.cities[id].country === +this.props.country;
		}).map(id => {
			return {id, ...this.props.cities[id]}
		});

		let color = !(+this.props.country)?'#dddddd':'';
		// alert(this.props.country+':'+this.props.city);
        return <div>

			<div className={ 'label' }>
				2. Выберите страну и город
			</div>

			<div className={ styles.input_block }>
				<select
					value={ this.props.country || 0 }
					placeholder='Страна'
					className={ classNames( styles.custom_select, styles.input, 'rounded_corners', 'shadow', 'white_bg_color', {'red_border_color':!(+this.props.country>0)}) }
					style={ {color:color} }
					onFocus={ () => { this.countryselect.style.color = '#777' } }
					onBlur={ () => {this.countryselect.style.color = color} }
					ref={ ref => this.countryselect = ref }
					onChange={e => this.props.onCountryChange(e.target.value) }>
					{
						Object.keys(this.props.countries).map(id => {
							return <option key={ id } value={ id } >{ this.props.countries[id] }</option>
						})
					}
				</select>

				<div className={ 'red_text_color' } style={ {display:+this.props.country>0?'none':'block'} }>
					<spam style={ {padding:'0px 5px'} }>&mdash;</spam>выберите страну
				</div>
			</div>

			
			<div style={ {height:'16px'} }/>

			<div className={ styles.input_block }>
				<input
					type='text'
					value={ this.props.city || ''}
					list='cities'
					placeholder='Город'
					className={ classNames(styles.input, 'rounded_corners', 'shadow', 'white_bg_color', {'red_border_color':!(this.props.city)}) }
					onChange={e => {console.log(e.target);this.props.onCityChange(e.target.value);}}
				/>

				<datalist id='cities'>
					{
						citiesByCountry.map(city => {
							return <option key={ city.id } value={ city.name }/>
						})
					}
				</datalist>

				<div className={ 'red_text_color' } style={ {display:(this.props.city)?'none':'block'} }>
					<spam style={ {padding:'0px 5px'} }>&mdash;</spam>выберите город
				</div>
			</div>

			<div style={ {height:'148px'} }>
			</div>
		</div>;
    }
}



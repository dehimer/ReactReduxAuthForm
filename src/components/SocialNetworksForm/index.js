import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class SocialNetworksForm extends React.Component {
	render() {

		let socialnetworks = [
			{id: 'fb', name: 'Facebook', placeholder: 'Ваша страница в Facebook'},
			{id: 'vk', name: 'Вконтакте', placeholder: 'Ваша страница в Вконтакте'},
			{id: 'tw', name: 'Twitter', placeholder: 'Ваша страница в Twitter'},
			{id: 'ok', name: 'Одноклассники', placeholder: 'Ваша страница в Одноклассники'}
		];

        return <div>

			<div className={ styles.label }>
				3. Отметьте социальные сети
			</div>

			<div className={ styles.socialnetworks }>
				{
					socialnetworks.map( socialnetwork => {

						socialnetwork.selected = false;

						if(this.props.socialnetworks)
						{
							const socialnetworks_fromprop = this.props.socialnetworks.find(sn => sn.id == socialnetwork.id) || {};
							socialnetwork.selected = socialnetworks_fromprop.selected;
							socialnetwork.link = socialnetworks_fromprop.link;
						}

						return <div key={ socialnetwork.id } className={ styles.socialnetwork }>
							<span className={ styles.socialnetwork_label }>
								
								<input
									type='checkbox'
									value={ socialnetwork.id }
									onChange={ () => {
										socialnetwork.selected = !socialnetwork.selected;
										this.props.onSocialnetworksChange(socialnetworks);
									} }
									checked={ socialnetwork.selected }
									/>
								{ socialnetwork.name }
							</span>
							<input
								type='text'
								value={ socialnetwork.link || ''}
								placeholder={ socialnetwork.placeholder }
								className={ classNames(styles.input, 'rounded_corners', 'shadow', 'white_bg_color') }
								style={ {display:socialnetwork.selected?'inline':'none', padding:'5px'} }
								onChange={ e => {
									socialnetwork.link = e.target.value;
									this.props.onSocialnetworksChange(socialnetworks);
								} }/>
						</div>
					})
				}
			</div>

			<div style={ {height:'86px'} }>
			</div>
		</div>;
    }
}



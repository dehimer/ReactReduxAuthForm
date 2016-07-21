import React from 'react';

// const classNames = require('classnames');

import styles from './index.css';


export default class EndForm extends React.Component {
	render() {

		const username = this.props.authinfo.name;
		const useremail = this.props.authinfo.email;

		const city = this.props.authinfo.city;
		const country = this.props.countries && this.props.countries[this.props.authinfo.country];

		const socialnetworks = this.props.authinfo.socialnetworks && this.props.authinfo.socialnetworks.filter( socialnetwork => {
			return socialnetwork.selected && socialnetwork.link;
		}).map(socialnetwork => {
			return <div className={ styles.socialnetwork} key={ socialnetwork.id }>
				<div className={ styles.socialnetwork_name}>
					{ socialnetwork.name }
				</div>
				<div>
					{ socialnetwork.link }
				</div>
			</div>
		});
		console.log(socialnetworks);
		const usercatimg = this.props.authinfo.animal;

		return <div className={ styles.root }>
			<div className={ styles.left_part }>

				<div>
					<div className={ styles.name }>
						{ username }:
					</div>

					<div>
						{ useremail }
					</div>
				</div>

				<div>
					{ city }, { country }
				</div>

				<div>
					{ socialnetworks }
				</div>
			</div>

			<div className={ styles.img_wrapper }>
				<img className={ styles.img } src={ `/media/${usercatimg.img}` }/>
			</div>

		</div>;
	}
}
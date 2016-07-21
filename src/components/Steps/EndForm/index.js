import React from 'react';

// const classNames = require('classnames');

// import styles from './index.css';


export default class EndForm extends React.Component {
	render() {

		const username = this.props.authinfo.name;
		const useremail = this.props.authinfo.email;

		const city = this.props.authinfo.city;
		const country = this.props.authinfo.country;

		const socialnetworks = this.props.authinfo.socialnetworks && this.props.authinfo.socialnetworks.filter( socialnetwork => {
			return socialnetwork.selected && socialnetwork.link;
		}).map(socialnetwork => {
			return <div key={ socialnetwork.id }>
				<div>
					{ socialnetwork.name }
				</div>
				<div>
					{ socialnetwork.link }
				</div>
			</div>
		});

		const usercatimg = this.props.authinfo.animal;

		return <div>
			{ username }
			{ useremail }

			{ city }, { country }

			{ socialnetworks }

			<img src={ `/media/${usercatimg.img}` }/>

		</div>;
	}
}
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const classNames = require('classnames');


import UserNameEmailForm from 'components/UserNameEmailForm';
import CountryCityForm from 'components/CountryCityForm';
import SocialNetworksForm from 'components/SocialNetworksForm';
import CatsDogForm from 'components/CatsDogForm';
import EndForm from 'components/EndForm';


import { switchStage, resetAuthInfo, updateAuthInfoCountry, updateAuthInfoCity, updateAuthInfoSocialNetworks, updateAuthInfoAnimal } from 'actions'
import styles from './index.css';



export class Content extends React.Component {
    render() {

		let content;
		switch(this.props.current_stage)
		{
			case 0:
				content = <UserNameEmailForm
					name={this.props.authinfo.name}
					email={this.props.authinfo.email}
					onNameChange={ name => this.props.updateAuthinfo({name}) }
					onEmailChange={ email => this.props.updateAuthinfo({email}) }
				/>;
				break;
			case 1:
				content = <CountryCityForm
					country={ this.props.authinfo.country }
					countries={ this.props.countries }
					city={ this.props.authinfo.city }
					cities={ this.props.cities }
					onCountryChange={ country => this.props.updateAuthInfoCountry(country) }
					onCityChange={ city => this.props.updateAuthInfoCity(city) }
				/>;
				break;
			case 2:
				content = <SocialNetworksForm
					socialnetworks={ this.props.authinfo.socialnetworks }
					onSocialnetworksChange={ socialnetworks => this.props.updateAuthInfoSocialNetworks(socialnetworks) }
				/>;
				break;
			case 3:
				content = <CatsDogForm animal={this.props.authinfo.animal} onAnimalCnange={animal => this.props.updateAuthInfoAnimal(animal)}/>;
				break;
			case 4:
				content = <EndForm authinfo={this.props.authinfo} resetAuthInfo={ () => this.props.resetAuthInfo() }/>;
				break;
			default:
				content = '';
				break;
		}

        return <div>
			<div className={ styles.stages }>
				{
					this.props.stages.map((stage, index) => {

						const class_names = classNames(
							styles.stage,
							'shadow',
							'white_bg_color',
							'rounded_corners',
							{[styles.unactive]: +this.props.current_stage !== +index},
							{[styles.passed]: +this.props.current_stage > +index}
						)

						return <div key={ index } className={ class_names }>
							{ stage }
							</div>
					})
				}
			</div>
			<div className={ styles.content }>
				{ content }
			</div>
		</div>;
    }
}

function mapStateToProps(state) {
	return {
		stages: state.stages,
		current_stage: state.current_stage,
		countries: state.countries,
		cities: state.cities,
		authinfo: state.authinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		switchStage: bindActionCreators(switchStage, dispatch),
		resetAuthInfo: bindActionCreators(resetAuthInfo, dispatch),
		updateAuthInfoCountry: bindActionCreators(updateAuthInfoCountry, dispatch),
		updateAuthInfoCity: bindActionCreators(updateAuthInfoCity, dispatch),
		updateAuthInfoSocialNetworks: bindActionCreators(updateAuthInfoSocialNetworks, dispatch),
		updateAuthInfoAnimal: bindActionCreators(updateAuthInfoAnimal, dispatch)
		
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
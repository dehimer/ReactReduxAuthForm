import React from 'react';

const classNames = require('classnames');

import styles from './index.css';


export default class CatsDogForm extends React.Component {
	render() {

		const cats_and_dogs = [
			{
				id: 1,
				img:'cat1.jpg',
				type:'cat'
			},
			{
				id: 2,
				img:'cat2.jpg',
				type:'cat'
			},
			{
				id: 3,
				img:'cat3.jpg',
				type:'cat'
			},
			{
				id: 4,
				img:'dog4.jpg',
				type:'dog'
			}
		];


		const dogselected = this.props.animal && this.props.animal.type === 'dog';

        return <div>

			<div className={ styles.label }>
				4. Выберите любимого котика
			</div>

			<div className={ styles.imgs }>
				{
					cats_and_dogs.map( (animal, index) => {

						let message = '';

						if(index === 0 && dogselected)
						{
							message = <div className={ styles.message }>
								Вы выбрали собачку. А надо котика.
							</div>
						}

						const selected = (this.props.animal && +this.props.animal.id === +animal.id);


						return <div key={ index } className={ styles.wrapper } onClick={() => this.props.onAnimalCnange(animal)} >
							<div className={ styles.img_wrapper }>
								<img src={ `/media/${animal.img}` } className={ classNames(styles.img, 'rounded_corners', {[styles.img_selected]:selected}) }/>
							</div>
							{ message }
						</div>
					})
				}
			</div>


			<div style={ {height:'54px'} }>
			</div>
		</div>;
    }
}
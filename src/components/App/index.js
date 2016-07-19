import React from 'react'
import { Link } from 'react-router'

import styles from './index.css';

import Notify from 'components/Notify';

export default function App({ children }) {
    return (
        <div>
            <header className={ styles.header }>
                {' '}
                <Link to='/'>
                    <button>Главная</button>
                </Link>
                {' '}
                <Link to='/email'>
                    <button>Отправить письмо</button>
                </Link>
            </header>
            <Notify/>
            <div>
                {children}
            </div>
        </div>
    )
}
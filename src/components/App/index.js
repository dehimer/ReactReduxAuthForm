import React from 'react'

import styles from './index.css';

import Content from 'components/Content';
import StageSwitcher from 'components/StageSwitcher';

export default function App() {
    return (
        <div className={ styles.root }>
            <Content/>
            <StageSwitcher/>
        </div>
    )
}
import React from 'react';
import styles from './GridLines.module.css';

export default function GridLines() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
}

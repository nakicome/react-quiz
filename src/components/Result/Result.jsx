import styles from './Result.module.css';
import Confetti from 'react-confetti';

export default function Result({ correctNumLen, maxQuizLen }) {
    return (
        <>
            <div className={styles.result}>
                Your number of correct answers is
                <span className={styles.resultHighlight}>{correctNumLen} / {maxQuizLen}</span>
            </div>
            <Confetti />
        </>
    )
}

import styles from '.././style/index.module.scss'
import Header from '../../components/header'
import '.././style/global.css'
import Registration from '../../components/registration'

export default function Ragister(){
    return (
        <div className={styles.container}>

            <div className={styles.section}><Registration/></div>
        </div>  
    )
};

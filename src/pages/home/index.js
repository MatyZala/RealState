import styles from '../styles/Home.module.css';
import HomePage from '../../components/home';

const Home = ({ tasks }) => {
  return (
    <div className={styles.container}>
      <HomePage />
{/*       {console.log(tasks)} */}
    </div>
  )
}

export default Home


import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { MappedRoutes } from './routes/routes'
import styles from './sass/App/App.module.scss'

export const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles['container-outlet']}>
        <MappedRoutes />
      </div>

      <Footer />
    </div>
  )
}

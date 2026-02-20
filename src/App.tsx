import styles from './App.module.css'
import Expenses from './components/Expenses/Expenses'
import { ExpensesProvider } from './context/ExpensesContext'

function App() {
  return (
    <ExpensesProvider>
      <div className={styles.container}>
        <Expenses />
      </div>
    </ExpensesProvider>
  )
}

export default App

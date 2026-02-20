import styles from './App.module.css'
import AddExpense from './components/AddExpense/AddExpense'
import Expenses from './components/Expenses/Expenses'
import { ExpensesProvider } from './context/ExpensesContext'

function App() {
  return (
    <ExpensesProvider>
      <div className={styles.container}>
        <AddExpense />
        <Expenses />
      </div>
    </ExpensesProvider>
  )
}

export default App

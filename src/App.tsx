import styles from './App.module.css'
import Income from './components/Income/Income'
import BudgetOverview from './components/BudgetOverview/BudgetOverview'
import Summary from './components/Summary/Summary'
import Expenses from './components/Expenses/Expenses'
import SideHustles from './components/SideHustles/SideHustles'
import { IncomeProvider } from './context/IncomeContext'
import { ExpensesProvider } from './context/ExpensesContext'
import { SideHustlesProvider } from './context/SideHustlesContext'

function App() {
  return (
    <IncomeProvider>
      <ExpensesProvider>
        <SideHustlesProvider>
          <div className={styles.container}>
            <Income />
            <BudgetOverview />
            <Summary />
            <Expenses />
            <SideHustles />
          </div>
        </SideHustlesProvider>
      </ExpensesProvider>
    </IncomeProvider>
  )
}

export default App

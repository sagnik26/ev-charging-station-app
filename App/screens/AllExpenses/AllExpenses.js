import React, {useContext} from 'react'
import ExpensesOutput from '../../../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../../../store/expenses-context'

const AllExpenses = () => {
  const expenseContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput 
      expenses={expenseContext.expenses} 
      expensesPeriod='Total'  
      fallBacktext={'No Data Found'}
    />
  )
}

export default AllExpenses

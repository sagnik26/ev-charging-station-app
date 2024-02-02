import React, {useContext, useEffect, useState} from 'react'
import ExpensesOutput from '../../../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../../../store/expenses-context'
import { getDateMinusDays } from '../../../util/date'
import { getExpenses } from '../../../util/http'

const RecentExpenses = () => {
  const expenseContext = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      expenseContext.setExpenses(expenses);
    }

    fetchExpenses();
  }, []);

  const recentExpenses = expenseContext.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  })

  return (
    <ExpensesOutput 
      expenses={recentExpenses} 
      expensesPeriod='Last 7 days' 
      fallBacktext={'No Recent Data Found'}
    />
  )
}

export default RecentExpenses

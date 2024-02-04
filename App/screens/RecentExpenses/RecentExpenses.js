import React, {useContext, useEffect, useState} from 'react'
import ExpensesOutput from '../../../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../../../store/expenses-context'
import { getDateMinusDays } from '../../../util/date'
import { getExpenses } from '../../../util/http'
import LoadingOverlay from '../../../components/UI/LoadingOverlay'
import ErrorOverlay from '../../../components/UI/ErrorOverlay'

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expenseContext = useContext(ExpensesContext);

  async function fetchExpenses() {
    setIsFetching(true);
    try {
      const expenses = await getExpenses();
      expenseContext.setExpenses(expenses);
    }
    catch (error) {
      setError('Could not fetch expenses!!!');
    }
    setIsFetching(false);
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  const errorHandler = async () => {
    setError(null);
    await fetchExpenses();
  }

  if(error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if(isFetching) {
    return <LoadingOverlay />
  }

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

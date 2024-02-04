import axios from 'axios';

const BASE_URL = 'https://react-native-expense-tra-42563-default-rtdb.firebaseio.com'

export async function storeExpense(expenseData) {
    const resp = await axios.post(
        BASE_URL + '/expenses.json',
        expenseData
    );
    const id = resp.data.name;
    return id;
}

export async function getExpenses() {
    const response = await axios.get(BASE_URL + '/expenses.json');
    const expenses = [];

    for(const key in response.data) {
        const expensesObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expensesObj);
    }

    return expenses;
}

export function updateExpenseItem(id, expenseData) {
    return axios.put(BASE_URL + `/expenses/${id}.json`, expenseData)
}

export function deleteExpense(id) {
    return axios.delete(BASE_URL + `/expenses/${id}.json`);
}



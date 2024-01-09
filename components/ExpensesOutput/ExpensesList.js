import { FlatList, Text } from "react-native"
import Expenseitem from "./ExpenseItem"

function renderExpensesItem(itemData) {
    return (
        <Expenseitem {...itemData.item} />
    )
}

function ExpensesList({ expenses }) {
    return (
        <FlatList 
            data={expenses} 
            renderItem={renderExpensesItem} 
            keyExtractor={(item) => item.id}
        />
    )
    
}

export default ExpensesList
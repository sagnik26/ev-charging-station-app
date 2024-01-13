import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallBacktext }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary 
                expenses={expenses}
                periodName={expensesPeriod} 
            />
            {
                expenses.length > 0 ? 
                <ExpensesList expenses={expenses} /> :
                <Text style={styles.infoText}>{fallBacktext}</Text>
            }
            
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})


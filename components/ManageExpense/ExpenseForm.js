import { View, StyleSheet, Text, Alert } from "react-native"
import Input from "./Input"
import { useState } from "react"
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currInputVal) => {
            return {
                ...currInputVal,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    }

    // Function to execute on Submit input form
    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
            description: inputValues.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // show feedback //
            // Alert.alert("Invalid Input", "Please check your input values");
            setInputValues((currInputs) => {
                return {
                    amount: { value: currInputs.amount.value, isValid: amountIsValid },
                    date: { value: currInputs.date.value, isValid: dateIsValid },
                    description: { value: currInputs.description.value, isValid: descriptionIsValid }
                }
            })
            return;
        }
        else {
            onSubmit(expenseData);
        }
    }

    const formIsInvalid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    invalid={!inputValues.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount.value
                    }}
                    style={styles.rowInput}
                />
                <Input
                    label="Date"
                    invalid={!inputValues.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date.value
                    }}
                    style={styles.rowInput}
                />
            </View>
            <Input
                label="Description"
                invalid={!inputValues.description.isValid}
                textInputConfig={{
                    multiline: true,
                    autoCapitalize: 'sentences',
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description.value
                    // autoCorrect: false
                }}
            />
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your data</Text>}
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
    },
});


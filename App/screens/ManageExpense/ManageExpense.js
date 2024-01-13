import React, {useEffect, useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from '../../../constants/styles';
import Button from '../../../components/UI/Button';
import { ExpensesContext } from '../../../store/expenses-context';

const ManageExpense = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expenseContext = useContext(ExpensesContext);

  useEffect(() => {
    navigation.setOptions({ 
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    expenseContext.deleteExpense(editedExpenseId);
  }

  const cancelHandler = () => {
    navigation.goBack();
  }
  
  const confirmHandler = () => {
    if(isEditing) {
      expenseContext.updateExpense(editedExpenseId,{
        description: 'XXyyyyyyy',
        amount: 89700.8789,
        date: new Date('2024-01-11')
      });
    }
    else {
      expenseContext.addExpense({
        id: '199',
        description: 'XX',
        amount: 89700.87,
        date: new Date('2024-01-12')
      });
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {
            isEditing ? 'Update' : 'Add'
          }
        </Button>
      </View>
      {isEditing && 
      <View style={styles.deleteContainer}>
        <Entypo 
          name="trash" 
          size={24} 
          color={GlobalStyles.colors.error500} 
          onPress={deleteExpenseHandler}
        />
      </View>
      }
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center"
  }
})




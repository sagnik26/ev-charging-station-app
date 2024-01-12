import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ManageExpense from './App/screens/ManageExpense/ManageExpense';
import RecentExpenses from './App/screens/RecentExpenses/RecentExpenses';
import AllExpenses from './App/screens/AllExpenses/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Iconbutton from './util/iconbutton';

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpensesOverview() {
    const navigation = useNavigation();

    return (
      <BottomTabs.Navigator 
        screenOptions={{
          headerStyle: { 
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: 'white',
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: () => <Iconbutton name={"pluscircleo"} action={() => navigation.navigate('ManageExpenses')} />
        }}
      >
        <BottomTabs.Screen 
          name='RecentExpenses' 
          component={RecentExpenses} 
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent Expenses',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="report" size={size} color={color} />
            )
          }}
        />
        <BottomTabs.Screen 
          name='AllExpenses' 
          component={AllExpenses} 
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={size} color={color} />
            )
          }}
        />
      </BottomTabs.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500
            },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} 
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='ManageExpenses' 
            component={ManageExpense} 
            options={{
              title: 'Manage Expense',
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


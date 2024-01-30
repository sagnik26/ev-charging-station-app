import { View, Text, TextInput, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles"

function Input({ label, style, textInputConfig, invalid }) {

    let inputStyles = [styles.inputStyle]

    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.labelStyle, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={[inputStyles, invalid && styles.invalidInput]} {...textInputConfig} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    labelStyle: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    inputStyle: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})

import { Text, View } from "react-native";
import { styles } from "./styles";

export const BorderButton = ({title}) => {

  return (
    <View style={styles.containerButton}>
            <Text style={styles.title}>{title}</Text>
    </View>
  );
}
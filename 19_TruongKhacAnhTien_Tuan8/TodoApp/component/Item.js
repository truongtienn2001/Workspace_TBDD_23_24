import { TouchableOpacity, Text } from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}
  >
    <Text style={{fontSize: 32, color: textColor }}>{item.id}</Text>
  </TouchableOpacity>
);
export default Item;

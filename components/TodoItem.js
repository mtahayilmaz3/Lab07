import { StyleSheet, Text, Pressable } from 'react-native';

export default function TodoItem({ text, id, onDelete }) {
  return (
    <Pressable
      onPress={() => onDelete(id)} // Task'a tıklanınca sil
      style={({ pressed }) => [
        styles.taskItem,
        pressed && styles.pressedItem, // basılıyken stil değişsin
      ]}
    >
      <Text style={styles.taskText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2, // Android gölge
    shadowColor: '#000', // iOS gölge
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#dddddd',
  },
});

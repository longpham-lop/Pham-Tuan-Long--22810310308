import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Làm cho container chiếm toàn màn hình
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: '#f5f5f5', // Màu nền sáng cho màn hình
  },
  square: {
    width: 200, // Chiều rộng của hình vuông
    height: 200, // Chiều cao của hình vuông
    backgroundColor: '#4CAF50', // Màu nền xanh lá
    justifyContent: 'center', // Căn giữa chữ theo chiều dọc
    alignItems: 'center', // Căn giữa chữ theo chiều ngang
  },
  text: {
    color: 'white', // Màu chữ trắng
    fontSize: 18, // Kích thước chữ
    fontWeight: 'bold', // Chữ in đậm
  },
});

export default App;

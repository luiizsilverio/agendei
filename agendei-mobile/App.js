import { StatusBar, StyleSheet } from 'react-native';
import { AuthProvider } from './src/contexts/auth-context';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF'
  },
});
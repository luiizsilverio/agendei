import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes'; // rotas públicas
import { AppRoutes } from './app.routes';   // rotas privadas
import { authContext } from '../contexts/auth-context';

export function Routes() {
  const { user } = useContext(authContext);

  return (
    <NavigationContainer>
      { 
        user?.id_user ? <AppRoutes /> : <AuthRoutes /> 
      }
    </NavigationContainer>
  )
}

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes'; // rotas públicas
import { AppRoutes } from './app.routes';   // rotas privadas
import { StackRoutes } from './stack.routes';

export function Routes() {
  const user = {
    id_user: 1
  }

  return (
    <NavigationContainer>
      { 
        user?.id_user ? <AppRoutes /> : <AuthRoutes /> 
      }
    </NavigationContainer>
  )
}
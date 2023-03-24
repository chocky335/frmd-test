
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';



import { queryClient } from './app/api';
import { MainScreen } from './app/MainScreen';


function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={{}}>
        <QueryClientProvider client={queryClient}>
          <MainScreen />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

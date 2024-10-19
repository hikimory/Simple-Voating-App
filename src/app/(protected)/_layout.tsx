import { Redirect, Slot, Stack } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <Stack />;
}
import { View, Text, Button } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

export default function ProfileScreen() {
  const { user } = useAuth();
  if(!user) return <Redirect href="/login"/>
  return (
    <View style={{ padding: 10 }}>
      <Text>User id: {user?.id}</Text>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
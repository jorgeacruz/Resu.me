import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase as supabaseClient } from '@/libs/supabase';
type PersonalData = {
  full_name: string;
  about: string;
  objectives: string;
} | null;

export default function PersonalDataView() {
  const [data, setData] = useState<PersonalData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('personal_data')
        .select('full_name, about, objectives')
        .eq('email', 'fclaudiacruz@gmail.com')
        .single();

      if (!error) setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <Text style={styles.value}>{data?.full_name}</Text>

      <Text style={styles.label}>Sobre:</Text>
      <Text style={styles.value}>{data?.about}</Text>

      <Text style={styles.label}>Objetivos:</Text>
      <Text style={styles.value}>{data?.objectives}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#333',
  },
  value: {
    marginTop: 4,
    fontSize: 16,
    color: '#555',
    
  },
});

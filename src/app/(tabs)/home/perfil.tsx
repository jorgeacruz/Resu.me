import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { supabase as supabaseClient } from '@/libs/supabase';
type PersonalData = {
  full_name: string;
  about: string;
  objectives: string;
  phone: string;
  email: string;
  datanasc: Date;
} | null;

export default function PersonalDataView() {
  const [data, setData] = useState<PersonalData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('personal_data')
        .select('full_name, about, objectives, phone, email, datanasc')
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
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{data?.full_name}</Text>
        <Text
          style={styles.value}
          onPress={() => {
            if (data?.email) {
              const emailUrl = `mailto:${data.email}`;
              // @ts-ignore
              if (typeof Linking !== 'undefined') {
                // @ts-ignore
                Linking.openURL(emailUrl);
              }
            }
          }}
        >
          {data?.email}
        </Text>
        <Text
          style={styles.phone}
          onPress={() => {
            if (data?.phone) {
              const phoneNumber = `tel:${data.phone}`;
              // @ts-ignore
              if (typeof Linking !== 'undefined') {
                // @ts-ignore
                Linking.openURL(phoneNumber);
              }
            }
          }}
        >
          {data?.phone}
        </Text>
        <Text style={styles.value}>{data?.about}</Text>
        <Text style={styles.lineDown}></Text>

        <Text style={styles.label}>Objetivos:</Text>
        <Text style={styles.objectives}>{data?.objectives}</Text>
        <Text style={styles.lineDown}></Text>
      </View>
    </ScrollView>
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
    backgroundColor: '#252525',

  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#fff',
  },
  value: {
    marginTop: 4,
    fontSize: 18,
    color: '#fff',
  },
  phone: {
    marginBottom: 18,
    fontSize: 18,
    color: '#fff',
  },
  objectives: {
    fontSize: 18,
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    //marginBottom: 10,
    color: '#fff',  
  },
  lineDown:{
    borderBottomWidth:0.2, 
    borderColor:'#fff', 
    marginVertical:10
  }
});

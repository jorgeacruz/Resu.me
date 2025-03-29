import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
import { createClient } from "@supabase/supabase-js";
import { supabase as supabaseClient } from '@/libs/supabase';
import HeaderHome from "@/app/components/headerHome";
import { styles } from "./styles";

//const supabaseUrl = "https://YOUR_SUPABASE_URL.supabase.co";
//const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";
//const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PersonalDataScreenProps {
  userId: string;
}

const PersonalDataScreen: React.FC<PersonalDataScreenProps> = ({ userId }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [objective, setObjective] = useState("");
  
  const [education, setEducation] = useState([{ institution: "", year: "", degree: "" }]);
  const [softwareSkills, setSoftwareSkills] = useState([""]);

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabaseClient
        .from("users")
        .select("email, phone")
        .eq("id", userId)
        .single();
      
      if (data) {
        setEmail(data.email);
        setPhone(data.phone);
      }
    }
    fetchUserData();
  }, [userId]);

  const handleSubmit = async () => {
    try {
      const { error: personalError } = await supabaseClient.from("personal_data").insert([
        { user_id: userId, full_name: fullName, phone, email, about, objective }
      ]);

      if (personalError) throw personalError;

      for (const edu of education) {
        await supabaseClient.from("education").insert([{ user_id: userId, ...edu }]);
      }

      for (const skill of softwareSkills) {
        await supabaseClient.from("software_skills").insert([{ user_id: userId, item: skill }]);
      }

      Alert.alert("Sucesso", "Dados cadastrados com sucesso!");
    } catch (error) {
      Alert.alert("Erro", error instanceof Error ? error.message : "Ocorreu um erro desconhecido.");
    }
  };

  return (
    <View style={styles.container}>
      
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <HeaderHome/>
      <View style={{padding:20}}>

      <Text style={styles.singleTitle}>Nome Completo:</Text>
      <TextInput 
        value={fullName} 
        onChangeText={setFullName} 
        style={styles.input}
        placeholder="Digite seu nome completo"
        placeholderTextColor='#333' 
      />

      <Text style={styles.singleTitle}>Telefone:</Text>
      <TextInput 
        value={phone}  
        style={styles.input}
        onChangeText={(text) => {
          const maskedText = text
            .replace(/\D/g, "") // Remove non-numeric characters
            .replace(/^(\d{2})(\d)/, "($1) $2") // Add parentheses around the area code
            .replace(/(\d{5})(\d)/, "$1-$2") // Add a hyphen after the first 5 digits
            .slice(0, 15); // Limit to the maximum length of the mask
          setPhone(maskedText);
        }}
        placeholder="(xx) xxxxx-xxxx"
        keyboardType="phone-pad"
      />

      <Text style={styles.singleTitle}>Email:</Text>
      <TextInput 
        value={email} 
        style={styles.input} 
        placeholder="Digite seu email"
        placeholderTextColor="#333"
      />

      <Text style={styles.singleTitle}>Sobre:</Text>
      <TextInput 
        value={about} 
        onChangeText={setAbout} 
        style={styles.input} 
        multiline
      />

      <Text>Objetivo:</Text>
      <TextInput 
        value={objective} 
        onChangeText={setObjective} 
        style={styles.input} 
        multiline
      />

      <Text style={styles.singleTitle}>Formação:</Text>
      {education.map((edu, index) => (
        <View key={index}>
          <TextInput
            placeholder="Instituição"
            value={edu.institution}
            onChangeText={(text) => {
              const newEducation = [...education];
              newEducation[index].institution = text;
              setEducation(newEducation);
            }}
            style={styles.input}
          />
          <TextInput
            placeholder="Ano"
            value={edu.year}
            onChangeText={(text) => {
              const newEducation = [...education];
              newEducation[index].year = text;
              setEducation(newEducation);
            }}
            style={styles.input}
          />
          <TextInput
            placeholder="Formação"
            value={edu.degree}
            onChangeText={(text) => {
              const newEducation = [...education];
              newEducation[index].degree = text;
              setEducation(newEducation);
            }}
            style={styles.input}
          />
        </View>
      ))}
      <View style={styles.viewButton}>
        <TouchableOpacity 
          onPress={() => setEducation([...education, { institution: "", year: "", degree: "" }])}  
          style={styles.addButton}
        >
          <Text style={styles.singleTitle}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            if (education.length > 1) {
              setEducation(education.slice(0, -1));
            }
          }}  
          style={styles.removeButton}
        >
          <Text style={styles.singleTitle}>Remover</Text>
        </TouchableOpacity>


      </View>
      
      <Text style={styles.singleTitle}>Habilidades em Software:</Text>
      {softwareSkills.map((skill, index) => (
        <TextInput
          key={index}
          placeholder="Software"
          value={skill}
          onChangeText={(text) => {
            const newSkills = [...softwareSkills];
            newSkills[index] = text;
            setSoftwareSkills(newSkills);
          }}
          style={styles.input}
        />
      ))}
        <View style={styles.viewButton}>

        <TouchableOpacity style={styles.addButton} onPress={() => setSoftwareSkills([...softwareSkills, ""])}>
        <Text style={styles.singleTitle}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          if (softwareSkills.length > 1) {
            setSoftwareSkills(softwareSkills.slice(0, -1));
          }
        }}
      >
        <Text style={styles.singleTitle}>Remover</Text>
      </TouchableOpacity>
        </View>
      
      <TouchableOpacity onPress={handleSubmit} style={styles.recordButton}>
          <Text style={{color:'#fff'}}>Salvar Informações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => {
          setFullName("");
          setPhone("");
          setEmail("");
          setAbout("");
          setObjective("");
          setEducation([{ institution: "", year: "", degree: "" }]);
          setSoftwareSkills([""]);
        }}
      >
        <Text>Limpar Dados</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

const styless = StyleSheet.create({

 
  
});

export default PersonalDataScreen;

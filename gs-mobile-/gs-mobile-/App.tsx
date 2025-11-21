import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './assets/styleSheet';


//  TELA DE LOGIN
function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) navigation.replace('RootDrawer');
    };
    checkLogin();
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    await AsyncStorage.setItem('user', JSON.stringify({ email }));
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.replace('RootDrawer');
  };

  return (
    <View style={styles.containerHome}>
      <Image
        source={require('./assets/Skillup.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />
      <Text style={styles.title}>SkillUpPlus 2030+</Text>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>
        Requalifique-se para o futuro do trabalho.
      </Text>

      <TextInput
        style={styles.inputProfile}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputProfile}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonSum} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


//  PERFIL DO USUÁRIO
function PerfilUsuarioScreen() {
  const [userName, setUserName] = useState('Caio Tominaga');
  const [meta, setMeta] = useState('Aprender React Native e IA');
  const [nivel, setNivel] = useState('Intermediário');

  return (
    <View style={styles.containerHome}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Image
        source={require('./assets/avatar.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />

      <TextInput
        style={styles.inputProfile}
        value={userName}
        onChangeText={setUserName}
        placeholder="Seu Nome Completo"
      />

      <TextInput
        style={styles.inputProfile}
        value={meta}
        onChangeText={setMeta}
        placeholder="Meta de Aprendizado"
      />

      <View style={{ ...styles.perfilInfo, marginTop: 20 }}>
        <Text style={styles.perfilLabel}>Nível:</Text>
        <Text style={styles.perfilValue}>{nivel}</Text>
      </View>
    </View>
  );
}


//  SELEÇÃO DE TRILHAS DE APRENDIZADO
type TrilhasStackParamList = {
  SelecaoTrilha: undefined;
  DetalhesTrilha: { trilha: string };
};

const TrilhasStack = createNativeStackNavigator<TrilhasStackParamList>();

type SelecaoProps = NativeStackScreenProps<TrilhasStackParamList, 'SelecaoTrilha'>;

function SelecaoTrilhaScreen({ navigation }: SelecaoProps) {
  const [trilha, setTrilha] = useState<string | null>(null);

  const navegarParaDetalhes = () => {
    if (!trilha) {
      Alert.alert('Atenção', 'Selecione uma trilha para continuar.');
      return;
    }
    navigation.navigate('DetalhesTrilha', { trilha });
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.containerHome}>
      <Image
        source={require('./assets/Skillup.png')}
        style={styles.logoFono}
        resizeMode="cover"
      />
      <Text style={styles.title}>Escolha sua trilha de aprendizado:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={trilha}
          style={styles.picker}
          onValueChange={(itemValue) => setTrilha(itemValue as string)}>
          <Picker.Item label="Selecione uma trilha" value={null} />
          <Picker.Item label="Inteligência Artificial" value="IA" />
          <Picker.Item label="Sustentabilidade e ESG" value="ESG" />
          <Picker.Item label="Soft Skills e Liderança" value="Soft Skills" />
          <Picker.Item label="Desenvolvimento Mobile" value="Mobile" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.buttonSum} onPress={navegarParaDetalhes}>
        <Text style={styles.buttonText}>Explorar Trilha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

type DetalhesProps = NativeStackScreenProps<TrilhasStackParamList, 'DetalhesTrilha'>;

function DetalhesTrilhaScreen({ route, navigation }: DetalhesProps) {
  const { trilha } = route.params;

  const descricao = (area: string) => {
    switch (area) {
      case 'IA':
        return 'Explore fundamentos de Inteligência Artificial e Machine Learning aplicados ao trabalho do futuro.';
      case 'ESG':
        return 'Aprenda sobre práticas sustentáveis e como integrá-las ao mundo corporativo.';
      case 'Soft Skills':
        return 'Desenvolva habilidades interpessoais essenciais como comunicação, empatia e liderança.';
      case 'Mobile':
        return 'Aprenda a criar aplicativos multiplataforma com React Native.';
      default:
        return '';
    }
  };

  return (
    <View style={styles.containerResult}>
      <Text style={styles.title}>{trilha}</Text>
      <Text style={styles.resultado}>{descricao(trilha)}</Text>

      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


//  SOBRE O PROJETO
function SobreProjetoScreen() {
  return (
    <View style={styles.containerResult}>
      <Text style={styles.title}>Sobre o Projeto</Text>
      <Text style={styles.resultado}>SkillUpPlus 2030+</Text>
      <Text style={{ marginTop: 10, textAlign: 'center' }}>
        App criado com React Native para promover requalificação digital, inspirado nos ODS 4, 8, 9 e 10.
        {'\n\n'}Permite explorar trilhas de aprendizado, acompanhar progresso e desenvolver novas habilidades para o futuro do trabalho.
      </Text>
    </View>
  );
}


//  NAVEGAÇÃO
function TrilhasStackNavigator() {
  return (
    <TrilhasStack.Navigator initialRouteName="SelecaoTrilha">
      <TrilhasStack.Screen
        name="SelecaoTrilha"
        component={SelecaoTrilhaScreen}
        options={{ headerShown: false }}
      />
      <TrilhasStack.Screen
        name="DetalhesTrilha"
        component={DetalhesTrilhaScreen}
        options={{ title: 'Detalhes da Trilha' }}
      />
    </TrilhasStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Trilhas"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: styles.buttonBack.backgroundColor,
      }}>
      <Tab.Screen
        name="Trilhas"
        component={TrilhasStackNavigator}
        options={{ title: 'Trilhas' }}
      />
      <Tab.Screen
        name="PerfilUsuario"
        component={PerfilUsuarioScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="SkillUp">
      <Drawer.Screen
        name="SkillUp"
        component={MainTabNavigator}
        options={{ title: 'SkillUpPlus 2030+' }}
      />
      <Drawer.Screen
        name="SobreProjeto"
        component={SobreProjetoScreen}
        options={{ title: 'Sobre o Projeto' }}
      />
    </Drawer.Navigator>
  );
}


//  APP PRINCIPAL
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RootDrawer" component={RootDrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

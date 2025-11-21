import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ====== Containers ======
  containerHome: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  containerResult: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // ====== Textos ======
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E3A59',
    marginBottom: 20,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#5C6B88',
    textAlign: 'center',
    marginBottom: 10,
  },

  result: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },

  resultado: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginHorizontal: 15,
  },

  // ====== Inputs ======
  inputProfile: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    elevation: 1,
  },

  // ====== Botões ======
  buttonSum: {
    backgroundColor: '#2563EB', // azul principal
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    elevation: 3,
  },

  buttonBack: {
    backgroundColor: '#6B7280', // cinza escuro
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // ====== Perfil ======
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2563EB',
  },

  perfilInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  perfilLabel: {
    fontWeight: '600',
    color: '#374151',
  },

  perfilValue: {
    color: '#2563EB',
    fontWeight: '500',
  },

  // ====== Picker ======
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    width: '100%',
    marginVertical: 15,
  },

  picker: {
    height: 50,
    width: '100%',
    color: '#374151',
  },

  // ====== Imagens ======
  logoFono: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
});

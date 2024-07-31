import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return '';
    }
  } catch (e) {
    return '';
  }
};

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.setItem(key, '');
  } catch (e) {
    console.log(e);
  }
};

export const STORAGE = {
  getData,
  storeData,
  removeData,
};

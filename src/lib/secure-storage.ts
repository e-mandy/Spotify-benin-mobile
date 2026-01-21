import * as SecureStore from "expo-secure-store";

export async function getItemFromStorage(key: string) {
  return await SecureStore.getItem(key);
}

export async function setItemInStorage(key: string, data) {
  let formattedData = typeof data === "string" ? data : JSON.stringify(data);
  await SecureStore.setItem(key, formattedData);
}

export const getStorage = (name: string): string | null => {
  const data = localStorage.getItem(name)
  if (data) {
    return data
  }
  return sessionStorage.getItem(name)
}

export const setLocalStorage = (name: string, value: string): void => {
  localStorage.setItem(name, value)
}

export const setSessionStorage = (name: string, value: string): void => {
  sessionStorage.setItem(name, value)
}

export const removeFromStorage = (name: string): void => {
  localStorage.removeItem(name)
  sessionStorage.removeItem(name)
}

export const clearStorage = (): void => {
  localStorage.clear()
  sessionStorage.clear()
}

export const getUserFromStorage = (): any => {
  const userJson = getStorage('user')
  if (userJson) return JSON.parse(userJson)
  else return null
}

export const saveUserToStorage = (user: any): void => {
  return setLocalStorage('user', JSON.stringify(user))
}

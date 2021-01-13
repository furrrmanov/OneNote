export const tarnsformUserInfoData = (data) => {
  return {
    isLogged: true,
    email: data.email,
    name: data.displayName,
    photoUrl: data.providerData[0].photoURL,
  }
}

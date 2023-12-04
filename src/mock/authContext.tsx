export const useAuthContext = () => {
  return {
    isAuthorized: true,
    user: {
      balance: 1,
      firstName: 'Maxim',
      image: ''
    },
    logout: () => { },
    isLoading: false,
    role: 'admin'
  }
}
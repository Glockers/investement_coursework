export const useAuthContext = () => {
  return {
    isAuthorized: false,
    user: {
      balance: 1,
      firstName: 'Maxim',
      image: ''
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logIn: (data: any, object: any) => {
      console.log(data, object)
    },
    logout: () => { },
    isLoading: false,
    role: 'admin'
  }
}
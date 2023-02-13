export interface INewUser {
  credentials: {
    username: string,
    password: string
  }
  emailAddress: string,
  sendMeUpdates: boolean
}
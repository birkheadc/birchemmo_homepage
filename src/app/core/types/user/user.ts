import IUserDetails from "src/app/core/types/user/user-details";

export default interface IUser {
  userDetails: IUserDetails,
  id: string
}
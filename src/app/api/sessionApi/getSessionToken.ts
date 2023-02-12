import ICredentials from "src/app/session/credentials/iCredentials";
import ITokenWrapper from "src/app/session/tokenWrapper/tokenWrapper";
import IActionOutcome from "../actionOutcome/iActionOutcome";

export default async function getSessionToken(credentials: ICredentials): Promise<IActionOutcome<ITokenWrapper>> {
  return {
    wasSuccessful: false,
    message: "this is a test"
  }
}
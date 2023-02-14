import ICredentials from "src/app/core/types/credentials/iCredentials";
import ITokenWrapper from "src/app/core/types/tokenWrapper/tokenWrapper";
import { Buffer } from 'buffer';
import IActionOutcome from "src/app/core/types/actionOutcome/iActionOutcome";

export default async function getSessionToken(credentials: ICredentials): Promise<IActionOutcome<ITokenWrapper>> {
  // Get these consts from somewhere...
  const url: string = "http://localhost:5048/api/session";
  const timeout: number = 8000;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort()
    }, timeout);
    const basic: string = credentialsToBasic(credentials);
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: {
        "Authorization": basic
      },
      signal: controller.signal
    });
    clearTimeout(timer);
    if (response.status !== 200) {
      return {
        wasSuccessful: false,
        message: "Failed to retrieve session token. " + response.status
      }
    }
    try {
      const token: ITokenWrapper = await response.json()
      return {
        wasSuccessful: true,
        message: "Session token retrieved successfully.",
        body: token
      };
    }
    catch {
      return {
        wasSuccessful: false,
        message: "Failed to retrieve session token, received unexpected object."
      }
    }
  }
  catch {
    return {
      wasSuccessful: false,
      message: "Unable to connect to server."
    }
  }
}

function credentialsToBasic(credentials: ICredentials): string {
  const code: string = Buffer.from(credentials.username + ":" + credentials.password).toString('base64');
  return "Basic " + code;
}
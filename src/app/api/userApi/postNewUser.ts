import { INewUser } from "src/app/core/types/user/new-user";
import IActionOutcome from "../../core/types/actionOutcome/iActionOutcome";

export default async function postNewUser(user: INewUser): Promise<IActionOutcome> {
  // Get these consts from somewhere...
  const url: string = "http://localhost:5048/api/user/new";
  const timeout: number = 8000;

  try {
    const controller: AbortController = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
    }, timeout);
    const response: Response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (response.status === 200) {
      return {
        wasSuccessful: true,
        message: "User created successfully."
      }
    }
    return {
      wasSuccessful: false,
      message: "Failed to register account. Status code " + response.status.toString()
    }
  }
  catch {
    return {
      wasSuccessful: false,
      message: "Unable to connect to server."
    }
  }
}
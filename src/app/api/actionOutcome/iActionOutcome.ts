export default interface IActionOutcome<T = void> {
  wasSuccessful: boolean,
  message: string,
  body?: T | null
}
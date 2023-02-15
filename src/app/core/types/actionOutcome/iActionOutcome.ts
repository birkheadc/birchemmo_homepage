export default interface IActionOutcome<T = any> {
  wasSuccessful: boolean,
  message: string,
  body?: T | null
}
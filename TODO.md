# Todo
  - Figure out where and how to declare environment variables (backend url, how long to timeout fetch requests, etc.)
  - Consider factoring logic out of register-form and have the register main component do the registering:
    - FORM should submit FormGroup to the main component, which will attempt to extract the relevant object from the form, then submit it tothe service. The service only accepts the correct object, which will then call the api.
    - This makes the form into a proper 'dumb' component. All it does is get input from the user, validate it, then pass it up.
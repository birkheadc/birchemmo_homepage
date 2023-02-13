# Todo
  - Figure out where and how to declare environment variables (backend url, how long to timeout fetch requests, etc.)
  - Reroute user upon:
    - Successfully creating new user
    - Logging in
  - Save login token when successfully retrieved
  - If login token has an expiration date, automatically log out the user if it has passed
    - Eventually, figure out how to set up automatic extensions for tokens. Back-end is not capable of this yet anyway.
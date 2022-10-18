# JWT

consist of 3 parts: header, payload and signature
reversible encryption

## Authentication

backend provides 2 tokens: access_token and refresh_token (both are JWT) upon successful auth of a user

refresh_token to be stored in a state and sent via fetch to obtain data
passed via fetch header: {header: {authorization: {access_token}}}
access_token becomes invalid in 20mins (or less)
upon expiry of access_token, frontend to pass refresh_token to backend to obtain new access_token
refresh_token should last for 30 days

payload=claims

2 secretkeys as JS does not have a payload type hence need 2 keys

npm i jsonwebtoken uuid

1. change env - change access secret and refresh secret
2. in server.js - remove the 2 requires for session
3. user.js in router - import uuid jet, remove logout, remove session related stuff in login.
4. user.js in router - add the JWT stuff
5. auth.js in middleware - replace almost whole thing

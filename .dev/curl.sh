#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBtYWlsLnJ1IiwiaWQiOjMsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4gZm9yIHRlc3RpbmciLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJVc2VyUm9sZXMiOnsiaWQiOjIsInJvbGVJZCI6MSwidXNlcklkIjozfX1dLCJpYXQiOjE2ODAwODM1MTIsImV4cCI6MTY4MDE2OTkxMn0.wWpOqDYAd3aYDgaxK_fyLu4zA6M9IZBQ03sTRJ7tvfI"

# Create User
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     -d '{"email": "user1@mail.ru", "password":"password"}' \
#     | jq

# List all users
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     | jq

# Create Role
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     -d '{"value": "USER", "description": "Admin for testing"}' \
#     | jq

# List all roles
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     | jq

# Get role by value
# curl -v 'localhost:5000/roles/USER' \
#     -H "Content-Type: application/json" \
#     | jq

# Registration user
# curl -v localhost:5000/auth/registration \
#     -H "Content-Type: application/json" \
#     -d '{"email": "profileuser1@mail.ru", "password": "password"}' \
#     | jq

# Registration user with profile
# curl -v localhost:5000/auth/registration \
#     -H "Content-Type: application/json" \
#     -d '{"email": "profileuser2@mail.ru", "password": "password", "name": "Ivan"}'
#     | jq

# Login user
# curl -v localhost:5000/auth/login \
#     -H "Content-Type: application/json" \
#     -d '{"email": "admin1@mail.ru", "password": "password"}' \
#     | jq

# List all users with JWT
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# Add role to user with JWT
# curl -v localhost:5000/users/role \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     -d '{"value": "ADMIN", "userId": "2"}' \
#     | jq

# Remove role to user with JWT
# curl -v localhost:5000/users/role-remove \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     -d '{"value": "ADMIN", "userId": "2"}' \
#     | jq

# Get profile by id with JWT
# curl -v localhost:5000/profile/6 \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# Get user by id with JWT
# curl -v localhost:5000/users/7 \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# Update profile by id with JWT
# curl -v localhost:5000/profile/6 \
#      -X PUT \
#      -H "Content-Type: application/json" \
#      -H "Authorization: Bearer $token" \
#      -d '{"name": "Jotaro", "surname":"Kudjo"}' \
#      | jq

# POST Create textblock
# curl -v localhost:5000/textblock \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     -d '{"name": "main-page-hero", "title": "Title", "text": "This is textblock", "image": "test/path.jpg", "group":"main"}' \
#     | jq

# GET Get all textblocks
# curl -v localhost:5000/textblock \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# GET Get one by name textblock
# curl -v localhost:5000/textblock/main-page-hero \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# PUT Update textblock
# curl -v localhost:5000/textblock/main-page-hero \
#     -X PUT \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     -d '{"name": "main-page-section", "title": "Title for section", "text": "This is textblock", "image": "test/path.jpg", "group":"main"}' \
#     | jq

# DELETE Delete textblock
# curl -v localhost:5000/textblock/main-page-hero \
#     -X DELETE \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBtYWlsLnJ1IiwiaWQiOjMsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4gZm9yIHRlc3RpbmciLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJVc2VyUm9sZXMiOnsiaWQiOjIsInJvbGVJZCI6MSwidXNlcklkIjozfX1dLCJpYXQiOjE2Nzk5ODUwNzIsImV4cCI6MTY4MDA3MTQ3Mn0.TQnlV37QZzLrrk2gq1RGyRvNRxRpLQRCZWBGDzEPUgw"

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
#     -d '{"email": "user3@mail.ru", "password": "password"}' \
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

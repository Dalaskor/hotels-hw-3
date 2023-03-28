#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBtYWlsLnJ1IiwiaWQiOjMsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4gZm9yIHRlc3RpbmciLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI4VDA1OjQ1OjQxLjAzN1oiLCJVc2VyUm9sZXMiOnsiaWQiOjIsInJvbGVJZCI6MSwidXNlcklkIjozfX1dLCJpYXQiOjE2Nzk5OTA3NTEsImV4cCI6MTY4MDA3NzE1MX0.dukQdzkpEVJRTuSpNE0R2Ec3G87fepuZk2csv6yOfzY"

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
# curl -v localhost:5000/profile/7 \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# Get profile by id with JWT
# curl -v localhost:5000/users/7 \
#     -H "Content-Type: application/json" \
#     -H "Authorization: Bearer $token" \
#     | jq

# Update profile by id with JWT
# curl -v localhost:5000/profile \
#      -H "Content-Type: application/json" \
#      -H "Authorization: Bearer $token" \
#      -d '{"name": "Valera", "userId": "6"}' \
#      | jq

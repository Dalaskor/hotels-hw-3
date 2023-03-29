#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2ZpbGV1c2VyMUBtYWlsLnJ1IiwiaWQiOjYsInJvbGVzIjpbeyJpZCI6MiwidmFsdWUiOiJVU0VSIiwiZGVzY3JpcHRpb24iOiJBZG1pbiBmb3IgdGVzdGluZyIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6NDU6NTUuNTM0WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6NDU6NTUuNTM0WiIsIlVzZXJSb2xlcyI6eyJpZCI6Niwicm9sZUlkIjoyLCJ1c2VySWQiOjZ9fV0sImlhdCI6MTY4MDA3NzU0MCwiZXhwIjoxNjgwMTYzOTQwfQ.scnHD7hQII_sbr4U4WP6EICEXuSyzA_-3MucpCsVkpE"

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
#     -d '{"email": "profileuser1@mail.ru", "password": "password"}' \
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
curl -v localhost:5000/profile/6 \
     -X PUT \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $token" \
     -d '{"name": "Jotaro", "surname":"Kudjo"}' \
     | jq

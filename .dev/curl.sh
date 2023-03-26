#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBtYWlsLnJ1IiwiaWQiOjMsInJvbGVzIjpbeyJpZCI6NCwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW4gZm9yIHRlc3RpbmciLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjMwOjI2LjgwMloiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjMwOjI2LjgwMloifV0sImlhdCI6MTY3OTg0NDE4MywiZXhwIjoxNjc5OTMwNTgzfQ.2UGZvht8p9TwbOJJk8QFQ6Be5TIKPaOI3w0WG8RlOas"

# Create User
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     -d '{"email": "user1@mail.ru", "password":"password"}' \
#     | jq

# List all users
curl -v localhost:5000/users \
    -H "Content-Type: application/json" \
    | jq

# Create Role
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     -d '{"value": "ADMIN", "description": "Admin for testing"}' \
#     | jq

# List all roles
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     | jq

# Get role by value
# curl -v localhost:5000/roles/testRole1 \
#     -H "Content-Type: application/json" \
#     | jq

# Registration user
# curl -v localhost:5000/auth/registration \
#     -H "Content-Type: application/json" \
#     -d '{"email": "admin1@mail.ru", "password": "password"}' \
#     | jq

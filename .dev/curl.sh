#!/bin/sh

# Create User
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     -d '{"email": "test1@mail.ru", "password":"test"}' \
#     | jq

# List all users
# curl -v localhost:5000/users \
#     -H "Content-Type: application/json" \
#     | jq

# Create Role
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     -d '{"value": "testRole1", "description": "description of this role"}' \
#     | jq

# List all roles
# curl -v localhost:5000/roles \
#     -H "Content-Type: application/json" \
#     | jq

# Get role by value
# curl -v localhost:5000/roles/testRole1 \
#     -H "Content-Type: application/json" \
#     | jq

#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQG1haWwucnUiLCJpZCI6Miwicm9sZXMiOlt7ImlkIjoyLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6IkFkbWluIGZvciB0ZXN0aW5nIiwiY3JlYXRlZEF0IjoiMjAyMy0wMy0yOFQwNTo0NTo1NS41MzRaIiwidXBkYXRlZEF0IjoiMjAyMy0wMy0yOFQwNTo0NTo1NS41MzRaIiwiVXNlclJvbGVzIjp7ImlkIjoxLCJyb2xlSWQiOjIsInVzZXJJZCI6Mn19LHsiaWQiOjEsInZhbHVlIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6IkFkbWluIGZvciB0ZXN0aW5nIiwiY3JlYXRlZEF0IjoiMjAyMy0wMy0yOFQwNTo0NTo0MS4wMzdaIiwidXBkYXRlZEF0IjoiMjAyMy0wMy0yOFQwNTo0NTo0MS4wMzdaIiwiVXNlclJvbGVzIjp7ImlkIjo1LCJyb2xlSWQiOjEsInVzZXJJZCI6Mn19XSwiaWF0IjoxNjc5OTgzOTQ1LCJleHAiOjE2ODAwNzAzNDV9.Yk787sGphn4KAzARz5gUd0shpyTnLwhmgsvoV-syzp0"

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
#     -d '{"email": "user1@mail.ru", "password": "password"}' \
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

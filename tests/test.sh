#!/bin/bash

echo "Run tests"

curl -X GET localhost:3000/plants
echo ""

curl -X GET localhost:3000/plants/1
echo ""

curl -X POST localhost:3000/plants  -H 'Content-Type: application/json' -d '{"name":"zucchini"}'
echo ""

curl -X PUT localhost:3000/plants/1  -H 'Content-Type: application/json' -d '{"name":"zucchini"}'
echo ""

curl -X DELETE localhost:3000/plants/1
echo ""

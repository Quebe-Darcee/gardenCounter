#!/bin/bash

echo "Run tests"

echo "GET"
curl -X GET localhost:3000/plants
echo ""; echo "";

echo "GET 1"
curl -X GET localhost:3000/plants/1
echo ""; echo "";

echo "CREATE"
curl -X POST localhost:3000/plants  -H 'Content-Type: application/json' -d '{"name":"onions", "amount":"10"}'
echo ""; echo "";

echo "PUT"
curl -X PUT localhost:3000/plants/1  -H 'Content-Type: application/json' -d '{"name":"zucchini", "amount":"45"}'
echo ""; echo "";

echo "DELETE"
curl -X DELETE localhost:3000/plants/3
echo ""; echo "";

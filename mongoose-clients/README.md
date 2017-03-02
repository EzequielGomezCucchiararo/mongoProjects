Get all clients

```
curl localhost:3000/clients
curl -X "GET" localhost:3000/clients
```


Create client

```
curl --data "firstName=Arturo Gati" localhost:3000/clients
```

Get specific client

```
curl localhost:3000/client/58b6b9700fa85256b399c04c
```

Remove specific client

```
curl -X "DELETE" localhost:3000/client/58b6ae0f209bf3444a4d04fa
```

Update specific client

```
curl -X "PUT" --data "firstName=Gabriel Soler"  localhost:3000/client/58b6b817be054254dd6327ca
```

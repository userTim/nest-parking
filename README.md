## Running the app

```bash
$ cp .env.example .env
```

```bash
$ docker-compose up -d
```

API is available at localhost:3000

POST `/spots/park` park a vehicle. Requires **plate_number** (*string*) and **vehicle_type** (enum: `CAR` | `MOTORCYCLE` | `BUS`) as a payload

POST `/spots/retrieve` retrieve a vehicle. Required **plate_number** of a parked vehicle

#### Examples
```curl
curl --location --request POST 'localhost:3000/spots/park' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'plate_number=m2132s23' \
--data-urlencode 'vehicle_type=CAR'
```
```curl
curl --location --request POST 'localhost:3000/spots/retrieve' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'plate_number=m2132s23'
```

By default initializes 3 big, 3 medium and 3 small parking spots.

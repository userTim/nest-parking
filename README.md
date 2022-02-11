## Running the app

```bash
$ cp .env.example .env
```

```bash
$ docker-compose up -d
```

API is available at localhost:3000

#### /spots/
POST '/park' park a vehicle. Requires *plate_number* (string) and *vehicle_type* (enum: CAR | MOTORCYCLE | BUS) as a payload
POST '/retrieve' retrieve a vehicle. Required *plate_number* of a parked vehicle

# Vehicles
(*vehicles*)

## Overview

Operations about vehicles

### Available Operations

* [batch](#batch) - Batch
* [disconnect](#disconnect) - Revoke Access
* [get](#get) - Vehicle Info
* [getEngineOil](#getengineoil) - Engine Oil Life
* [getFuelTank](#getfueltank) - Fuel Tank (US Only)
* [getLocation](#getlocation) - Location
* [getOdometer](#getodometer) - Odometer
* [getPermissions](#getpermissions) - Application Permissions
* [getTirePressure](#gettirepressure) - Tire pressure
* [getVin](#getvin) - Returns the vehicle’s manufacturer identifier.
* [listVehicles](#listvehicles) - All Vehicles
* [lockUnlock](#lockunlock) - Lock/Unlock Vehicle

## batch

__Description__ Returns a list of responses from multiple Smartcar endpoints, all combined into a single request. Note: Batch requests is a paid feature. Please contact us to upgrade your plan and obtain access.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { BatchRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";
const requestBody: string[] = [
  "/odometer",
];

  const res = await sdk.vehicles.batch(vehicleId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `requestBody`                                                | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.BatchResponse](../../sdk/models/operations/batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## disconnect

__Description__

Revoke access for the current requesting application. This is the correct way to disconnect a vehicle.

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { DisconnectRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.disconnect(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DisconnectResponse](../../sdk/models/operations/disconnectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

__Permission__

Returns a single vehicle object, containing identifying information.

__Permission__

`read_vehicle_info`

__Response Body__

|Name| Type|Description|
|--|--|--|
|`id`|string|A vehicle ID (UUID v4).|
|`make`|string|The manufacturer of the vehicle.|
|`model`|integer|The model of the vehicle.|
|`year`|integer|The model year.|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetVehicleRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.get(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVehicleResponse](../../sdk/models/operations/getvehicleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEngineOil

__Description__

Returns the remaining life span of a vehicle’s engine oil.

__Permission__

`read_engine_oil`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `lifeRemaining`|   number|  The engine oil’s remaining life span (as a percentage). Oil life is based on the current quality of the oil. (in percent).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetEngineOilRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.getEngineOil(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetEngineOilResponse](../../sdk/models/operations/getengineoilresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFuelTank

__Description__

Returns the status of the fuel remaining in the vehicle’s gas tank. Note: The fuel tank API is only available for vehicles sold in the United States.

__Permission__

`read_fuel`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`range`|number|The estimated remaining distance the car can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`percentRemaining`|number|The remaining level of fuel in the tank (in percent).|
|`amountRemaining`|number|The amount of fuel in the tank (in liters by default or in gallons (U.S.) using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetFuelTankRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.getFuelTank(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFuelTankResponse](../../sdk/models/operations/getfueltankresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLocation

__Description__

Retrieve latitude and longitude of a vehicle.

__Permission__

`read_location`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`latitude`|number|The latitude (in degrees).|
|`longitude`|number|The longitude (in degrees).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetLocationRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "36ab27d0-fd9d-4455-823a-ce30af709ffc";

  const res = await sdk.vehicles.getLocation(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | 36ab27d0-fd9d-4455-823a-ce30af709ffc                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLocationResponse](../../sdk/models/operations/getlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOdometer

__Description__

Returns the vehicle’s last known odometer reading.

__Permission__

`read_odometer`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`distance`|number|The current odometer of the vehicle (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetOdometerRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.getOdometer(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetOdometerResponse](../../sdk/models/operations/getodometerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPermissions

__Description__

Returns a list of the permissions that have been granted to your application in relation to this vehicle.

__Query Parameters__

|Parameter| Type|Required|Description|
|--|--|--|--|
|`limit`|integer|false|Number of permissions to return (default: 25).|
|`offset`|integer|false|A vehicle ID (UUID v4).|Index to start permission list at|

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`permissions`|array|An array of permissions.|
|`permissions.[]`|string|A permission.|
|`paging`|object|Metadata about the current list of elements.|
|`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
|`paging.offset`|integer|The current start index of the returned list of elements.|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetPermissionsRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";
const limit: number = 362662;
const offset: number = 729387;

  const res = await sdk.vehicles.getPermissions(vehicleId, limit, offset);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Number of vehicles to return                                 |
| `offset`                                                     | *number*                                                     | :heavy_minus_sign:                                           | Index to start vehicle list at                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPermissionsResponse](../../sdk/models/operations/getpermissionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTirePressure

__Description__

Returns the air pressure of each of the vehicle’s tires.
__Permission__

`read_tires`

__Example Response__

|Name| Type|Description|
|--|--|--|
|`frontLeft`|number|The current air pressure of the front left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`frontRight`|number|The current air pressure of the front right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`backLeft`|number|The current air pressure of the back left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`backRight`|number|The current air pressure of the back right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTirePressureRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.getTirePressure(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTirePressureResponse](../../sdk/models/operations/gettirepressureresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getVin

__Description__

Returns the vehicle’s manufacturer identifier.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetVinRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.vehicles.getVin(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVinResponse](../../sdk/models/operations/getvinresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listVehicles

__Description__

Returns a paged list of all vehicles connected to the application for the current authorized user.

__Query Parameters__

|Parameter| Type|Required|Description|
|--|--|--|--|
|`limit`|integer|false|Number of vehicles to return (default: 10).|
|`offset`|integer|false|A vehicle ID (UUID v4).|Index to start vehicle list at|

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`vehicles`|array|An array of vehicle IDs.|
|`vehicles.[]`|string|A vehicle ID (UUID v4).|
|`paging`|object|Metadata about the current list of elements.|
|`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
|`paging.offset`|integer|The current start index of the returned list of elements.|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { ListVehiclesRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const limit: number = 568500;
const offset: number = 311354;

  const res = await sdk.vehicles.listVehicles(limit, offset);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Number of vehicles to return                                 |
| `offset`                                                     | *number*                                                     | :heavy_minus_sign:                                           | Index to start vehicle list at                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListVehiclesResponse](../../sdk/models/operations/listvehiclesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## lockUnlock

__Description__

Unlock the vehicle

__Permission__

`control_security`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { LockUnlockRequest } from "acme-api/dist/sdk/models/operations";
import { SecurityAction, SecurityActionAction } from "acme-api/dist/sdk/models/shared";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";
const securityAction: SecurityAction = {
  action: SecurityActionAction.Unlock,
};

  const res = await sdk.vehicles.lockUnlock(vehicleId, securityAction);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `vehicleId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `securityAction`                                                   | [shared.SecurityAction](../../sdk/models/shared/securityaction.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.LockUnlockResponse](../../sdk/models/operations/lockunlockresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

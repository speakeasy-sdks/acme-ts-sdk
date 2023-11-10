# Evs
(*evs*)

## Overview

Operations about electric vehicles

### Available Operations

* [getBatteryCapacity](#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](#getbatterylevel) - EV Battery Level
* [getChargingLimit](#getcharginglimit) - EV Charging Limit
* [getChargingStatus](#getchargingstatus) - EV Charging Status
* [setChargingLimit](#setcharginglimit) - Set EV Charging Limit
* [startStopCharge](#startstopcharge) - Start or stop charging an electric vehicle. Please contact us to request early access.

## getBatteryCapacity

__Description__

Returns the total capacity of an electric vehicle's battery.

__Permission__

`read_battery`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  capacity|   number|  The total capacity of the vehicle's battery (in kilowatt-hours). 	|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetBatteryCapacityRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.evs.getBatteryCapacity(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBatteryCapacityResponse](../../sdk/models/operations/getbatterycapacityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBatteryLevel

__Description__

Retrieve EV battery level of a vehicle.

__Permission__

`read_battery`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `percentRemaining`|   number|  An EV battery’s state of charge (in percent). 	|
|   `range`|   number	|   The estimated remaining distance the vehicle can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers).	|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetBatteryLevelRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.evs.getBatteryLevel(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBatteryLevelResponse](../../sdk/models/operations/getbatterylevelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getChargingLimit

__Description__

Returns the current charge limit of an electric vehicle.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetChargingLimitRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.evs.getChargingLimit(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetChargingLimitResponse](../../sdk/models/operations/getcharginglimitresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getChargingStatus

__Description__

Returns the current charge status of an electric vehicle.

__Permission__

`read_charge`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `isPluggedIn` 	|   boolean	|  Indicates whether a charging cable is currently plugged into the vehicle’s charge port. 	|
|   `state`	|   string	|   Indicates whether the vehicle is currently charging. Options: `CHARGING` `FULLY_CHARGED` `NOT_CHARGING`	|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetChargingStatusRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.evs.getChargingStatus(vehicleId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetChargingStatusResponse](../../sdk/models/operations/getchargingstatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## setChargingLimit

__Description__

Returns the current charge limit of an electric vehicle.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { SetChargingLimitRequest } from "acme-api/dist/sdk/models/operations";
import { ChargeLimit } from "acme-api/dist/sdk/models/shared";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";
const chargeLimit: ChargeLimit = {
  limit: 1,
};

  const res = await sdk.evs.setChargingLimit(vehicleId, chargeLimit);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `vehicleId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `chargeLimit`                                                   | [shared.ChargeLimit](../../../sdk/models/shared/chargelimit.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |


### Response

**Promise<[operations.SetChargingLimitResponse](../../sdk/models/operations/setcharginglimitresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## startStopCharge

__Description__

Returns the current charge status of an electric vehicle.

__Permission__

`read_charge`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `isPluggedIn` 	|   boolean	|  Indicates whether a charging cable is currently plugged into the vehicle’s charge port. 	|
|   `state`	|   string	|   Indicates whether the vehicle is currently charging. Options: `CHARGING` `FULLY_CHARGED` `NOT_CHARGING`	|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { StartStopChargeRequest } from "acme-api/dist/sdk/models/operations";
import { Action, ChargeAction } from "acme-api/dist/sdk/models/shared";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";
const chargeAction: ChargeAction = {
  action: Action.Start,
};

  const res = await sdk.evs.startStopCharge(vehicleId, chargeAction);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                         | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `vehicleId`                                                       | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `chargeAction`                                                    | [shared.ChargeAction](../../../sdk/models/shared/chargeaction.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `config`                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)      | :heavy_minus_sign:                                                | Available config options for making requests.                     |


### Response

**Promise<[operations.StartStopChargeResponse](../../sdk/models/operations/startstopchargeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

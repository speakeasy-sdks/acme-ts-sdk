# tesla

### Available Operations

* [getAmmeter](#getammeter) - Retrieve charging ammeter time for a Tesla.
* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Tesla.
* [getCompass](#getcompass) - Retrieve compass heading for a Tesla.
* [getExteriorTemperature](#getexteriortemperature) - Retrieve exterior temperature for a Tesla.
* [getInteriorTemperature](#getinteriortemperature) - Retrieve interior temperature for a Tesla.
* [getSpeedometer](#getspeedometer) - Retrieve speed for a Tesla.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Tesla.
* [getWattmeter](#getwattmeter) - Retrieve charging wattmeter time for a Tesla.
* [setAmmeter](#setammeter) - Set charging ammeter time for a Tesla.

## getAmmeter

__Description__

When the vehicle is plugged in, this endpoint returns the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaAmmeterResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getAmmeter("deserunt").then((res: GetTeslaAmmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaAmmeterResponse](../../models/operations/getteslaammeterresponse.md)>**


## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaChargeTimeResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getChargeTime("suscipit").then((res: GetTeslaChargeTimeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaChargeTimeResponse](../../models/operations/getteslachargetimeresponse.md)>**


## getCompass

__Description__

This endpoint returns the compass heading of a Tesla. The value is in degrees, with 0 degrees being North.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaCompassResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getCompass("iure").then((res: GetTeslaCompassResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaCompassResponse](../../models/operations/getteslacompassresponse.md)>**


## getExteriorTemperature

__Description__

This endpoint returns the exterior temperature of a Tesla, in celsius by default.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaExteriorTemperatureResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getExteriorTemperature("magnam").then((res: GetTeslaExteriorTemperatureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaExteriorTemperatureResponse](../../models/operations/getteslaexteriortemperatureresponse.md)>**


## getInteriorTemperature

__Description__

This endpoint returns the interior temperature of a Tesla, in celsius by default.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaInteriorTemperatureResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getInteriorTemperature("debitis").then((res: GetTeslaInteriorTemperatureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaInteriorTemperatureResponse](../../models/operations/getteslainteriortemperatureresponse.md)>**


## getSpeedometer

__Description__

This endpoint returns the speed of a Tesla (in kilometers/hour by default or in miles/hour using the sc-unit-system).

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaSpeedResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getSpeedometer("ipsa").then((res: GetTeslaSpeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaSpeedResponse](../../models/operations/getteslaspeedresponse.md)>**


## getVoltage

__Description__

When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaVoltageResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getVoltage("delectus").then((res: GetTeslaVoltageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaVoltageResponse](../../models/operations/getteslavoltageresponse.md)>**


## getWattmeter

__Description__

When the vehicle is plugged in, this endpoint returns the wattage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetTeslaWattmeterResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.getWattmeter("tempora").then((res: GetTeslaWattmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeslaWattmeterResponse](../../models/operations/getteslawattmeterresponse.md)>**


## setAmmeter

__Description__

When the vehicle is plugged in, this endpoint sets the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { SetTeslaAmmeterResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.tesla.setAmmeter("suscipit", {
  amperage: 48,
}).then((res: SetTeslaAmmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `chargeAmmeter`                                              | [shared.ChargeAmmeter](../../models/shared/chargeammeter.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SetTeslaAmmeterResponse](../../models/operations/setteslaammeterresponse.md)>**


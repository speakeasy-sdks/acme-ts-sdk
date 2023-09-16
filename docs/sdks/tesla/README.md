# Tesla

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
import { GetTeslaAmmeterRequest, GetTeslaAmmeterResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "deserunt";

sdk.tesla.getAmmeter(vehicleId).then((res: GetTeslaAmmeterResponse) => {
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
import { GetTeslaChargeTimeRequest, GetTeslaChargeTimeResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "suscipit";

sdk.tesla.getChargeTime(vehicleId).then((res: GetTeslaChargeTimeResponse) => {
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
import { GetTeslaCompassRequest, GetTeslaCompassResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "iure";

sdk.tesla.getCompass(vehicleId).then((res: GetTeslaCompassResponse) => {
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
import { GetTeslaExteriorTemperatureRequest, GetTeslaExteriorTemperatureResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const id: string = "magnam";

sdk.tesla.getExteriorTemperature(id).then((res: GetTeslaExteriorTemperatureResponse) => {
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
import { GetTeslaInteriorTemperatureRequest, GetTeslaInteriorTemperatureResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const id: string = "debitis";

sdk.tesla.getInteriorTemperature(id).then((res: GetTeslaInteriorTemperatureResponse) => {
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
import { GetTeslaSpeedRequest, GetTeslaSpeedResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "ipsa";

sdk.tesla.getSpeedometer(vehicleId).then((res: GetTeslaSpeedResponse) => {
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
import { GetTeslaVoltageRequest, GetTeslaVoltageResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "delectus";

sdk.tesla.getVoltage(vehicleId).then((res: GetTeslaVoltageResponse) => {
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
import { GetTeslaWattmeterRequest, GetTeslaWattmeterResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "tempora";

sdk.tesla.getWattmeter(vehicleId).then((res: GetTeslaWattmeterResponse) => {
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
import { SetTeslaAmmeterRequest, SetTeslaAmmeterResponse } from "acme-api/dist/sdk/models/operations";
import { ChargeAmmeter } from "acme-api/dist/sdk/models/shared";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "suscipit";
const chargeAmmeter: ChargeAmmeter = {
  amperage: 48,
};

sdk.tesla.setAmmeter(vehicleId, chargeAmmeter).then((res: SetTeslaAmmeterResponse) => {
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


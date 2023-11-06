# Cadillac
(*cadillac*)

### Available Operations

* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Cadillac.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Cadillac.

## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetCadillacChargeTimeRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.cadillac.getChargeTime(vehicleId);


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

**Promise<[operations.GetCadillacChargeTimeResponse](../../models/operations/getcadillacchargetimeresponse.md)>**


## getVoltage

__Description__

When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetCadillacVoltageRequest } from "acme-api/dist/sdk/models/operations";

(async() => {
  const sdk = new AcmeApi({
    bearerAuth: "",
  });
const vehicleId: string = "string";

  const res = await sdk.cadillac.getVoltage(vehicleId);


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

**Promise<[operations.GetCadillacVoltageResponse](../../models/operations/getcadillacvoltageresponse.md)>**


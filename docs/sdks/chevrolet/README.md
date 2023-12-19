# Chevrolet
(*chevrolet*)

### Available Operations

* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Chevrolet.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Chevrolet.

## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetChevroletChargeTimeRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.chevrolet.getChargeTime(vehicleId);

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

**Promise<[operations.GetChevroletChargeTimeResponse](../../sdk/models/operations/getchevroletchargetimeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getVoltage

__Description__

When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetChevroletVoltageRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
  const sdk = new AcmeApi({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const vehicleId: string = "string";

  const res = await sdk.chevrolet.getVoltage(vehicleId);

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

**Promise<[operations.GetChevroletVoltageResponse](../../sdk/models/operations/getchevroletvoltageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

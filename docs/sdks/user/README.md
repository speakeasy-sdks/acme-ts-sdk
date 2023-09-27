# User
(*user*)

### Available Operations

* [getInfo](#getinfo) - User Info

## getInfo

__Description__

Returns the id of the vehicle owner who granted access to your application. This should be used as the static unique identifier for storing the access token and refresh token pair in your database. Note: A single user can own multiple vehicles, and multiple users can own the same vehicle.

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { GetInfoResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.user.getInfo().then((res: GetInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInfoResponse](../../models/operations/getinforesponse.md)>**


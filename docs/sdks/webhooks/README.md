# Webhooks
(*webhooks*)

### Available Operations

* [subscribe](#subscribe) - Subscribe Webhook
* [unsubscribe](#unsubscribe) - Unsubscribe Webhook

## subscribe

__Description__

Subscribe to a webhook for a vehicle.

__Permission__

`required: webhook:read`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { SubscribeRequest, SubscribeResponse } from "acme-api/dist/sdk/models/operations";
import { WebhookInfo } from "acme-api/dist/sdk/models/shared";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "ipsam";
const webhookId: string = "repellendus";
const webhookInfo: WebhookInfo = {
  vehicleid: "dc6ea99e-57d1-4e41-b129-27e7eb58713e",
  webhookid: "9b6ae692-60cc-4b3e-89d8-71e7549cf805",
};

sdk.webhooks.subscribe(vehicleId, webhookId, webhookInfo).then((res: SubscribeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookInfo`                                                | [shared.WebhookInfo](../../models/shared/webhookinfo.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SubscribeResponse](../../models/operations/subscriberesponse.md)>**


## unsubscribe

__Description__

Delete a webhook for a vehicle.

__Permission__

`required: webhook:read`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { AcmeApi } from "acme-api";
import { UnsubscribeRequest, UnsubscribeResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "sapiente";
const webhookId: string = "quo";

sdk.webhooks.unsubscribe(vehicleId, webhookId).then((res: UnsubscribeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UnsubscribeResponse](../../models/operations/unsubscriberesponse.md)>**


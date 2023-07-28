<!-- Start SDK Example Usage -->


```typescript
import { AcmeApi } from "acme-api";
import { GetLocationRequest, GetLocationResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});
const vehicleId: string = "36ab27d0-fd9d-4455-823a-ce30af709ffc";

sdk.vehicles.getLocation(vehicleId).then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
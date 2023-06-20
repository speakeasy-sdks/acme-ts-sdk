<!-- Start SDK Example Usage -->
```typescript
import { AcmeApi } from "acme-api";
import { GetLocationResponse } from "acme-api/dist/sdk/models/operations";

const sdk = new AcmeApi({
  security: {
    bearerAuth: "",
  },
});

sdk.vehicles.getLocation("36ab27d0-fd9d-4455-823a-ce30af709ffc").then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
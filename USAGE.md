<!-- Start SDK Example Usage -->


```typescript
import { AcmeApi } from "acme-api";
import { GetLocationRequest } from "acme-api/dist/sdk/models/operations";

(async () => {
    const sdk = new AcmeApi({
        bearerAuth: "",
    });
    const vehicleId: string = "36ab27d0-fd9d-4455-823a-ce30af709ffc";

    const res = await sdk.vehicles.getLocation(vehicleId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
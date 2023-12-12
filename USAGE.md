<!-- Start SDK Example Usage [usage] -->
```typescript
import { AcmeApi } from "acme-api";
import { GetLocationRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
    const sdk = new AcmeApi({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const vehicleId: string = "36ab27d0-fd9d-4455-823a-ce30af709ffc";

    const res = await sdk.vehicles.getLocation(vehicleId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
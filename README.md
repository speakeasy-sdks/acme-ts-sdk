# acme-api

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/acme-ts-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/acme-ts-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [compatibility](docs/sdks/compatibility/README.md)

* [listCompatibility](docs/sdks/compatibility/README.md#listcompatibility) - Compatibility

### [user](docs/sdks/user/README.md)

* [getInfo](docs/sdks/user/README.md#getinfo) - User Info

### [vehicles](docs/sdks/vehicles/README.md)

* [batch](docs/sdks/vehicles/README.md#batch) - Batch
* [disconnect](docs/sdks/vehicles/README.md#disconnect) - Revoke Access
* [get](docs/sdks/vehicles/README.md#get) - Vehicle Info
* [getEngineOil](docs/sdks/vehicles/README.md#getengineoil) - Engine Oil Life
* [getFuelTank](docs/sdks/vehicles/README.md#getfueltank) - Fuel Tank (US Only)
* [getLocation](docs/sdks/vehicles/README.md#getlocation) - Location
* [getOdometer](docs/sdks/vehicles/README.md#getodometer) - Odometer
* [getPermissions](docs/sdks/vehicles/README.md#getpermissions) - Application Permissions
* [getTirePressure](docs/sdks/vehicles/README.md#gettirepressure) - Tire pressure
* [getVin](docs/sdks/vehicles/README.md#getvin) - Returns the vehicle’s manufacturer identifier.
* [listVehicles](docs/sdks/vehicles/README.md#listvehicles) - All Vehicles
* [lockUnlock](docs/sdks/vehicles/README.md#lockunlock) - Lock/Unlock Vehicle

### [tesla](docs/sdks/tesla/README.md)

* [getAmmeter](docs/sdks/tesla/README.md#getammeter) - Retrieve charging ammeter time for a Tesla.
* [getChargeTime](docs/sdks/tesla/README.md#getchargetime) - Retrieve charging completion time for a Tesla.
* [getCompass](docs/sdks/tesla/README.md#getcompass) - Retrieve compass heading for a Tesla.
* [getExteriorTemperature](docs/sdks/tesla/README.md#getexteriortemperature) - Retrieve exterior temperature for a Tesla.
* [getInteriorTemperature](docs/sdks/tesla/README.md#getinteriortemperature) - Retrieve interior temperature for a Tesla.
* [getSpeedometer](docs/sdks/tesla/README.md#getspeedometer) - Retrieve speed for a Tesla.
* [getVoltage](docs/sdks/tesla/README.md#getvoltage) - Retrieve charging voltmeter time for a Tesla.
* [getWattmeter](docs/sdks/tesla/README.md#getwattmeter) - Retrieve charging wattmeter time for a Tesla.
* [setAmmeter](docs/sdks/tesla/README.md#setammeter) - Set charging ammeter time for a Tesla.

### [evs](docs/sdks/evs/README.md)

* [getBatteryCapacity](docs/sdks/evs/README.md#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](docs/sdks/evs/README.md#getbatterylevel) - EV Battery Level
* [getChargingLimit](docs/sdks/evs/README.md#getcharginglimit) - EV Charging Limit
* [getChargingStatus](docs/sdks/evs/README.md#getchargingstatus) - EV Charging Status
* [setChargingLimit](docs/sdks/evs/README.md#setcharginglimit) - Set EV Charging Limit
* [startStopCharge](docs/sdks/evs/README.md#startstopcharge) - Start or stop charging an electric vehicle. Please contact us to request early access.

### [cadillac](docs/sdks/cadillac/README.md)

* [getChargeTime](docs/sdks/cadillac/README.md#getchargetime) - Retrieve charging completion time for a Cadillac.
* [getVoltage](docs/sdks/cadillac/README.md#getvoltage) - Retrieve charging voltmeter time for a Cadillac.

### [chevrolet](docs/sdks/chevrolet/README.md)

* [getChargeTime](docs/sdks/chevrolet/README.md#getchargetime) - Retrieve charging completion time for a Chevrolet.
* [getVoltage](docs/sdks/chevrolet/README.md#getvoltage) - Retrieve charging voltmeter time for a Chevrolet.

### [webhooks](docs/sdks/webhooks/README.md)

* [subscribe](docs/sdks/webhooks/README.md#subscribe) - Subscribe Webhook
* [unsubscribe](docs/sdks/webhooks/README.md#unsubscribe) - Unsubscribe Webhook
<!-- End Available Resources and Operations [operations] -->





<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { AcmeApi } from "acme-api";
import { ListCompatibilityRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
    const sdk = new AcmeApi({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const country: string = "{country}";
    const scope: string = "{scope}";
    const vin: string = "{vin}";

    let res;
    try {
        res = await sdk.compatibility.listCompatibility(country, scope, vin);
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.smartcar.com/v2.0` | None |

#### Example

```typescript
import { AcmeApi } from "acme-api";
import { ListCompatibilityRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
    const sdk = new AcmeApi({
        serverIdx: 0,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const country: string = "{country}";
    const scope: string = "{scope}";
    const vin: string = "{vin}";

    const res = await sdk.compatibility.listCompatibility(country, scope, vin);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { AcmeApi } from "acme-api";
import { ListCompatibilityRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
    const sdk = new AcmeApi({
        serverURL: "https://api.smartcar.com/v2.0",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const country: string = "{country}";
    const scope: string = "{scope}";
    const vin: string = "{vin}";

    const res = await sdk.compatibility.listCompatibility(country, scope, vin);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { acme-api } from "AcmeApi";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new AcmeApi({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { AcmeApi } from "acme-api";
import { ListCompatibilityRequest } from "acme-api/dist/sdk/models/operations";

async function run() {
    const sdk = new AcmeApi({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const country: string = "{country}";
    const scope: string = "{scope}";
    const vin: string = "{vin}";

    const res = await sdk.compatibility.listCompatibility(country, scope, vin);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

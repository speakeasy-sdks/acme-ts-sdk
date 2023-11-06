# GetTeslaWattmeterResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `chargeWattage`                                              | [shared.ChargeWattage](../../models/shared/chargewattage.md) | :heavy_minus_sign:                                           | returns the wattage of the charger measured by the vehicle.  |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | HTTP response content type for this operation                |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP response status code for this operation                 |
| `rawResponse`                                                | [AxiosResponse](https://axios-http.com/docs/res_schema)      | :heavy_minus_sign:                                           | Raw HTTP response; suitable for custom response parsing      |
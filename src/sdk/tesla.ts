/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Tesla {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Retrieve charging ammeter time for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * When the vehicle is plugged in, this endpoint returns the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
     */
    async getAmmeter(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaAmmeterResponse> {
        const req = new operations.GetTeslaAmmeterRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/charge/ammeter",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaAmmeterResponse = new operations.GetTeslaAmmeterResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.chargeAmmeter = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ChargeAmmeter
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve charging completion time for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.
     */
    async getChargeTime(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaChargeTimeResponse> {
        const req = new operations.GetTeslaChargeTimeRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/charge/completion",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaChargeTimeResponse =
            new operations.GetTeslaChargeTimeResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.chargeTime = utils.objectToClass(JSON.parse(decodedRes), shared.ChargeTime);
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve compass heading for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * This endpoint returns the compass heading of a Tesla. The value is in degrees, with 0 degrees being North.
     */
    async getCompass(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaCompassResponse> {
        const req = new operations.GetTeslaCompassRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/vehicles/{vehicle_id}/tesla/compass", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaCompassResponse = new operations.GetTeslaCompassResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.compass = utils.objectToClass(JSON.parse(decodedRes), shared.Compass);
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve exterior temperature for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * This endpoint returns the exterior temperature of a Tesla, in celsius by default.
     */
    async getExteriorTemperature(
        id: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaExteriorTemperatureResponse> {
        const req = new operations.GetTeslaExteriorTemperatureRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{id}/tesla/thermometer/exterior",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaExteriorTemperatureResponse =
            new operations.GetTeslaExteriorTemperatureResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.temperature = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Temperature
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve interior temperature for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * This endpoint returns the interior temperature of a Tesla, in celsius by default.
     */
    async getInteriorTemperature(
        id: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaInteriorTemperatureResponse> {
        const req = new operations.GetTeslaInteriorTemperatureRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{id}/tesla/thermometer/interior",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaInteriorTemperatureResponse =
            new operations.GetTeslaInteriorTemperatureResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.temperature = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Temperature
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve speed for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * This endpoint returns the speed of a Tesla (in kilometers/hour by default or in miles/hour using the sc-unit-system).
     */
    async getSpeedometer(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaSpeedResponse> {
        const req = new operations.GetTeslaSpeedRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/speedometer",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaSpeedResponse = new operations.GetTeslaSpeedResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.speed = utils.objectToClass(JSON.parse(decodedRes), shared.Speed);
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve charging voltmeter time for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
     */
    async getVoltage(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaVoltageResponse> {
        const req = new operations.GetTeslaVoltageRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/charge/voltmeter",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaVoltageResponse = new operations.GetTeslaVoltageResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.chargeVoltage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ChargeVoltage
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieve charging wattmeter time for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * When the vehicle is plugged in, this endpoint returns the wattage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
     */
    async getWattmeter(
        vehicleId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTeslaWattmeterResponse> {
        const req = new operations.GetTeslaWattmeterRequest({
            vehicleId: vehicleId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/charge/wattmeter",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTeslaWattmeterResponse = new operations.GetTeslaWattmeterResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.chargeWattage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ChargeWattage
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Set charging ammeter time for a Tesla.
     *
     * @remarks
     * __Description__
     *
     * When the vehicle is plugged in, this endpoint sets the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
     */
    async setAmmeter(
        vehicleId: string,
        chargeAmmeter?: shared.ChargeAmmeter,
        config?: AxiosRequestConfig
    ): Promise<operations.SetTeslaAmmeterResponse> {
        const req = new operations.SetTeslaAmmeterRequest({
            vehicleId: vehicleId,
            chargeAmmeter: chargeAmmeter,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/tesla/charge/ammeter",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "chargeAmmeter", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SetTeslaAmmeterResponse = new operations.SetTeslaAmmeterResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.successResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SuccessResponse
                    );
                }
                break;
        }

        return res;
    }
}

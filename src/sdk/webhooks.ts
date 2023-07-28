/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Webhooks {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Subscribe Webhook
     *
     * @remarks
     * __Description__
     *
     * Subscribe to a webhook for a vehicle.
     *
     * __Permission__
     *
     * `required: webhook:read`
     *
     * __Response body__
     *
     * |  Name 	|Type   	|Boolean   	|
     * |---	|---	|---	|
     * |  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|
     */
    async subscribe(
        vehicleId: string,
        webhookId: string,
        webhookInfo?: shared.WebhookInfo,
        config?: AxiosRequestConfig
    ): Promise<operations.SubscribeResponse> {
        const req = new operations.SubscribeRequest({
            vehicleId: vehicleId,
            webhookId: webhookId,
            webhookInfo: webhookInfo,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/webhooks/{webhookId}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "webhookInfo", "json");
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

        const res: operations.SubscribeResponse = new operations.SubscribeResponse({
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
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Unsubscribe Webhook
     *
     * @remarks
     * __Description__
     *
     * Delete a webhook for a vehicle.
     *
     * __Permission__
     *
     * `required: webhook:read`
     *
     * __Response body__
     *
     * |  Name 	|Type   	|Boolean   	|
     * |---	|---	|---	|
     * |  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|
     */
    async unsubscribe(
        vehicleId: string,
        webhookId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.UnsubscribeResponse> {
        const req = new operations.UnsubscribeRequest({
            vehicleId: vehicleId,
            webhookId: webhookId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/vehicles/{vehicle_id}/webhooks/{webhookId}",
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
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UnsubscribeResponse = new operations.UnsubscribeResponse({
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
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}

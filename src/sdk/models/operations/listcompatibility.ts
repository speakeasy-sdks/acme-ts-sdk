/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListCompatibilityRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
    country?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
    scope?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
    vin?: string;
}

export class ListCompatibilityResponse extends SpeakeasyBase {
    /**
     * return Compatibility
     */
    @SpeakeasyMetadata()
    compatibilityResponse?: shared.CompatibilityResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}

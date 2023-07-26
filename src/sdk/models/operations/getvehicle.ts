/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetVehicleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vehicle_id" })
    vehicleId: string;
}

export class GetVehicleResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * A single vehicles
     */
    @SpeakeasyMetadata()
    vehicleInfo?: shared.VehicleInfo;
}

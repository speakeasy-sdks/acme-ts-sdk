/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ChargeVoltage extends SpeakeasyBase {
    /**
     * The voltage of the charger measured by the vehicle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "voltage" })
    voltage?: number;
}

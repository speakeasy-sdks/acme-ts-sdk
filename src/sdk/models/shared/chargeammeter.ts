/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ChargeAmmeter extends SpeakeasyBase {
    /**
     * The amperage of the charger measured by the vehicle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amperage" })
    amperage?: number;
}

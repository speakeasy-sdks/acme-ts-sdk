/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TirePressure extends SpeakeasyBase {
    /**
     * The current air pressure of the back left tire (in kilopascals by default or in pounds per square inch using the sc-unit-system).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "backLeft" })
    backLeft?: number;

    /**
     * The current air pressure of the back right tire (in kilopascals by default or in pounds per square inch using the sc-unit-system).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "backRight" })
    backRight?: number;

    /**
     * The current air pressure of the front left tire (in kilopascals by default or in pounds per square inch using the sc-unit-system).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "frontLeft" })
    frontLeft?: number;

    /**
     * The current air pressure of the front right tire (in kilopascals by default or in pounds per square inch using the sc-unit-system).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "frontRight" })
    frontRight?: number;
}

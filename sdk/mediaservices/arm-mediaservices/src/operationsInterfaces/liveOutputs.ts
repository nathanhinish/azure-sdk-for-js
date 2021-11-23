/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LiveOutput,
  LiveOutputsListOptionalParams,
  LiveOutputsGetOptionalParams,
  LiveOutputsGetResponse,
  LiveOutputsCreateOptionalParams,
  LiveOutputsCreateResponse,
  LiveOutputsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LiveOutputs. */
export interface LiveOutputs {
  /**
   * Lists the live outputs of a live event.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    options?: LiveOutputsListOptionalParams
  ): PagedAsyncIterableIterator<LiveOutput>;
  /**
   * Gets a live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsGetOptionalParams
  ): Promise<LiveOutputsGetResponse>;
  /**
   * Creates a new live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param parameters Live Output properties needed for creation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    parameters: LiveOutput,
    options?: LiveOutputsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LiveOutputsCreateResponse>,
      LiveOutputsCreateResponse
    >
  >;
  /**
   * Creates a new live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param parameters Live Output properties needed for creation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    parameters: LiveOutput,
    options?: LiveOutputsCreateOptionalParams
  ): Promise<LiveOutputsCreateResponse>;
  /**
   * Deletes a live output. Deleting a live output does not delete the asset the live output is writing
   * to.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a live output. Deleting a live output does not delete the asset the live output is writing
   * to.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsDeleteOptionalParams
  ): Promise<void>;
}
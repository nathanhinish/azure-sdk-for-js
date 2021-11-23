/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationsImpl, ApplicationDefinitionsImpl } from "./operations";
import { Applications, ApplicationDefinitions } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ApplicationClientContext } from "./applicationClientContext";
import {
  ApplicationClientOptionalParams,
  Operation,
  ApplicationClientListOperationsNextOptionalParams,
  ApplicationClientListOperationsOptionalParams,
  ApplicationClientListOperationsNextNextOptionalParams,
  ApplicationClientListOperationsResponse,
  ApplicationClientListOperationsNextResponse,
  ApplicationClientListOperationsNextNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class ApplicationClient extends ApplicationClientContext {
  /**
   * Initializes a new instance of the ApplicationClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ApplicationClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.applications = new ApplicationsImpl(this);
    this.applicationDefinitions = new ApplicationDefinitionsImpl(this);
  }

  /**
   * Lists all of the available Microsoft.Solutions REST API operations.
   * @param options The options parameters.
   */
  public listOperations(
    options?: ApplicationClientListOperationsOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: ApplicationClientListOperationsOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: ApplicationClientListOperationsOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  public listOperationsNext(
    nextLink: string,
    options?: ApplicationClientListOperationsNextOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.listOperationsNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listOperationsNextPagingPage(
    nextLink: string,
    options?: ApplicationClientListOperationsNextOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._listOperationsNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNextNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsNextPagingAll(
    nextLink: string,
    options?: ApplicationClientListOperationsNextOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.listOperationsNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the available Microsoft.Solutions REST API operations.
   * @param options The options parameters.
   */
  private _listOperations(
    options?: ApplicationClientListOperationsOptionalParams
  ): Promise<ApplicationClientListOperationsResponse> {
    return this.sendOperationRequest({ options }, listOperationsOperationSpec);
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: ApplicationClientListOperationsNextOptionalParams
  ): Promise<ApplicationClientListOperationsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listOperationsNextOperationSpec
    );
  }

  /**
   * ListOperationsNextNext
   * @param nextLink The nextLink from the previous successful call to the ListOperationsNext method.
   * @param options The options parameters.
   */
  private _listOperationsNextNext(
    nextLink: string,
    options?: ApplicationClientListOperationsNextNextOptionalParams
  ): Promise<ApplicationClientListOperationsNextNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listOperationsNextNextOperationSpec
    );
  }

  applications: Applications;
  applicationDefinitions: ApplicationDefinitions;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Solutions/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
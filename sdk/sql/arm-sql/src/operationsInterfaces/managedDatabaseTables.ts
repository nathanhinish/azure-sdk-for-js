/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DatabaseTable,
  ManagedDatabaseTablesListBySchemaOptionalParams,
  ManagedDatabaseTablesGetOptionalParams,
  ManagedDatabaseTablesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedDatabaseTables. */
export interface ManagedDatabaseTables {
  /**
   * List managed database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  listBySchema(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    options?: ManagedDatabaseTablesListBySchemaOptionalParams
  ): PagedAsyncIterableIterator<DatabaseTable>;
  /**
   * Get managed database table
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseTablesGetOptionalParams
  ): Promise<ManagedDatabaseTablesGetResponse>;
}
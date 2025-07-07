// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files/files';
import * as FoldersAPI from './folders/folders';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MetadataQueries extends APIResource {
  /**
   * Create a search using SQL-like syntax to return items that match specific
   * metadata.
   *
   * By default, this endpoint returns only the most basic info about the items for
   * which the query matches. To get additional fields for each item, including any
   * of the metadata, use the `fields` attribute in the query.
   *
   * @example
   * ```ts
   * const response = await client.metadataQueries.execute({
   *   ancestor_folder_id: '0',
   *   from: 'enterprise_123456.someTemplate',
   * });
   * ```
   */
  execute(
    body: MetadataQueryExecuteParams,
    options?: RequestOptions,
  ): APIPromise<MetadataQueryExecuteResponse> {
    return this._client.post('/metadata_queries/execute_read', { body, ...options });
  }
}

/**
 * A page of files and folders that matched the metadata query.
 */
export interface MetadataQueryExecuteResponse {
  /**
   * The mini representation of the files and folders that match the search terms.
   *
   * By default, this endpoint returns only the most basic info about the items. To
   * get additional fields for each item, including any of the metadata, use the
   * `fields` attribute in the query.
   */
  entries?: Array<FilesAPI.FileFull | FoldersAPI.FolderFull>;

  /**
   * The limit that was used for this search. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed.
   */
  limit?: number;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: string;
}

export interface MetadataQueryExecuteParams {
  /**
   * The ID of the folder that you are restricting the query to. A value of zero will
   * return results from all folders you have access to. A non-zero value will only
   * return results found in the folder corresponding to the ID or in any of its
   * subfolders.
   */
  ancestor_folder_id: string;

  /**
   * Specifies the template used in the query. Must be in the form
   * `scope.templateKey`. Not all templates can be used in this field, most notably
   * the built-in, Box-provided classification templates can not be used in a query.
   */
  from: string;

  /**
   * By default, this endpoint returns only the most basic info about the items for
   * which the query matches. This attribute can be used to specify a list of
   * additional attributes to return for any item, including its metadata.
   *
   * This attribute takes a list of item fields, metadata template identifiers, or
   * metadata template field identifiers.
   *
   * For example:
   *
   * - `created_by` will add the details of the user who created the item to the
   *   response.
   * - `metadata.<scope>.<templateKey>` will return the mini-representation of the
   *   metadata instance identified by the `scope` and `templateKey`.
   * - `metadata.<scope>.<templateKey>.<field>` will return all the
   *   mini-representation of the metadata instance identified by the `scope` and
   *   `templateKey` plus the field specified by the `field` name. Multiple fields
   *   for the same `scope` and `templateKey` can be defined.
   */
  fields?: Array<string>;

  /**
   * A value between 0 and 100 that indicates the maximum number of results to return
   * for a single request. This only specifies a maximum boundary and will not
   * guarantee the minimum number of results returned.
   */
  limit?: number;

  /**
   * Marker to use for requesting the next page.
   */
  marker?: string;

  /**
   * A list of template fields and directions to sort the metadata query results by.
   *
   * The ordering `direction` must be the same for each item in the array.
   */
  order_by?: Array<MetadataQueryExecuteParams.OrderBy>;

  /**
   * The query to perform. A query is a logical expression that is very similar to a
   * SQL `SELECT` statement. Values in the search query can be turned into parameters
   * specified in the `query_param` arguments list to prevent having to manually
   * insert search values into the query string.
   *
   * For example, a value of `:amount` would represent the `amount` value in
   * `query_params` object.
   */
  query?: string;

  /**
   * Set of arguments corresponding to the parameters specified in the `query`. The
   * type of each parameter used in the `query_params` must match the type of the
   * corresponding metadata template field.
   */
  query_params?: { [key: string]: MetadataQueryExecuteParams.QueryParams };
}

export namespace MetadataQueryExecuteParams {
  /**
   * An object representing one of the metadata template fields to sort the metadata
   * query results by.
   */
  export interface OrderBy {
    /**
     * The direction to order by, either ascending or descending.
     *
     * The `ordering` direction must be the same for each item in the array.
     */
    direction?: 'ASC' | 'DESC' | 'asc' | 'desc';

    /**
     * The metadata template field to order by.
     *
     * The `field_key` represents the `key` value of a field from the metadata template
     * being searched for.
     */
    field_key?: string;
  }

  /**
   * The value for the argument being used in the metadata search.
   *
   * The type of this parameter must match the type of the corresponding metadata
   * template field.
   */
  export interface QueryParams {}
}

export declare namespace MetadataQueries {
  export {
    type MetadataQueryExecuteResponse as MetadataQueryExecuteResponse,
    type MetadataQueryExecuteParams as MetadataQueryExecuteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class SharedItems extends APIResource {
  /**
   * Returns the file represented by a shared link.
   *
   * A shared file can be represented by a shared link, which can originate within
   * the current enterprise or within another.
   *
   * This endpoint allows an application to retrieve information about a shared file
   * when only given a shared link.
   *
   * The `shared_link_permission_options` array field can be returned by requesting
   * it in the `fields` query parameter.
   *
   * @example
   * ```ts
   * const fileFull = await client.sharedItems.retrieve({
   *   boxapi:
   *     'shared_link=[link]&shared_link_password=[password]',
   * });
   * ```
   */
  retrieve(params: SharedItemRetrieveParams, options?: RequestOptions): APIPromise<FilesAPI.FileFull> {
    const { boxapi, 'if-none-match': ifNoneMatch, ...query } = params;
    return this._client.get('/shared_items', {
      query,
      ...options,
      headers: buildHeaders([
        { boxapi: boxapi, ...(ifNoneMatch != null ? { 'if-none-match': ifNoneMatch } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface SharedItemRetrieveParams {
  /**
   * Header param: A header containing the shared link and optional password for the
   * shared link.
   *
   * The format for this header is as follows:
   *
   * `shared_link=[link]&shared_link_password=[password]`.
   */
  boxapi: string;

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Header param: Ensures an item is only returned if it has changed.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `304 Not Modified` if the item has not changed since.
   */
  'if-none-match'?: string;
}

export declare namespace SharedItems {
  export { type SharedItemRetrieveParams as SharedItemRetrieveParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CollaborationWhitelistEntries extends APIResource {
  /**
   * Creates a new entry in the list of allowed domains to allow collaboration for.
   *
   * @example
   * ```ts
   * const collaborationAllowlistEntry =
   *   await client.collaborationWhitelistEntries.create({
   *     direction: 'inbound',
   *     domain: 'example.com',
   *   });
   * ```
   */
  create(
    body: CollaborationWhitelistEntryCreateParams,
    options?: RequestOptions,
  ): APIPromise<CollaborationAllowlistEntry> {
    return this._client.post('/collaboration_whitelist_entries', { body, ...options });
  }

  /**
   * Returns a domain that has been deemed safe to create collaborations for within
   * the current enterprise.
   *
   * @example
   * ```ts
   * const collaborationAllowlistEntry =
   *   await client.collaborationWhitelistEntries.retrieve(
   *     '213123',
   *   );
   * ```
   */
  retrieve(
    collaborationWhitelistEntryID: string,
    options?: RequestOptions,
  ): APIPromise<CollaborationAllowlistEntry> {
    return this._client.get(path`/collaboration_whitelist_entries/${collaborationWhitelistEntryID}`, options);
  }

  /**
   * Returns the list domains that have been deemed safe to create collaborations for
   * within the current enterprise.
   *
   * @example
   * ```ts
   * const collaborationWhitelistEntries =
   *   await client.collaborationWhitelistEntries.list();
   * ```
   */
  list(
    query: CollaborationWhitelistEntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollaborationWhitelistEntryListResponse> {
    return this._client.get('/collaboration_whitelist_entries', { query, ...options });
  }

  /**
   * Removes a domain from the list of domains that have been deemed safe to create
   * collaborations for within the current enterprise.
   *
   * @example
   * ```ts
   * await client.collaborationWhitelistEntries.delete('213123');
   * ```
   */
  delete(collaborationWhitelistEntryID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/collaboration_whitelist_entries/${collaborationWhitelistEntryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An entry that describes an approved domain for which users can collaborate with
 * files and folders in your enterprise or vice versa.
 */
export interface CollaborationAllowlistEntry {
  /**
   * The unique identifier for this entry.
   */
  id?: string;

  /**
   * The time the entry was created at.
   */
  created_at?: string;

  /**
   * The direction of the collaborations to allow.
   */
  direction?: 'inbound' | 'outbound' | 'both';

  /**
   * The whitelisted domain.
   */
  domain?: string;

  /**
   * A representation of a Box enterprise.
   */
  enterprise?: CollaborationAllowlistEntry.Enterprise;

  /**
   * The value will always be `collaboration_whitelist_entry`.
   */
  type?: 'collaboration_whitelist_entry';
}

export namespace CollaborationAllowlistEntry {
  /**
   * A representation of a Box enterprise.
   */
  export interface Enterprise {
    /**
     * The unique identifier for this enterprise.
     */
    id?: string;

    /**
     * The name of the enterprise.
     */
    name?: string;

    /**
     * The value will always be `enterprise`.
     */
    type?: 'enterprise';
  }
}

export interface CollaborationWhitelistEntryListResponse {
  /**
   * A list of allowed collaboration domains.
   */
  entries?: Array<CollaborationAllowlistEntry>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

  /**
   * The marker for the start of the next page of results.
   */
  next_marker?: string | null;

  /**
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;
}

export interface CollaborationWhitelistEntryCreateParams {
  /**
   * The direction in which to allow collaborations.
   */
  direction: 'inbound' | 'outbound' | 'both';

  /**
   * The domain to add to the list of allowed domains.
   */
  domain: string;
}

export interface CollaborationWhitelistEntryListParams {
  /**
   * The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;
}

export declare namespace CollaborationWhitelistEntries {
  export {
    type CollaborationAllowlistEntry as CollaborationAllowlistEntry,
    type CollaborationWhitelistEntryListResponse as CollaborationWhitelistEntryListResponse,
    type CollaborationWhitelistEntryCreateParams as CollaborationWhitelistEntryCreateParams,
    type CollaborationWhitelistEntryListParams as CollaborationWhitelistEntryListParams,
  };
}

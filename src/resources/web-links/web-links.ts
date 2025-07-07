// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from '../files/files';
import * as TrashAPI from './trash';
import { Trash, TrashRetrieveParams, TrashRetrieveResponse } from './trash';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WebLinks extends APIResource {
  trash: TrashAPI.Trash = new TrashAPI.Trash(this._client);

  /**
   * Creates a web link object within a folder.
   *
   * @example
   * ```ts
   * const webLink = await client.webLinks.create({
   *   parent: { id: '0' },
   *   url: 'https://box.com',
   * });
   * ```
   */
  create(body: WebLinkCreateParams, options?: RequestOptions): APIPromise<WebLink> {
    return this._client.post('/web_links', { body, ...options });
  }

  /**
   * Retrieve information about a web link.
   *
   * @example
   * ```ts
   * const webLink = await client.webLinks.retrieve('12345');
   * ```
   */
  retrieve(
    webLinkID: string,
    params: WebLinkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebLink> {
    const { boxapi } = params ?? {};
    return this._client.get(path`/web_links/${webLinkID}`, {
      ...options,
      headers: buildHeaders([{ ...(boxapi != null ? { boxapi: boxapi } : undefined) }, options?.headers]),
    });
  }

  /**
   * Updates a web link object.
   *
   * @example
   * ```ts
   * const webLink = await client.webLinks.update('12345');
   * ```
   */
  update(
    webLinkID: string,
    body: WebLinkUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebLink> {
    return this._client.put(path`/web_links/${webLinkID}`, { body, ...options });
  }

  /**
   * Deletes a web link.
   *
   * @example
   * ```ts
   * await client.webLinks.delete('12345');
   * ```
   */
  delete(webLinkID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/web_links/${webLinkID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restores a web link that has been moved to the trash.
   *
   * An optional new parent ID can be provided to restore the web link to in case the
   * original folder has been deleted.
   *
   * @example
   * ```ts
   * const response = await client.webLinks.restore('12345');
   * ```
   */
  restore(
    webLinkID: string,
    params: WebLinkRestoreParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebLinkRestoreResponse> {
    const { fields, ...body } = params ?? {};
    return this._client.post(path`/web_links/${webLinkID}`, { query: { fields }, body, ...options });
  }
}

/**
 * Web links are objects that point to URLs. These objects are also known as
 * bookmarks within the Box web application.
 *
 * Web link objects are treated similarly to file objects, they will also support
 * most actions that apply to regular files.
 */
export interface WebLink extends WebLinkBase {
  /**
   * When this file was created on Box’s servers.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The description accompanying the web link. This is visible within the Box web
   * application.
   */
  description?: string;

  /**
   * Whether this item is deleted or not. Values include `active`, `trashed` if the
   * file has been moved to the trash, and `deleted` if the file has been permanently
   * deleted.
   */
  item_status?: 'active' | 'trashed' | 'deleted';

  /**
   * When this file was last updated on the Box servers.
   */
  modified_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The name of the web link.
   */
  name?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FilesAPI.FolderMini;

  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  path_collection?: WebLink.PathCollection;

  /**
   * When this file will be permanently deleted.
   */
  purged_at?: string | null;

  /**
   * A numeric identifier that represents the most recent user event that has been
   * applied to this item.
   *
   * This can be used in combination with the `GET /events`-endpoint to filter out
   * user events that would have occurred before this identifier was read.
   *
   * An example would be where a Box Drive-like application would fetch an item via
   * the API, and then listen to incoming user events for changes to the item. The
   * application would ignore any user events where the `sequence_id` in the event is
   * smaller than or equal to the `sequence_id` in the originally fetched resource.
   */
  sequence_id?: string | null;

  /**
   * The shared link object for this item. Will be `null` if no shared link has been
   * created.
   */
  shared_link?: WebLink.SharedLink;

  /**
   * When this file was moved to the trash.
   */
  trashed_at?: string | null;

  /**
   * The URL this web link points to.
   */
  url?: string;
}

export namespace WebLink {
  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  export interface PathCollection {}

  /**
   * The shared link object for this item. Will be `null` if no shared link has been
   * created.
   */
  export interface SharedLink {}
}

/**
 * Web links are objects that point to URLs. These objects are also known as
 * bookmarks within the Box web application.
 *
 * Web link objects are treated similarly to file objects, they will also support
 * most actions that apply to regular files.
 */
export interface WebLinkBase {
  /**
   * The unique identifier for this web link.
   */
  id: string;

  /**
   * The value will always be `web_link`.
   */
  type: 'web_link';

  /**
   * The entity tag of this web link. Used with `If-Match` headers.
   */
  etag?: string;
}

/**
 * Represents a web link restored from the trash.
 */
export interface WebLinkRestoreResponse {
  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  path_collection: WebLinkRestoreResponse.PathCollection;

  /**
   * A numeric identifier that represents the most recent user event that has been
   * applied to this item.
   *
   * This can be used in combination with the `GET /events`-endpoint to filter out
   * user events that would have occurred before this identifier was read.
   *
   * An example would be where a Box Drive-like application would fetch an item via
   * the API, and then listen to incoming user events for changes to the item. The
   * application would ignore any user events where the `sequence_id` in the event is
   * smaller than or equal to the `sequence_id` in the originally fetched resource.
   */
  sequence_id: string | null;

  /**
   * The unique identifier for this web link.
   */
  id?: string;

  /**
   * When this file was created on Box’s servers.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The description accompanying the web link. This is visible within the Box web
   * application.
   */
  description?: string;

  /**
   * The entity tag of this web link. Used with `If-Match` headers.
   */
  etag?: string;

  /**
   * Whether this item is deleted or not. Values include `active`, `trashed` if the
   * file has been moved to the trash, and `deleted` if the file has been permanently
   * deleted.
   */
  item_status?: 'active' | 'trashed' | 'deleted';

  /**
   * When this file was last updated on the Box servers.
   */
  modified_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The name of the web link.
   */
  name?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FilesAPI.FolderMini;

  /**
   * The time at which this bookmark will be permanently deleted - becomes `null`
   * after restore.
   */
  purged_at?: string | null;

  /**
   * The shared link for this bookmark. This will be `null` if a bookmark had been
   * trashed, even though the original shared link does become active again.
   */
  shared_link?: string | null;

  /**
   * The time at which this bookmark was put in the trash - becomes `null` after
   * restore.
   */
  trashed_at?: string | null;

  /**
   * The value will always be `web_link`.
   */
  type?: 'web_link';

  /**
   * The URL this web link points to.
   */
  url?: string;
}

export namespace WebLinkRestoreResponse {
  /**
   * The tree of folders that this web link is contained in, starting at the root.
   */
  export interface PathCollection {}
}

export interface WebLinkCreateParams {
  /**
   * The parent folder to create the web link within.
   */
  parent: WebLinkCreateParams.Parent;

  /**
   * The URL that this web link links to. Must start with `"http://"` or
   * `"https://"`.
   */
  url: string;

  /**
   * Description of the web link.
   */
  description?: string;

  /**
   * Name of the web link. Defaults to the URL if not set.
   */
  name?: string;
}

export namespace WebLinkCreateParams {
  /**
   * The parent folder to create the web link within.
   */
  export interface Parent {
    /**
     * The ID of parent folder.
     */
    id: string;
  }
}

export interface WebLinkRetrieveParams {
  /**
   * The URL, and optional password, for the shared link of this item.
   *
   * This header can be used to access items that have not been explicitly shared
   * with a user.
   *
   * Use the format `shared_link=[link]` or if a password is required then use
   * `shared_link=[link]&shared_link_password=[password]`.
   *
   * This header can be used on the file or folder shared, as well as on any files or
   * folders nested within the item.
   */
  boxapi?: string;
}

export interface WebLinkUpdateParams {
  /**
   * A new description of the web link.
   */
  description?: string;

  /**
   * A new name for the web link. Defaults to the URL if not set.
   */
  name?: string;

  /**
   * The parent for this item.
   */
  parent?: WebLinkUpdateParams.Parent;

  /**
   * The settings for the shared link to update.
   */
  shared_link?: WebLinkUpdateParams.SharedLink;

  /**
   * The new URL that the web link links to. Must start with `"http://"` or
   * `"https://"`.
   */
  url?: string;
}

export namespace WebLinkUpdateParams {
  /**
   * The parent for this item.
   */
  export interface Parent {
    /**
     * The ID of parent item.
     */
    id?: string;

    /**
     * The input for `user_id` is optional. Moving to non-root folder is not allowed
     * when `user_id` is present. Parent folder id should be zero when `user_id` is
     * provided.
     */
    user_id?: string;
  }

  /**
   * The settings for the shared link to update.
   */
  export interface SharedLink {
    /**
     * The level of access for the shared link. This can be restricted to anyone with
     * the link (`open`), only people within the company (`company`) and only those who
     * have been invited to the folder (`collaborators`).
     *
     * If not set, this field defaults to the access level specified by the enterprise
     * admin. To create a shared link with this default setting pass the `shared_link`
     * object with no `access` field, for example `{ "shared_link": {} }`.
     *
     * The `company` access level is only available to paid accounts.
     */
    access?: 'open' | 'company' | 'collaborators';

    /**
     * The password required to access the shared link. Set the password to `null` to
     * remove it. Passwords must now be at least eight characters long and include a
     * number, upper case letter, or a non-numeric or non-alphabetic character. A
     * password can only be set when `access` is set to `open`.
     */
    password?: string | null;

    /**
     * The timestamp at which this shared link will expire. This field can only be set
     * by users with paid accounts. The value must be greater than the current date and
     * time.
     */
    unshared_at?: string;

    /**
     * Defines a custom vanity name to use in the shared link URL, for example
     * `https://app.box.com/v/my-shared-link`.
     *
     * Custom URLs should not be used when sharing sensitive content as vanity URLs are
     * a lot easier to guess than regular shared links.
     */
    vanity_name?: string;
  }
}

export interface WebLinkRestoreParams {
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
   * Body param: An optional new name for the web link.
   */
  name?: string;

  /**
   * Body param: The parent for this item.
   */
  parent?: WebLinkRestoreParams.Parent;
}

export namespace WebLinkRestoreParams {
  /**
   * The parent for this item.
   */
  export interface Parent {
    /**
     * The ID of parent item.
     */
    id?: string;
  }
}

WebLinks.Trash = Trash;

export declare namespace WebLinks {
  export {
    type WebLink as WebLink,
    type WebLinkBase as WebLinkBase,
    type WebLinkRestoreResponse as WebLinkRestoreResponse,
    type WebLinkCreateParams as WebLinkCreateParams,
    type WebLinkRetrieveParams as WebLinkRetrieveParams,
    type WebLinkUpdateParams as WebLinkUpdateParams,
    type WebLinkRestoreParams as WebLinkRestoreParams,
  };

  export {
    Trash as Trash,
    type TrashRetrieveResponse as TrashRetrieveResponse,
    type TrashRetrieveParams as TrashRetrieveParams,
  };
}

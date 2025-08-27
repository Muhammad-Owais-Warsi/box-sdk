// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FoldersAPI from './folders';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from '../files/files';
import * as TrashAPI from './trash';
import {
  Trash,
  TrashGetTrashedFolderParams,
  TrashGetTrashedFolderResponse,
  TrashListTrashedItemsParams,
} from './trash';
import * as WatermarkAPI from './watermark';
import { Watermark, WatermarkApplyWatermarkParams } from './watermark';
import * as WebLinksAPI from '../web-links/web-links';
import * as MetadataAPI from '../files/metadata/metadata';
import * as MetadataMetadataAPI from './metadata/metadata';
import {
  Metadata,
  MetadataCreateMetadataInstanceParams,
  MetadataGetMetadataInstanceParams,
  MetadataRemoveMetadataInstanceParams,
  MetadataUpdateMetadataInstanceParams,
} from './metadata/metadata';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  trash: TrashAPI.Trash = new TrashAPI.Trash(this._client);
  metadata: MetadataMetadataAPI.Metadata = new MetadataMetadataAPI.Metadata(this._client);
  watermark: WatermarkAPI.Watermark = new WatermarkAPI.Watermark(this._client);

  /**
   * Creates a new empty folder within the specified parent folder.
   *
   * @example
   * ```ts
   * const folderFull = await client.folders.create({
   *   name: 'New Folder',
   *   parent: { id: '0' },
   * });
   * ```
   */
  create(params: FolderCreateParams, options?: RequestOptions): APIPromise<FolderFull> {
    const { fields, ...body } = params;
    return this._client.post('/folders', { query: { fields }, body, ...options });
  }

  /**
   * Retrieves details for a folder, including the first 100 entries in the folder.
   *
   * Passing `sort`, `direction`, `offset`, and `limit` parameters in query allows
   * you to manage the list of returned
   * [folder items](r://folder--full#param-item-collection).
   *
   * To fetch more items within the folder, use the
   * [Get items in a folder](e://get-folders-id-items) endpoint.
   *
   * @example
   * ```ts
   * const folderFull = await client.folders.retrieve('12345');
   * ```
   */
  retrieve(
    folderID: string,
    params: FolderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderFull> {
    const { boxapi, 'if-none-match': ifNoneMatch, ...query } = params ?? {};
    return this._client.get(path`/folders/${folderID}`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(boxapi != null ? { boxapi: boxapi } : undefined),
          ...(ifNoneMatch != null ? { 'if-none-match': ifNoneMatch } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a folder. This can be also be used to move the folder, create shared
   * links, update collaborations, and more.
   *
   * @example
   * ```ts
   * const folderFull = await client.folders.update('12345');
   * ```
   */
  update(
    folderID: string,
    params: FolderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderFull> {
    const { fields, 'if-match': ifMatch, ...body } = params ?? {};
    return this._client.put(path`/folders/${folderID}`, {
      query: { fields },
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deletes a folder, either permanently or by moving it to the trash.
   *
   * @example
   * ```ts
   * await client.folders.delete('12345');
   * ```
   */
  delete(
    folderID: string,
    params: FolderDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { recursive, 'if-match': ifMatch } = params ?? {};
    return this._client.delete(path`/folders/${folderID}`, {
      query: { recursive },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a copy of a folder within a destination folder.
   *
   * The original folder will not be changed.
   *
   * @example
   * ```ts
   * const folderFull = await client.folders.copy('0', {
   *   parent: { id: '0' },
   * });
   * ```
   */
  copy(folderID: string, params: FolderCopyParams, options?: RequestOptions): APIPromise<FolderFull> {
    const { fields, ...body } = params;
    return this._client.post(path`/folders/${folderID}/copy`, { query: { fields }, body, ...options });
  }

  /**
   * **This is a beta feature, which means that its availability might be limited.**
   * Returns all app items the folder is associated with. This includes app items
   * associated with ancestors of the folder. Assuming the context user has access to
   * the folder, the type/ids are revealed even if the context user does not have
   * **View** permission on the app item.
   *
   * @example
   * ```ts
   * const appItemAssociations =
   *   await client.folders.listAppItemAssociations('12345');
   * ```
   */
  listAppItemAssociations(
    folderID: string,
    query: FolderListAppItemAssociationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.AppItemAssociations> {
    return this._client.get(path`/folders/${folderID}/app_item_associations`, { query, ...options });
  }

  /**
   * Retrieves a list of pending and active collaborations for a folder. This returns
   * all the users that have access to the folder or have been invited to the folder.
   *
   * @example
   * ```ts
   * const collaborations =
   *   await client.folders.listCollaborations('12345');
   * ```
   */
  listCollaborations(
    folderID: string,
    query: FolderListCollaborationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.Collaborations> {
    return this._client.get(path`/folders/${folderID}/collaborations`, { query, ...options });
  }

  /**
   * Retrieves a page of items in a folder. These items can be files, folders, and
   * web links.
   *
   * To request more information about the folder itself, like its size, use the
   * [Get a folder](#get-folders-id) endpoint instead.
   *
   * @example
   * ```ts
   * const items = await client.folders.listItems('12345');
   * ```
   */
  listItems(
    folderID: string,
    params: FolderListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Items> {
    const { boxapi, ...query } = params ?? {};
    return this._client.get(path`/folders/${folderID}/items`, {
      query,
      ...options,
      headers: buildHeaders([{ ...(boxapi != null ? { boxapi: boxapi } : undefined) }, options?.headers]),
    });
  }

  /**
   * Restores a folder that has been moved to the trash.
   *
   * An optional new parent ID can be provided to restore the folder to in case the
   * original folder has been deleted.
   *
   * During this operation, part of the file tree will be locked, mainly the source
   * folder and all of its descendants, as well as the destination folder.
   *
   * For the duration of the operation, no other move, copy, delete, or restore
   * operation can performed on any of the locked folders.
   *
   * @example
   * ```ts
   * const response = await client.folders.restore('12345');
   * ```
   */
  restore(
    folderID: string,
    params: FolderRestoreParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderRestoreResponse> {
    const { fields, ...body } = params ?? {};
    return this._client.post(path`/folders/${folderID}`, { query: { fields }, body, ...options });
  }
}

/**
 * A standard representation of a folder, as returned from any folder API endpoints
 * by default.
 */
export interface Folder extends FilesAPI.FolderMini {
  /**
   * The date and time at which this folder was originally created.
   */
  content_created_at?: string | null;

  /**
   * The date and time at which this folder was last updated.
   */
  content_modified_at?: string | null;

  /**
   * The date and time when the folder was created. This value may be `null` for some
   * folders such as the root folder or the trash folder.
   */
  created_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: Folder.CreatedBy;

  /**
   * The optional description of this folder.
   */
  description?: string;

  /**
   * The `folder_upload_email` parameter is not `null` if one of the following
   * options is **true**:
   *
   * - The **Allow uploads to this folder via email** and the **Only allow email
   *   uploads from collaborators in this folder** are
   *   [enabled for a folder in the Admin Console](https://support.box.com/hc/en-us/articles/360043697534-Upload-to-Box-Through-Email),
   *   and the user has at least **Upload** permissions granted.
   *
   * - The **Allow uploads to this folder via email** setting is enabled for a folder
   *   in the Admin Console, and the **Only allow email uploads from collaborators in
   *   this folder** setting is deactivated (unchecked).
   *
   * If the conditions are not met, the parameter will have the following value:
   * `folder_upload_email: null`.
   */
  folder_upload_email?: Folder.FolderUploadEmail | null;

  /**
   * A list of files, folders, and web links in their mini representation.
   */
  item_collection?: Folder.ItemCollection;

  /**
   * Defines if this item has been deleted or not.
   *
   * - `active` when the item has is not in the trash
   * - `trashed` when the item has been moved to the trash but not deleted
   * - `deleted` when the item has been permanently deleted.
   */
  item_status?: 'active' | 'trashed' | 'deleted';

  /**
   * The date and time when the folder was last updated. This value may be `null` for
   * some folders such as the root folder or the trash folder.
   */
  modified_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: Folder.ModifiedBy;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: Folder.OwnedBy;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FilesAPI.FolderMini | null;

  /**
   * The tree of folders that this folder is contained in, starting at the root.
   */
  path_collection?: Folder.PathCollection;

  /**
   * The time at which this folder is expected to be purged from the trash.
   */
  purged_at?: string | null;

  /**
   * Shared links provide direct, read-only access to files or folder on Box.
   *
   * Shared links with open access level allow anyone with the URL to access the
   * item, while shared links with company or collaborators access levels can only be
   * accessed by appropriately authenticated Box users.
   */
  shared_link?: Folder.SharedLink | null;

  /**
   * The folder size in bytes.
   *
   * Be careful parsing this integer as its value can get very large.
   */
  size?: number;

  /**
   * The time at which this folder was put in the trash.
   */
  trashed_at?: string | null;
}

export namespace Folder {
  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface CreatedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * The `folder_upload_email` parameter is not `null` if one of the following
   * options is **true**:
   *
   * - The **Allow uploads to this folder via email** and the **Only allow email
   *   uploads from collaborators in this folder** are
   *   [enabled for a folder in the Admin Console](https://support.box.com/hc/en-us/articles/360043697534-Upload-to-Box-Through-Email),
   *   and the user has at least **Upload** permissions granted.
   *
   * - The **Allow uploads to this folder via email** setting is enabled for a folder
   *   in the Admin Console, and the **Only allow email uploads from collaborators in
   *   this folder** setting is deactivated (unchecked).
   *
   * If the conditions are not met, the parameter will have the following value:
   * `folder_upload_email: null`.
   */
  export interface FolderUploadEmail {
    /**
     * When this parameter has been set, users can email files to the email address
     * that has been automatically created for this folder.
     *
     * To create an email address, set this property either when creating or updating
     * the folder.
     *
     * When set to `collaborators`, only emails from registered email addresses for
     * collaborators will be accepted. This includes any email aliases a user might
     * have registered.
     *
     * When set to `open` it will accept emails from any email address.
     */
    access?: 'open' | 'collaborators';

    /**
     * The optional upload email address for this folder.
     */
    email?: string;
  }

  /**
   * A list of files, folders, and web links in their mini representation.
   */
  export interface ItemCollection extends FoldersAPI.Items {}

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface ModifiedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface OwnedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * The tree of folders that this folder is contained in, starting at the root.
   */
  export interface PathCollection {}

  /**
   * Shared links provide direct, read-only access to files or folder on Box.
   *
   * Shared links with open access level allow anyone with the URL to access the
   * item, while shared links with company or collaborators access levels can only be
   * accessed by appropriately authenticated Box users.
   */
  export interface SharedLink {
    /**
     * The number of times this item has been downloaded.
     */
    download_count: number;

    /**
     * The effective access level for the shared link. This can be a more restrictive
     * access level than the value in the `access` field when the enterprise settings
     * restrict the allowed access levels.
     */
    effective_access: 'open' | 'company' | 'collaborators';

    /**
     * The effective permissions for this shared link. These result in the more
     * restrictive combination of the share link permissions and the item permissions
     * set by the administrator, the owner, and any ancestor item such as a folder.
     */
    effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access';

    /**
     * Defines if the shared link requires a password to access the item.
     */
    is_password_enabled: boolean;

    /**
     * The number of times this item has been previewed.
     */
    preview_count: number;

    /**
     * The URL that can be used to access the item on Box.
     *
     * This URL will display the item in Box's preview UI where the file can be
     * downloaded if allowed.
     *
     * This URL will continue to work even when a custom `vanity_url` has been set for
     * this shared link.
     */
    url: string;

    /**
     * The access level for this shared link.
     *
     * - `open` - provides access to this item to anyone with this link
     * - `company` - only provides access to this item to people the same company
     * - `collaborators` - only provides access to this item to people who are
     *   collaborators on this item
     *
     * If this field is omitted when creating the shared link, the access level will be
     * set to the default access level specified by the enterprise admin.
     */
    access?: 'open' | 'company' | 'collaborators';

    /**
     * A URL that can be used to download the file. This URL can be used in a browser
     * to download the file. This URL includes the file extension so that the file will
     * be saved with the right file type.
     *
     * This property will be `null` for folders.
     */
    download_url?: string | null;

    /**
     * Defines if this link allows a user to preview, edit, and download an item. These
     * permissions refer to the shared link only and do not supersede permissions
     * applied to the item itself.
     */
    permissions?: SharedLink.Permissions;

    /**
     * The date and time when this link will be unshared. This field can only be set by
     * users with paid accounts.
     */
    unshared_at?: string | null;

    /**
     * The custom name of a shared link, as used in the `vanity_url` field.
     */
    vanity_name?: string | null;

    /**
     * The "Custom URL" that can also be used to preview the item on Box. Custom URLs
     * can only be created or modified in the Box Web application.
     */
    vanity_url?: string | null;
  }

  export namespace SharedLink {
    /**
     * Defines if this link allows a user to preview, edit, and download an item. These
     * permissions refer to the shared link only and do not supersede permissions
     * applied to the item itself.
     */
    export interface Permissions {
      /**
       * Defines if the shared link allows for the item to be downloaded. For shared
       * links on folders, this also applies to any items in the folder.
       *
       * This value can be set to `true` when the effective access level is set to `open`
       * or `company`, not `collaborators`.
       */
      can_download: boolean;

      /**
       * Defines if the shared link allows for the item to be edited.
       *
       * This value can only be `true` if `can_download` is also `true` and if the item
       * has a type of `file`.
       */
      can_edit: boolean;

      /**
       * Defines if the shared link allows for the item to be previewed.
       *
       * This value is always `true`. For shared links on folders this also applies to
       * any items in the folder.
       */
      can_preview: boolean;
    }
  }
}

/**
 * A full representation of a folder, as can be returned from any folder API
 * endpoints by default.
 */
export interface FolderFull extends Folder {
  /**
   * A list of the types of roles that user can be invited at when sharing this
   * folder.
   */
  allowed_invitee_roles?: Array<
    'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner'
  >;

  /**
   * A list of access levels that are available for this folder.
   *
   * For some folders, like the root folder, this will always be an empty list as
   * sharing is not allowed at that level.
   */
  allowed_shared_link_access_levels?: Array<'open' | 'company' | 'collaborators'>;

  /**
   * Specifies if users who are not the owner of the folder can invite new
   * collaborators to the folder.
   */
  can_non_owners_invite?: boolean;

  /**
   * Specifies if collaborators who are not owners of this folder are restricted from
   * viewing other collaborations on this folder.
   *
   * It also restricts non-owners from inviting new collaborators.
   */
  can_non_owners_view_collaborators?: boolean;

  /**
   * Details about the classification applied to this folder.
   */
  classification?: FolderFull.Classification;

  /**
   * Specifies if this folder has any other collaborators.
   */
  has_collaborations?: boolean;

  /**
   * Specifies if the folder can be accessed with the direct shared link or a shared
   * link to a parent folder.
   */
  is_accessible_via_shared_link?: boolean;

  /**
   * This field will return true if the folder or any ancestor of the folder is
   * associated with at least one app item. Note that this will return true even if
   * the context user does not have access to the app item(s) associated with the
   * folder.
   */
  is_associated_with_app_item?: boolean;

  /**
   * Specifies if new invites to this folder are restricted to users within the
   * enterprise. This does not affect existing collaborations.
   */
  is_collaboration_restricted_to_enterprise?: boolean;

  /**
   * Specifies if this folder is owned by a user outside of the authenticated
   * enterprise.
   */
  is_externally_owned?: boolean;

  /**
   * A list of metadata instances, nested within key-value pairs of their `scope` and
   * `templateKey`.
   *
   * To access the metadata for a file or folder, first use the metadata endpoints to
   * determine the metadata templates available to your enterprise.
   *
   * Then use the `GET /files/:id` or `GET /folder/:id` endpoint with the `fields`
   * query parameter to get the metadata by ID.
   *
   * To request a metadata instance for a particular `scope` and `templateKey` use
   * the following format for the `fields` parameter:
   * `metadata.<scope>.<templateKey>`
   *
   * For example, `?fields=metadata.enterprise_27335.marketingCollateral`.
   */
  metadata?: { [key: string]: { [key: string]: MetadataAPI.MetadataFull } };

  /**
   * Describes the permissions that the current user has for this folder.
   */
  permissions?: FolderFull.Permissions;

  /**
   * Specifies whether a folder should be synced to a user's device or not. This is
   * used by Box Sync (discontinued) and is not used by Box Drive.
   */
  sync_state?: 'synced' | 'not_synced' | 'partially_synced';

  /**
   * The tags for this item. These tags are shown in the Box web app and mobile apps
   * next to an item.
   *
   * To add or remove a tag, retrieve the item's current tags, modify them, and then
   * update this field.
   *
   * There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
   */
  tags?: Array<string>;

  /**
   * Details about the watermark applied to this folder.
   */
  watermark_info?: FolderFull.WatermarkInfo;
}

export namespace FolderFull {
  /**
   * Details about the classification applied to this folder.
   */
  export interface Classification {}

  /**
   * Describes the permissions that the current user has for this folder.
   */
  export interface Permissions {}

  /**
   * Details about the watermark applied to this folder.
   */
  export interface WatermarkInfo {}
}

export interface Items {
  /**
   * The items in this collection.
   */
  entries?: Array<FilesAPI.FileFull | FilesAPI.FolderMini | WebLinksAPI.WebLink>;

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
   * The 0-based offset of the first entry in this set. This will be the same as the
   * `offset` query parameter.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  offset?: number;

  /**
   * The order by which items are returned.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  order?: Array<Items.Order>;

  /**
   * The marker for the start of the previous page of results.
   */
  prev_marker?: string | null;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace Items {
  /**
   * The order in which a pagination is ordered.
   */
  export interface Order {
    /**
     * The field to order by.
     */
    by?: string;

    /**
     * The direction to order by, either ascending or descending.
     */
    direction?: 'ASC' | 'DESC';
  }
}

/**
 * Represents a folder restored from the trash.
 */
export interface FolderRestoreResponse {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting a folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folders/123` the `folder_id` is `123`.
   */
  id?: string;

  /**
   * The date and time at which this folder was originally created.
   */
  content_created_at?: string | null;

  /**
   * The date and time at which this folder was last updated.
   */
  content_modified_at?: string | null;

  /**
   * The date and time when the folder was created. This value may be `null` for some
   * folders such as the root folder or the trash folder.
   */
  created_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: FolderRestoreResponse.CreatedBy;

  /**
   * The optional description of this folder.
   */
  description?: string;

  /**
   * The HTTP `etag` of this folder. This can be used within some API endpoints in
   * the `If-Match` and `If-None-Match` headers to only perform changes on the folder
   * if (no) changes have happened.
   */
  etag?: string | null;

  /**
   * The folder upload email for this folder. This will be `null` if a folder has
   * been trashed, even though the original upload email does become active again.
   */
  folder_upload_email?: string | null;

  /**
   * Defines if this item has been deleted or not.
   *
   * - `active` when the item has is not in the trash,
   * - `trashed` when the item has been moved to the trash but not deleted,
   * - `deleted` when the item has been permanently deleted.
   */
  item_status?: 'active' | 'trashed' | 'deleted';

  /**
   * The date and time when the folder was last updated. This value may be `null` for
   * some folders such as the root folder or the trash folder.
   */
  modified_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by?: FolderRestoreResponse.ModifiedBy;

  /**
   * The name of the folder.
   */
  name?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by?: FolderRestoreResponse.OwnedBy;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FolderRestoreResponse.Parent;

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  path_collection?: FolderRestoreResponse.PathCollection;

  /**
   * The time at which this folder is expected to be purged from the trash - becomes
   * `null` after restore.
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
   * The shared link for this file. This will be `null` if a folder had been trashed,
   * even though the original shared link does become active again.
   */
  shared_link?: string | null;

  /**
   * The folder size in bytes.
   *
   * Be careful parsing this integer as its value can get very large.
   */
  size?: number;

  /**
   * The time at which this folder was put in the trash - becomes `null` after
   * restore.
   */
  trashed_at?: string | null;

  /**
   * The value will always be `folder`.
   */
  type?: 'folder';
}

export namespace FolderRestoreResponse {
  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface CreatedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface ModifiedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  export interface OwnedBy extends RetentionPoliciesAPI.UserMini {}

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  export interface Parent extends FilesAPI.FolderMini {}

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  export interface PathCollection {}
}

export interface FolderCreateParams {
  /**
   * Body param: The name for the new folder.
   *
   * The following restrictions to folder names apply: names containing non-printable
   * ASCII characters, forward and backward slashes (`/`, `\`), names with trailing
   * spaces, and names `.` and `..` are not allowed.
   *
   * Folder names must be unique within their parent folder. The name check is
   * case-insensitive, so a folder named `New Folder` cannot be created in a parent
   * folder that already contains a folder named `new folder`.
   */
  name: string;

  /**
   * Body param: The parent folder to create the new folder within.
   */
  parent: FolderCreateParams.Parent;

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
   * Body param: The Write Folder Upload Email object.
   */
  folder_upload_email?: FolderCreateParams.FolderUploadEmail;

  /**
   * Body param: Specifies whether a folder should be synced to a user's device or
   * not. This is used by Box Sync (discontinued) and is not used by Box Drive.
   */
  sync_state?: 'synced' | 'not_synced' | 'partially_synced';
}

export namespace FolderCreateParams {
  /**
   * The parent folder to create the new folder within.
   */
  export interface Parent {
    /**
     * The ID of parent folder.
     */
    id: string;
  }

  /**
   * The Write Folder Upload Email object.
   */
  export interface FolderUploadEmail {
    /**
     * When this parameter has been set, users can email files to the email address
     * that has been automatically created for this folder.
     *
     * To create an email address, set this property either when creating or updating
     * the folder.
     *
     * When set to `collaborators`, only emails from registered email addresses for
     * collaborators will be accepted. This includes any email aliases a user might
     * have registered.
     *
     * When set to `open` it will accept emails from any email address.
     */
    access?: 'open' | 'collaborators';
  }
}

export interface FolderRetrieveParams {
  /**
   * Query param: The direction to sort results in. This can be either in
   * alphabetical ascending (`ASC`) or descending (`DESC`) order.
   */
  direction?: 'ASC' | 'DESC';

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   *
   * Additionally this field can be used to query any metadata applied to the file by
   * specifying the `metadata` field as well as the scope and key of the template to
   * retrieve, for example `?fields=metadata.enterprise_12345.contractTemplate`.
   */
  fields?: Array<string>;

  /**
   * Query param: The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Query param: The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * Query param: Defines the **second** attribute by which items are sorted.
   *
   * The folder type affects the way the items are sorted:
   *
   * - **Standard folder**: Items are always sorted by their `type` first, with
   *   folders listed before files, and files listed before web links.
   *
   * - **Root folder**: This parameter is not supported for marker-based pagination
   *   on the root folder
   *
   * (the folder with an `id` of `0`).
   *
   * - **Shared folder with parent path to the associated folder visible to the
   *   collaborator**: Items are always sorted by their `type` first, with folders
   *   listed before files, and files listed before web links.
   */
  sort?: 'id' | 'name' | 'date' | 'size';

  /**
   * Header param: The URL, and optional password, for the shared link of this item.
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

  /**
   * Header param: Ensures an item is only returned if it has changed.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `304 Not Modified` if the item has not changed since.
   */
  'if-none-match'?: string;
}

export interface FolderUpdateParams {
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
   * Body param: Specifies if users who are not the owner of the folder can invite
   * new collaborators to the folder.
   */
  can_non_owners_invite?: boolean;

  /**
   * Body param: Restricts collaborators who are not the owner of this folder from
   * viewing other collaborations on this folder.
   *
   * It also restricts non-owners from inviting new collaborators.
   *
   * When setting this field to `false`, it is required to also set
   * `can_non_owners_invite_collaborators` to `false` if it has not already been set.
   */
  can_non_owners_view_collaborators?: boolean;

  /**
   * Body param: An array of collections to make this folder a member of. Currently
   * we only support the `favorites` collection.
   *
   * To get the ID for a collection, use the [List all collections][1] endpoint.
   *
   * Passing an empty array `[]` or `null` will remove the folder from all
   * collections.
   *
   * [1]: e://get-collections
   */
  collections?: Array<FolderUpdateParams.Collection> | null;

  /**
   * Body param: The optional description of this folder.
   */
  description?: string;

  /**
   * Body param: The Write Folder Upload Email object.
   */
  folder_upload_email?: FolderUpdateParams.FolderUploadEmail | null;

  /**
   * Body param: Specifies if new invites to this folder are restricted to users
   * within the enterprise. This does not affect existing collaborations.
   */
  is_collaboration_restricted_to_enterprise?: boolean;

  /**
   * Body param: The optional new name for this folder.
   *
   * The following restrictions to folder names apply: names containing non-printable
   * ASCII characters, forward and backward slashes (`/`, `\`), names with trailing
   * spaces, and names `.` and `..` are not allowed.
   *
   * Folder names must be unique within their parent folder. The name check is
   * case-insensitive, so a folder named `New Folder` cannot be created in a parent
   * folder that already contains a folder named `new folder`.
   */
  name?: string;

  /**
   * Body param: The parent for this item.
   */
  parent?: FolderUpdateParams.Parent;

  /**
   * Body param: Defines a shared link for an item. Set this to `null` to remove the
   * shared link.
   */
  shared_link?: FolderUpdateParams.SharedLink;

  /**
   * Body param: Specifies whether a folder should be synced to a user's device or
   * not. This is used by Box Sync (discontinued) and is not used by Box Drive.
   */
  sync_state?: 'synced' | 'not_synced' | 'partially_synced';

  /**
   * Body param: The tags for this item. These tags are shown in the Box web app and
   * mobile apps next to an item.
   *
   * To add or remove a tag, retrieve the item's current tags, modify them, and then
   * update this field.
   *
   * There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
   */
  tags?: Array<string>;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export namespace FolderUpdateParams {
  /**
   * The bare basic reference for an object.
   */
  export interface Collection {
    /**
     * The unique identifier for this object.
     */
    id?: string;

    /**
     * The type for this object.
     */
    type?: string;
  }

  /**
   * The Write Folder Upload Email object.
   */
  export interface FolderUploadEmail {
    /**
     * When this parameter has been set, users can email files to the email address
     * that has been automatically created for this folder.
     *
     * To create an email address, set this property either when creating or updating
     * the folder.
     *
     * When set to `collaborators`, only emails from registered email addresses for
     * collaborators will be accepted. This includes any email aliases a user might
     * have registered.
     *
     * When set to `open` it will accept emails from any email address.
     */
    access?: 'open' | 'collaborators';
  }

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
   * Defines a shared link for an item. Set this to `null` to remove the shared link.
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

    permissions?: SharedLink.Permissions;

    /**
     * The timestamp at which this shared link will expire. This field can only be set
     * by users with paid accounts.
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

  export namespace SharedLink {
    export interface Permissions {
      /**
       * If the shared link allows for downloading of files. This can only be set when
       * `access` is set to `open` or `company`.
       */
      can_download?: boolean;
    }
  }
}

export interface FolderDeleteParams {
  /**
   * Query param: Delete a folder that is not empty by recursively deleting the
   * folder and all of its content.
   */
  recursive?: boolean;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export interface FolderCopyParams {
  /**
   * Body param: The destination folder to copy the folder to.
   */
  parent: FolderCopyParams.Parent;

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
   * Body param: An optional new name for the copied folder.
   *
   * There are some restrictions to the file name. Names containing non-printable
   * ASCII characters, forward and backward slashes (`/`, `\`), as well as names with
   * trailing spaces are prohibited.
   *
   * Additionally, the names `.` and `..` are not allowed either.
   */
  name?: string;
}

export namespace FolderCopyParams {
  /**
   * The destination folder to copy the folder to.
   */
  export interface Parent {
    /**
     * The ID of parent folder.
     */
    id: string;
  }
}

export interface FolderListAppItemAssociationsParams {
  /**
   * If given, returns only app items for this application type.
   */
  application_type?: string;

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

export interface FolderListCollaborationsParams {
  /**
   * A comma-separated list of attributes to include in the response. This can be
   * used to request fields that are not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

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

export interface FolderListItemsParams {
  /**
   * Query param: The direction to sort results in. This can be either in
   * alphabetical ascending (`ASC`) or descending (`DESC`) order.
   */
  direction?: 'ASC' | 'DESC';

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   *
   * Additionally this field can be used to query any metadata applied to the file by
   * specifying the `metadata` field as well as the scope and key of the template to
   * retrieve, for example `?fields=metadata.enterprise_12345.contractTemplate`.
   */
  fields?: Array<string>;

  /**
   * Query param: The maximum number of items to return per page.
   */
  limit?: number;

  /**
   * Query param: Defines the position marker at which to begin returning results.
   * This is used when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;

  /**
   * Query param: The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * Query param: Defines the **second** attribute by which items are sorted.
   *
   * The folder type affects the way the items are sorted:
   *
   * - **Standard folder**: Items are always sorted by their `type` first, with
   *   folders listed before files, and files listed before web links.
   *
   * - **Root folder**: This parameter is not supported for marker-based pagination
   *   on the root folder
   *
   * (the folder with an `id` of `0`).
   *
   * - **Shared folder with parent path to the associated folder visible to the
   *   collaborator**: Items are always sorted by their `type` first, with folders
   *   listed before files, and files listed before web links.
   */
  sort?: 'id' | 'name' | 'date' | 'size';

  /**
   * Query param: Specifies whether to use marker-based pagination instead of
   * offset-based pagination. Only one pagination method can be used at a time.
   *
   * By setting this value to true, the API will return a `marker` field that can be
   * passed as a parameter to this endpoint to get the next page of the response.
   */
  usemarker?: boolean;

  /**
   * Header param: The URL, and optional password, for the shared link of this item.
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

export interface FolderRestoreParams {
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
   * Body param: An optional new name for the folder.
   */
  name?: string;

  /**
   * Body param: The parent for this item.
   */
  parent?: FolderRestoreParams.Parent;
}

export namespace FolderRestoreParams {
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

Folders.Trash = Trash;
Folders.Metadata = Metadata;
Folders.Watermark = Watermark;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderFull as FolderFull,
    type Items as Items,
    type FolderRestoreResponse as FolderRestoreResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderDeleteParams as FolderDeleteParams,
    type FolderCopyParams as FolderCopyParams,
    type FolderListAppItemAssociationsParams as FolderListAppItemAssociationsParams,
    type FolderListCollaborationsParams as FolderListCollaborationsParams,
    type FolderListItemsParams as FolderListItemsParams,
    type FolderRestoreParams as FolderRestoreParams,
  };

  export {
    Trash as Trash,
    type TrashGetTrashedFolderResponse as TrashGetTrashedFolderResponse,
    type TrashGetTrashedFolderParams as TrashGetTrashedFolderParams,
    type TrashListTrashedItemsParams as TrashListTrashedItemsParams,
  };

  export {
    Metadata as Metadata,
    type MetadataCreateMetadataInstanceParams as MetadataCreateMetadataInstanceParams,
    type MetadataGetMetadataInstanceParams as MetadataGetMetadataInstanceParams,
    type MetadataRemoveMetadataInstanceParams as MetadataRemoveMetadataInstanceParams,
    type MetadataUpdateMetadataInstanceParams as MetadataUpdateMetadataInstanceParams,
  };

  export { Watermark as Watermark, type WatermarkApplyWatermarkParams as WatermarkApplyWatermarkParams };
}

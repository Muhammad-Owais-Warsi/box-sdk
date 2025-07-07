// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import * as CollaborationsAPI from '../collaborations';
import * as CommentsAPI from '../comments';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as SharedItemsAppItemsAPI from '../shared-items-app-items';
import * as SignRequestsAPI from '../sign-requests';
import * as TasksAPI from '../tasks';
import * as ContentAPI from './content';
import {
  Content as ContentAPIContent,
  ContentDownloadParams,
  ContentUploadParams,
  ContentUploadVersionParams,
  Files as ContentAPIFiles,
} from './content';
import * as TrashAPI from './trash';
import { Trash, TrashRetrieveParams, TrashRetrieveResponse } from './trash';
import * as UploadSessionsAPI from './upload-sessions';
import {
  UploadPart,
  UploadSession,
  UploadSessionCommitParams,
  UploadSessionCreateForExistingFileParams,
  UploadSessionCreateParams,
  UploadSessionListPartsParams,
  UploadSessionListPartsResponse,
  UploadSessionUploadPartParams,
  UploadSessionUploadPartResponse,
  UploadSessions,
} from './upload-sessions';
import * as VersionsAPI from './versions';
import {
  FileVersion,
  FileVersionFull,
  VersionDeleteParams,
  VersionListParams,
  VersionListResponse,
  VersionPromoteParams,
  VersionRestoreParams,
  VersionRetrieveParams,
  Versions,
} from './versions';
import * as WatermarkAPI from './watermark';
import { Watermark, WatermarkApplyParams, WatermarkResource } from './watermark';
import * as WebLinksAPI from '../web-links/web-links';
import * as MetadataAPI from './metadata/metadata';
import {
  Metadata,
  MetadataCreateParams,
  MetadataDeleteParams,
  MetadataFull,
  MetadataInstanceValue,
  MetadataRetrieveParams,
  MetadataUpdateParams,
  Metadatas,
} from './metadata/metadata';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  uploadSessions: UploadSessionsAPI.UploadSessions = new UploadSessionsAPI.UploadSessions(this._client);
  trash: TrashAPI.Trash = new TrashAPI.Trash(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  watermark: WatermarkAPI.WatermarkResource = new WatermarkAPI.WatermarkResource(this._client);

  /**
   * Retrieves the details about a file.
   *
   * @example
   * ```ts
   * const fileFull = await client.files.retrieve('12345');
   * ```
   */
  retrieve(
    fileID: string,
    params: FileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileFull> {
    const { boxapi, 'if-none-match': ifNoneMatch, 'x-rep-hints': xRepHints, ...query } = params ?? {};
    return this._client.get(path`/files/${fileID}`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(boxapi != null ? { boxapi: boxapi } : undefined),
          ...(ifNoneMatch != null ? { 'if-none-match': ifNoneMatch } : undefined),
          ...(xRepHints != null ? { 'x-rep-hints': xRepHints } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a file. This can be used to rename or move a file, create a shared link,
   * or lock a file.
   *
   * @example
   * ```ts
   * const fileFull = await client.files.update('12345');
   * ```
   */
  update(
    fileID: string,
    params: FileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileFull> {
    const { fields, 'if-match': ifMatch, ...body } = params ?? {};
    return this._client.put(path`/files/${fileID}`, {
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
   * Deletes a file, either permanently or by moving it to the trash.
   *
   * The the enterprise settings determine whether the item will be permanently
   * deleted from Box or moved to the trash.
   *
   * @example
   * ```ts
   * await client.files.delete('12345');
   * ```
   */
  delete(
    fileID: string,
    params: FileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'if-match': ifMatch } = params ?? {};
    return this._client.delete(path`/files/${fileID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(ifMatch != null ? { 'if-match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a copy of a file.
   *
   * @example
   * ```ts
   * const fileFull = await client.files.copy('12345', {
   *   parent: { id: '0' },
   * });
   * ```
   */
  copy(fileID: string, params: FileCopyParams, options?: RequestOptions): APIPromise<FileFull> {
    const { fields, ...body } = params;
    return this._client.post(path`/files/${fileID}/copy`, { query: { fields }, body, ...options });
  }

  /**
   * Retrieves a thumbnail, or smaller image representation, of a file.
   *
   * Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in the `.png`
   * format and sizes of `32x32`, `160x160`, and `320x320` can be returned in the
   * `.jpg` format.
   *
   * Thumbnails can be generated for the image and video file formats listed [found
   * on our community site][1].
   *
   * [1]:
   *   https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
   *
   * @example
   * ```ts
   * const response = await client.files.getThumbnail('png', {
   *   file_id: '12345',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getThumbnail(
    extension: 'png' | 'jpg',
    params: FileGetThumbnailParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { file_id, ...query } = params;
    return this._client.get(path`/files/${file_id}/thumbnail.${extension}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'image/jpg' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * **This is a beta feature, which means that its availability might be limited.**
   * Returns all app items the file is associated with. This includes app items
   * associated with ancestors of the file. Assuming the context user has access to
   * the file, the type/ids are revealed even if the context user does not have
   * **View** permission on the app item.
   *
   * @example
   * ```ts
   * const appItemAssociations =
   *   await client.files.listAppItemAssociations('12345');
   * ```
   */
  listAppItemAssociations(
    fileID: string,
    query: FileListAppItemAssociationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppItemAssociations> {
    return this._client.get(path`/files/${fileID}/app_item_associations`, { query, ...options });
  }

  /**
   * Retrieves a list of pending and active collaborations for a file. This returns
   * all the users that have access to the file or have been invited to the file.
   *
   * @example
   * ```ts
   * const collaborations =
   *   await client.files.listCollaborations('12345');
   * ```
   */
  listCollaborations(
    fileID: string,
    query: FileListCollaborationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Collaborations> {
    return this._client.get(path`/files/${fileID}/collaborations`, { query, ...options });
  }

  /**
   * Retrieves a list of comments for a file.
   *
   * @example
   * ```ts
   * const response = await client.files.listComments('12345');
   * ```
   */
  listComments(
    fileID: string,
    query: FileListCommentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListCommentsResponse> {
    return this._client.get(path`/files/${fileID}/comments`, { query, ...options });
  }

  /**
   * Retrieves a list of all the tasks for a file. This endpoint does not support
   * pagination.
   *
   * @example
   * ```ts
   * const response = await client.files.listTasks('12345');
   * ```
   */
  listTasks(fileID: string, options?: RequestOptions): APIPromise<FileListTasksResponse> {
    return this._client.get(path`/files/${fileID}/tasks`, options);
  }

  /**
   * Restores a file that has been moved to the trash.
   *
   * An optional new parent ID can be provided to restore the file to in case the
   * original folder has been deleted.
   *
   * @example
   * ```ts
   * const response = await client.files.restore('12345');
   * ```
   */
  restore(
    fileID: string,
    params: FileRestoreParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileRestoreResponse> {
    const { fields, ...body } = params ?? {};
    return this._client.post(path`/files/${fileID}`, { query: { fields }, body, ...options });
  }
}

export interface AppItemAssociations {
  entries?: Array<AppItemAssociations.Entry>;

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

export namespace AppItemAssociations {
  /**
   * An app item association represents an association between a file or folder and
   * an app item. Associations between a folder and an app item cascade down to all
   * descendants of the folder.
   */
  export interface Entry {
    /**
     * The unique identifier for this app item association.
     */
    id: string;

    /**
     * An app item represents an content object owned by an application. It can group
     * files and folders together from different paths. That set can be shared via a
     * collaboration.
     */
    app_item: SharedItemsAppItemsAPI.AppItem;

    /**
     * The file or folder which is associated with the app item.
     */
    item: SignRequestsAPI.FileBase | null | FilesAPI.FolderBase | WebLinksAPI.WebLinkBase;

    /**
     * The value will always be `app_item_association`.
     */
    type: 'app_item_association';
  }
}

export interface Collaborations {
  /**
   * A list of collaborations.
   */
  entries?: Array<CollaborationsAPI.Collaboration>;

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

/**
 * A standard representation of a file, as returned from any file API endpoints by
 * default.
 */
export type File =
  | TasksAPI.FileMini
  | (null & {
      /**
       * The date and time at which this file was originally created, which might be
       * before it was uploaded to Box.
       */
      content_created_at?: string | null;

      /**
       * The date and time at which this file was last updated, which might be before it
       * was uploaded to Box.
       */
      content_modified_at?: string | null;

      /**
       * The date and time when the file was created on Box.
       */
      created_at?: string;

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      created_by?: RetentionPoliciesAPI.UserMini;

      /**
       * The optional description of this file. If the description exceeds 255
       * characters, the first 255 characters are set as a file description and the rest
       * of it is ignored.
       */
      description?: string;

      /**
       * Defines if this item has been deleted or not.
       *
       * - `active` when the item has is not in the trash
       * - `trashed` when the item has been moved to the trash but not deleted
       * - `deleted` when the item has been permanently deleted.
       */
      item_status?: 'active' | 'trashed' | 'deleted';

      /**
       * The date and time when the file was last updated on Box.
       */
      modified_at?: string;

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      modified_by?: File.ModifiedBy;

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      owned_by?: File.OwnedBy;

      /**
       * A mini representation of a file version, used when nested under another
       * resource.
       */
      parent?: FolderMini | null;

      /**
       * The tree of folders that this file is contained in, starting at the root.
       */
      path_collection?: File.PathCollection;

      /**
       * The time at which this file is expected to be purged from the trash.
       */
      purged_at?: string | null;

      /**
       * The shared link for this file. This value will be `null` if no shared link has
       * been created for this file.
       */
      shared_link?: File.SharedLink;

      /**
       * The file size in bytes. Be careful parsing this integer as it can get very large
       * and cause an integer overflow.
       */
      size?: number;

      /**
       * The time at which this file was put in the trash.
       */
      trashed_at?: string | null;
    });

export namespace File {
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
   * The tree of folders that this file is contained in, starting at the root.
   */
  export interface PathCollection {}

  /**
   * The shared link for this file. This value will be `null` if no shared link has
   * been created for this file.
   */
  export interface SharedLink {}
}

/**
 * A full representation of a file, as can be returned from any file API endpoints
 * by default.
 */
export interface FileFull extends File {
  /**
   * A list of the types of roles that user can be invited at when sharing this file.
   */
  allowed_invitee_roles?: Array<
    'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner'
  >;

  /**
   * Details about the classification applied to this file.
   */
  classification?: FileFull.Classification;

  /**
   * The number of comments on this file.
   */
  comment_count?: number;

  /**
   * The retention expiration timestamp for the given file.
   */
  disposition_at?: string | null;

  /**
   * When the file will automatically be deleted.
   */
  expires_at?: string | null;

  /**
   * Requesting this field creates an expiring Box Embed URL for an embedded preview
   * session in an `iframe`.
   *
   * This URL will expire after 60 seconds and the session will expire after 60
   * minutes.
   *
   * Not all file types are supported for these embed URLs. Box Embed is not
   * optimized for mobile browsers and should not be used in web experiences designed
   * for mobile devices. Many UI elements, like the **download** and **print**
   * options might not show in mobile browsers.
   */
  expiring_embed_link?: FileFull.ExpiringEmbedLink;

  /**
   * Indicates the (optional) file extension for this file. By default, this is set
   * to an empty string.
   */
  extension?: string;

  /**
   * Specifies if this file has any other collaborators.
   */
  has_collaborations?: boolean;

  /**
   * Specifies if the file can be accessed via the direct shared link or a shared
   * link to a parent folder.
   */
  is_accessible_via_shared_link?: boolean;

  /**
   * This field will return true if the file or any ancestor of the file is
   * associated with at least one app item. Note that this will return true even if
   * the context user does not have access to the app item(s) associated with the
   * file.
   */
  is_associated_with_app_item?: boolean;

  /**
   * Specifies if this file is owned by a user outside of the authenticated
   * enterprise.
   */
  is_externally_owned?: boolean;

  /**
   * Indicates if the file is a package. Packages are commonly used by Mac
   * Applications and can include iWork files.
   */
  is_package?: boolean;

  /**
   * The lock held on a file. A lock prevents a file from being moved, renamed, or
   * otherwise changed by anyone else than the user who created the lock.
   */
  lock?: FileFull.Lock | null;

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
   * Describes the permissions that the current user has for this file.
   */
  permissions?: FileFull.Permissions;

  /**
   * A list of file representations.
   */
  representations?: FileFull.Representations;

  /**
   * A list of the types of roles that user can be invited at when sharing this file.
   */
  shared_link_permission_options?: Array<'can_preview' | 'can_download' | 'can_edit'> | null;

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
   * The display name of the user that uploaded the file. In most cases this is the
   * name of the user logged in at the time of the upload.
   *
   * If the file was uploaded using a File Request form that requires the user to
   * provide an email address, this field is populated with that email address. If an
   * email address was not required in the File Request form, this field is set to
   * return a value of `File Request`.
   *
   * In all other anonymous cases where no email was provided this field will default
   * to a value of `Someone`.
   */
  uploader_display_name?: string;

  /**
   * The version number of this file.
   */
  version_number?: string;

  /**
   * Details about the watermark applied to this item.
   */
  watermark_info?: FileFull.WatermarkInfo;
}

export namespace FileFull {
  /**
   * Details about the classification applied to this file.
   */
  export interface Classification {}

  /**
   * Requesting this field creates an expiring Box Embed URL for an embedded preview
   * session in an `iframe`.
   *
   * This URL will expire after 60 seconds and the session will expire after 60
   * minutes.
   *
   * Not all file types are supported for these embed URLs. Box Embed is not
   * optimized for mobile browsers and should not be used in web experiences designed
   * for mobile devices. Many UI elements, like the **download** and **print**
   * options might not show in mobile browsers.
   */
  export interface ExpiringEmbedLink {}

  /**
   * The lock held on a file. A lock prevents a file from being moved, renamed, or
   * otherwise changed by anyone else than the user who created the lock.
   */
  export interface Lock {
    /**
     * The unique identifier for this lock.
     */
    id?: string;

    /**
     * If the lock is managed by an application rather than a user, this field
     * identifies the type of the application that holds the lock. This is an open enum
     * and may be extended with additional values in the future.
     */
    app_type?: 'gsuite' | 'office_wopi' | 'office_wopiplus' | 'other' | null;

    /**
     * The time this lock was created at.
     */
    created_at?: string;

    /**
     * A mini representation of a user, as can be returned when nested within other
     * resources.
     */
    created_by?: RetentionPoliciesAPI.UserMini;

    /**
     * The time this lock is to expire at, which might be in the past.
     */
    expired_at?: string;

    /**
     * Whether or not the file can be downloaded while locked.
     */
    is_download_prevented?: boolean;

    /**
     * The value will always be `lock`.
     */
    type?: 'lock';
  }

  /**
   * Describes the permissions that the current user has for this file.
   */
  export interface Permissions {}

  /**
   * A list of file representations.
   */
  export interface Representations {
    /**
     * A list of files.
     */
    entries?: Array<Representations.Entry>;
  }

  export namespace Representations {
    /**
     * A file representation.
     */
    export interface Entry {
      /**
       * An object containing the URL that can be used to actually fetch the
       * representation.
       */
      content?: Entry.Content;

      /**
       * An object containing the URL that can be used to fetch more info on this
       * representation.
       */
      info?: Entry.Info;

      /**
       * An object containing the size and type of this presentation.
       */
      properties?: Entry.Properties;

      /**
       * Indicates the file type of the returned representation.
       */
      representation?: string;

      /**
       * An object containing the status of this representation.
       */
      status?: Entry.Status;
    }

    export namespace Entry {
      /**
       * An object containing the URL that can be used to actually fetch the
       * representation.
       */
      export interface Content {
        /**
         * The download URL that can be used to fetch the representation. Make sure to make
         * an authenticated API call to this endpoint.
         *
         * This URL is a template and will require the `{+asset_path}` to be replaced by a
         * path. In general, for unpaged representations it can be replaced by an empty
         * string.
         *
         * For paged representations, replace the `{+asset_path}` with the page to request
         * plus the extension for the file, for example `1.pdf`.
         *
         * When requesting the download URL the following additional query params can be
         * passed along.
         *
         * - `set_content_disposition_type` - Sets the `Content-Disposition` header in the
         *   API response with the specified disposition type of either `inline` or
         *   `attachment`. If not supplied, the `Content-Disposition` header is not
         *   included in the response.
         *
         * - `set_content_disposition_filename` - Allows the application to define the
         *   representation's file name used in the `Content-Disposition` header. If not
         *   defined, the filename is derived from the source file name in Box combined
         *   with the extension of the representation.
         */
        url_template?: string;
      }

      /**
       * An object containing the URL that can be used to fetch more info on this
       * representation.
       */
      export interface Info {
        /**
         * The API URL that can be used to get more info on this file representation. Make
         * sure to make an authenticated API call to this endpoint.
         */
        url?: string;
      }

      /**
       * An object containing the size and type of this presentation.
       */
      export interface Properties {
        /**
         * The width by height size of this representation in pixels.
         */
        dimensions?: string;

        /**
         * Indicates if the representation is build up out of multiple pages.
         */
        paged?: string;

        /**
         * Indicates if the representation can be used as a thumbnail of the file.
         */
        thumb?: string;
      }

      /**
       * An object containing the status of this representation.
       */
      export interface Status {
        /**
         * The status of the representation.
         *
         * - `success` defines the representation as ready to be viewed.
         * - `viewable` defines a video to be ready for viewing.
         * - `pending` defines the representation as to be generated. Retry this endpoint
         *   to re-check the status.
         * - `none` defines that the representation will be created when requested. Request
         *   the URL defined in the `info` object to trigger this generation.
         */
        state?: 'success' | 'viewable' | 'pending' | 'none';
      }
    }
  }

  /**
   * Details about the watermark applied to this item.
   */
  export interface WatermarkInfo {
    /**
     * Specifies if this item has a watermark applied.
     */
    is_watermarked?: boolean;
  }
}

export interface FileVersionMini {
  /**
   * The unique identifier that represent a file version.
   */
  id: string;

  /**
   * The value will always be `file_version`.
   */
  type: 'file_version';

  /**
   * The SHA1 hash of this version of the file.
   */
  sha1?: string;
}

/**
 * The bare basic representation of a folder, the minimal amount of fields returned
 * when using the `fields` query parameter.
 */
export interface FolderBase {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting a folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folders/123` the `folder_id` is `123`.
   */
  id: string;

  /**
   * The value will always be `folder`.
   */
  type: 'folder';

  /**
   * The HTTP `etag` of this folder. This can be used within some API endpoints in
   * the `If-Match` and `If-None-Match` headers to only perform changes on the folder
   * if (no) changes have happened.
   */
  etag?: string | null;
}

/**
 * A mini representation of a file version, used when nested under another
 * resource.
 */
export interface FolderMini extends FolderBase {
  /**
   * The name of the folder.
   */
  name?: string;

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
}

export interface FileListCommentsResponse {
  /**
   * A list of comments.
   */
  entries?: Array<CommentsAPI.CommentFull>;

  /**
   * The limit that was used for these entries. This will be the same as the `limit`
   * query parameter unless that value exceeded the maximum value allowed. The
   * maximum value varies by API.
   */
  limit?: number;

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
  order?: Array<FileListCommentsResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace FileListCommentsResponse {
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
 * A list of tasks.
 */
export interface FileListTasksResponse {
  /**
   * A list of tasks.
   */
  entries?: Array<TasksAPI.Task>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   */
  total_count?: number;
}

/**
 * Represents a file restored from the trash.
 */
export interface FileRestoreResponse {
  /**
   * The unique identifier that represent a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  id: string;

  /**
   * The date and time when the file was created on Box.
   */
  created_at: string;

  /**
   * The optional description of this file.
   */
  description: string;

  /**
   * Defines if this item has been deleted or not.
   *
   * - `active` when the item has is not in the trash
   * - `trashed` when the item has been moved to the trash but not deleted
   * - `deleted` when the item has been permanently deleted.
   */
  item_status: 'active' | 'trashed' | 'deleted';

  /**
   * The date and time when the file was last updated on Box.
   */
  modified_at: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  modified_by: FileRestoreResponse.ModifiedBy;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  owned_by: FileRestoreResponse.OwnedBy;

  /**
   * The tree of folders that this file is contained in, starting at the root.
   */
  path_collection: FileRestoreResponse.PathCollection;

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
   * The SHA1 hash of the file. This can be used to compare the contents of a file on
   * Box with a local file.
   */
  sha1: string;

  /**
   * The file size in bytes. Be careful parsing this integer as it can get very large
   * and cause an integer overflow.
   */
  size: number;

  /**
   * The value will always be `file`.
   */
  type: 'file';

  /**
   * The date and time at which this file was originally created, which might be
   * before it was uploaded to Box.
   */
  content_created_at?: string | null;

  /**
   * The date and time at which this file was last updated, which might be before it
   * was uploaded to Box.
   */
  content_modified_at?: string | null;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * The HTTP `etag` of this file. This can be used within some API endpoints in the
   * `If-Match` and `If-None-Match` headers to only perform changes on the file if
   * (no) changes have happened.
   */
  etag?: string | null;

  /**
   * A mini representation of a file version, used when nested within another
   * resource.
   */
  file_version?: FileVersionMini;

  /**
   * The name of the file.
   */
  name?: string;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent?: FileRestoreResponse.Parent;

  /**
   * The time at which this file is expected to be purged from the trash - becomes
   * `null` after restore.
   */
  purged_at?: string | null;

  /**
   * The shared link for this file. This will be `null` if a file had been trashed,
   * even though the original shared link does become active again.
   */
  shared_link?: string | null;

  /**
   * The time at which this file was put in the trash - becomes `null` after restore.
   */
  trashed_at?: string | null;
}

export namespace FileRestoreResponse {
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
   * The tree of folders that this file is contained in, starting at the root.
   */
  export interface PathCollection {}

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  export interface Parent extends FilesAPI.FolderMini {}
}

export interface FileRetrieveParams {
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

  /**
   * Header param: A header required to request specific `representations` of a file.
   * Use this in combination with the `fields` query parameter to request a specific
   * file representation.
   *
   * The general format for these representations is `X-Rep-Hints: [...]` where
   * `[...]` is one or many hints in the format `[fileType?query]`.
   *
   * For example, to request a `png` representation in `32x32` as well as `64x64`
   * pixel dimensions provide the following hints.
   *
   * `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=64x64]`
   *
   * Additionally, a `text` representation is available for all document file types
   * in Box using the `[extracted_text]` representation.
   *
   * `x-rep-hints: [extracted_text]`.
   */
  'x-rep-hints'?: string;
}

export interface FileUpdateParams {
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
   * Body param: An array of collections to make this file a member of. Currently we
   * only support the `favorites` collection.
   *
   * To get the ID for a collection, use the [List all collections][1] endpoint.
   *
   * Passing an empty array `[]` or `null` will remove the file from all collections.
   *
   * [1]: e://get-collections
   */
  collections?: Array<FileUpdateParams.Collection> | null;

  /**
   * Body param: The description for a file. This can be seen in the right-hand
   * sidebar panel when viewing a file in the Box web app. Additionally, this index
   * is used in the search index of the file, allowing users to find the file by the
   * content in the description.
   */
  description?: string;

  /**
   * Body param: The retention expiration timestamp for the given file. This date
   * cannot be shortened once set on a file.
   */
  disposition_at?: string;

  /**
   * Body param: Defines a lock on an item. This prevents the item from being moved,
   * renamed, or otherwise changed by anyone other than the user who created the
   * lock.
   *
   * Set this to `null` to remove the lock.
   */
  lock?: FileUpdateParams.Lock | null;

  /**
   * Body param: An optional different name for the file. This can be used to rename
   * the file.
   *
   * File names must be unique within their parent folder. The name check is
   * case-insensitive, so a file named `New File` cannot be created in a parent
   * folder that already contains a folder named `new file`.
   */
  name?: string;

  /**
   * Body param: The parent for this item.
   */
  parent?: FileUpdateParams.Parent;

  /**
   * Body param: Defines who can download a file.
   */
  permissions?: FileUpdateParams.Permissions;

  /**
   * Body param: Defines a shared link for an item. Set this to `null` to remove the
   * shared link.
   */
  shared_link?: FileUpdateParams.SharedLink | null;

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

export namespace FileUpdateParams {
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
   * Defines a lock on an item. This prevents the item from being moved, renamed, or
   * otherwise changed by anyone other than the user who created the lock.
   *
   * Set this to `null` to remove the lock.
   */
  export interface Lock {
    /**
     * The type of this object.
     */
    access?: 'lock';

    /**
     * Defines the time at which the lock expires.
     */
    expires_at?: string;

    /**
     * Defines if the file can be downloaded while it is locked.
     */
    is_download_prevented?: boolean;
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
   * Defines who can download a file.
   */
  export interface Permissions {
    /**
     * Defines who is allowed to download this file. The possible values are either
     * `open` for everyone or `company` for the other members of the user's enterprise.
     *
     * This setting overrides the download permissions that are normally part of the
     * `role` of a collaboration. When set to `company`, this essentially removes the
     * download option for external users with `viewer` or `editor` a roles.
     */
    can_download?: 'open' | 'company';
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

export interface FileDeleteParams {
  /**
   * Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export interface FileCopyParams {
  /**
   * Body param: The destination folder to copy the file to.
   */
  parent: FileCopyParams.Parent;

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
   * Body param: An optional new name for the copied file.
   *
   * There are some restrictions to the file name. Names containing non-printable
   * ASCII characters, forward and backward slashes (`/`, `\`), and protected names
   * like `.` and `..` are automatically sanitized by removing the non-allowed
   * characters.
   */
  name?: string;

  /**
   * Body param: An optional ID of the specific file version to copy.
   */
  version?: string;
}

export namespace FileCopyParams {
  /**
   * The destination folder to copy the file to.
   */
  export interface Parent {
    /**
     * The ID of folder to copy the file to.
     */
    id: string;
  }
}

export interface FileGetThumbnailParams {
  /**
   * Path param: The unique identifier that represents a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  file_id: string;

  /**
   * Query param: The maximum height of the thumbnail.
   */
  max_height?: number;

  /**
   * Query param: The maximum width of the thumbnail.
   */
  max_width?: number;

  /**
   * Query param: The minimum height of the thumbnail.
   */
  min_height?: number;

  /**
   * Query param: The minimum width of the thumbnail.
   */
  min_width?: number;
}

export interface FileListAppItemAssociationsParams {
  /**
   * If given, only return app items for this application type.
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

export interface FileListCollaborationsParams {
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

export interface FileListCommentsParams {
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
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;
}

export interface FileRestoreParams {
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
   * Body param: An optional new name for the file.
   */
  name?: string;

  /**
   * Body param: The parent for this item.
   */
  parent?: FileRestoreParams.Parent;
}

export namespace FileRestoreParams {
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

Files.Content = ContentAPIContent;
Files.UploadSessions = UploadSessions;
Files.Trash = Trash;
Files.Versions = Versions;
Files.WatermarkResource = WatermarkResource;

export declare namespace Files {
  export {
    type AppItemAssociations as AppItemAssociations,
    type Collaborations as Collaborations,
    type File as File,
    type FileFull as FileFull,
    type FileVersionMini as FileVersionMini,
    type FolderBase as FolderBase,
    type FolderMini as FolderMini,
    type FileListCommentsResponse as FileListCommentsResponse,
    type FileListTasksResponse as FileListTasksResponse,
    type FileRestoreResponse as FileRestoreResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileCopyParams as FileCopyParams,
    type FileGetThumbnailParams as FileGetThumbnailParams,
    type FileListAppItemAssociationsParams as FileListAppItemAssociationsParams,
    type FileListCollaborationsParams as FileListCollaborationsParams,
    type FileListCommentsParams as FileListCommentsParams,
    type FileRestoreParams as FileRestoreParams,
  };

  export {
    ContentAPIContent as Content,
    type ContentAPIFiles as Files,
    type ContentDownloadParams as ContentDownloadParams,
    type ContentUploadParams as ContentUploadParams,
    type ContentUploadVersionParams as ContentUploadVersionParams,
  };

  export {
    UploadSessions as UploadSessions,
    type UploadPart as UploadPart,
    type UploadSession as UploadSession,
    type UploadSessionListPartsResponse as UploadSessionListPartsResponse,
    type UploadSessionUploadPartResponse as UploadSessionUploadPartResponse,
    type UploadSessionCreateParams as UploadSessionCreateParams,
    type UploadSessionCommitParams as UploadSessionCommitParams,
    type UploadSessionCreateForExistingFileParams as UploadSessionCreateForExistingFileParams,
    type UploadSessionListPartsParams as UploadSessionListPartsParams,
    type UploadSessionUploadPartParams as UploadSessionUploadPartParams,
  };

  export {
    Trash as Trash,
    type TrashRetrieveResponse as TrashRetrieveResponse,
    type TrashRetrieveParams as TrashRetrieveParams,
  };

  export {
    Versions as Versions,
    type FileVersion as FileVersion,
    type FileVersionFull as FileVersionFull,
    type VersionListResponse as VersionListResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionPromoteParams as VersionPromoteParams,
    type VersionRestoreParams as VersionRestoreParams,
  };

  export {
    type Metadata as Metadata,
    type MetadataFull as MetadataFull,
    type MetadataInstanceValue as MetadataInstanceValue,
    type Metadatas as Metadatas,
    type MetadataCreateParams as MetadataCreateParams,
    type MetadataRetrieveParams as MetadataRetrieveParams,
    type MetadataUpdateParams as MetadataUpdateParams,
    type MetadataDeleteParams as MetadataDeleteParams,
  };

  export {
    WatermarkResource as WatermarkResource,
    type Watermark as Watermark,
    type WatermarkApplyParams as WatermarkApplyParams,
  };
}

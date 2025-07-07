// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Content extends APIResource {
  /**
   * Returns the contents of a file in binary format.
   *
   * @example
   * ```ts
   * const response = await client.files.content.download(
   *   '12345',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    fileID: string,
    params: ContentDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { boxapi, range, ...query } = params ?? {};
    return this._client.get(path`/files/${fileID}/content`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(boxapi != null ? { boxapi: boxapi } : undefined),
          ...(range != null ? { range: range } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a small file to Box. For file sizes over 50MB we recommend using the
   * Chunk Upload APIs.
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * @example
   * ```ts
   * const files = await client.files.content.upload({
   *   attributes: {
   *     name: 'Photo.png',
   *     parent: { id: '124132' },
   *   },
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(params: ContentUploadParams, options?: RequestOptions): APIPromise<Files> {
    const { fields, 'content-md5': contentMd5, ...body } = params;
    return this._client.post(
      '/files/content',
      multipartFormRequestOptions(
        {
          query: { fields },
          body,
          defaultBaseURL: 'https://upload.box.com/api/2.0',
          ...options,
          headers: buildHeaders([
            { ...(contentMd5 != null ? { 'content-md5': contentMd5 } : undefined) },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }

  /**
   * Update a file's content. For file sizes over 50MB we recommend using the Chunk
   * Upload APIs.
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * @example
   * ```ts
   * const files = await client.files.content.uploadVersion(
   *   '12345',
   *   {
   *     attributes: { name: 'Photo 2.0.png' },
   *     file: fs.createReadStream('path/to/file'),
   *   },
   * );
   * ```
   */
  uploadVersion(
    fileID: string,
    params: ContentUploadVersionParams,
    options?: RequestOptions,
  ): APIPromise<Files> {
    const { fields, 'content-md5': contentMd5, 'if-match': ifMatch, ...body } = params;
    return this._client.post(
      path`/files/${fileID}/content`,
      multipartFormRequestOptions(
        {
          query: { fields },
          body,
          defaultBaseURL: 'https://upload.box.com/api/2.0',
          ...options,
          headers: buildHeaders([
            {
              ...(contentMd5 != null ? { 'content-md5': contentMd5 } : undefined),
              ...(ifMatch != null ? { 'if-match': ifMatch } : undefined),
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}

/**
 * A list of files.
 */
export interface Files {
  /**
   * A list of files.
   */
  entries?: Array<FilesAPI.FileFull>;

  /**
   * The number of files.
   */
  total_count?: number;
}

export interface ContentDownloadParams {
  /**
   * Query param: An optional access token that can be used to pre-authenticate this
   * request, which means that a download link can be shared with a browser or a
   * third party service without them needing to know how to handle the
   * authentication. When using this parameter, please make sure that the access
   * token is sufficiently scoped down to only allow read access to that file and no
   * other files or folders.
   */
  access_token?: string;

  /**
   * Query param: The file version to download.
   */
  version?: string;

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
   * Header param: The byte range of the content to download.
   *
   * The format `bytes={start_byte}-{end_byte}` can be used to specify what section
   * of the file to download.
   */
  range?: string;
}

export interface ContentUploadParams {
  /**
   * Body param: The additional attributes of the file being uploaded. Mainly the
   * name and the parent folder. These attributes are part of the multi part request
   * body and are in JSON format.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  attributes: ContentUploadParams.Attributes;

  /**
   * Body param: The content of the file to upload to Box.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  file: Uploadable;

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
   * Header param: An optional header containing the SHA1 hash of the file to ensure
   * that the file was not corrupted in transit.
   */
  'content-md5'?: string;
}

export namespace ContentUploadParams {
  /**
   * The additional attributes of the file being uploaded. Mainly the name and the
   * parent folder. These attributes are part of the multi part request body and are
   * in JSON format.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  export interface Attributes {
    /**
     * The name of the file.
     *
     * File names must be unique within their parent folder. The name check is
     * case-insensitive, so a file named `New File` cannot be created in a parent
     * folder that already contains a folder named `new file`.
     */
    name: string;

    /**
     * The parent folder to upload the file to.
     */
    parent: Attributes.Parent;

    /**
     * Defines the time the file was originally created at.
     *
     * If not set, the upload time will be used.
     */
    content_created_at?: string;

    /**
     * Defines the time the file was last modified at.
     *
     * If not set, the upload time will be used.
     */
    content_modified_at?: string;
  }

  export namespace Attributes {
    /**
     * The parent folder to upload the file to.
     */
    export interface Parent {
      /**
       * The id of the parent folder. Use `0` for the user's root folder.
       */
      id: string;
    }
  }
}

export interface ContentUploadVersionParams {
  /**
   * Body param: The additional attributes of the file being uploaded. Mainly the
   * name and the parent folder. These attributes are part of the multi part request
   * body and are in JSON format.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  attributes: ContentUploadVersionParams.Attributes;

  /**
   * Body param: The content of the file to upload to Box.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  file: Uploadable;

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
   * Header param: An optional header containing the SHA1 hash of the file to ensure
   * that the file was not corrupted in transit.
   */
  'content-md5'?: string;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;
}

export namespace ContentUploadVersionParams {
  /**
   * The additional attributes of the file being uploaded. Mainly the name and the
   * parent folder. These attributes are part of the multi part request body and are
   * in JSON format.
   *
   * <Message warning>
   *
   * The `attributes` part of the body must come **before** the `file` part. Requests
   * that do not follow this format when uploading the file will receive a HTTP `400`
   * error with a `metadata_after_file_contents` error code.
   *
   * </Message>
   */
  export interface Attributes {
    /**
     * An optional new name for the file. If specified, the file will be renamed when
     * the new version is uploaded.
     */
    name: string;

    /**
     * Defines the time the file was last modified at.
     *
     * If not set, the upload time will be used.
     */
    content_modified_at?: string;
  }
}

export declare namespace Content {
  export {
    type Files as Files,
    type ContentDownloadParams as ContentDownloadParams,
    type ContentUploadParams as ContentUploadParams,
    type ContentUploadVersionParams as ContentUploadVersionParams,
  };
}

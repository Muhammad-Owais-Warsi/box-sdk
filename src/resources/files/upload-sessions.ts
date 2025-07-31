// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContentAPI from './content';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UploadSessions extends APIResource {
  /**
   * Creates an upload session for a new file.
   *
   * @example
   * ```ts
   * const uploadSession =
   *   await client.files.uploadSessions.create({
   *     file_name: 'Project.mov',
   *     file_size: 104857600,
   *     folder_id: '0',
   *   });
   * ```
   */
  create(body: UploadSessionCreateParams, options?: RequestOptions): APIPromise<UploadSession> {
    return this._client.post('/files/upload_sessions', {
      body,
      defaultBaseURL: 'https://upload.box.com/api/2.0',
      ...options,
    });
  }

  /**
   * Close an upload session and create a file from the uploaded chunks.
   *
   * The actual endpoint URL is returned by the
   * [`Create upload session`](e://post-files-upload-sessions) and
   * [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
   *
   * @example
   * ```ts
   * const files = await client.files.uploadSessions.commit(
   *   'D5E3F7A',
   *   {
   *     parts: [{}],
   *     digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
   *   },
   * );
   * ```
   */
  commit(
    uploadSessionID: string,
    params: UploadSessionCommitParams,
    options?: RequestOptions,
  ): APIPromise<ContentAPI.Files> {
    const { digest, 'if-match': ifMatch, 'if-none-match': ifNoneMatch, ...body } = params;
    return this._client.post(path`/files/upload_sessions/${uploadSessionID}/commit`, {
      body,
      defaultBaseURL: 'https://{box-upload-server}/api/2.0',
      ...options,
      headers: buildHeaders([
        {
          digest: digest,
          ...(ifMatch != null ? { 'if-match': ifMatch } : undefined),
          ...(ifNoneMatch != null ? { 'if-none-match': ifNoneMatch } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates an upload session for an existing file.
   *
   * @example
   * ```ts
   * const uploadSession =
   *   await client.files.uploadSessions.createForExistingFile(
   *     '12345',
   *     { file_size: 104857600 },
   *   );
   * ```
   */
  createForExistingFile(
    fileID: string,
    body: UploadSessionCreateForExistingFileParams,
    options?: RequestOptions,
  ): APIPromise<UploadSession> {
    return this._client.post(path`/files/${fileID}/upload_sessions`, {
      body,
      defaultBaseURL: 'https://upload.box.com/api/2.0',
      ...options,
    });
  }

  /**
   * Return information about an upload session.
   *
   * The actual endpoint URL is returned by the
   * [`Create upload session`](e://post-files-upload-sessions) endpoint.
   *
   * @example
   * ```ts
   * const uploadSession = await client.files.uploadSessions.get(
   *   'D5E3F7A',
   * );
   * ```
   */
  get(uploadSessionID: string, options?: RequestOptions): APIPromise<UploadSession> {
    return this._client.get(path`/files/upload_sessions/${uploadSessionID}`, {
      defaultBaseURL: 'https://{box-upload-server}/api/2.0',
      ...options,
    });
  }

  /**
   * Return a list of the chunks uploaded to the upload session so far.
   *
   * The actual endpoint URL is returned by the
   * [`Create upload session`](e://post-files-upload-sessions) and
   * [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
   *
   * @example
   * ```ts
   * const response =
   *   await client.files.uploadSessions.listParts('D5E3F7A');
   * ```
   */
  listParts(
    uploadSessionID: string,
    query: UploadSessionListPartsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UploadSessionListPartsResponse> {
    return this._client.get(path`/files/upload_sessions/${uploadSessionID}/parts`, {
      query,
      defaultBaseURL: 'https://{box-upload-server}/api/2.0',
      ...options,
    });
  }

  /**
   * Abort an upload session and discard all data uploaded.
   *
   * This cannot be reversed.
   *
   * The actual endpoint URL is returned by the
   * [`Create upload session`](e://post-files-upload-sessions) and
   * [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
   *
   * @example
   * ```ts
   * await client.files.uploadSessions.remove('D5E3F7A');
   * ```
   */
  remove(uploadSessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/upload_sessions/${uploadSessionID}`, {
      defaultBaseURL: 'https://{box-upload-server}/api/2.0',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads a chunk of a file for an upload session.
   *
   * The actual endpoint URL is returned by the
   * [`Create upload session`](e://post-files-upload-sessions) and
   * [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
   *
   * @example
   * ```ts
   * const response =
   *   await client.files.uploadSessions.uploadPart(
   *     'D5E3F7A',
   *     fs.createReadStream('path/to/file'),
   *     {
   *       'content-range': 'bytes 8388608-16777215/445856194',
   *       digest: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
   *     },
   *   );
   * ```
   */
  uploadPart(
    uploadSessionID: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: UploadSessionUploadPartParams,
    options?: RequestOptions,
  ): APIPromise<UploadSessionUploadPartResponse> {
    const { 'content-range': contentRange, digest } = params;
    return this._client.put(path`/files/upload_sessions/${uploadSessionID}`, {
      body: body,
      defaultBaseURL: 'https://{box-upload-server}/api/2.0',
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', 'content-range': contentRange, digest: digest },
        options?.headers,
      ]),
    });
  }
}

export interface UploadPart {
  /**
   * The offset of the chunk within the file in bytes. The lower bound of the
   * position of the chunk within the file.
   */
  offset?: number;

  /**
   * The unique ID of the chunk.
   */
  part_id?: string;

  /**
   * The SHA1 hash of the chunk.
   */
  sha1?: string;

  /**
   * The size of the chunk in bytes.
   */
  size?: number;
}

/**
 * An upload session for chunk uploading a file.
 */
export interface UploadSession {
  /**
   * The unique identifier for this session.
   */
  id?: string;

  /**
   * The number of parts that have been uploaded and processed by the server. This
   * starts at `0`.
   *
   * When committing a file files, inspecting this property can provide insight if
   * all parts have been uploaded correctly.
   */
  num_parts_processed?: number;

  /**
   * The size in bytes that must be used for all parts of of the upload.
   *
   * Only the last part is allowed to be of a smaller size.
   */
  part_size?: number;

  /**
   * A list of endpoints for a chunked upload session.
   */
  session_endpoints?: UploadSession.SessionEndpoints;

  /**
   * The date and time when this session expires.
   */
  session_expires_at?: string;

  /**
   * The total number of parts expected in this upload session, as determined by the
   * file size and part size.
   */
  total_parts?: number;

  /**
   * The value will always be `upload_session`.
   */
  type?: 'upload_session';
}

export namespace UploadSession {
  /**
   * A list of endpoints for a chunked upload session.
   */
  export interface SessionEndpoints {
    /**
     * The URL for used to abort the session.
     */
    abort?: string;

    /**
     * The URL used to commit the file.
     */
    commit?: string;

    /**
     * The URL users to list all parts.
     */
    list_parts?: string;

    /**
     * The URL used to get the upload log from.
     */
    log_event?: string;

    /**
     * The URL used to get the status of the upload.
     */
    status?: string;

    /**
     * The URL to upload parts to.
     */
    upload_part?: string;
  }
}

export interface UploadSessionListPartsResponse {
  /**
   * A list of uploaded chunks for an upload session.
   */
  entries?: Array<UploadPart>;

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
  order?: Array<UploadSessionListPartsResponse.Order>;

  /**
   * One greater than the offset of the last entry in the entire collection. The
   * total number of entries in the collection may be less than `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination. For
   * marker-based paginated APIs, this field will be omitted.
   */
  total_count?: number;
}

export namespace UploadSessionListPartsResponse {
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
 * A chunk of a file uploaded as part of an upload session, as returned by some
 * endpoints.
 */
export interface UploadSessionUploadPartResponse {
  /**
   * The representation of an upload session chunk.
   */
  part?: UploadPart;
}

export interface UploadSessionCreateParams {
  /**
   * The name of new file.
   */
  file_name: string;

  /**
   * The total number of bytes of the file to be uploaded.
   */
  file_size: number;

  /**
   * The ID of the folder to upload the new file to.
   */
  folder_id: string;
}

export interface UploadSessionCommitParams {
  /**
   * Body param: The list details for the uploaded parts.
   */
  parts: Array<UploadPart>;

  /**
   * Header param: The [RFC3230][1] message digest of the whole file.
   *
   * Only SHA1 is supported. The SHA1 digest must be Base64 encoded. The format of
   * this header is as `sha=BASE64_ENCODED_DIGEST`.
   *
   * [1]: https://tools.ietf.org/html/rfc3230
   */
  digest: string;

  /**
   * Header param: Ensures this item hasn't recently changed before making changes.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `412 Precondition Failed` if it has changed since.
   */
  'if-match'?: string;

  /**
   * Header param: Ensures an item is only returned if it has changed.
   *
   * Pass in the item's last observed `etag` value into this header and the endpoint
   * will fail with a `304 Not Modified` if the item has not changed since.
   */
  'if-none-match'?: string;
}

export interface UploadSessionCreateForExistingFileParams {
  /**
   * The total number of bytes of the file to be uploaded.
   */
  file_size: number;

  /**
   * The optional new name of new file.
   */
  file_name?: string;
}

export interface UploadSessionListPartsParams {
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

export interface UploadSessionUploadPartParams {
  /**
   * Header param: The byte range of the chunk.
   *
   * Must not overlap with the range of a part already uploaded this session. Each
   * part’s size must be exactly equal in size to the part size specified in the
   * upload session that you created. One exception is the last part of the file, as
   * this can be smaller.
   *
   * When providing the value for `content-range`, remember that:
   *
   * - The lower bound of each part's byte range must be a multiple of the part size.
   * - The higher bound must be a multiple of the part size - 1.
   */
  'content-range': string;

  /**
   * Header param: The [RFC3230][1] message digest of the chunk uploaded.
   *
   * Only SHA1 is supported. The SHA1 digest must be base64 encoded. The format of
   * this header is as `sha=BASE64_ENCODED_DIGEST`.
   *
   * To get the value for the `SHA` digest, use the openSSL command to encode the
   * file part: `openssl sha1 -binary <FILE_PART_NAME> | base64`.
   *
   * [1]: https://tools.ietf.org/html/rfc3230
   */
  digest: string;
}

export declare namespace UploadSessions {
  export {
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
}

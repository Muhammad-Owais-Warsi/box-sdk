// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ZipDownloads extends APIResource {
  /**
   * Creates a request to download multiple files and folders as a single `zip`
   * archive file. This API does not return the archive but instead performs all the
   * checks to ensure that the user has access to all the items, and then returns a
   * `download_url` and a `status_url` that can be used to download the archive.
   *
   * The limit for an archive is either the Account's upload limit or 10,000 files,
   * whichever is met first.
   *
   * **Note**: Downloading a large file can be affected by various factors such as
   * distance, network latency, bandwidth, and congestion, as well as packet loss
   * ratio and current server load. For these reasons we recommend that a maximum ZIP
   * archive total size does not exceed 25GB.
   *
   * @example
   * ```ts
   * const zipDownload = await client.zipDownloads.create({
   *   items: [{ id: '12345', type: 'file' }],
   * });
   * ```
   */
  create(body: ZipDownloadCreateParams, options?: RequestOptions): APIPromise<ZipDownloadCreateResponse> {
    return this._client.post('/zip_downloads', { body, ...options });
  }

  /**
   * Returns the contents of a `zip` archive in binary format. This URL does not
   * require any form of authentication and could be used in a user's browser to
   * download the archive to a user's device.
   *
   * By default, this URL is only valid for a few seconds from the creation of the
   * request for this archive. Once a download has started it can not be stopped and
   * resumed, instead a new request for a zip archive would need to be created.
   *
   * The URL of this endpoint should not be considered as fixed. Instead, use the
   * [Create zip download](e://post_zip_downloads) API to request to create a `zip`
   * archive, and then follow the `download_url` field in the response to this
   * endpoint.
   *
   * @example
   * ```ts
   * const response = await client.zipDownloads.download(
   *   'Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(zipDownloadID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/zip_downloads/${zipDownloadID}/content`, {
      defaultBaseURL: 'https://dl.boxcloud.com/2.0',
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns the download status of a `zip` archive, allowing an application to
   * inspect the progress of the download as well as the number of items that might
   * have been skipped.
   *
   * This endpoint can only be accessed once the download has started. Subsequently
   * this endpoint is valid for 12 hours from the start of the download.
   *
   * The URL of this endpoint should not be considered as fixed. Instead, use the
   * [Create zip download](e://post_zip_downloads) API to request to create a `zip`
   * archive, and then follow the `status_url` field in the response to this
   * endpoint.
   *
   * @example
   * ```ts
   * const response = await client.zipDownloads.status(
   *   'Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd',
   * );
   * ```
   */
  status(zipDownloadID: string, options?: RequestOptions): APIPromise<ZipDownloadStatusResponse> {
    return this._client.get(path`/zip_downloads/${zipDownloadID}/status`, options);
  }
}

/**
 * Represents a successful request to create a `zip` archive of a list of files and
 * folders.
 */
export interface ZipDownloadCreateResponse {
  /**
   * The URL that can be used to download the `zip` archive. A `Get` request to this
   * URL will start streaming the items requested. By default, this URL is only valid
   * for a few seconds, until the `expires_at` time, unless a download is started
   * after which it is valid for the duration of the download.
   *
   * It is important to note that the domain and path of this URL might change
   * between API calls, and therefore it's important to use this URL as-is.
   */
  download_url?: string;

  /**
   * The time and date when this archive will expire. After this time the
   * `status_url` and `download_url` will return an error.
   *
   * By default, these URLs are only valid for a few seconds, unless a download is
   * started after which the `download_url` is valid for the duration of the
   * download, and the `status_url` is valid for 12 hours from the start of the
   * download.
   */
  expires_at?: string;

  /**
   * A list of conflicts that occurred when trying to create the archive. This would
   * occur when multiple items have been requested with the same name.
   *
   * To solve these conflicts, the API will automatically rename an item and return a
   * mapping between the original item's name and its new name.
   *
   * For every conflict, both files will be renamed and therefore this list will
   * always be a multiple of 2.
   */
  name_conflicts?: Array<Array<ZipDownloadCreateResponse.NameConflict>>;

  /**
   * The URL that can be used to get the status of the `zip` archive being
   * downloaded. A `Get` request to this URL will return the number of files in the
   * archive as well as the number of items already downloaded or skipped. By
   * default, this URL is only valid for a few seconds, until the `expires_at` time,
   * unless a download is started after which the URL is valid for 12 hours from the
   * start of the download.
   *
   * It is important to note that the domain and path of this URL might change
   * between API calls, and therefore it's important to use this URL as-is.
   */
  status_url?: string;
}

export namespace ZipDownloadCreateResponse {
  /**
   * A file or folder for which a conflict was encountered, This object provides the
   * type and identifier of the original item, as well as a mapping between its
   * original name and it's new name as it will appear in the archive.
   */
  export interface NameConflict {
    /**
     * The identifier of the item.
     */
    id?: string;

    /**
     * The new name of this item as it will appear in the downloaded `zip` archive.
     */
    download_name?: string;

    /**
     * Box Developer Documentation.
     */
    original_name?: string;

    /**
     * The type of this item.
     */
    type?: 'file' | 'folder';
  }
}

/**
 * The status of a `zip` archive being downloaded.
 */
export interface ZipDownloadStatusResponse {
  /**
   * The number of files that have already been downloaded.
   */
  downloaded_file_count?: number;

  /**
   * The number of files that have been skipped as they could not be downloaded. In
   * many cases this is due to permission issues that have surfaced between the
   * creation of the request for the archive and the archive being downloaded.
   */
  skipped_file_count?: number;

  /**
   * The number of folders that have been skipped as they could not be downloaded. In
   * many cases this is due to permission issues that have surfaced between the
   * creation of the request for the archive and the archive being downloaded.
   */
  skipped_folder_count?: number;

  /**
   * The state of the archive being downloaded.
   */
  state?: 'in_progress' | 'failed' | 'succeeded';

  /**
   * The total number of files in the archive.
   */
  total_file_count?: number;
}

export interface ZipDownloadCreateParams {
  /**
   * A list of items to add to the `zip` archive. These can be folders or files.
   */
  items: Array<ZipDownloadCreateParams.Item>;

  /**
   * The optional name of the `zip` archive. This name will be appended by the `.zip`
   * file extension, for example `January Financials.zip`.
   */
  download_file_name?: string;
}

export namespace ZipDownloadCreateParams {
  /**
   * An item to add to the `zip` archive. This can be a file or a folder.
   */
  export interface Item {
    /**
     * The identifier of the item to add to the archive. When this item is a folder
     * then this can not be the root folder with ID `0`.
     */
    id: string;

    /**
     * The type of the item to add to the archive.
     */
    type: 'file' | 'folder';
  }
}

export declare namespace ZipDownloads {
  export {
    type ZipDownloadCreateResponse as ZipDownloadCreateResponse,
    type ZipDownloadStatusResponse as ZipDownloadStatusResponse,
    type ZipDownloadCreateParams as ZipDownloadCreateParams,
  };
}

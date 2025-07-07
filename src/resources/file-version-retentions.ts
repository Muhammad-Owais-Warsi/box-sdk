// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FileVersionRetentions extends APIResource {
  /**
   * Returns information about a file version retention.
   *
   * **Note**: File retention API is now **deprecated**. To get information about
   * files and file versions under retention, see
   * [files under retention](e://get-retention-policy-assignments-id-files-under-retention)
   * or
   * [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention)
   * endpoints.
   *
   * @example
   * ```ts
   * const fileVersionRetention =
   *   await client.fileVersionRetentions.retrieve('3424234');
   * ```
   */
  retrieve(fileVersionRetentionID: string, options?: RequestOptions): APIPromise<FileVersionRetention> {
    return this._client.get(path`/file_version_retentions/${fileVersionRetentionID}`, options);
  }

  /**
   * Retrieves all file version retentions for the given enterprise.
   *
   * **Note**: File retention API is now **deprecated**. To get information about
   * files and file versions under retention, see
   * [files under retention](e://get-retention-policy-assignments-id-files-under-retention)
   * or
   * [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention)
   * endpoints.
   *
   * @example
   * ```ts
   * const fileVersionRetentions =
   *   await client.fileVersionRetentions.list();
   * ```
   */
  list(
    query: FileVersionRetentionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileVersionRetentionListResponse> {
    return this._client.get('/file_version_retentions', { query, ...options });
  }
}

/**
 * A retention policy blocks permanent deletion of content for a specified amount
 * of time. Admins can apply policies to specified folders, or an entire
 * enterprise. A file version retention is a record for a retained file version. To
 * use this feature, you must have the manage retention policies scope enabled for
 * your API key in your application management console.
 *
 * **Note**: File retention API is now **deprecated**. To get information about
 * files and file versions under retention, see
 * [files under retention](e://get-retention-policy-assignments-id-files-under-retention)
 * or
 * [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention)
 * endpoints.
 */
export interface FileVersionRetention {
  /**
   * The unique identifier for this file version retention.
   */
  id?: string;

  /**
   * When this file version retention object was created.
   */
  applied_at?: string;

  /**
   * When the retention expires on this file version retention.
   */
  disposition_at?: string;

  /**
   * A mini representation of a file, used when nested under another resource.
   */
  file?: TasksAPI.FileMini | null;

  /**
   * A mini representation of a file version, used when nested within another
   * resource.
   */
  file_version?: FilesAPI.FileVersionMini;

  /**
   * The value will always be `file_version_retention`.
   */
  type?: 'file_version_retention';

  /**
   * A mini representation of a retention policy, used when nested within another
   * resource.
   */
  winning_retention_policy?: RetentionPoliciesAPI.RetentionPolicyMini;
}

export interface FileVersionRetentionListResponse {
  /**
   * A list of file version retentions.
   */
  entries?: Array<FileVersionRetention>;

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

export interface FileVersionRetentionListParams {
  /**
   * Filters results by the retention policy with this disposition action.
   */
  disposition_action?: 'permanently_delete' | 'remove_retention';

  /**
   * Filters results by files that will have their disposition come into effect after
   * this date.
   */
  disposition_after?: string;

  /**
   * Filters results by files that will have their disposition come into effect
   * before this date.
   */
  disposition_before?: string;

  /**
   * Filters results by files with this ID.
   */
  file_id?: string;

  /**
   * Filters results by file versions with this ID.
   */
  file_version_id?: string;

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

  /**
   * Filters results by the retention policy with this ID.
   */
  policy_id?: string;
}

export declare namespace FileVersionRetentions {
  export {
    type FileVersionRetention as FileVersionRetention,
    type FileVersionRetentionListResponse as FileVersionRetentionListResponse,
    type FileVersionRetentionListParams as FileVersionRetentionListParams,
  };
}

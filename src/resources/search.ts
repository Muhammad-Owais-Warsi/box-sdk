// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files/files';
import * as FoldersAPI from './folders/folders';
import * as WebLinksAPI from './web-links/web-links';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Searches for files, folders, web links, and shared files across the users
   * content or across the entire enterprise.
   */
  perform(
    query: SearchPerformParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchPerformResponse> {
    return this._client.get('/search', { query, ...options });
  }
}

export type SearchPerformResponse = SearchPerformResponse.UnionMember0 | SearchPerformResponse.UnionMember1;

export namespace SearchPerformResponse {
  export interface UnionMember0 {
    /**
     * The search results for the query provided.
     */
    entries?: Array<FilesAPI.FileFull | FoldersAPI.FolderFull | WebLinksAPI.WebLink>;

    /**
     * The limit that was used for this search. This will be the same as the `limit`
     * query parameter unless that value exceeded the maximum value allowed.
     */
    limit?: number;

    /**
     * The 0-based offset of the first entry in this set. This will be the same as the
     * `offset` query parameter used.
     */
    offset?: number;

    /**
     * One greater than the offset of the last entry in the search results. The total
     * number of entries in the collection may be less than `total_count`.
     */
    total_count?: number;

    /**
     * Specifies the response as search result items without shared links.
     */
    type?: 'search_results_items';
  }

  export interface UnionMember1 {
    /**
     * The search results for the query provided, including the additional information
     * about any shared links through which the item has been shared with the user.
     */
    entries?: Array<UnionMember1.Entry>;

    /**
     * The limit that was used for this search. This will be the same as the `limit`
     * query parameter unless that value exceeded the maximum value allowed.
     */
    limit?: number;

    /**
     * The 0-based offset of the first entry in this set. This will be the same as the
     * `offset` query parameter used.
     */
    offset?: number;

    /**
     * One greater than the offset of the last entry in the search results. The total
     * number of entries in the collection may be less than `total_count`.
     */
    total_count?: number;

    /**
     * Specifies the response as search result items with shared links.
     */
    type?: 'search_results_with_shared_links';
  }

  export namespace UnionMember1 {
    /**
     * A single of files, folder or web link that matched the search query, including
     * the additional information about the shared link through which the item has been
     * shared with the user.
     *
     * This response format is only returned when the `include_recent_shared_links`
     * query parameter has been set to `true`.
     */
    export interface Entry {
      /**
       * The optional shared link through which the user has access to this item. This
       * value is only returned for items for which the user has recently accessed the
       * file through a shared link. For all other items this value will return `null`.
       */
      accessible_via_shared_link?: string;

      /**
       * The file, folder or web link that matched the search query.
       */
      item?: FilesAPI.FileFull | FoldersAPI.FolderFull | WebLinksAPI.WebLink;

      /**
       * The result type. The value is always `search_result`.
       */
      type?: string;
    }
  }
}

export interface SearchPerformParams {
  /**
   * Limits the search results to items within the given list of folders, defined as
   * a comma separated lists of folder IDs.
   *
   * Search results will also include items within any subfolders of those ancestor
   * folders.
   *
   * The folders still need to be owned or shared with the currently authenticated
   * user. If the folder is not accessible by this user, or it does not exist, a
   * `HTTP 404` error code will be returned instead.
   *
   * To search across an entire enterprise, we recommend using the
   * `enterprise_content` scope parameter which can be requested with our support
   * team.
   */
  ancestor_folder_ids?: Array<string>;

  /**
   * Limits the search results to any items that match the search query for a
   * specific part of the file, for example the file description.
   *
   * Content types are defined as a comma separated lists of Box recognized content
   * types. The allowed content types are as follows.
   *
   * - `name` - The name of the item, as defined by its `name` field.
   * - `description` - The description of the item, as defined by its `description`
   *   field.
   * - `file_content` - The actual content of the file.
   * - `comments` - The content of any of the comments on a file or folder.
   * - `tags` - Any tags that are applied to an item, as defined by its `tags` field.
   */
  content_types?: Array<'name' | 'description' | 'file_content' | 'comments' | 'tag'>;

  /**
   * Limits the search results to any items created within a given date range.
   *
   * Date ranges are defined as comma separated RFC3339 timestamps.
   *
   * If the the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything created
   * before the end date will be returned.
   *
   * If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will
   * be used as the end date instead.
   */
  created_at_range?: Array<string>;

  /**
   * Limits the search results to any items deleted within a given date range.
   *
   * Date ranges are defined as comma separated RFC3339 timestamps.
   *
   * If the the start date is omitted (`2014-05-17T13:35:01-07:00`), anything deleted
   * before the end date will be returned.
   *
   * If the end date is omitted (`2014-05-15T13:35:01-07:00`), the current date will
   * be used as the end date instead.
   *
   * The `trash_content` parameter needs to be set to `trashed_only`.
   *
   * If searching in trash is not performed, then an empty result is returned.
   *
   * Data available from 2023-02-01 onwards.
   */
  deleted_at_range?: Array<string>;

  /**
   * Limits the search results to items that were deleted by the given list of users,
   * defined as a list of comma separated user IDs.
   *
   * The `trash_content` parameter needs to be set to `trashed_only`.
   *
   * If searching in trash is not performed, an empty result set is returned. The
   * items need to be owned or shared with the currently authenticated user for them
   * to show up in the search results.
   *
   * If the user does not have access to any files owned by any of the users, an
   * empty result set is returned.
   *
   * Data available from 2023-02-01 onwards.
   */
  deleted_user_ids?: Array<string>;

  /**
   * Defines the direction in which search results are ordered. This API defaults to
   * returning items in descending (`DESC`) order unless this parameter is explicitly
   * specified.
   *
   * When results are sorted by `relevance` the ordering is locked to returning items
   * in descending order of relevance, and this parameter is ignored.
   */
  direction?: 'DESC' | 'ASC';

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
   * Limits the search results to any files that match any of the provided file
   * extensions. This list is a comma-separated list of file extensions without the
   * dots.
   */
  file_extensions?: Array<string>;

  /**
   * Defines whether the search results should include any items that the user
   * recently accessed through a shared link.
   *
   * When this parameter has been set to true, the format of the response of this API
   * changes to return a list of
   * [Search Results with Shared Links](r://search_results_with_shared_links).
   */
  include_recent_shared_links?: boolean;

  /**
   * Defines the maximum number of items to return as part of a page of results.
   */
  limit?: number;

  /**
   * Limits the search results to any items for which the metadata matches the
   * provided filter. This parameter is a list that specifies exactly **one**
   * metadata template used to filter the search results. The parameter is required
   * unless the `query` parameter is provided.
   */
  mdfilters?: Array<SearchPerformParams.Mdfilter>;

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * Limits the search results to any items that are owned by the given list of
   * owners, defined as a list of comma separated user IDs.
   *
   * The items still need to be owned or shared with the currently authenticated user
   * for them to show up in the search results. If the user does not have access to
   * any files owned by any of the users an empty result set will be returned.
   *
   * To search across an entire enterprise, we recommend using the
   * `enterprise_content` scope parameter which can be requested with our support
   * team.
   */
  owner_user_ids?: Array<string>;

  /**
   * The string to search for. This query is matched against item names,
   * descriptions, text content of files, and various other fields of the different
   * item types.
   *
   * This parameter supports a variety of operators to further refine the results
   * returns.
   *
   * - `""` - by wrapping a query in double quotes only exact matches are returned by
   *   the API. Exact searches do not return search matches based on specific
   *   character sequences. Instead, they return matches based on phrases, that is,
   *   word sequences. For example: A search for `"Blue-Box"` may return search
   *   results including the sequence `"blue.box"`, `"Blue Box"`, and `"Blue-Box"`;
   *   any item containing the words `Blue` and `Box` consecutively, in the order
   *   specified.
   * - `AND` - returns items that contain both the search terms. For example, a
   *   search for `marketing AND BoxWorks` returns items that have both `marketing`
   *   and `BoxWorks` within its text in any order. It does not return a result that
   *   only has `BoxWorks` in its text.
   * - `OR` - returns items that contain either of the search terms. For example, a
   *   search for `marketing OR BoxWorks` returns a result that has either
   *   `marketing` or `BoxWorks` within its text. Using this operator is not
   *   necessary as we implicitly interpret multi-word queries as `OR` unless another
   *   supported boolean term is used.
   * - `NOT` - returns items that do not contain the search term provided. For
   *   example, a search for `marketing AND NOT BoxWorks` returns a result that has
   *   only `marketing` within its text. Results containing `BoxWorks` are omitted.
   *
   * We do not support lower case (that is, `and`, `or`, and `not`) or mixed case
   * (that is, `And`, `Or`, and `Not`) operators.
   *
   * This field is required unless the `mdfilters` parameter is defined.
   */
  query?: string;

  /**
   * Limits the search results to any items that have been updated by the given list
   * of users, defined as a list of comma separated user IDs.
   *
   * The items still need to be owned or shared with the currently authenticated user
   * for them to show up in the search results. If the user does not have access to
   * any files owned by any of the users an empty result set will be returned.
   *
   * This feature only searches back to the last 10 versions of an item.
   */
  recent_updater_user_ids?: Array<string>;

  /**
   * Limits the search results to either the files that the user has access to, or to
   * files available to the entire enterprise.
   *
   * The scope defaults to `user_content`, which limits the search results to content
   * that is available to the currently authenticated user.
   *
   * The `enterprise_content` can be requested by an admin through our support
   * channels. Once this scope has been enabled for a user, it will allow that use to
   * query for content across the entire enterprise and not only the content that
   * they have access to.
   */
  scope?: 'user_content' | 'enterprise_content';

  /**
   * Limits the search results to any items with a size within a given file size
   * range. This applied to files and folders.
   *
   * Size ranges are defined as comma separated list of a lower and upper byte size
   * limit (inclusive).
   *
   * The upper and lower bound can be omitted to create open ranges.
   */
  size_range?: Array<number>;

  /**
   * Defines the order in which search results are returned. This API defaults to
   * returning items by relevance unless this parameter is explicitly specified.
   *
   * - `relevance` (default) returns the results sorted by relevance to the query
   *   search term. The relevance is based on the occurrence of the search term in
   *   the items name, description, content, and additional properties.
   * - `modified_at` returns the results ordered in descending order by date at which
   *   the item was last modified.
   */
  sort?: 'modified_at' | 'relevance';

  /**
   * Determines if the search should look in the trash for items.
   *
   * By default, this API only returns search results for items not currently in the
   * trash (`non_trashed_only`).
   *
   * - `trashed_only` - Only searches for items currently in the trash
   * - `non_trashed_only` - Only searches for items currently not in the trash
   * - `all_items` - Searches for both trashed and non-trashed items.
   */
  trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items';

  /**
   * Limits the search results to any items of this type. This parameter only takes
   * one value. By default the API returns items that match any of these types.
   *
   * - `file` - Limits the search results to files,
   * - `folder` - Limits the search results to folders,
   * - `web_link` - Limits the search results to web links, also known as bookmarks.
   */
  type?: 'file' | 'folder' | 'web_link';

  /**
   * Limits the search results to any items updated within a given date range.
   *
   * Date ranges are defined as comma separated RFC3339 timestamps.
   *
   * If the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything updated
   * before the end date will be returned.
   *
   * If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will
   * be used as the end date instead.
   */
  updated_at_range?: Array<string>;
}

export namespace SearchPerformParams {
  /**
   * A metadata template used to filter the search results.
   */
  export interface Mdfilter {
    /**
     * Specifies which fields on the template to filter the search results by. When
     * more than one field is specified, the query performs a logical `AND` to ensure
     * that the instance of the template matches each of the fields specified.
     */
    filters?: { [key: string]: Mdfilter.Filters };

    /**
     * Specifies the scope of the template to filter search results by.
     *
     * This will be `enterprise_{enterprise_id}` for templates defined for use in this
     * enterprise, and `global` for general templates that are available to all
     * enterprises using Box.
     */
    scope?: 'global' | 'enterprise' | 'enterprise_{enterprise_id}';

    /**
     * The key of the template used to filter search results.
     *
     * In many cases the template key is automatically derived of its display name, for
     * example `Contract Template` would become `contractTemplate`. In some cases the
     * creator of the template will have provided its own template key.
     *
     * Please [list the templates for an enterprise][list], or get all instances on a
     * [file][file] or [folder][folder] to inspect a template's key.
     *
     * [list]: e://get-metadata-templates-enterprise
     * [file]: e://get-files-id-metadata
     * [folder]: e://get-folders-id-metadata
     */
    templateKey?: string;
  }

  export namespace Mdfilter {
    /**
     * Specifies the values to match for a `multiSelect` metadata field. When
     * performing a search, the query will essentially perform an `OR` operation to
     * match any template where any of the provided values match this field.
     */
    export interface Filters {}
  }
}

export declare namespace Search {
  export {
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MetadataCascadePolicies extends APIResource {
  /**
   * Creates a new metadata cascade policy that applies a given metadata template to
   * a given folder and automatically cascades it down to any files within that
   * folder.
   *
   * In order for the policy to be applied a metadata instance must first be applied
   * to the folder the policy is to be applied to.
   *
   * @example
   * ```ts
   * const metadataCascadePolicy =
   *   await client.metadataCascadePolicies.create({
   *     folder_id: '1234567',
   *     scope: 'enterprise',
   *     templateKey: 'productInfo',
   *   });
   * ```
   */
  create(
    body: MetadataCascadePolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<MetadataCascadePolicy> {
    return this._client.post('/metadata_cascade_policies', { body, ...options });
  }

  /**
   * Retrieve a specific metadata cascade policy assigned to a folder.
   *
   * @example
   * ```ts
   * const metadataCascadePolicy =
   *   await client.metadataCascadePolicies.retrieve(
   *     '6fd4ff89-8fc1-42cf-8b29-1890dedd26d7',
   *   );
   * ```
   */
  retrieve(metadataCascadePolicyID: string, options?: RequestOptions): APIPromise<MetadataCascadePolicy> {
    return this._client.get(path`/metadata_cascade_policies/${metadataCascadePolicyID}`, options);
  }

  /**
   * Retrieves a list of all the metadata cascade policies that are applied to a
   * given folder. This can not be used on the root folder with ID `0`.
   *
   * @example
   * ```ts
   * const metadataCascadePolicies =
   *   await client.metadataCascadePolicies.list({
   *     folder_id: 'folder_id',
   *   });
   * ```
   */
  list(
    query: MetadataCascadePolicyListParams,
    options?: RequestOptions,
  ): APIPromise<MetadataCascadePolicyListResponse> {
    return this._client.get('/metadata_cascade_policies', { query, ...options });
  }

  /**
   * Deletes a metadata cascade policy.
   *
   * @example
   * ```ts
   * await client.metadataCascadePolicies.delete(
   *   '6fd4ff89-8fc1-42cf-8b29-1890dedd26d7',
   * );
   * ```
   */
  delete(metadataCascadePolicyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/metadata_cascade_policies/${metadataCascadePolicyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Force the metadata on a folder with a metadata cascade policy to be applied to
   * all of its children. This can be used after creating a new cascade policy to
   * enforce the metadata to be cascaded down to all existing files within that
   * folder.
   *
   * @example
   * ```ts
   * await client.metadataCascadePolicies.apply(
   *   '6fd4ff89-8fc1-42cf-8b29-1890dedd26d7',
   *   { conflict_resolution: 'none' },
   * );
   * ```
   */
  apply(
    metadataCascadePolicyID: string,
    body: MetadataCascadePolicyApplyParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/metadata_cascade_policies/${metadataCascadePolicyID}/apply`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A metadata cascade policy automatically applies a metadata template instance to
 * all the files and folders within the targeted folder.
 */
export interface MetadataCascadePolicy {
  /**
   * The ID of the metadata cascade policy object.
   */
  id: string;

  /**
   * The value will always be `metadata_cascade_policy`.
   */
  type: 'metadata_cascade_policy';

  /**
   * The enterprise that owns this policy.
   */
  owner_enterprise?: MetadataCascadePolicy.OwnerEnterprise;

  /**
   * Represent the folder the policy is applied to.
   */
  parent?: MetadataCascadePolicy.Parent;

  /**
   * The scope of the metadata cascade policy can either be `global` or
   * `enterprise_*`. The `global` scope is used for policies that are available to
   * any Box enterprise. The `enterprise_*` scope represents policies that have been
   * created within a specific enterprise, where `*` will be the ID of that
   * enterprise.
   */
  scope?: string;

  /**
   * The key of the template that is cascaded down to the folder's children.
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

export namespace MetadataCascadePolicy {
  /**
   * The enterprise that owns this policy.
   */
  export interface OwnerEnterprise {
    /**
     * The ID of the enterprise that owns the policy.
     */
    id?: string;

    /**
     * The value will always be `enterprise`.
     */
    type?: 'enterprise';
  }

  /**
   * Represent the folder the policy is applied to.
   */
  export interface Parent {
    /**
     * The ID of the folder the policy is applied to.
     */
    id?: string;

    /**
     * The value will always be `folder`.
     */
    type?: 'folder';
  }
}

export interface MetadataCascadePolicyListResponse {
  /**
   * A list of metadata cascade policies.
   */
  entries?: Array<MetadataCascadePolicy>;

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

export interface MetadataCascadePolicyCreateParams {
  /**
   * The ID of the folder to apply the policy to. This folder will need to already
   * have an instance of the targeted metadata template applied to it.
   */
  folder_id: string;

  /**
   * The scope of the targeted metadata template. This template will need to already
   * have an instance applied to the targeted folder.
   */
  scope: 'global' | 'enterprise';

  /**
   * The key of the targeted metadata template. This template will need to already
   * have an instance applied to the targeted folder.
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
  templateKey: string;
}

export interface MetadataCascadePolicyListParams {
  /**
   * Specifies which folder to return policies for. This can not be used on the root
   * folder with ID `0`.
   */
  folder_id: string;

  /**
   * Defines the position marker at which to begin returning results. This is used
   * when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`.
   */
  marker?: string;

  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value exceeding 10000 will be rejected with a 400
   * response.
   */
  offset?: number;

  /**
   * The ID of the enterprise ID for which to find metadata cascade policies. If not
   * specified, it defaults to the current enterprise.
   */
  owner_enterprise_id?: string;
}

export interface MetadataCascadePolicyApplyParams {
  /**
   * Describes the desired behavior when dealing with the conflict where a metadata
   * template already has an instance applied to a child.
   *
   * - `none` will preserve the existing value on the file
   * - `overwrite` will force-apply the templates values over any existing values.
   */
  conflict_resolution: 'none' | 'overwrite';
}

export declare namespace MetadataCascadePolicies {
  export {
    type MetadataCascadePolicy as MetadataCascadePolicy,
    type MetadataCascadePolicyListResponse as MetadataCascadePolicyListResponse,
    type MetadataCascadePolicyCreateParams as MetadataCascadePolicyCreateParams,
    type MetadataCascadePolicyListParams as MetadataCascadePolicyListParams,
    type MetadataCascadePolicyApplyParams as MetadataCascadePolicyApplyParams,
  };
}

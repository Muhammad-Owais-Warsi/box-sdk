// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RetentionPoliciesAPI from '../retention-policies';
import * as FilesAPI from '../files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Slack extends APIResource {
  /**
   * Creates a
   * [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
   * by mapping a Slack channel to a Box item.
   *
   * You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * const integrationMappingSlack =
   *   await client.integrationMappings.slack.create({
   *     box_item: { id: '1234567891', type: 'folder' },
   *     partner_item: { id: 'C12378991223', type: 'channel' },
   *   });
   * ```
   */
  create(body: SlackCreateParams, options?: RequestOptions): APIPromise<IntegrationMappingSlack> {
    return this._client.post('/integration_mappings/slack', { body, ...options });
  }

  /**
   * Updates a
   * [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
   * Supports updating the Box folder ID and options.
   *
   * You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * const integrationMappingSlack =
   *   await client.integrationMappings.slack.update('11235432');
   * ```
   */
  update(
    integrationMappingID: string,
    body: SlackUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationMappingSlack> {
    return this._client.put(path`/integration_mappings/slack/${integrationMappingID}`, { body, ...options });
  }

  /**
   * Lists
   * [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
   * in a users' enterprise.
   *
   * You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * const slacks =
   *   await client.integrationMappings.slack.list();
   * ```
   */
  list(
    query: SlackListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SlackListResponse> {
    return this._client.get('/integration_mappings/slack', { query, ...options });
  }

  /**
   * Deletes a
   * [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
   *
   * You need Admin or Co-Admin role to use this endpoint.
   *
   * @example
   * ```ts
   * await client.integrationMappings.slack.delete('11235432');
   * ```
   */
  delete(integrationMappingID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/integration_mappings/slack/${integrationMappingID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A base representation of an integration mapping object.
 */
export interface IntegrationMappingBase {
  /**
   * A unique identifier of a folder mapping (part of a composite key together with
   * `integration_type`).
   */
  id: string;

  /**
   * Mapping type.
   */
  type: 'integration_mapping';
}

/**
 * The schema for an integration mapping Box item object for type Slack.
 */
export interface IntegrationMappingBoxItem {
  /**
   * ID of the mapped item (of type referenced in `type`).
   */
  id: string;

  /**
   * Type of the mapped item referenced in `id`.
   */
  type: 'folder';
}

/**
 * The schema for an integration mapping options object for Slack type.
 */
export interface IntegrationMappingOptions {
  /**
   * Indicates whether or not channel member access to the underlying box item should
   * be automatically managed. Depending on type of channel, access is managed
   * through creating collaborations or shared links.
   */
  is_access_management_disabled?: boolean;
}

/**
 * The schema for an integration mapping mapped item object for type Slack.
 *
 * Depending if Box for Slack is installed at the org or workspace level, provide
 * **either** `slack_org_id` **or** `slack_workspace_id`. Do not use both
 * parameters at the same time.
 */
export interface IntegrationMappingPartnerItem {
  /**
   * ID of the mapped item (of type referenced in `type`).
   */
  id: string;

  /**
   * Type of the mapped item referenced in `id`.
   */
  type: 'channel';

  /**
   * ID of the Slack org with which the item is associated. Use this parameter if Box
   * for Slack is installed at the org level. Do not use `slack_workspace_id` at the
   * same time.
   */
  slack_org_id?: string | null;

  /**
   * ID of the Slack workspace with which the item is associated. Use this parameter
   * if Box for Slack is installed at a workspace level. Do not use `slack_org_id` at
   * the same time.
   */
  slack_workspace_id?: string | null;
}

/**
 * A Slack specific representation of an integration mapping object.
 */
export interface IntegrationMappingSlack extends IntegrationMappingBase {
  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  box_item?: FilesAPI.FolderMini;

  /**
   * When the integration mapping object was created.
   */
  created_at?: string;

  /**
   * A user representation for integration mappings API purposes. Fields name and
   * login are not required.
   */
  created_by?: UserIntegrationMappings;

  /**
   * Identifies the Box partner app, with which the mapping is associated. Currently
   * only supports Slack. (part of the composite key together with `id`).
   */
  integration_type?: 'slack';

  /**
   * Identifies whether the mapping has been manually set (as opposed to being
   * automatically created).
   */
  is_manually_created?: boolean;

  /**
   * When the integration mapping object was last modified.
   */
  modified_at?: string;

  /**
   * A user representation for integration mappings API purposes. Fields name and
   * login are not required.
   */
  modified_by?: UserIntegrationMappings;

  /**
   * The schema for an integration mapping options object for Slack type.
   */
  options?: IntegrationMappingOptions;

  /**
   * The schema for an integration mapping mapped item object for type Slack.
   *
   * Depending if Box for Slack is installed at the org or workspace level, provide
   * **either** `slack_org_id` **or** `slack_workspace_id`. Do not use both
   * parameters at the same time.
   */
  partner_item?: IntegrationMappingPartnerItem;
}

/**
 * A user representation for integration mappings API purposes. Fields name and
 * login are not required.
 */
export interface UserIntegrationMappings extends RetentionPoliciesAPI.UserBase {
  /**
   * The primary email address of this user.
   */
  login?: string;

  /**
   * The display name of this user.
   */
  name?: string;
}

export interface SlackListResponse {
  /**
   * A list of integration mappings.
   */
  entries?: Array<IntegrationMappingSlack>;

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
}

export interface SlackCreateParams {
  /**
   * The schema for an integration mapping Box item object for type Slack.
   */
  box_item: IntegrationMappingBoxItem;

  /**
   * The schema for an integration mapping mapped item object for type Slack.
   *
   * Depending if Box for Slack is installed at the org or workspace level, provide
   * **either** `slack_org_id` **or** `slack_workspace_id`. Do not use both
   * parameters at the same time.
   */
  partner_item: IntegrationMappingPartnerItem;

  /**
   * The schema for an integration mapping options object for Slack type.
   */
  options?: IntegrationMappingOptions;
}

export interface SlackUpdateParams {
  /**
   * The schema for an integration mapping Box item object for type Slack.
   */
  box_item?: IntegrationMappingBoxItem;

  /**
   * The schema for an integration mapping options object for Slack type.
   */
  options?: IntegrationMappingOptions;
}

export interface SlackListParams {
  /**
   * Box item ID, for which the mappings should be returned.
   */
  box_item_id?: string;

  /**
   * Box item type, for which the mappings should be returned.
   */
  box_item_type?: 'folder';

  /**
   * Whether the mapping has been manually created.
   */
  is_manually_created?: boolean;

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
   * ID of the mapped item, for which the mapping should be returned.
   */
  partner_item_id?: string;

  /**
   * Mapped item type, for which the mapping should be returned.
   */
  partner_item_type?: 'channel';
}

export declare namespace Slack {
  export {
    type IntegrationMappingBase as IntegrationMappingBase,
    type IntegrationMappingBoxItem as IntegrationMappingBoxItem,
    type IntegrationMappingOptions as IntegrationMappingOptions,
    type IntegrationMappingPartnerItem as IntegrationMappingPartnerItem,
    type IntegrationMappingSlack as IntegrationMappingSlack,
    type UserIntegrationMappings as UserIntegrationMappings,
    type SlackListResponse as SlackListResponse,
    type SlackCreateParams as SlackCreateParams,
    type SlackUpdateParams as SlackUpdateParams,
    type SlackListParams as SlackListParams,
  };
}

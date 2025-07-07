// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchemaAPI from './schema';
import {
  MetadataTemplate,
  Schema,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaRetrieveParams,
  SchemaUpdateParams,
} from './schema';
import * as EnterpriseAPI from './enterprise/enterprise';
import { Enterprise, EnterpriseListParams } from './enterprise/enterprise';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MetadataTemplates extends APIResource {
  enterprise: EnterpriseAPI.Enterprise = new EnterpriseAPI.Enterprise(this._client);
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);

  /**
   * Retrieves a metadata template by its ID.
   *
   * @example
   * ```ts
   * const metadataTemplate =
   *   await client.metadataTemplates.retrieve('f7a9891f');
   * ```
   */
  retrieve(templateID: string, options?: RequestOptions): APIPromise<SchemaAPI.MetadataTemplate> {
    return this._client.get(path`/metadata_templates/${templateID}`, options);
  }

  /**
   * Finds a metadata template by searching for the ID of an instance of the
   * template.
   *
   * @example
   * ```ts
   * const metadataTemplates =
   *   await client.metadataTemplates.list({
   *     metadata_instance_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  list(query: MetadataTemplateListParams, options?: RequestOptions): APIPromise<MetadataTemplates> {
    return this._client.get('/metadata_templates', { query, ...options });
  }

  /**
   * Used to retrieve all generic, global metadata templates available to all
   * enterprises using Box.
   *
   * @example
   * ```ts
   * const metadataTemplates =
   *   await client.metadataTemplates.listGlobal();
   * ```
   */
  listGlobal(
    query: MetadataTemplateListGlobalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetadataTemplates> {
    return this._client.get('/metadata_templates/global', { query, ...options });
  }
}

export interface MetadataTemplates {
  /**
   * A list of metadata templates.
   */
  entries?: Array<SchemaAPI.MetadataTemplate>;

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

export interface MetadataTemplateListParams {
  /**
   * The ID of an instance of the metadata template to find.
   */
  metadata_instance_id: string;

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

export interface MetadataTemplateListGlobalParams {
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

MetadataTemplates.Enterprise = Enterprise;
MetadataTemplates.Schema = Schema;

export declare namespace MetadataTemplates {
  export {
    type MetadataTemplates as MetadataTemplates,
    type MetadataTemplateListParams as MetadataTemplateListParams,
    type MetadataTemplateListGlobalParams as MetadataTemplateListGlobalParams,
  };

  export { Enterprise as Enterprise, type EnterpriseListParams as EnterpriseListParams };

  export {
    Schema as Schema,
    type MetadataTemplate as MetadataTemplate,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaRetrieveParams as SchemaRetrieveParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };
}

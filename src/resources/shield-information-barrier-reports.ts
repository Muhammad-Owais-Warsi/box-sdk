// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as ShieldInformationBarrierSegmentsAPI from './shield-information-barrier-segments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ShieldInformationBarrierReports extends APIResource {
  /**
   * Creates a shield information barrier report for a given barrier.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierReport =
   *   await client.shieldInformationBarrierReports.create();
   * ```
   */
  create(
    body: ShieldInformationBarrierReportCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierReport> {
    return this._client.post('/shield_information_barrier_reports', { body, ...options });
  }

  /**
   * Retrieves a shield information barrier report by its ID.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierReport =
   *   await client.shieldInformationBarrierReports.retrieve(
   *     '3423',
   *   );
   * ```
   */
  retrieve(
    shieldInformationBarrierReportID: string,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierReport> {
    return this._client.get(
      path`/shield_information_barrier_reports/${shieldInformationBarrierReportID}`,
      options,
    );
  }

  /**
   * Lists shield information barrier reports.
   *
   * @example
   * ```ts
   * const shieldInformationBarrierReports =
   *   await client.shieldInformationBarrierReports.list({
   *     shield_information_barrier_id:
   *       'shield_information_barrier_id',
   *   });
   * ```
   */
  list(
    query: ShieldInformationBarrierReportListParams,
    options?: RequestOptions,
  ): APIPromise<ShieldInformationBarrierReportListResponse> {
    return this._client.get('/shield_information_barrier_reports', { query, ...options });
  }
}

/**
 * A shield information barrier reference for requests and responses.
 */
export interface ShieldInformationBarrierReference {
  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;
}

export interface ShieldInformationBarrierReport {
  /**
   * The unique identifier for the shield information barrier report.
   */
  id?: string;

  /**
   * ISO date time string when this shield information barrier report object was
   * created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, used when nested within another resource.
   */
  created_by?: RetentionPoliciesAPI.UserBase;

  /**
   * Indicates which folder the report file is located and any errors when generating
   * the report.
   */
  details?: ShieldInformationBarrierReport.Details;

  /**
   * A shield information barrier reference for requests and responses.
   */
  shield_information_barrier?: ShieldInformationBarrierReference;

  /**
   * Status of the shield information report.
   */
  status?: 'pending' | 'error' | 'done' | 'cancelled';

  /**
   * The type of the shield information barrier report.
   */
  type?: 'shield_information_barrier_report';

  /**
   * ISO date time string when this shield information barrier report was updated.
   */
  updated_at?: string;
}

export namespace ShieldInformationBarrierReport {
  /**
   * Indicates which folder the report file is located and any errors when generating
   * the report.
   */
  export interface Details {
    details?: Details.Details;
  }

  export namespace Details {
    export interface Details {
      /**
       * Folder ID for locating this report.
       */
      folder_id?: string;
    }
  }
}

export interface ShieldInformationBarrierReportListResponse {
  /**
   * A list of shield information barrier reports.
   */
  entries?: Array<ShieldInformationBarrierReport>;

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

export interface ShieldInformationBarrierReportCreateParams {
  /**
   * A base representation of a shield information barrier object.
   */
  shield_information_barrier?: ShieldInformationBarrierSegmentsAPI.ShieldInformationBarrierBase;
}

export interface ShieldInformationBarrierReportListParams {
  /**
   * The ID of the shield information barrier.
   */
  shield_information_barrier_id: string;

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

export declare namespace ShieldInformationBarrierReports {
  export {
    type ShieldInformationBarrierReference as ShieldInformationBarrierReference,
    type ShieldInformationBarrierReport as ShieldInformationBarrierReport,
    type ShieldInformationBarrierReportListResponse as ShieldInformationBarrierReportListResponse,
    type ShieldInformationBarrierReportCreateParams as ShieldInformationBarrierReportCreateParams,
    type ShieldInformationBarrierReportListParams as ShieldInformationBarrierReportListParams,
  };
}

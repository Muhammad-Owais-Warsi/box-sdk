// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WatermarkResource extends APIResource {
  /**
   * Retrieve the watermark for a file.
   *
   * @example
   * ```ts
   * const watermark = await client.files.watermark.retrieve(
   *   '12345',
   * );
   * ```
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<Watermark> {
    return this._client.get(path`/files/${fileID}/watermark`, options);
  }

  /**
   * Applies or update a watermark on a file.
   *
   * @example
   * ```ts
   * const watermark = await client.files.watermark.apply(
   *   '12345',
   *   { watermark: { imprint: 'default' } },
   * );
   * ```
   */
  apply(fileID: string, body: WatermarkApplyParams, options?: RequestOptions): APIPromise<Watermark> {
    return this._client.put(path`/files/${fileID}/watermark`, { body, ...options });
  }

  /**
   * Removes the watermark from a file.
   *
   * @example
   * ```ts
   * await client.files.watermark.remove('12345');
   * ```
   */
  remove(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/${fileID}/watermark`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A watermark is a semi-transparent overlay on an embedded file preview that
 * displays a viewer's email address or user ID and the time of access over a
 * file's content.
 */
export interface Watermark {
  watermark?: Watermark.Watermark;
}

export namespace Watermark {
  export interface Watermark {
    /**
     * When this watermark was created.
     */
    created_at?: string;

    /**
     * When this task was modified.
     */
    modified_at?: string;
  }
}

export interface WatermarkApplyParams {
  /**
   * The watermark to imprint on the file.
   */
  watermark: WatermarkApplyParams.Watermark;
}

export namespace WatermarkApplyParams {
  /**
   * The watermark to imprint on the file.
   */
  export interface Watermark {
    /**
     * The type of watermark to apply.
     *
     * Currently only supports one option.
     */
    imprint: 'default';
  }
}

export declare namespace WatermarkResource {
  export { type Watermark as Watermark, type WatermarkApplyParams as WatermarkApplyParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WatermarkAPI from '../files/watermark';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Watermark extends APIResource {
  /**
   * Applies or update a watermark on a folder.
   *
   * @example
   * ```ts
   * const watermark =
   *   await client.folders.watermark.applyWatermark('12345', {
   *     watermark: { imprint: 'default' },
   *   });
   * ```
   */
  applyWatermark(
    folderID: string,
    body: WatermarkApplyWatermarkParams,
    options?: RequestOptions,
  ): APIPromise<WatermarkAPI.Watermark> {
    return this._client.put(path`/folders/${folderID}/watermark`, { body, ...options });
  }

  /**
   * Retrieve the watermark for a folder.
   *
   * @example
   * ```ts
   * const watermark =
   *   await client.folders.watermark.getWatermark('12345');
   * ```
   */
  getWatermark(folderID: string, options?: RequestOptions): APIPromise<WatermarkAPI.Watermark> {
    return this._client.get(path`/folders/${folderID}/watermark`, options);
  }

  /**
   * Removes the watermark from a folder.
   *
   * @example
   * ```ts
   * await client.folders.watermark.removeWatermark('12345');
   * ```
   */
  removeWatermark(folderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/folders/${folderID}/watermark`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WatermarkApplyWatermarkParams {
  /**
   * The watermark to imprint on the folder.
   */
  watermark: WatermarkApplyWatermarkParams.Watermark;
}

export namespace WatermarkApplyWatermarkParams {
  /**
   * The watermark to imprint on the folder.
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

export declare namespace Watermark {
  export { type WatermarkApplyWatermarkParams as WatermarkApplyWatermarkParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Avatar extends APIResource {
  /**
   * Retrieves an image of a the user's avatar.
   *
   * @example
   * ```ts
   * const avatar = await client.users.avatar.retrieve('12345');
   *
   * const content = await avatar.blob();
   * console.log(content);
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/users/${userID}/avatar`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/jpg' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Adds or updates a user avatar.
   *
   * @example
   * ```ts
   * const avatar = await client.users.avatar.update('12345', {
   *   pic: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  update(
    userID: string,
    body: AvatarUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AvatarUpdateResponse> {
    return this._client.post(
      path`/users/${userID}/avatar`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Removes an existing user avatar. You cannot reverse this operation.
   *
   * @example
   * ```ts
   * await client.users.avatar.delete('12345');
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/${userID}/avatar`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A resource holding URLs to the avatar uploaded to a Box application.
 */
export interface AvatarUpdateResponse {
  /**
   * Represents an object with user avatar URLs.
   */
  pic_urls?: AvatarUpdateResponse.PicURLs;
}

export namespace AvatarUpdateResponse {
  /**
   * Represents an object with user avatar URLs.
   */
  export interface PicURLs {
    /**
     * The location of a large-sized avatar.
     */
    large?: string;

    /**
     * The location of the avatar preview.
     */
    preview?: string;

    /**
     * The location of a small-sized avatar.
     */
    small?: string;
  }
}

export interface AvatarUpdateParams {
  /**
   * The image file to be uploaded to Box. Accepted file extensions are `.jpg` or
   * `.png`. The maximum file size is 1MB.
   */
  pic: Uploadable;
}

export declare namespace Avatar {
  export { type AvatarUpdateResponse as AvatarUpdateResponse, type AvatarUpdateParams as AvatarUpdateParams };
}

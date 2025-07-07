// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Adds a comment by the user to a specific file, or as a reply to an other
   * comment.
   *
   * @example
   * ```ts
   * const commentFull = await client.comments.create({
   *   item: { id: '11446498', type: 'file' },
   *   message: 'Review completed!',
   * });
   * ```
   */
  create(params: CommentCreateParams, options?: RequestOptions): APIPromise<CommentFull> {
    const { fields, ...body } = params;
    return this._client.post('/comments', { query: { fields }, body, ...options });
  }

  /**
   * Retrieves the message and metadata for a specific comment, as well as
   * information on the user who created the comment.
   *
   * @example
   * ```ts
   * const commentFull = await client.comments.retrieve('12345');
   * ```
   */
  retrieve(
    commentID: string,
    query: CommentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommentFull> {
    return this._client.get(path`/comments/${commentID}`, { query, ...options });
  }

  /**
   * Update the message of a comment.
   *
   * @example
   * ```ts
   * const commentFull = await client.comments.update('12345');
   * ```
   */
  update(
    commentID: string,
    params: CommentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommentFull> {
    const { fields, ...body } = params ?? {};
    return this._client.put(path`/comments/${commentID}`, { query: { fields }, body, ...options });
  }

  /**
   * Permanently deletes a comment.
   *
   * @example
   * ```ts
   * await client.comments.delete('12345');
   * ```
   */
  delete(commentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/comments/${commentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CommentFull {
  /**
   * The unique identifier for this comment.
   */
  id?: string;

  /**
   * The time this comment was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * Whether or not this comment is a reply to another comment.
   */
  is_reply_comment?: boolean;

  /**
   * The bare basic reference for an object.
   */
  item?: CommentFull.Item;

  /**
   * The text of the comment, as provided by the user.
   */
  message?: string;

  /**
   * The time this comment was last modified.
   */
  modified_at?: string;

  /**
   * The string representing the comment text with @mentions included. @mention
   * format is @[id:username] where `id` is user's Box ID and `username` is their
   * display name.
   */
  tagged_message?: string;

  /**
   * The value will always be `comment`.
   */
  type?: 'comment';
}

export namespace CommentFull {
  /**
   * The bare basic reference for an object.
   */
  export interface Item {
    /**
     * The unique identifier for this object.
     */
    id?: string;

    /**
     * The type for this object.
     */
    type?: string;
  }
}

export interface CommentCreateParams {
  /**
   * Body param: The item to attach the comment to.
   */
  item: CommentCreateParams.Item;

  /**
   * Body param: The text of the comment.
   *
   * To mention a user, use the `tagged_message` parameter instead.
   */
  message: string;

  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Body param: The text of the comment, including `@[user_id:name]` somewhere in
   * the message to mention another user, which will send them an email notification,
   * letting them know they have been mentioned.
   *
   * The `user_id` is the target user's ID, where the `name` can be any custom
   * phrase. In the Box UI this name will link to the user's profile.
   *
   * If you are not mentioning another user, use `message` instead.
   */
  tagged_message?: string;
}

export namespace CommentCreateParams {
  /**
   * The item to attach the comment to.
   */
  export interface Item {
    /**
     * The ID of the item.
     */
    id: string;

    /**
     * The type of the item that this comment will be placed on.
     */
    type: 'file' | 'comment';
  }
}

export interface CommentRetrieveParams {
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
}

export interface CommentUpdateParams {
  /**
   * Query param: A comma-separated list of attributes to include in the response.
   * This can be used to request fields that are not normally returned in a standard
   * response.
   *
   * Be aware that specifying this parameter will have the effect that none of the
   * standard fields are returned in the response unless explicitly specified,
   * instead only fields for the mini representation are returned, additional to the
   * fields requested.
   */
  fields?: Array<string>;

  /**
   * Body param: The text of the comment to update.
   */
  message?: string;
}

export declare namespace Comments {
  export {
    type CommentFull as CommentFull,
    type CommentCreateParams as CommentCreateParams,
    type CommentRetrieveParams as CommentRetrieveParams,
    type CommentUpdateParams as CommentUpdateParams,
  };
}

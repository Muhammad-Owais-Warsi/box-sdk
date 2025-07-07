// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   address: 'https://example.com/webhooks',
   *   target: {},
   *   triggers: ['FILE.UPLOADED'],
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Retrieves a specific webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve('3321123');
   * ```
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/webhooks/${webhookID}`, options);
  }

  /**
   * Updates a webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update('3321123');
   * ```
   */
  update(
    webhookID: string,
    body: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    return this._client.put(path`/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Returns all defined webhooks for the requesting application.
   *
   * This API only returns webhooks that are applied to files or folders that are
   * owned by the authenticated user. This means that an admin can not see webhooks
   * created by a service account unless the admin has access to those folders, and
   * vice versa.
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', { query, ...options });
  }

  /**
   * Deletes a webhook.
   *
   * @example
   * ```ts
   * await client.webhooks.delete('3321123');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/${webhookID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a configured webhook.
 */
export interface Webhook extends WebhookMini {
  /**
   * The URL that is notified by this webhook.
   */
  address?: string;

  /**
   * A timestamp identifying the time that the webhook was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * An array of event names that this webhook is to be triggered for.
   */
  triggers?: Array<
    | 'FILE.UPLOADED'
    | 'FILE.PREVIEWED'
    | 'FILE.DOWNLOADED'
    | 'FILE.TRASHED'
    | 'FILE.DELETED'
    | 'FILE.RESTORED'
    | 'FILE.COPIED'
    | 'FILE.MOVED'
    | 'FILE.LOCKED'
    | 'FILE.UNLOCKED'
    | 'FILE.RENAMED'
    | 'COMMENT.CREATED'
    | 'COMMENT.UPDATED'
    | 'COMMENT.DELETED'
    | 'TASK_ASSIGNMENT.CREATED'
    | 'TASK_ASSIGNMENT.UPDATED'
    | 'METADATA_INSTANCE.CREATED'
    | 'METADATA_INSTANCE.UPDATED'
    | 'METADATA_INSTANCE.DELETED'
    | 'FOLDER.CREATED'
    | 'FOLDER.RENAMED'
    | 'FOLDER.DOWNLOADED'
    | 'FOLDER.RESTORED'
    | 'FOLDER.DELETED'
    | 'FOLDER.COPIED'
    | 'FOLDER.MOVED'
    | 'FOLDER.TRASHED'
    | 'WEBHOOK.DELETED'
    | 'COLLABORATION.CREATED'
    | 'COLLABORATION.ACCEPTED'
    | 'COLLABORATION.REJECTED'
    | 'COLLABORATION.REMOVED'
    | 'COLLABORATION.UPDATED'
    | 'SHARED_LINK.DELETED'
    | 'SHARED_LINK.CREATED'
    | 'SHARED_LINK.UPDATED'
    | 'SIGN_REQUEST.COMPLETED'
    | 'SIGN_REQUEST.DECLINED'
    | 'SIGN_REQUEST.EXPIRED'
    | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
  >;
}

/**
 * Represents a configured webhook.
 */
export interface WebhookMini {
  /**
   * The unique identifier for this webhook.
   */
  id?: string;

  /**
   * The item that will trigger the webhook.
   */
  target?: WebhookMini.Target;

  /**
   * The value will always be `webhook`.
   */
  type?: 'webhook';
}

export namespace WebhookMini {
  /**
   * The item that will trigger the webhook.
   */
  export interface Target {
    /**
     * The ID of the item to trigger a webhook.
     */
    id?: string;

    /**
     * The type of item to trigger a webhook.
     */
    type?: 'file' | 'folder';
  }
}

export interface WebhookListResponse {
  /**
   * A list of webhooks.
   */
  entries?: Array<WebhookMini>;

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

export interface WebhookCreateParams {
  /**
   * The URL that is notified by this webhook.
   */
  address: string;

  /**
   * The item that will trigger the webhook.
   */
  target: WebhookCreateParams.Target;

  /**
   * An array of event names that this webhook is to be triggered for.
   */
  triggers: Array<
    | 'FILE.UPLOADED'
    | 'FILE.PREVIEWED'
    | 'FILE.DOWNLOADED'
    | 'FILE.TRASHED'
    | 'FILE.DELETED'
    | 'FILE.RESTORED'
    | 'FILE.COPIED'
    | 'FILE.MOVED'
    | 'FILE.LOCKED'
    | 'FILE.UNLOCKED'
    | 'FILE.RENAMED'
    | 'COMMENT.CREATED'
    | 'COMMENT.UPDATED'
    | 'COMMENT.DELETED'
    | 'TASK_ASSIGNMENT.CREATED'
    | 'TASK_ASSIGNMENT.UPDATED'
    | 'METADATA_INSTANCE.CREATED'
    | 'METADATA_INSTANCE.UPDATED'
    | 'METADATA_INSTANCE.DELETED'
    | 'FOLDER.CREATED'
    | 'FOLDER.RENAMED'
    | 'FOLDER.DOWNLOADED'
    | 'FOLDER.RESTORED'
    | 'FOLDER.DELETED'
    | 'FOLDER.COPIED'
    | 'FOLDER.MOVED'
    | 'FOLDER.TRASHED'
    | 'WEBHOOK.DELETED'
    | 'COLLABORATION.CREATED'
    | 'COLLABORATION.ACCEPTED'
    | 'COLLABORATION.REJECTED'
    | 'COLLABORATION.REMOVED'
    | 'COLLABORATION.UPDATED'
    | 'SHARED_LINK.DELETED'
    | 'SHARED_LINK.CREATED'
    | 'SHARED_LINK.UPDATED'
    | 'SIGN_REQUEST.COMPLETED'
    | 'SIGN_REQUEST.DECLINED'
    | 'SIGN_REQUEST.EXPIRED'
    | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
  >;
}

export namespace WebhookCreateParams {
  /**
   * The item that will trigger the webhook.
   */
  export interface Target {
    /**
     * The ID of the item to trigger a webhook.
     */
    id?: string;

    /**
     * The type of item to trigger a webhook.
     */
    type?: 'file' | 'folder';
  }
}

export interface WebhookUpdateParams {
  /**
   * The URL that is notified by this webhook.
   */
  address?: string;

  /**
   * The item that will trigger the webhook.
   */
  target?: WebhookUpdateParams.Target;

  /**
   * An array of event names that this webhook is to be triggered for.
   */
  triggers?: Array<
    | 'FILE.UPLOADED'
    | 'FILE.PREVIEWED'
    | 'FILE.DOWNLOADED'
    | 'FILE.TRASHED'
    | 'FILE.DELETED'
    | 'FILE.RESTORED'
    | 'FILE.COPIED'
    | 'FILE.MOVED'
    | 'FILE.LOCKED'
    | 'FILE.UNLOCKED'
    | 'FILE.RENAMED'
    | 'COMMENT.CREATED'
    | 'COMMENT.UPDATED'
    | 'COMMENT.DELETED'
    | 'TASK_ASSIGNMENT.CREATED'
    | 'TASK_ASSIGNMENT.UPDATED'
    | 'METADATA_INSTANCE.CREATED'
    | 'METADATA_INSTANCE.UPDATED'
    | 'METADATA_INSTANCE.DELETED'
    | 'FOLDER.CREATED'
    | 'FOLDER.RENAMED'
    | 'FOLDER.DOWNLOADED'
    | 'FOLDER.RESTORED'
    | 'FOLDER.DELETED'
    | 'FOLDER.COPIED'
    | 'FOLDER.MOVED'
    | 'FOLDER.TRASHED'
    | 'WEBHOOK.DELETED'
    | 'COLLABORATION.CREATED'
    | 'COLLABORATION.ACCEPTED'
    | 'COLLABORATION.REJECTED'
    | 'COLLABORATION.REMOVED'
    | 'COLLABORATION.UPDATED'
    | 'SHARED_LINK.DELETED'
    | 'SHARED_LINK.CREATED'
    | 'SHARED_LINK.UPDATED'
    | 'SIGN_REQUEST.COMPLETED'
    | 'SIGN_REQUEST.DECLINED'
    | 'SIGN_REQUEST.EXPIRED'
    | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
  >;
}

export namespace WebhookUpdateParams {
  /**
   * The item that will trigger the webhook.
   */
  export interface Target {
    /**
     * The ID of the item to trigger a webhook.
     */
    id?: string;

    /**
     * The type of item to trigger a webhook.
     */
    type?: 'file' | 'folder';
  }
}

export interface WebhookListParams {
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

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookMini as WebhookMini,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}

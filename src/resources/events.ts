// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GroupMembershipsAPI from './group-memberships';
import * as RetentionPoliciesAPI from './retention-policies';
import * as FilesAPI from './files/files';
import * as FoldersAPI from './folders/folders';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Returns up to a year of past events for a given user or for the entire
   * enterprise.
   *
   * By default this returns events for the authenticated user. To retrieve events
   * for the entire enterprise, set the `stream_type` to `admin_logs_streaming` for
   * live monitoring of new events, or `admin_logs` for querying across historical
   * events. The user making the API call will need to have admin privileges, and the
   * application will need to have the scope `manage enterprise properties` checked.
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/events', { query, ...options });
  }
}

/**
 * A list of event objects.
 */
export interface EventListResponse {
  /**
   * The number of events returned in this response.
   */
  chunk_size?: number;

  /**
   * A list of events.
   */
  entries?: Array<EventListResponse.Entry>;

  /**
   * The stream position of the start of the next page (chunk) of events.
   */
  next_stream_position?: string | number;
}

export namespace EventListResponse {
  /**
   * The description of an event that happened within Box.
   */
  export interface Entry {
    /**
     * This object provides additional information about the event if available.
     *
     * This can include how a user performed an event as well as additional information
     * to correlate an event to external KeySafe logs. Not all events have an
     * `additional_details` object. This object is only available in the Enterprise
     * Events.
     */
    additional_details?: unknown;

    /**
     * When the event object was created.
     */
    created_at?: string;

    /**
     * A mini representation of a user, as can be returned when nested within other
     * resources.
     */
    created_by?: RetentionPoliciesAPI.UserMini;

    /**
     * The ID of the event object. You can use this to detect duplicate events.
     */
    event_id?: string;

    /**
     * An event type that can trigger an event.
     */
    event_type?:
      | 'ACCESS_GRANTED'
      | 'ACCESS_REVOKED'
      | 'ADD_DEVICE_ASSOCIATION'
      | 'ADD_LOGIN_ACTIVITY_DEVICE'
      | 'ADMIN_LOGIN'
      | 'APPLICATION_CREATED'
      | 'APPLICATION_PUBLIC_KEY_ADDED'
      | 'APPLICATION_PUBLIC_KEY_DELETED'
      | 'CHANGE_ADMIN_ROLE'
      | 'CHANGE_FOLDER_PERMISSION'
      | 'COLLABORATION_ACCEPT'
      | 'COLLABORATION_EXPIRATION'
      | 'COLLABORATION_INVITE'
      | 'COLLABORATION_REMOVE'
      | 'COLLABORATION_ROLE_CHANGE'
      | 'COLLAB_ADD_COLLABORATOR'
      | 'COLLAB_INVITE_COLLABORATOR'
      | 'COLLAB_REMOVE_COLLABORATOR'
      | 'COLLAB_ROLE_CHANGE'
      | 'COMMENT_CREATE'
      | 'COMMENT_DELETE'
      | 'CONTENT_ACCESS'
      | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
      | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
      | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
      | 'CONTENT_WORKFLOW_POLICY_ADD'
      | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
      | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
      | 'COPY'
      | 'DATA_RETENTION_CREATE_RETENTION'
      | 'DATA_RETENTION_REMOVE_RETENTION'
      | 'DELETE'
      | 'DELETE_USER'
      | 'DEVICE_TRUST_CHECK_FAILED'
      | 'DOWNLOAD'
      | 'EDIT'
      | 'EDIT_USER'
      | 'EDR_CROWDSTRIKE_DEVICE_DETECTED'
      | 'EDR_CROWDSTRIKE_NO_BOX_TOOLS'
      | 'EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED'
      | 'EDR_CROWDSTRIKE_DRIVE_OUTDATED'
      | 'EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE'
      | 'EDR_CROWDSTRIKE_ACCESS_REVOKED'
      | 'EMAIL_ALIAS_CONFIRM'
      | 'EMAIL_ALIAS_REMOVE'
      | 'ENABLE_TWO_FACTOR_AUTH'
      | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
      | 'FAILED_LOGIN'
      | 'FILE_MARKED_MALICIOUS'
      | 'FILE_WATERMARKED_DOWNLOAD'
      | 'GROUP_ADD_ITEM'
      | 'GROUP_ADD_USER'
      | 'GROUP_CREATION'
      | 'GROUP_DELETION'
      | 'GROUP_EDITED'
      | 'GROUP_REMOVE_ITEM'
      | 'GROUP_REMOVE_USER'
      | 'ITEM_COPY'
      | 'ITEM_CREATE'
      | 'ITEM_DOWNLOAD'
      | 'ITEM_EMAIL_SEND'
      | 'ITEM_MAKE_CURRENT_VERSION'
      | 'ITEM_MODIFY'
      | 'ITEM_MOVE'
      | 'ITEM_OPEN'
      | 'ITEM_PREVIEW'
      | 'ITEM_RENAME'
      | 'ITEM_SHARED'
      | 'ITEM_SHARED_CREATE'
      | 'ITEM_SHARED_UNSHARE'
      | 'ITEM_SHARED_UPDATE'
      | 'ITEM_SYNC'
      | 'ITEM_TRASH'
      | 'ITEM_UNDELETE_VIA_TRASH'
      | 'ITEM_UNSYNC'
      | 'ITEM_UPLOAD'
      | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
      | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
      | 'LEGAL_HOLD_POLICY_CREATE'
      | 'LEGAL_HOLD_POLICY_DELETE'
      | 'LEGAL_HOLD_POLICY_UPDATE'
      | 'LOCK'
      | 'LOCK_CREATE'
      | 'LOCK_DESTROY'
      | 'LOGIN'
      | 'MASTER_INVITE_ACCEPT'
      | 'MASTER_INVITE_REJECT'
      | 'METADATA_INSTANCE_CREATE'
      | 'METADATA_INSTANCE_DELETE'
      | 'METADATA_INSTANCE_UPDATE'
      | 'METADATA_TEMPLATE_CREATE'
      | 'METADATA_TEMPLATE_DELETE'
      | 'METADATA_TEMPLATE_UPDATE'
      | 'MOVE'
      | 'NEW_USER'
      | 'PREVIEW'
      | 'REMOVE_DEVICE_ASSOCIATION'
      | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
      | 'RENAME'
      | 'RETENTION_POLICY_ASSIGNMENT_ADD'
      | 'SHARE'
      | 'SHARED_LINK_SEND'
      | 'SHARE_EXPIRATION'
      | 'SHIELD_ALERT'
      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
      | 'SHIELD_JUSTIFICATION_APPROVAL'
      | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
      | 'SIGN_DOCUMENT_ASSIGNED'
      | 'SIGN_DOCUMENT_CANCELLED'
      | 'SIGN_DOCUMENT_COMPLETED'
      | 'SIGN_DOCUMENT_CONVERTED'
      | 'SIGN_DOCUMENT_CREATED'
      | 'SIGN_DOCUMENT_DECLINED'
      | 'SIGN_DOCUMENT_EXPIRED'
      | 'SIGN_DOCUMENT_SIGNED'
      | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
      | 'SIGNER_DOWNLOADED'
      | 'SIGNER_FORWARDED'
      | 'STORAGE_EXPIRATION'
      | 'TAG_ITEM_CREATE'
      | 'TASK_ASSIGNMENT_CREATE'
      | 'TASK_ASSIGNMENT_DELETE'
      | 'TASK_ASSIGNMENT_UPDATE'
      | 'TASK_CREATE'
      | 'TASK_UPDATE'
      | 'TERMS_OF_SERVICE_ACCEPT'
      | 'TERMS_OF_SERVICE_REJECT'
      | 'UNDELETE'
      | 'UNLOCK'
      | 'UNSHARE'
      | 'UPDATE_COLLABORATION_EXPIRATION'
      | 'UPDATE_SHARE_EXPIRATION'
      | 'UPLOAD'
      | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
      | 'WATERMARK_LABEL_CREATE'
      | 'WATERMARK_LABEL_DELETE';

    /**
     * When the event object was recorded in database.
     */
    recorded_at?: string;

    /**
     * The session of the user that performed the action. Not all events will populate
     * this attribute.
     */
    session_id?: string;

    /**
     * The resource that triggered this event. For more information, check out the
     * guide on event triggers.
     */
    source?:
      | UsersAPI.User
      | Entry.EventSource
      | FilesAPI.File
      | FoldersAPI.Folder
      | { [key: string]: Entry.unnamed_schema_with_map_parent_0 }
      | Entry.AppItemEventSource;

    /**
     * The value will always be `event`.
     */
    type?: string;
  }

  export namespace Entry {
    /**
     * The source file or folder that triggered an event in the event stream.
     */
    export interface EventSource {
      /**
       * The unique identifier that represents the item.
       */
      item_id: string;

      /**
       * The name of the item.
       */
      item_name: string;

      /**
       * The type of the item that the event represents. Can be `file` or `folder`.
       */
      item_type: 'file' | 'folder';

      /**
       * The object containing classification information for the item that triggered the
       * event. This field will not appear if the item does not have a classification
       * set.
       */
      classification?: EventSource.Classification;

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      owned_by?: EventSource.OwnedBy;

      /**
       * A mini representation of a file version, used when nested under another
       * resource.
       */
      parent?: FilesAPI.FolderMini | null;
    }

    export namespace EventSource {
      /**
       * The object containing classification information for the item that triggered the
       * event. This field will not appear if the item does not have a classification
       * set.
       */
      export interface Classification {
        /**
         * The classification's name.
         */
        name?: string;
      }

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      export interface OwnedBy extends RetentionPoliciesAPI.UserMini {}
    }

    /**
     * A definition of a generic event source object. The set of parameters depends on
     * the object type. For example, a Box Shield event source would have the following
     * set of parameters:
     *
     * ````yaml
     * {
     * "barrier_id": 123456,
     * "barrier_status": "ENABLED",
     * "barrier_segments": [
     *   {
     *       "name": "8",
     *       "member_count": 1
     *     },
     *   {
     *       "name": "9",
     *       "member_count": 1
     *            }
     *        ]
     * }
     * ```.
     * ````
     */
    export interface unnamed_schema_with_map_parent_0 {}

    /**
     * The AppItem that triggered an event in the event stream.
     */
    export interface AppItemEventSource {
      /**
       * The id of the `AppItem`.
       */
      id: string;

      /**
       * The type of the `AppItem`.
       */
      app_item_type: string;

      /**
       * The type of the source that this event represents. Can only be `app_item`.
       */
      type: 'app_item';

      /**
       * Mini representation of a group, including id and name of group.
       */
      group?: GroupMembershipsAPI.GroupMini;

      /**
       * A mini representation of a user, as can be returned when nested within other
       * resources.
       */
      user?: RetentionPoliciesAPI.UserMini;
    }
  }
}

export interface EventListParams {
  /**
   * The lower bound date and time to return events for. This can only be used when
   * requesting the events with a `stream_type` of `admin_logs`. For any other
   * `stream_type` this value will be ignored.
   */
  created_after?: string;

  /**
   * The upper bound date and time to return events for. This can only be used when
   * requesting the events with a `stream_type` of `admin_logs`. For any other
   * `stream_type` this value will be ignored.
   */
  created_before?: string;

  /**
   * A comma-separated list of events to filter by. This can only be used when
   * requesting the events with a `stream_type` of `admin_logs` or
   * `adming_logs_streaming`. For any other `stream_type` this value will be ignored.
   */
  event_type?: Array<
    | 'ACCESS_GRANTED'
    | 'ACCESS_REVOKED'
    | 'ADD_DEVICE_ASSOCIATION'
    | 'ADD_LOGIN_ACTIVITY_DEVICE'
    | 'ADMIN_LOGIN'
    | 'APPLICATION_CREATED'
    | 'APPLICATION_PUBLIC_KEY_ADDED'
    | 'APPLICATION_PUBLIC_KEY_DELETED'
    | 'CHANGE_ADMIN_ROLE'
    | 'CHANGE_FOLDER_PERMISSION'
    | 'COLLABORATION_ACCEPT'
    | 'COLLABORATION_EXPIRATION'
    | 'COLLABORATION_INVITE'
    | 'COLLABORATION_REMOVE'
    | 'COLLABORATION_ROLE_CHANGE'
    | 'COMMENT_CREATE'
    | 'COMMENT_DELETE'
    | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
    | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
    | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
    | 'CONTENT_WORKFLOW_POLICY_ADD'
    | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
    | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
    | 'COPY'
    | 'DATA_RETENTION_CREATE_RETENTION'
    | 'DATA_RETENTION_REMOVE_RETENTION'
    | 'DELETE'
    | 'DELETE_USER'
    | 'DEVICE_TRUST_CHECK_FAILED'
    | 'DOWNLOAD'
    | 'EDIT'
    | 'EDIT_USER'
    | 'EMAIL_ALIAS_CONFIRM'
    | 'EMAIL_ALIAS_REMOVE'
    | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
    | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
    | 'FAILED_LOGIN'
    | 'FILE_MARKED_MALICIOUS'
    | 'FILE_WATERMARKED_DOWNLOAD'
    | 'GROUP_ADD_ITEM'
    | 'GROUP_ADD_USER'
    | 'GROUP_CREATION'
    | 'GROUP_DELETION'
    | 'GROUP_EDITED'
    | 'GROUP_REMOVE_ITEM'
    | 'GROUP_REMOVE_USER'
    | 'ITEM_EMAIL_SEND'
    | 'ITEM_MODIFY'
    | 'ITEM_OPEN'
    | 'ITEM_SHARED_UPDATE'
    | 'ITEM_SYNC'
    | 'ITEM_UNSYNC'
    | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
    | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
    | 'LEGAL_HOLD_POLICY_CREATE'
    | 'LEGAL_HOLD_POLICY_DELETE'
    | 'LEGAL_HOLD_POLICY_UPDATE'
    | 'LOCK'
    | 'LOGIN'
    | 'METADATA_INSTANCE_CREATE'
    | 'METADATA_INSTANCE_DELETE'
    | 'METADATA_INSTANCE_UPDATE'
    | 'METADATA_TEMPLATE_CREATE'
    | 'METADATA_TEMPLATE_DELETE'
    | 'METADATA_TEMPLATE_UPDATE'
    | 'MOVE'
    | 'NEW_USER'
    | 'OAUTH2_ACCESS_TOKEN_REVOKE'
    | 'PREVIEW'
    | 'REMOVE_DEVICE_ASSOCIATION'
    | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
    | 'RENAME'
    | 'RETENTION_POLICY_ASSIGNMENT_ADD'
    | 'SHARE'
    | 'SHARED_LINK_SEND'
    | 'SHARE_EXPIRATION'
    | 'SHIELD_ALERT'
    | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
    | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
    | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
    | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
    | 'SHIELD_JUSTIFICATION_APPROVAL'
    | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
    | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
    | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
    | 'SIGN_DOCUMENT_ASSIGNED'
    | 'SIGN_DOCUMENT_CANCELLED'
    | 'SIGN_DOCUMENT_COMPLETED'
    | 'SIGN_DOCUMENT_CONVERTED'
    | 'SIGN_DOCUMENT_CREATED'
    | 'SIGN_DOCUMENT_DECLINED'
    | 'SIGN_DOCUMENT_EXPIRED'
    | 'SIGN_DOCUMENT_SIGNED'
    | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
    | 'SIGNER_DOWNLOADED'
    | 'SIGNER_FORWARDED'
    | 'STORAGE_EXPIRATION'
    | 'TASK_ASSIGNMENT_CREATE'
    | 'TASK_ASSIGNMENT_DELETE'
    | 'TASK_ASSIGNMENT_UPDATE'
    | 'TASK_CREATE'
    | 'TASK_UPDATE'
    | 'TERMS_OF_SERVICE_ACCEPT'
    | 'TERMS_OF_SERVICE_REJECT'
    | 'UNDELETE'
    | 'UNLOCK'
    | 'UNSHARE'
    | 'UPDATE_COLLABORATION_EXPIRATION'
    | 'UPDATE_SHARE_EXPIRATION'
    | 'UPLOAD'
    | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
    | 'WATERMARK_LABEL_CREATE'
    | 'WATERMARK_LABEL_DELETE'
  >;

  /**
   * Limits the number of events returned.
   *
   * Note: Sometimes, the events less than the limit requested can be returned even
   * when there may be more events remaining. This is primarily done in the case
   * where a number of events have already been retrieved and these retrieved events
   * are returned rather than delaying for an unknown amount of time to see if there
   * are any more results.
   */
  limit?: number;

  /**
   * The location in the event stream to start receiving events from.
   *
   * - `now` will return an empty list events and the latest stream position for
   *   initialization.
   * - `0` or `null` will return all events.
   */
  stream_position?: string;

  /**
   * Defines the type of events that are returned
   *
   * - `all` returns everything for a user and is the default
   * - `changes` returns events that may cause file tree changes such as file updates
   *   or collaborations.
   * - `sync` is similar to `changes` but only applies to synced folders
   * - `admin_logs` returns all events for an entire enterprise and requires the user
   *   making the API call to have admin permissions. This stream type is for
   *   programmatically pulling from a 1 year history of events across all users
   *   within the enterprise and within a `created_after` and `created_before` time
   *   frame. The complete history of events will be returned in chronological order
   *   based on the event time, but latency will be much higher than
   *   `admin_logs_streaming`.
   * - `admin_logs_streaming` returns all events for an entire enterprise and
   *   requires the user making the API call to have admin permissions. This stream
   *   type is for polling for recent events across all users within the enterprise.
   *   Latency will be much lower than `admin_logs`, but events will not be returned
   *   in chronological order and may contain duplicates.
   */
  stream_type?: 'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming';
}

export declare namespace Events {
  export { type EventListResponse as EventListResponse, type EventListParams as EventListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows';
import * as RetentionPoliciesAPI from './retention-policies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Returns list of workflows that act on a given `folder ID`, and have a flow with
   * a trigger type of `WORKFLOW_MANUAL_START`.
   *
   * You application must be authorized to use the `Manage Box Relay` application
   * scope within the developer console in to use this endpoint.
   *
   * @example
   * ```ts
   * const workflows = await client.workflows.list({
   *   folder_id: 'folder_id',
   * });
   * ```
   */
  list(query: WorkflowListParams, options?: RequestOptions): APIPromise<WorkflowListResponse> {
    return this._client.get('/workflows', { query, ...options });
  }

  /**
   * Initiates a flow with a trigger type of `WORKFLOW_MANUAL_START`.
   *
   * You application must be authorized to use the `Manage Box Relay` application
   * scope within the developer console.
   *
   * @example
   * ```ts
   * await client.workflows.start('12345', {
   *   files: [{}],
   *   flow: {},
   *   folder: {},
   * });
   * ```
   */
  start(workflowID: string, body: WorkflowStartParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/workflows/${workflowID}/start`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A collaborator object. Allows to specify a list of user ID's that are affected
 * by the workflow result.
 */
export interface CollaboratorVariable {
  /**
   * Collaborator object type.
   */
  type: 'variable';

  /**
   * Variable type for the Collaborator object.
   */
  variable_type: 'user_list';

  /**
   * A list of user IDs.
   */
  variable_value: Array<CollaboratorVariable.VariableValue>;
}

export namespace CollaboratorVariable {
  /**
   * User variable used in workflow outcomes.
   */
  export interface VariableValue {
    /**
     * User's ID.
     */
    id: string;

    /**
     * The object type.
     */
    type: 'user';
  }
}

/**
 * Determines if the workflow outcome affects a specific collaborator role.
 */
export interface RoleVariable {
  /**
   * Role object type.
   */
  type: 'variable';

  /**
   * The variable type used by the object.
   */
  variable_type: 'collaborator_role';

  /**
   * The level of access granted.
   */
  variable_value:
    | 'editor'
    | 'viewer'
    | 'previewer'
    | 'uploader'
    | 'previewer uploader'
    | 'viewer uploader'
    | 'co-owner';
}

export interface WorkflowListResponse {
  /**
   * A list of workflows.
   */
  entries?: Array<WorkflowListResponse.Entry>;

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

export namespace WorkflowListResponse {
  export interface Entry {
    /**
     * The unique identifier for the workflow.
     */
    id?: string;

    /**
     * The description for a workflow.
     */
    description?: string;

    /**
     * A list of flows assigned to a workflow.
     */
    flows?: Array<Entry.Flow>;

    /**
     * Specifies if this workflow is enabled.
     */
    is_enabled?: boolean;

    /**
     * The name of the workflow.
     */
    name?: string;

    /**
     * The value will always be `workflow`.
     */
    type?: 'workflow';
  }

  export namespace Entry {
    /**
     * A step in a Box Relay Workflow. Each flow contains a `Trigger` and a collection
     * of Outcomes to perform once the conditions of a `Trigger` are met.
     */
    export interface Flow {
      /**
       * The identifier of the flow.
       */
      id?: string;

      /**
       * When this flow was created.
       */
      created_at?: string;

      /**
       * A mini representation of a user, used when nested within another resource.
       */
      created_by?: RetentionPoliciesAPI.UserBase;

      /**
       * Actions that are completed once the flow is triggered.
       */
      outcomes?: Array<Flow.Outcome>;

      /**
       * Trigger that initiates flow.
       */
      trigger?: Flow.Trigger;

      /**
       * The flow's resource type.
       */
      type?: 'flow';
    }

    export namespace Flow {
      /**
       * List of outcomes to perform once the conditions of trigger are met.
       */
      export interface Outcome {
        /**
         * The identifier of the outcome.
         */
        id?: string;

        /**
         * The type of outcome.
         */
        action_type?:
          | 'add_metadata'
          | 'assign_task'
          | 'copy_file'
          | 'copy_folder'
          | 'create_folder'
          | 'delete_file'
          | 'delete_folder'
          | 'lock_file'
          | 'move_file'
          | 'move_folder'
          | 'remove_watermark_file'
          | 'rename_folder'
          | 'restore_folder'
          | 'share_file'
          | 'share_folder'
          | 'unlock_file'
          | 'upload_file'
          | 'wait_for_task'
          | 'watermark_file'
          | 'go_back_to_step'
          | 'apply_file_classification'
          | 'apply_folder_classification'
          | 'send_notification';

        /**
         * If `action_type` is `assign_task` and the task is rejected, returns a list of
         * outcomes to complete.
         */
        if_rejected?: Array<Outcome.IfRejected>;

        /**
         * The name of the outcome.
         */
        name?: string;

        /**
         * The outcomes resource type.
         */
        type?: 'outcome';
      }

      export namespace Outcome {
        export interface IfRejected {
          /**
           * The identifier of the outcome.
           */
          id?: string;

          /**
           * The type of outcome.
           */
          action_type?:
            | 'add_metadata'
            | 'assign_task'
            | 'copy_file'
            | 'copy_folder'
            | 'create_folder'
            | 'delete_file'
            | 'delete_folder'
            | 'lock_file'
            | 'move_file'
            | 'move_folder'
            | 'remove_watermark_file'
            | 'rename_folder'
            | 'restore_folder'
            | 'share_file'
            | 'share_folder'
            | 'unlock_file'
            | 'upload_file'
            | 'wait_for_task'
            | 'watermark_file'
            | 'go_back_to_step'
            | 'apply_file_classification'
            | 'apply_folder_classification'
            | 'send_notification';

          /**
           * The name of the outcome.
           */
          name?: string;

          /**
           * The outcomes resource type.
           */
          type?: 'outcome';
        }
      }

      /**
       * Trigger that initiates flow.
       */
      export interface Trigger {
        /**
         * List of trigger scopes.
         */
        scope?: Array<Trigger.Scope>;

        /**
         * The type of trigger selected for this flow.
         */
        trigger_type?: 'WORKFLOW_MANUAL_START';

        /**
         * The trigger's resource type.
         */
        type?: 'trigger';
      }

      export namespace Trigger {
        /**
         * Object that describes where and how a Trigger condition is met.
         */
        export interface Scope {
          /**
           * The object the `ref` points to.
           */
          object?: Scope.Object;

          /**
           * Indicates the path of the condition value to check.
           */
          ref?: string;

          /**
           * The trigger scope's resource type.
           */
          type?: 'trigger_scope';
        }

        export namespace Scope {
          /**
           * The object the `ref` points to.
           */
          export interface Object {
            /**
             * The id of the object.
             */
            id?: string;

            /**
             * The type of the object.
             */
            type?: 'folder';
          }
        }
      }
    }
  }
}

export interface WorkflowListParams {
  /**
   * The unique identifier that represent a folder.
   *
   * The ID for any folder can be determined by visiting this folder in the web
   * application and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/folder/123` the `folder_id` is `123`.
   *
   * The root folder of a Box account is always represented by the ID `0`.
   */
  folder_id: string;

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
   * Type of trigger to search for.
   */
  trigger_type?: string;
}

export interface WorkflowStartParams {
  /**
   * The array of files for which the workflow should start. All files must be in the
   * workflow's configured folder.
   */
  files: Array<WorkflowStartParams.File>;

  /**
   * The flow that will be triggered.
   */
  flow: WorkflowStartParams.Flow;

  /**
   * The folder object for which the workflow is configured.
   */
  folder: WorkflowStartParams.Folder;

  /**
   * A configurable outcome the workflow should complete.
   */
  outcomes?: Array<WorkflowStartParams.Outcome>;

  /**
   * The type of the parameters object.
   */
  type?: 'workflow_parameters';
}

export namespace WorkflowStartParams {
  /**
   * A file the workflow should start for.
   */
  export interface File {
    /**
     * The id of the file.
     */
    id?: string;

    /**
     * The type of the file object.
     */
    type?: 'file';
  }

  /**
   * The flow that will be triggered.
   */
  export interface Flow {
    /**
     * The id of the flow.
     */
    id?: string;

    /**
     * The type of the flow object.
     */
    type?: string;
  }

  /**
   * The folder object for which the workflow is configured.
   */
  export interface Folder {
    /**
     * The id of the folder.
     */
    id?: string;

    /**
     * The type of the folder object.
     */
    type?: 'folder';
  }

  /**
   * An instance of an outcome.
   */
  export interface Outcome {
    /**
     * ID of a specific outcome.
     */
    id: string;

    /**
     * A collaborator object. Allows to specify a list of user ID's that are affected
     * by the workflow result.
     */
    collaborators?: WorkflowsAPI.CollaboratorVariable;

    /**
     * A completion rule object. Determines if an action should be completed by all or
     * any assignees.
     */
    completion_rule?: Outcome.CompletionRule;

    /**
     * Determines if the workflow outcome affects a specific collaborator role.
     */
    file_collaborator_role?: WorkflowsAPI.RoleVariable;

    /**
     * Determines if the workflow outcome affects a specific collaborator role.
     */
    role?: WorkflowsAPI.RoleVariable;

    /**
     * A collaborator object. Allows to specify a list of user ID's that are affected
     * by the workflow result.
     */
    task_collaborators?: WorkflowsAPI.CollaboratorVariable;
  }

  export namespace Outcome {
    /**
     * A completion rule object. Determines if an action should be completed by all or
     * any assignees.
     */
    export interface CompletionRule {
      /**
       * Completion Rule object type.
       */
      type: 'variable';

      /**
       * Variable type for the Completion Rule object.
       */
      variable_type: 'task_completion_rule';

      /**
       * Variable values for a completion rule.
       */
      variable_value: 'all_assignees' | 'any_assignees';
    }
  }
}

export declare namespace Workflows {
  export {
    type CollaboratorVariable as CollaboratorVariable,
    type RoleVariable as RoleVariable,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowStartParams as WorkflowStartParams,
  };
}

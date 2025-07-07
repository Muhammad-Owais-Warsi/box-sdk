// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as SignRequestsAPI from './sign-requests';
import * as TaskAssignmentsAPI from './task-assignments';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Creates a single task on a file. This task is not assigned to any user and will
   * need to be assigned separately.
   *
   * @example
   * ```ts
   * const task = await client.tasks.create({ item: {} });
   * ```
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<Task> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Retrieves information about a specific task.
   *
   * @example
   * ```ts
   * const task = await client.tasks.retrieve('12345');
   * ```
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<Task> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * Updates a task. This can be used to update a task's configuration, or to update
   * its completion state.
   *
   * @example
   * ```ts
   * const task = await client.tasks.update('12345');
   * ```
   */
  update(
    taskID: string,
    body: TaskUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Task> {
    return this._client.put(path`/tasks/${taskID}`, { body, ...options });
  }

  /**
   * Removes a task from a file.
   *
   * @example
   * ```ts
   * await client.tasks.delete('12345');
   * ```
   */
  delete(taskID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tasks/${taskID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all of the assignments for a given task.
   *
   * @example
   * ```ts
   * const taskAssignments = await client.tasks.listAssignments(
   *   '12345',
   * );
   * ```
   */
  listAssignments(taskID: string, options?: RequestOptions): APIPromise<TaskAssignments> {
    return this._client.get(path`/tasks/${taskID}/assignments`, options);
  }
}

/**
 * A mini representation of a file, used when nested under another resource.
 */
export type FileMini =
  | SignRequestsAPI.FileBase
  | (null & {
      /**
       * A mini representation of a file version, used when nested within another
       * resource.
       */
      file_version?: FilesAPI.FileVersionMini;

      /**
       * The name of the file.
       */
      name?: string;

      /**
       * A numeric identifier that represents the most recent user event that has been
       * applied to this item.
       *
       * This can be used in combination with the `GET /events`-endpoint to filter out
       * user events that would have occurred before this identifier was read.
       *
       * An example would be where a Box Drive-like application would fetch an item via
       * the API, and then listen to incoming user events for changes to the item. The
       * application would ignore any user events where the `sequence_id` in the event is
       * smaller than or equal to the `sequence_id` in the originally fetched resource.
       */
      sequence_id?: string | null;

      /**
       * The SHA1 hash of the file. This can be used to compare the contents of a file on
       * Box with a local file.
       */
      sha1?: string;
    });

/**
 * A task allows for file-centric workflows within Box. Users can create tasks on
 * files and assign them to other users for them to complete the tasks.
 */
export interface Task {
  /**
   * The unique identifier for this task.
   */
  id?: string;

  /**
   * The type of task the task assignee will be prompted to perform.
   */
  action?: 'review' | 'complete';

  /**
   * Defines which assignees need to complete this task before the task is considered
   * completed.
   *
   * - `all_assignees` requires all assignees to review or approve the the task in
   *   order for it to be considered completed.
   * - `any_assignee` accepts any one assignee to review or approve the the task in
   *   order for it to be considered completed.
   */
  completion_rule?: 'all_assignees' | 'any_assignee';

  /**
   * When the task object was created.
   */
  created_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  created_by?: RetentionPoliciesAPI.UserMini;

  /**
   * When the task is due.
   */
  due_at?: string;

  /**
   * Whether the task has been completed.
   */
  is_completed?: boolean;

  /**
   * A mini representation of a file, used when nested under another resource.
   */
  item?: FileMini | null;

  /**
   * A message that will be included with the task.
   */
  message?: string;

  /**
   * A list of task assignments.
   */
  task_assignment_collection?: TaskAssignments;

  /**
   * The value will always be `task`.
   */
  type?: 'task';
}

/**
 * A list of task assignments.
 */
export interface TaskAssignments {
  /**
   * A list of task assignments.
   */
  entries?: Array<TaskAssignmentsAPI.TaskAssignment>;

  /**
   * The total number of items in this collection.
   */
  total_count?: number;
}

export interface TaskCreateParams {
  /**
   * The file to attach the task to.
   */
  item: TaskCreateParams.Item;

  /**
   * The action the task assignee will be prompted to do. Must be
   *
   * - `review` defines an approval task that can be approved or, rejected
   * - `complete` defines a general task which can be completed.
   */
  action?: 'review' | 'complete';

  /**
   * Defines which assignees need to complete this task before the task is considered
   * completed.
   *
   * - `all_assignees` (default) requires all assignees to review or approve the the
   *   task in order for it to be considered completed.
   * - `any_assignee` accepts any one assignee to review or approve the the task in
   *   order for it to be considered completed.
   */
  completion_rule?: 'all_assignees' | 'any_assignee';

  /**
   * Defines when the task is due. Defaults to `null` if not provided.
   */
  due_at?: string;

  /**
   * An optional message to include with the task.
   */
  message?: string;
}

export namespace TaskCreateParams {
  /**
   * The file to attach the task to.
   */
  export interface Item {
    /**
     * The ID of the file.
     */
    id?: string;

    /**
     * The value will always be `file`.
     */
    type?: 'file';
  }
}

export interface TaskUpdateParams {
  /**
   * The action the task assignee will be prompted to do. Must be
   *
   * - `review` defines an approval task that can be approved or rejected,
   * - `complete` defines a general task which can be completed.
   */
  action?: 'review' | 'complete';

  /**
   * Defines which assignees need to complete this task before the task is considered
   * completed.
   *
   * - `all_assignees` (default) requires all assignees to review or approve the the
   *   task in order for it to be considered completed.
   * - `any_assignee` accepts any one assignee to review or approve the the task in
   *   order for it to be considered completed.
   */
  completion_rule?: 'all_assignees' | 'any_assignee';

  /**
   * When the task is due at.
   */
  due_at?: string;

  /**
   * The message included with the task.
   */
  message?: string;
}

export declare namespace Tasks {
  export {
    type FileMini as FileMini,
    type Task as Task,
    type TaskAssignments as TaskAssignments,
    type TaskCreateParams as TaskCreateParams,
    type TaskUpdateParams as TaskUpdateParams,
  };
}

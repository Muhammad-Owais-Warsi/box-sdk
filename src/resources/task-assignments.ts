// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RetentionPoliciesAPI from './retention-policies';
import * as TasksAPI from './tasks';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TaskAssignments extends APIResource {
  /**
   * Assigns a task to a user.
   *
   * A task can be assigned to more than one user by creating multiple assignments.
   *
   * @example
   * ```ts
   * const taskAssignment = await client.taskAssignments.create({
   *   assign_to: {},
   *   task: { id: '11446498', type: 'task' },
   * });
   * ```
   */
  create(body: TaskAssignmentCreateParams, options?: RequestOptions): APIPromise<TaskAssignment> {
    return this._client.post('/task_assignments', { body, ...options });
  }

  /**
   * Retrieves information about a task assignment.
   *
   * @example
   * ```ts
   * const taskAssignment =
   *   await client.taskAssignments.retrieve('12345');
   * ```
   */
  retrieve(taskAssignmentID: string, options?: RequestOptions): APIPromise<TaskAssignment> {
    return this._client.get(path`/task_assignments/${taskAssignmentID}`, options);
  }

  /**
   * Updates a task assignment. This endpoint can be used to update the state of a
   * task assigned to a user.
   *
   * @example
   * ```ts
   * const taskAssignment = await client.taskAssignments.update(
   *   '12345',
   * );
   * ```
   */
  update(
    taskAssignmentID: string,
    body: TaskAssignmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskAssignment> {
    return this._client.put(path`/task_assignments/${taskAssignmentID}`, { body, ...options });
  }

  /**
   * Deletes a specific task assignment.
   *
   * @example
   * ```ts
   * await client.taskAssignments.delete('12345');
   * ```
   */
  delete(taskAssignmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/task_assignments/${taskAssignmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A task assignment defines which task is assigned to which user to complete.
 */
export interface TaskAssignment {
  /**
   * The unique identifier for this task assignment.
   */
  id?: string;

  /**
   * The date at which this task was assigned to the user.
   */
  assigned_at?: string;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  assigned_by?: RetentionPoliciesAPI.UserMini;

  /**
   * A mini representation of a user, as can be returned when nested within other
   * resources.
   */
  assigned_to?: RetentionPoliciesAPI.UserMini;

  /**
   * The date at which this task assignment was completed. This will be `null` if the
   * task is not completed yet.
   */
  completed_at?: string;

  /**
   * A mini representation of a file, used when nested under another resource.
   */
  item?: TasksAPI.FileMini | null;

  /**
   * A message that will is included with the task assignment. This is visible to the
   * assigned user in the web and mobile UI.
   */
  message?: string;

  /**
   * The date at which the assigned user was reminded of this task assignment.
   */
  reminded_at?: string;

  /**
   * The current state of the assignment. The available states depend on the `action`
   * value of the task object.
   */
  resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected';

  /**
   * The value will always be `task_assignment`.
   */
  type?: 'task_assignment';
}

export interface TaskAssignmentCreateParams {
  /**
   * The user to assign the task to.
   */
  assign_to: TaskAssignmentCreateParams.AssignTo;

  /**
   * The task to assign to a user.
   */
  task: TaskAssignmentCreateParams.Task;
}

export namespace TaskAssignmentCreateParams {
  /**
   * The user to assign the task to.
   */
  export interface AssignTo {
    /**
     * The ID of the user to assign to the task.
     *
     * To specify a user by their email address use the `login` parameter.
     */
    id?: string;

    /**
     * The email address of the user to assign to the task. To specify a user by their
     * user ID please use the `id` parameter.
     */
    login?: string;
  }

  /**
   * The task to assign to a user.
   */
  export interface Task {
    /**
     * The ID of the task.
     */
    id: string;

    /**
     * The type of the item to assign.
     */
    type: 'task';
  }
}

export interface TaskAssignmentUpdateParams {
  /**
   * An optional message by the assignee that can be added to the task.
   */
  message?: string;

  /**
   * The state of the task assigned to the user.
   *
   * - For a task with an `action` value of `complete` this can be `incomplete` or
   *   `completed`.
   * - For a task with an `action` of `review` this can be `incomplete`, `approved`,
   *   or `rejected`.
   */
  resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected';
}

export declare namespace TaskAssignments {
  export {
    type TaskAssignment as TaskAssignment,
    type TaskAssignmentCreateParams as TaskAssignmentCreateParams,
    type TaskAssignmentUpdateParams as TaskAssignmentUpdateParams,
  };
}

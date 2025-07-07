// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BoxSkillsCardsAPI from './files/metadata/global/box-skills-cards';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SkillInvocations extends APIResource {
  /**
   * An alternative method that can be used to overwrite and update all Box Skill
   * metadata cards on a file.
   *
   * @example
   * ```ts
   * await client.skillInvocations.update('33243242', {
   *   file: {},
   *   metadata: {},
   *   status: 'success',
   * });
   * ```
   */
  update(skillID: string, body: SkillInvocationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/skill_invocations/${skillID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SkillInvocationUpdateParams {
  /**
   * The file to assign the cards to.
   */
  file: SkillInvocationUpdateParams.File;

  /**
   * The metadata to set for this skill. This is a list of Box Skills cards. These
   * cards will overwrite any existing Box skill cards on the file.
   */
  metadata: SkillInvocationUpdateParams.Metadata;

  /**
   * Defines the status of this invocation. Set this to `success` when setting Skill
   * cards.
   */
  status: 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure';

  /**
   * The optional file version to assign the cards to.
   */
  file_version?: SkillInvocationUpdateParams.FileVersion;

  /**
   * A descriptor that defines what items are affected by this call.
   *
   * Set this to the default values when setting a card to a `success` state, and
   * leave it out in most other situations.
   */
  usage?: SkillInvocationUpdateParams.Usage;
}

export namespace SkillInvocationUpdateParams {
  /**
   * The file to assign the cards to.
   */
  export interface File {
    /**
     * The ID of the file.
     */
    id?: string;

    /**
     * The value will always be `file`.
     */
    type?: 'file';
  }

  /**
   * The metadata to set for this skill. This is a list of Box Skills cards. These
   * cards will overwrite any existing Box skill cards on the file.
   */
  export interface Metadata {
    /**
     * A list of Box Skill cards to apply to this file.
     */
    cards?: Array<
      | BoxSkillsCardsAPI.KeywordSkillCard
      | BoxSkillsCardsAPI.TimelineSkillCard
      | BoxSkillsCardsAPI.TranscriptSkillCard
      | BoxSkillsCardsAPI.StatusSkillCard
    >;
  }

  /**
   * The optional file version to assign the cards to.
   */
  export interface FileVersion {
    /**
     * The ID of the file version.
     */
    id?: string;

    /**
     * The value will always be `file_version`.
     */
    type?: 'file_version';
  }

  /**
   * A descriptor that defines what items are affected by this call.
   *
   * Set this to the default values when setting a card to a `success` state, and
   * leave it out in most other situations.
   */
  export interface Usage {
    /**
     * The value will always be `file`.
     */
    unit?: string;

    /**
     * Number of resources affected.
     */
    value?: number;
  }
}

export declare namespace SkillInvocations {
  export { type SkillInvocationUpdateParams as SkillInvocationUpdateParams };
}

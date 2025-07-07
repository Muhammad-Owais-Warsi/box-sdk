// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BoxSkillsCardsAPI from './box-skills-cards';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BoxSkillsCards extends APIResource {
  /**
   * Applies one or more Box Skills metadata cards to a file.
   *
   * @example
   * ```ts
   * const skillCardsMetadata =
   *   await client.files.metadata.global.boxSkillsCards.create(
   *     '12345',
   *     {
   *       cards: [
   *         {
   *           entries: [{}],
   *           invocation: {
   *             id: 'image-recognition-service-123',
   *             type: 'skill_invocation',
   *           },
   *           skill: {
   *             id: 'image-recognition-service',
   *             type: 'service',
   *           },
   *           skill_card_type: 'keyword',
   *           type: 'skill_card',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    fileID: string,
    body: BoxSkillsCardCreateParams,
    options?: RequestOptions,
  ): APIPromise<SkillCardsMetadata> {
    return this._client.post(path`/files/${fileID}/metadata/global/boxSkillsCards`, { body, ...options });
  }

  /**
   * Updates one or more Box Skills metadata cards to a file.
   *
   * @example
   * ```ts
   * const skillCardsMetadata =
   *   await client.files.metadata.global.boxSkillsCards.update(
   *     '12345',
   *   );
   * ```
   */
  update(
    fileID: string,
    params: BoxSkillsCardUpdateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<SkillCardsMetadata> {
    const { body } = params ?? {};
    return this._client.put(path`/files/${fileID}/metadata/global/boxSkillsCards`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }

  /**
   * List the Box Skills metadata cards that are attached to a file.
   *
   * @example
   * ```ts
   * const skillCardsMetadata =
   *   await client.files.metadata.global.boxSkillsCards.list(
   *     '12345',
   *   );
   * ```
   */
  list(fileID: string, options?: RequestOptions): APIPromise<SkillCardsMetadata> {
    return this._client.get(path`/files/${fileID}/metadata/global/boxSkillsCards`, options);
  }

  /**
   * Removes any Box Skills cards metadata from a file.
   *
   * @example
   * ```ts
   * await client.files.metadata.global.boxSkillsCards.remove(
   *   '12345',
   * );
   * ```
   */
  remove(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/${fileID}/metadata/global/boxSkillsCards`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A skill card that contains a set of keywords.
 */
export interface KeywordSkillCard {
  /**
   * An list of entries in the metadata card.
   */
  entries: Array<KeywordSkillCard.Entry>;

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  invocation: KeywordSkillCard.Invocation;

  /**
   * The service that applied this metadata.
   */
  skill: KeywordSkillCard.Skill;

  /**
   * The value will always be `keyword`.
   */
  skill_card_type: 'keyword';

  /**
   * The value will always be `skill_card`.
   */
  type: 'skill_card';

  /**
   * The optional date and time this card was created at.
   */
  created_at?: string;

  /**
   * The title of the card.
   */
  skill_card_title?: KeywordSkillCard.SkillCardTitle;
}

export namespace KeywordSkillCard {
  /**
   * An entry in the `entries` attribute of a metadata card.
   */
  export interface Entry {
    /**
     * The text of the keyword.
     */
    text?: string;
  }

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  export interface Invocation {
    /**
     * A custom identifier that represent the instance of the service that applied this
     * metadata. For example, if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of the node that was used to
     * apply the metadata.
     */
    id: string;

    /**
     * The value will always be `skill_invocation`.
     */
    type: 'skill_invocation';
  }

  /**
   * The service that applied this metadata.
   */
  export interface Skill {
    /**
     * A custom identifier that represent the service that applied this metadata.
     */
    id: string;

    /**
     * The value will always be `service`.
     */
    type: 'service';
  }

  /**
   * The title of the card.
   */
  export interface SkillCardTitle {
    /**
     * The actual title to show in the UI.
     */
    message: string;

    /**
     * An optional identifier for the title.
     */
    code?: string;
  }
}

/**
 * The metadata assigned to a using for Box skills.
 */
export interface SkillCardsMetadata {
  /**
   * Whether the user can edit this metadata.
   */
  $canEdit?: boolean;

  /**
   * A UUID to identify the metadata object.
   */
  $id?: string;

  /**
   * An ID for the parent folder.
   */
  $parent?: string;

  /**
   * An ID for the scope in which this template has been applied.
   */
  $scope?: string;

  /**
   * The name of the template.
   */
  $template?: string;

  /**
   * A unique identifier for the "type" of this instance. This is an internal system
   * property and should not be used by a client application.
   */
  $type?: string;

  /**
   * The last-known version of the template of the object. This is an internal system
   * property and should not be used by a client application.
   */
  $typeVersion?: number;

  /**
   * The version of the metadata object. Starts at 0 and increases every time a
   * user-defined property is modified.
   */
  $version?: number;

  /**
   * A list of Box Skill cards that have been applied to this file.
   */
  cards?: Array<KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard>;
}

/**
 * A Box Skill metadata card that puts a status message in the metadata sidebar.
 */
export interface StatusSkillCard {
  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  invocation: StatusSkillCard.Invocation;

  /**
   * The service that applied this metadata.
   */
  skill: StatusSkillCard.Skill;

  /**
   * The value will always be `status`.
   */
  skill_card_type: 'status';

  /**
   * Sets the status of the skill. This can be used to show a message to the user
   * while the Skill is processing the data, or if it was not able to process the
   * file.
   */
  status: StatusSkillCard.Status;

  /**
   * The value will always be `skill_card`.
   */
  type: 'skill_card';

  /**
   * The optional date and time this card was created at.
   */
  created_at?: string;

  /**
   * The title of the card.
   */
  skill_card_title?: StatusSkillCard.SkillCardTitle;
}

export namespace StatusSkillCard {
  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  export interface Invocation {
    /**
     * A custom identifier that represent the instance of the service that applied this
     * metadata. For example, if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of the node that was used to
     * apply the metadata.
     */
    id: string;

    /**
     * The value will always be `skill_invocation`.
     */
    type: 'skill_invocation';
  }

  /**
   * The service that applied this metadata.
   */
  export interface Skill {
    /**
     * A custom identifier that represent the service that applied this metadata.
     */
    id: string;

    /**
     * The value will always be `service`.
     */
    type: 'service';
  }

  /**
   * Sets the status of the skill. This can be used to show a message to the user
   * while the Skill is processing the data, or if it was not able to process the
   * file.
   */
  export interface Status {
    /**
     * A code for the status of this Skill invocation. By default each of these will
     * have their own accompanied messages. These can be adjusted by setting the
     * `message` value on this object.
     */
    code: 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure';

    /**
     * A custom message that can be provided with this status. This will be shown in
     * the web app to the end user.
     */
    message?: string;
  }

  /**
   * The title of the card.
   */
  export interface SkillCardTitle {
    /**
     * The actual title to show in the UI.
     */
    message: string;

    /**
     * An optional identifier for the title.
     */
    code?: string;
  }
}

/**
 * A Box Skill metadata card that places a list of images on a timeline.
 */
export interface TimelineSkillCard {
  /**
   * A list of entries on the timeline.
   */
  entries: Array<TimelineSkillCard.Entry>;

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  invocation: TimelineSkillCard.Invocation;

  /**
   * The service that applied this metadata.
   */
  skill: TimelineSkillCard.Skill;

  /**
   * The value will always be `timeline`.
   */
  skill_card_type: 'timeline';

  /**
   * The value will always be `skill_card`.
   */
  type: 'skill_card';

  /**
   * The optional date and time this card was created at.
   */
  created_at?: string;

  /**
   * An total duration in seconds of the timeline.
   */
  duration?: number;

  /**
   * The title of the card.
   */
  skill_card_title?: TimelineSkillCard.SkillCardTitle;
}

export namespace TimelineSkillCard {
  /**
   * An single item that's placed on multiple items on the timeline.
   */
  export interface Entry {
    /**
     * Defines a list of timestamps for when this item should appear on the timeline.
     */
    appears?: Array<Entry.Appear>;

    /**
     * The image to show on a for an entry that appears on a timeline. This image URL
     * is required for every entry.
     *
     * The image will be shown in a list of items (for example faces), and clicking the
     * image will show the user where that entry appears during the duration of this
     * entry.
     */
    image_url?: string;

    /**
     * The text of the entry. This would be the display name for an item being placed
     * on the timeline, for example the name of the person who was detected in a video.
     */
    text?: string;
  }

  export namespace Entry {
    /**
     * The timestamp for an entry.
     */
    export interface Appear {
      /**
       * The time in seconds when an entry should stop appearing on a timeline.
       */
      end?: number;

      /**
       * The time in seconds when an entry should start appearing on a timeline.
       */
      start?: number;
    }
  }

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  export interface Invocation {
    /**
     * A custom identifier that represent the instance of the service that applied this
     * metadata. For example, if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of the node that was used to
     * apply the metadata.
     */
    id: string;

    /**
     * The value will always be `skill_invocation`.
     */
    type: 'skill_invocation';
  }

  /**
   * The service that applied this metadata.
   */
  export interface Skill {
    /**
     * A custom identifier that represent the service that applied this metadata.
     */
    id: string;

    /**
     * The value will always be `service`.
     */
    type: 'service';
  }

  /**
   * The title of the card.
   */
  export interface SkillCardTitle {
    /**
     * The actual title to show in the UI.
     */
    message: string;

    /**
     * An optional identifier for the title.
     */
    code?: string;
  }
}

/**
 * A Box Skill metadata card that adds a transcript to a file.
 */
export interface TranscriptSkillCard {
  /**
   * An list of entries for the card. This represents the individual entries of the
   * transcription.
   */
  entries: Array<TranscriptSkillCard.Entry>;

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  invocation: TranscriptSkillCard.Invocation;

  /**
   * The service that applied this metadata.
   */
  skill: TranscriptSkillCard.Skill;

  /**
   * The value will always be `transcript`.
   */
  skill_card_type: 'transcript';

  /**
   * The value will always be `skill_card`.
   */
  type: 'skill_card';

  /**
   * The optional date and time this card was created at.
   */
  created_at?: string;

  /**
   * An optional total duration in seconds.
   *
   * Used with a `skill_card_type` of `transcript` or `timeline`.
   */
  duration?: number;

  /**
   * The title of the card.
   */
  skill_card_title?: TranscriptSkillCard.SkillCardTitle;
}

export namespace TranscriptSkillCard {
  /**
   * An entry in the `entries` attribute of a metadata card.
   */
  export interface Entry {
    /**
     * Defines when a transcribed bit of text appears. This only includes a start time
     * and no end time.
     */
    appears?: Array<Entry.Appear>;

    /**
     * The text of the entry. This would be the transcribed text assigned to the entry
     * on the timeline.
     */
    text?: string;
  }

  export namespace Entry {
    /**
     * The timestamp for an entry.
     */
    export interface Appear {
      /**
       * The time in seconds when an entry should start appearing on a timeline.
       */
      start?: number;
    }
  }

  /**
   * The invocation of this service, used to track which instance of a service
   * applied the metadata.
   */
  export interface Invocation {
    /**
     * A custom identifier that represent the instance of the service that applied this
     * metadata. For example, if your `image-recognition-service` runs on multiple
     * nodes, this field can be used to identify the ID of the node that was used to
     * apply the metadata.
     */
    id: string;

    /**
     * The value will always be `skill_invocation`.
     */
    type: 'skill_invocation';
  }

  /**
   * The service that applied this metadata.
   */
  export interface Skill {
    /**
     * A custom identifier that represent the service that applied this metadata.
     */
    id: string;

    /**
     * The value will always be `service`.
     */
    type: 'service';
  }

  /**
   * The title of the card.
   */
  export interface SkillCardTitle {
    /**
     * The actual title to show in the UI.
     */
    message: string;

    /**
     * An optional identifier for the title.
     */
    code?: string;
  }
}

export interface BoxSkillsCardCreateParams {
  /**
   * A list of Box Skill cards to apply to this file.
   */
  cards: Array<KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard>;
}

export interface BoxSkillsCardUpdateParams {
  /**
   * A [JSON-Patch](https://tools.ietf.org/html/rfc6902) specification for the
   * changes to make to the metadata template.
   *
   * The changes are represented as a JSON array of operation objects.
   */
  body?: Array<BoxSkillsCardUpdateParams.Body>;
}

export namespace BoxSkillsCardUpdateParams {
  /**
   * An operation that replaces an existing card.
   */
  export interface Body {
    /**
     * The value will always be `replace`.
     */
    op?: 'replace';

    /**
     * The JSON Path that represents the card to replace. In most cases this will be in
     * the format `/cards/{index}` where `index` is the zero-indexed position of the
     * card in the list of cards.
     */
    path?: string;

    /**
     * The card to insert into the list of cards at the position defined by `path`.
     */
    value?:
      | BoxSkillsCardsAPI.KeywordSkillCard
      | BoxSkillsCardsAPI.TimelineSkillCard
      | BoxSkillsCardsAPI.TranscriptSkillCard
      | BoxSkillsCardsAPI.StatusSkillCard;
  }
}

export declare namespace BoxSkillsCards {
  export {
    type KeywordSkillCard as KeywordSkillCard,
    type SkillCardsMetadata as SkillCardsMetadata,
    type StatusSkillCard as StatusSkillCard,
    type TimelineSkillCard as TimelineSkillCard,
    type TranscriptSkillCard as TranscriptSkillCard,
    type BoxSkillsCardCreateParams as BoxSkillsCardCreateParams,
    type BoxSkillsCardUpdateParams as BoxSkillsCardUpdateParams,
  };
}

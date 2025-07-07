// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class SecurityClassification6VmVochwUWo extends APIResource {
  /**
   * Retrieves the classification metadata template and lists all the classifications
   * available to this enterprise.
   *
   * This API can also be called by including the enterprise ID in the URL
   * explicitly, for example
   * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
   *
   * @example
   * ```ts
   * const classificationTemplate =
   *   await client.metadataTemplates.enterprise.securityClassification6VmVochwUWo.listClassifications();
   * ```
   */
  listClassifications(options?: RequestOptions): APIPromise<ClassificationTemplate> {
    return this._client.get(
      '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema',
      options,
    );
  }
}

/**
 * A metadata template that holds the security classifications defined by an
 * enterprise.
 */
export interface ClassificationTemplate {
  /**
   * The ID of the classification template.
   */
  id: string;

  /**
   * The name of this template as shown in web and mobile interfaces.
   */
  displayName: 'Classification';

  /**
   * A list of fields for this classification template. This includes only one field,
   * the `Box__Security__Classification__Key`, which defines the different
   * classifications available in this enterprise.
   */
  fields: Array<ClassificationTemplate.Field>;

  /**
   * The scope of the classification template. This is in the format
   * `enterprise_{id}` where the `id` is the enterprise ID.
   */
  scope: string;

  /**
   * The value will always be `securityClassification-6VMVochwUWo`.
   */
  templateKey: 'securityClassification-6VMVochwUWo';

  /**
   * The value will always be `metadata_template`.
   */
  type: 'metadata_template';

  /**
   * Determines if classifications are copied along when the file or folder is
   * copied.
   */
  copyInstanceOnItemCopy?: boolean;

  /**
   * Determines if the template is always available in web and mobile interfaces.
   */
  hidden?: boolean;
}

export namespace ClassificationTemplate {
  /**
   * The metadata template field that represents the available classifications.
   */
  export interface Field {
    /**
     * The unique ID of the field.
     */
    id: string;

    /**
     * The value will always be `Classification`.
     */
    displayName: 'Classification';

    /**
     * Defines classifications available in the enterprise.
     */
    key: 'Box__Security__Classification__Key';

    /**
     * A list of classifications available in this enterprise.
     */
    options: Array<Field.Option>;

    /**
     * The array item type.
     */
    type: 'enum';

    /**
     * Classifications are always visible to web and mobile users.
     */
    hidden?: boolean;
  }

  export namespace Field {
    /**
     * A single classification available in this enterprise.
     */
    export interface Option {
      /**
       * The unique ID of this classification.
       */
      id: string;

      /**
       * The display name and key for this classification.
       */
      key: string;

      /**
       * Additional information about the classification.
       */
      staticConfig?: Option.StaticConfig;
    }

    export namespace Option {
      /**
       * Additional information about the classification.
       */
      export interface StaticConfig {
        /**
         * Additional information about the classification.
         *
         * This is not an exclusive list of properties, and more object fields might be
         * returned. These fields are used for internal Box Shield and Box Governance
         * purposes and no additional value must be derived from these fields.
         */
        classification?: StaticConfig.Classification;
      }

      export namespace StaticConfig {
        /**
         * Additional information about the classification.
         *
         * This is not an exclusive list of properties, and more object fields might be
         * returned. These fields are used for internal Box Shield and Box Governance
         * purposes and no additional value must be derived from these fields.
         */
        export interface Classification {
          /**
           * A longer description of the classification.
           */
          classificationDefinition?: string;

          /**
           * An internal Box identifier used to assign a color to a classification label.
           *
           * Mapping between a `colorID` and a color may change without notice. Currently,
           * the color mappings are as follows.
           *
           * - `0`: Yellow.
           * - `1`: Orange.
           * - `2`: Watermelon red.
           * - `3`: Purple rain.
           * - `4`: Light blue.
           * - `5`: Dark blue.
           * - `6`: Light green.
           * - `7`: Gray.
           */
          colorID?: number;
        }
      }
    }
  }
}

export declare namespace SecurityClassification6VmVochwUWo {
  export { type ClassificationTemplate as ClassificationTemplate };
}

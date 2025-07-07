// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schema extends APIResource {
  /**
   * Creates a new metadata template that can be applied to files and folders.
   *
   * @example
   * ```ts
   * const metadataTemplate =
   *   await client.metadataTemplates.schema.create({
   *     displayName: 'Product Info',
   *     scope: 'enterprise',
   *   });
   * ```
   */
  create(body: SchemaCreateParams, options?: RequestOptions): APIPromise<MetadataTemplate> {
    return this._client.post('/metadata_templates/schema', { body, ...options });
  }

  /**
   * Retrieves a metadata template by its `scope` and `templateKey` values.
   *
   * To find the `scope` and `templateKey` for a template, list all templates for an
   * enterprise or globally, or list all templates applied to a file or folder.
   *
   * @example
   * ```ts
   * const metadataTemplate =
   *   await client.metadataTemplates.schema.retrieve(
   *     'properties',
   *     { scope: 'global' },
   *   );
   * ```
   */
  retrieve(
    templateKey: string,
    params: SchemaRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MetadataTemplate> {
    const { scope } = params;
    return this._client.get(path`/metadata_templates/${scope}/${templateKey}/schema`, options);
  }

  /**
   * Updates a metadata template.
   *
   * The metadata template can only be updated if the template already exists.
   *
   * The update is applied atomically. If any errors occur during the application of
   * the operations, the metadata template will not be changed.
   *
   * @example
   * ```ts
   * const metadataTemplate =
   *   await client.metadataTemplates.schema.update(
   *     'properties',
   *     { scope: 'global' },
   *   );
   * ```
   */
  update(
    templateKey: string,
    params: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MetadataTemplate> {
    const { scope, body } = params;
    return this._client.put(path`/metadata_templates/${scope}/${templateKey}/schema`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/json-patch+json' }, options?.headers]),
    });
  }

  /**
   * Delete a metadata template and its instances. This deletion is permanent and can
   * not be reversed.
   *
   * @example
   * ```ts
   * await client.metadataTemplates.schema.delete('properties', {
   *   scope: 'global',
   * });
   * ```
   */
  delete(templateKey: string, params: SchemaDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { scope } = params;
    return this._client.delete(path`/metadata_templates/${scope}/${templateKey}/schema`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A template for metadata that can be applied to files and folders.
 */
export interface MetadataTemplate {
  /**
   * The ID of the metadata template.
   */
  id: string;

  /**
   * The value will always be `metadata_template`.
   */
  type: 'metadata_template';

  /**
   * Whether or not to include the metadata when a file or folder is copied.
   */
  copyInstanceOnItemCopy?: boolean;

  /**
   * The display name of the template. This can be seen in the Box web app and mobile
   * apps.
   */
  displayName?: string;

  /**
   * An ordered list of template fields which are part of the template. Each field
   * can be a regular text field, date field, number field, as well as a single or
   * multi-select list.
   */
  fields?: Array<MetadataTemplate.Field>;

  /**
   * Defines if this template is visible in the Box web app UI, or if it is purely
   * intended for usage through the API.
   */
  hidden?: boolean;

  /**
   * The scope of the metadata template can either be `global` or `enterprise_*`. The
   * `global` scope is used for templates that are available to any Box enterprise.
   * The `enterprise_*` scope represents templates that have been created within a
   * specific enterprise, where `*` will be the ID of that enterprise.
   */
  scope?: string;

  /**
   * A unique identifier for the template. This identifier is unique across the
   * `scope` of the enterprise to which the metadata template is being applied, yet
   * is not necessarily unique across different enterprises.
   */
  templateKey?: string;
}

export namespace MetadataTemplate {
  export interface Field {
    /**
     * The display name of the field as it is shown to the user in the web and mobile
     * apps.
     */
    displayName: string;

    /**
     * A unique identifier for the field. The identifier must be unique within the
     * template to which it belongs.
     */
    key: string;

    /**
     * The type of field. The basic fields are a `string` field for text, a `float`
     * field for numbers, and a `date` fields to present the user with a date-time
     * picker.
     *
     * Additionally, metadata templates support an `enum` field for a basic list of
     * items, and ` multiSelect` field for a similar list of items where the user can
     * select more than one value.
     *
     * **Note**: The `integer` value is deprecated. It is still present in the
     * response, but cannot be used in the POST request.
     */
    type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'integer';

    /**
     * The unique ID of the metadata template field.
     */
    id?: string;

    /**
     * A description of the field. This is not shown to the user.
     */
    description?: string;

    /**
     * Whether this field is hidden in the UI for the user and can only be set through
     * the API instead.
     */
    hidden?: boolean;

    /**
     * A list of options for this field. This is used in combination with the `enum`
     * and `multiSelect` field types.
     */
    options?: Array<unknown>;
  }
}

export interface SchemaCreateParams {
  /**
   * The display name of the template.
   */
  displayName: string;

  /**
   * The scope of the metadata template to create. Applications can only create
   * templates for use within the authenticated user's enterprise.
   *
   * This value needs to be set to `enterprise`, as `global` scopes can not be
   * created by applications.
   */
  scope: string;

  /**
   * Whether or not to copy any metadata attached to a file or folder when it is
   * copied. By default, metadata is not copied along with a file or folder when it
   * is copied.
   */
  copyInstanceOnItemCopy?: boolean;

  /**
   * An ordered list of template fields which are part of the template. Each field
   * can be a regular text field, date field, number field, as well as a single or
   * multi-select list.
   */
  fields?: Array<SchemaCreateParams.Field>;

  /**
   * Defines if this template is visible in the Box web app UI, or if it is purely
   * intended for usage through the API.
   */
  hidden?: boolean;

  /**
   * A unique identifier for the template. This identifier needs to be unique across
   * the enterprise for which the metadata template is being created.
   *
   * When not provided, the API will create a unique `templateKey` based on the value
   * of the `displayName`.
   */
  templateKey?: string;
}

export namespace SchemaCreateParams {
  /**
   * A field within a metadata template. Fields can be a basic text, date, or number
   * field, or a list of options.
   */
  export interface Field {
    /**
     * The display name of the field as it is shown to the user in the web and mobile
     * apps.
     */
    displayName: string;

    /**
     * A unique identifier for the field. The identifier must be unique within the
     * template to which it belongs.
     */
    key: string;

    /**
     * The type of field. The basic fields are a `string` field for text, a `float`
     * field for numbers, and a `date` fields to present the user with a date-time
     * picker.
     *
     * Additionally, metadata templates support an `enum` field for a basic list of
     * items, and ` multiSelect` field for a similar list of items where the user can
     * select more than one value.
     */
    type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect';

    /**
     * A description of the field. This is not shown to the user.
     */
    description?: string;

    /**
     * Whether this field is hidden in the UI for the user and can only be set through
     * the API instead.
     */
    hidden?: boolean;

    /**
     * A list of options for this field. This is used in combination with the `enum`
     * and `multiSelect` field types.
     */
    options?: Array<Field.Option>;
  }

  export namespace Field {
    /**
     * An option for a Metadata Template Field.
     *
     * Options only need to be provided for fields of type `enum` and `multiSelect`.
     * Options represent the value(s) a user can select for the field either through
     * the UI or through the API.
     */
    export interface Option {
      /**
       * The text value of the option. This represents both the display name of the
       * option and the internal key used when updating templates.
       */
      key: string;
    }
  }
}

export interface SchemaRetrieveParams {
  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

export interface SchemaUpdateParams {
  /**
   * Path param: The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';

  /**
   * Body param: A [JSON-Patch](https://tools.ietf.org/html/rfc6902) specification
   * for the changes to make to the metadata template.
   *
   * The changes are represented as a JSON array of operation objects.
   */
  body?: Array<SchemaUpdateParams.Body>;
}

export namespace SchemaUpdateParams {
  /**
   * A [JSON-Patch](https://tools.ietf.org/html/rfc6902) operation for a change to
   * make to the metadata instance.
   */
  export interface Body {
    /**
     * The type of change to perform on the template. Some of these are hazardous as
     * they will change existing templates.
     */
    op:
      | 'editTemplate'
      | 'addField'
      | 'reorderFields'
      | 'addEnumOption'
      | 'reorderEnumOptions'
      | 'reorderMultiSelectOptions'
      | 'addMultiSelectOption'
      | 'editField'
      | 'removeField'
      | 'editEnumOption'
      | 'removeEnumOption'
      | 'editMultiSelectOption'
      | 'removeMultiSelectOption';

    /**
     * The data for the operation. This will vary depending on the operation being
     * performed.
     */
    data?: { [key: string]: Body.Data };

    /**
     * For operations that affect a single `enum` option this defines the key of the
     * option that is affected.
     */
    enumOptionKey?: string;

    /**
     * For operations that affect multiple `enum` options this defines the keys of the
     * options that are affected.
     */
    enumOptionKeys?: Array<string>;

    /**
     * For operations that affect a single field this defines the key of the field that
     * is affected.
     */
    fieldKey?: string;

    /**
     * For operations that affect multiple fields this defines the keys of the fields
     * that are affected.
     */
    fieldKeys?: Array<string>;

    /**
     * For operations that affect a single multi select option this defines the key of
     * the option that is affected.
     */
    multiSelectOptionKey?: string;

    /**
     * For operations that affect multiple multi select options this defines the keys
     * of the options that are affected.
     */
    multiSelectOptionKeys?: Array<string>;
  }

  export namespace Body {
    /**
     * A value for each of the fields that are present on the metadata template. For
     * the `global.properties` template this can be a list of zero or more fields, as
     * this template allows for any generic key-value pairs to be stored stored in the
     * template.
     */
    export interface Data {}
  }
}

export interface SchemaDeleteParams {
  /**
   * The scope of the metadata template.
   */
  scope: 'global' | 'enterprise';
}

export declare namespace Schema {
  export {
    type MetadataTemplate as MetadataTemplate,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaRetrieveParams as SchemaRetrieveParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };
}

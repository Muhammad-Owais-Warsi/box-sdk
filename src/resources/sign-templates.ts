// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SignRequestsAPI from './sign-requests';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SignTemplates extends APIResource {
  /**
   * Fetches details of a specific Box Sign template.
   *
   * @example
   * ```ts
   * const signTemplate = await client.signTemplates.retrieve(
   *   '123075213-7d117509-8f05-42e4-a5ef-5190a319d41d',
   * );
   * ```
   */
  retrieve(templateID: string, options?: RequestOptions): APIPromise<SignTemplate> {
    return this._client.get(path`/sign_templates/${templateID}`, options);
  }

  /**
   * Gets Box Sign templates created by a user.
   *
   * @example
   * ```ts
   * const signTemplates = await client.signTemplates.list();
   * ```
   */
  list(
    query: SignTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SignTemplateListResponse> {
    return this._client.get('/sign_templates', { query, ...options });
  }
}

/**
 * A Box Sign template object.
 */
export interface SignTemplate {
  /**
   * Template identifier.
   */
  id?: string;

  /**
   * Additional information on which fields are required and which fields are not
   * editable.
   */
  additional_info?: SignTemplate.AdditionalInfo;

  /**
   * Indicates if the template email settings are editable or not.
   */
  are_email_settings_locked?: boolean;

  /**
   * Indicates if the template input fields are editable or not.
   */
  are_fields_locked?: boolean;

  /**
   * Indicates if the template files are editable or not. This includes deleting or
   * renaming template files.
   */
  are_files_locked?: boolean;

  /**
   * Indicates if the template document options are editable or not, for example
   * renaming the document.
   */
  are_options_locked?: boolean;

  /**
   * Indicates if the template signers are editable or not.
   */
  are_recipients_locked?: boolean;

  /**
   * Custom branding applied to notifications and signature requests.
   */
  custom_branding?: SignTemplate.CustomBranding | null;

  /**
   * Set the number of days after which the created signature request will
   * automatically expire if not completed. By default, we do not apply any
   * expiration date on signature requests, and the signature request does not
   * expire.
   */
  days_valid?: number | null;

  /**
   * Message to include in signature request email. The field is cleaned through
   * sanitization of specific characters. However, some html tags are allowed. Links
   * included in the message are also converted to hyperlinks in the email. The
   * message may contain the following html tags including `a`, `abbr`, `acronym`,
   * `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, and `strong`. Be aware
   * that when the text to html ratio is too high, the email may end up in spam
   * filters. Custom styles on these tags are not allowed. If this field is not
   * passed, a default message will be used.
   */
  email_message?: string | null;

  /**
   * Subject of signature request email. This is cleaned by sign request. If this
   * field is not passed, a default subject will be used.
   */
  email_subject?: string | null;

  /**
   * The name of the template.
   */
  name?: string | null;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent_folder?: FilesAPI.FolderMini;

  /**
   * Box's ready-sign link feature enables you to create a link to a signature
   * request that you've created from a template. Use this link when you want to post
   * a signature request on a public form — such as an email, social media post, or
   * web page — without knowing who the signers will be. Note: The ready-sign link
   * feature is limited to Enterprise Plus customers and not available to Box
   * Verified Enterprises.
   */
  ready_sign_link?: SignTemplate.ReadySignLink | null;

  /**
   * Array of signers for the template.
   *
   * **Note**: It may happen that some signers specified in the template belong to
   * conflicting [segments](r://shield-information-barrier-segment-member) (user
   * groups). This means that due to the security policies, users are assigned to
   * segments to prevent exchanges or communication that could lead to ethical
   * conflicts. In such a case, an attempt to send a sign request based on a template
   * that lists signers in conflicting segments will result in an error.
   *
   * Read more about
   * [segments and ethical walls](https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers#h_01GFVJEHQA06N7XEZ4GCZ9GFAQ).
   */
  signers?: Array<SignTemplate.Signer>;

  /**
   * List of files to create a signing document from. Only the ID and type fields are
   * required for each file.
   */
  source_files?: Array<TasksAPI.FileMini | null>;

  /**
   * The value will always be `sign-template`.
   */
  type?: 'sign-template';
}

export namespace SignTemplate {
  /**
   * Additional information on which fields are required and which fields are not
   * editable.
   */
  export interface AdditionalInfo {
    /**
     * Non editable fields.
     */
    non_editable?: Array<
      'email_subject' | 'email_message' | 'name' | 'days_valid' | 'signers' | 'source_files'
    >;

    /**
     * Required fields.
     */
    required?: AdditionalInfo.Required;
  }

  export namespace AdditionalInfo {
    /**
     * Required fields.
     */
    export interface Required {
      /**
       * Required signer fields.
       */
      signers?: Array<Array<'email'>>;
    }
  }

  /**
   * Custom branding applied to notifications and signature requests.
   */
  export interface CustomBranding {
    /**
     * Custom branding color in hex.
     */
    branding_color?: string | null;

    /**
     * Name of the company.
     */
    company_name?: string | null;

    /**
     * Content of the email footer.
     */
    email_footer_text?: string | null;

    /**
     * Custom branding logo URI in the form of a base64 image.
     */
    logo_uri?: string | null;
  }

  /**
   * Box's ready-sign link feature enables you to create a link to a signature
   * request that you've created from a template. Use this link when you want to post
   * a signature request on a public form — such as an email, social media post, or
   * web page — without knowing who the signers will be. Note: The ready-sign link
   * feature is limited to Enterprise Plus customers and not available to Box
   * Verified Enterprises.
   */
  export interface ReadySignLink {
    /**
     * The destination folder to place final, signed document and signing log. Only
     * `ID` and `type` fields are required. The root folder, folder ID `0`, cannot be
     * used.
     */
    folder_id?: string | null;

    /**
     * Extra instructions for all signers.
     */
    instructions?: string | null;

    /**
     * Whether the ready sign link is enabled or not.
     */
    is_active?: boolean;

    /**
     * Whether to disable notifications when a signer has signed.
     */
    is_notification_disabled?: boolean;

    /**
     * Request name.
     */
    name?: string | null;

    /**
     * The URL that can be sent to signers.
     */
    url?: string;
  }

  /**
   * The schema for a Signer for Templates.
   */
  export interface Signer {
    /**
     * Email address of the signer.
     */
    email?: string | null;

    inputs?: Array<Signer.Input>;

    /**
     * Used in combination with an embed URL for a sender. After the sender signs, they
     * will be redirected to the next `in_person` signer.
     */
    is_in_person?: boolean;

    /**
     * If true for signers with a defined email, the password provided when the
     * template was created is used by default. If true for signers without a specified
     * / defined email, the creator needs to provide a password when using the
     * template.
     */
    is_password_required?: boolean | null;

    /**
     * If true for signers with a defined email, the phone number provided when the
     * template was created is used by default. If true for signers without a specified
     * / defined email, the template creator needs to provide a phone number when
     * creating a request.
     */
    is_phone_number_required?: boolean | null;

    /**
     * A placeholder label for the signer set by the template creator to differentiate
     * between signers.
     */
    label?: string | null;

    /**
     * If true, the signer is required to login to access the document.
     */
    login_required?: boolean | null;

    /**
     * Order of the signer.
     */
    order?: number;

    /**
     * An identifier for the signer. This can be used to identify a signer within the
     * template.
     */
    public_id?: string;

    /**
     * Defines the role of the signer in the signature request. A role of `signer`
     * needs to sign the document, a role `approver` approves the document and a
     * `final_copy_reader` role only receives the final signed document and signing
     * log.
     */
    role?: 'signer' | 'approver' | 'final_copy_reader';

    /**
     * If provided, this value points signers that are assigned the same inputs and
     * belongs to same signer group. A signer group is not a Box Group. It is an entity
     * that belongs to the template itself and can only be used within Box Sign
     * requests created from it.
     */
    signer_group_id?: string | null;
  }

  export namespace Signer {
    /**
     * Input created by a Signer on a Template.
     */
    export interface Input extends SignRequestsAPI.SignRequestPrefillTag {
      /**
       * Content type of input.
       */
      content_type?:
        | 'signature'
        | 'initial'
        | 'stamp'
        | 'date'
        | 'checkbox'
        | 'text'
        | 'full_name'
        | 'first_name'
        | 'last_name'
        | 'company'
        | 'title'
        | 'email'
        | 'attachment'
        | 'radio'
        | 'dropdown';

      /**
       * Where the input is located on a page.
       */
      coordinates?: Input.Coordinates;

      /**
       * The size of the input.
       */
      dimensions?: Input.Dimensions;

      /**
       * Document identifier.
       */
      document_id?: string | null;

      /**
       * When the input is of the type `dropdown` this values will be filled with all the
       * dropdown options.
       */
      dropdown_choices?: Array<string> | null;

      /**
       * When the input is of type `radio` they can be grouped to gather with this
       * identifier.
       */
      group_id?: string | null;

      /**
       * Whether or not the input is required.
       */
      is_required?: boolean;

      /**
       * The label field is used especially for text, attachment, radio, and checkbox
       * type inputs.
       */
      label?: string | null;

      /**
       * Index of page that the input is on.
       */
      page_index?: number;

      /**
       * Whether this input was defined as read-only(immutable by signers) or not.
       */
      read_only?: boolean;

      /**
       * Type of input.
       */
      type?: 'signature' | 'date' | 'text' | 'checkbox' | 'attachment' | 'radio' | 'dropdown';
    }

    export namespace Input {
      /**
       * Where the input is located on a page.
       */
      export interface Coordinates {
        /**
         * Relative x coordinate to the page the input is on, ranging from 0 to 1.
         */
        x?: number;

        /**
         * Relative y coordinate to the page the input is on, ranging from 0 to 1.
         */
        y?: number;
      }

      /**
       * The size of the input.
       */
      export interface Dimensions {
        /**
         * Relative height to the page the input is on, ranging from 0 to 1.
         */
        height?: number;

        /**
         * Relative width to the page the input is on, ranging from 0 to 1.
         */
        width?: number;
      }
    }
  }
}

export interface SignTemplateListResponse {
  /**
   * A list of templates.
   */
  entries?: Array<SignTemplate>;

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

export interface SignTemplateListParams {
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

export declare namespace SignTemplates {
  export {
    type SignTemplate as SignTemplate,
    type SignTemplateListResponse as SignTemplateListResponse,
    type SignTemplateListParams as SignTemplateListParams,
  };
}

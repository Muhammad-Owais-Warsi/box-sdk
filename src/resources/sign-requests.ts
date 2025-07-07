// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SignRequestsAPI from './sign-requests';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SignRequests extends APIResource {
  /**
   * Creates a signature request. This involves preparing a document for signing and
   * sending the signature request to signers.
   *
   * @example
   * ```ts
   * const signRequest = await client.signRequests.create();
   * ```
   */
  create(body: SignRequestCreateParams, options?: RequestOptions): APIPromise<SignRequest> {
    return this._client.post('/sign_requests', { body, ...options });
  }

  /**
   * Gets a sign request by ID.
   *
   * @example
   * ```ts
   * const signRequest = await client.signRequests.retrieve(
   *   '33243242',
   * );
   * ```
   */
  retrieve(signRequestID: string, options?: RequestOptions): APIPromise<SignRequest> {
    return this._client.get(path`/sign_requests/${signRequestID}`, options);
  }

  /**
   * Gets signature requests created by a user. If the `sign_files` and/or
   * `parent_folder` are deleted, the signature request will not return in the list.
   *
   * @example
   * ```ts
   * const signRequests = await client.signRequests.list();
   * ```
   */
  list(
    query: SignRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SignRequestListResponse> {
    return this._client.get('/sign_requests', { query, ...options });
  }

  /**
   * Cancels a sign request.
   *
   * @example
   * ```ts
   * const signRequest = await client.signRequests.cancel(
   *   '33243242',
   * );
   * ```
   */
  cancel(signRequestID: string, options?: RequestOptions): APIPromise<SignRequest> {
    return this._client.post(path`/sign_requests/${signRequestID}/cancel`, options);
  }

  /**
   * Resends a signature request email to all outstanding signers.
   *
   * @example
   * ```ts
   * await client.signRequests.resend('33243242');
   * ```
   */
  resend(signRequestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/sign_requests/${signRequestID}/resend`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The bare basic representation of a file, the minimal amount of fields returned
 * when using the `fields` query parameter.
 */
export interface FileBase {
  /**
   * The unique identifier that represent a file.
   *
   * The ID for any file can be determined by visiting a file in the web application
   * and copying the ID from the URL. For example, for the URL
   * `https://*.app.box.com/files/123` the `file_id` is `123`.
   */
  id: string;

  /**
   * The value will always be `file`.
   */
  type: 'file';

  /**
   * The HTTP `etag` of this file. This can be used within some API endpoints in the
   * `If-Match` and `If-None-Match` headers to only perform changes on the file if
   * (no) changes have happened.
   */
  etag?: string | null;
}

/**
 * A Box Sign request object.
 */
export interface SignRequest extends SignRequestBase {
  /**
   * Box Sign request ID.
   */
  id?: string;

  /**
   * Uses `days_valid` to calculate the date and time, in GMT, the sign request will
   * expire if unsigned.
   */
  auto_expire_at?: string | null;

  /**
   * The collaborator level of the user to the sign request. Values can include
   * "owner", "editor", and "viewer".
   */
  collaborator_level?: string | null;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent_folder?: FilesAPI.FolderMini;

  /**
   * This URL is returned if `is_document_preparation_needed` is set to `true` in the
   * request. The parameter is used to prepare the signature request using the UI.
   * The signature request is not sent until the preparation phase is complete.
   */
  prepare_url?: string | null;

  /**
   * The email address of the sender of the sign request.
   */
  sender_email?: string | null;

  /**
   * The user ID of the sender of the sign request.
   */
  sender_id?: number | null;

  /**
   * List of files that will be signed, which are copies of the original source
   * files. A new version of these files are created as signers sign and can be
   * downloaded at any point in the signing process.
   */
  sign_files?: SignRequest.SignFiles;

  /**
   * Force a specific color for the signature (blue, black, or red).
   */
  signature_color?: string | null;

  /**
   * Array of signers for the signature request.
   */
  signers?: Array<SignRequest.Signer>;

  /**
   * A mini representation of a file, used when nested under another resource.
   */
  signing_log?: TasksAPI.FileMini | null;

  /**
   * List of files to create a signing document from. This is currently limited to
   * ten files. Only the ID and type fields are required for each file.
   */
  source_files?: Array<FileBase | null>;

  /**
   * Describes the status of the signature request.
   */
  status?:
    | 'converting'
    | 'created'
    | 'sent'
    | 'viewed'
    | 'signed'
    | 'cancelled'
    | 'declined'
    | 'error_converting'
    | 'error_sending'
    | 'expired'
    | 'finalizing'
    | 'error_finalizing';

  /**
   * The value will always be `sign-request`.
   */
  type?: 'sign-request';
}

export namespace SignRequest {
  /**
   * List of files that will be signed, which are copies of the original source
   * files. A new version of these files are created as signers sign and can be
   * downloaded at any point in the signing process.
   */
  export interface SignFiles {
    files?: Array<TasksAPI.FileMini | null>;

    /**
     * Indicates whether the `sign_files` documents are processing and the PDFs may be
     * out of date. A change to any document requires processing on all `sign_files`.
     * We recommended waiting until processing is finished (and this value is true)
     * before downloading the PDFs.
     */
    is_ready_for_download?: boolean;
  }

  /**
   * The schema for a Signer object used on the body of a Box Sign request object.
   */
  export interface Signer extends SignRequestsAPI.SignRequestCreateSigner {
    /**
     * URL to direct a signer to for signing.
     */
    embed_url?: string | null;

    /**
     * Set to `true` if the signer views the document.
     */
    has_viewed_document?: boolean;

    /**
     * This URL is specifically designed for signing documents within an HTML `iframe`
     * tag. It will be returned in the response only if the
     * `embed_url_external_user_id` parameter was passed in the
     * `create Box Sign request` call.
     */
    iframeable_embed_url?: string | null;

    inputs?: Array<Signer.Input>;

    /**
     * Final decision made by the signer.
     */
    signer_decision?: Signer.SignerDecision | null;
  }

  export namespace Signer {
    /**
     * Input created by a Signer on a Sign Request.
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
      type?: 'signature' | 'date' | 'text' | 'checkbox' | 'radio' | 'dropdown';
    }

    /**
     * Final decision made by the signer.
     */
    export interface SignerDecision {
      /**
       * Additional info about the decision, such as the decline reason from the signer.
       */
      additional_info?: string | null;

      /**
       * Date and Time that the decision was made.
       */
      finalized_at?: string;

      /**
       * Type of decision made by the signer.
       */
      type?: 'signed' | 'declined';
    }
  }
}

/**
 * A standard representation of a signature request object.
 */
export interface SignRequestBase {
  /**
   * Reminds signers to sign a document on day 3, 8, 13 and 18. Reminders are only
   * sent to outstanding signers.
   */
  are_reminders_enabled?: boolean;

  /**
   * Disables the usage of signatures generated by typing (text).
   */
  are_text_signatures_enabled?: boolean;

  /**
   * Set the number of days after which the created signature request will
   * automatically expire if not completed. By default, we do not apply any
   * expiration date on signature requests, and the signature request does not
   * expire.
   */
  days_valid?: number | null;

  /**
   * The uri that a signer will be redirected to after declining to sign a document.
   */
  declined_redirect_url?: string | null;

  /**
   * Message to include in sign request email. The field is cleaned through
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
   * Subject of sign request email. This is cleaned by sign request. If this field is
   * not passed, a default subject will be used.
   */
  email_subject?: string | null;

  /**
   * This can be used to reference an ID in an external system that the sign request
   * is related to.
   */
  external_id?: string | null;

  /**
   * Used as an optional system name to appear in the signature log next to the
   * signers who have been assigned the `embed_url_external_id`.
   */
  external_system_name?: string | null;

  /**
   * Indicates if the sender should receive a `prepare_url` in the response to
   * complete document preparation using the UI.
   */
  is_document_preparation_needed?: boolean;

  /**
   * Name of the signature request.
   */
  name?: string;

  /**
   * When a document contains sign-related tags in the content, you can prefill them
   * using this `prefill_tags` by referencing the 'id' of the tag as the
   * `external_id` field of the prefill tag.
   */
  prefill_tags?: Array<SignRequestPrefillTag>;

  /**
   * When specified, the signature request will be redirected to this url when a
   * document is signed.
   */
  redirect_url?: string | null;

  /**
   * When a signature request is created from a template this field will indicate the
   * id of that template.
   */
  template_id?: string | null;
}

/**
 * The schema for a Signer object used in for creating a Box Sign request object.
 */
export interface SignRequestCreateSigner {
  /**
   * The URL that a signer will be redirect to after declining to sign a document.
   * Defining this URL overrides default or global declined redirect URL settings for
   * a specific signer.
   */
  declined_redirect_url?: string | null;

  /**
   * Email address of the signer. The email address of the signer is required when
   * making signature requests, except when using templates that are configured to
   * include emails.
   */
  email?: string | null;

  /**
   * User ID for the signer in an external application responsible for authentication
   * when accessing the embed URL.
   */
  embed_url_external_user_id?: string | null;

  /**
   * Used in combination with an embed URL for a sender. After the sender signs, they
   * are redirected to the next `in_person` signer.
   */
  is_in_person?: boolean;

  /**
   * If set to true, the signer will need to log in to a Box account before signing
   * the request. If the signer does not have an existing account, they will have the
   * option to create a free Box account.
   */
  login_required?: boolean | null;

  /**
   * Order of the signer.
   */
  order?: number;

  /**
   * The URL that a signer will be redirected to after signing a document. Defining
   * this URL overrides default or global redirect URL settings for a specific
   * signer. If no declined redirect URL is specified, this URL will be used for
   * decline actions as well.
   */
  redirect_url?: string | null;

  /**
   * Defines the role of the signer in the signature request. A `signer` must sign
   * the document and an `approver` must approve the document. A `final_copy_reader`
   * only receives the final signed document and signing log.
   */
  role?: 'signer' | 'approver' | 'final_copy_reader';

  /**
   * If set, signers who have the same value will be assigned to the same input and
   * to the same signer group. A signer group is not a Box Group. It is an entity
   * that belongs to a Sign Request and can only be used/accessed within this Sign
   * Request. A signer group is expected to have more than one signer. If the
   * provided value is only used for one signer, this value will be ignored and
   * request will be handled as it was intended for an individual signer. The value
   * provided can be any string and only used to determine which signers belongs to
   * same group. A successful response will provide a generated UUID value instead
   * for signers in the same signer group.
   */
  signer_group_id?: string | null;

  /**
   * If true, no emails about the sign request will be sent.
   */
  suppress_notifications?: boolean | null;

  /**
   * If set, this phone number will be used to verify the signer via two-factor
   * authentication before they are able to sign the document. Cannot be selected in
   * combination with `login_required`.
   */
  verification_phone_number?: string | null;
}

/**
 * Prefill tags are used to prefill placeholders with signer input data. Only one
 * value field can be included.
 */
export interface SignRequestPrefillTag {
  /**
   * Checkbox prefill value.
   */
  checkbox_value?: boolean | null;

  /**
   * Date prefill value.
   */
  date_value?: string | null;

  /**
   * This references the ID of a specific tag contained in a file of the signature
   * request.
   */
  document_tag_id?: string | null;

  /**
   * Text prefill value.
   */
  text_value?: string | null;
}

export interface SignRequestListResponse {
  /**
   * A list of Box Sign requests.
   */
  entries?: Array<SignRequest>;

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
}

export interface SignRequestCreateParams {
  /**
   * Reminds signers to sign a document on day 3, 8, 13 and 18. Reminders are only
   * sent to outstanding signers.
   */
  are_reminders_enabled?: boolean;

  /**
   * Disables the usage of signatures generated by typing (text).
   */
  are_text_signatures_enabled?: boolean;

  /**
   * Set the number of days after which the created signature request will
   * automatically expire if not completed. By default, we do not apply any
   * expiration date on signature requests, and the signature request does not
   * expire.
   */
  days_valid?: number | null;

  /**
   * The uri that a signer will be redirected to after declining to sign a document.
   */
  declined_redirect_url?: string | null;

  /**
   * Message to include in sign request email. The field is cleaned through
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
   * Subject of sign request email. This is cleaned by sign request. If this field is
   * not passed, a default subject will be used.
   */
  email_subject?: string | null;

  /**
   * This can be used to reference an ID in an external system that the sign request
   * is related to.
   */
  external_id?: string | null;

  /**
   * Used as an optional system name to appear in the signature log next to the
   * signers who have been assigned the `embed_url_external_id`.
   */
  external_system_name?: string | null;

  /**
   * Indicates if the sender should receive a `prepare_url` in the response to
   * complete document preparation using the UI.
   */
  is_document_preparation_needed?: boolean;

  /**
   * Name of the signature request.
   */
  name?: string;

  /**
   * A mini representation of a file version, used when nested under another
   * resource.
   */
  parent_folder?: FilesAPI.FolderMini;

  /**
   * When a document contains sign-related tags in the content, you can prefill them
   * using this `prefill_tags` by referencing the 'id' of the tag as the
   * `external_id` field of the prefill tag.
   */
  prefill_tags?: Array<SignRequestPrefillTag>;

  /**
   * When specified, the signature request will be redirected to this url when a
   * document is signed.
   */
  redirect_url?: string | null;

  /**
   * Force a specific color for the signature (blue, black, or red).
   */
  signature_color?: 'blue' | 'black' | 'red' | null;

  /**
   * Array of signers for the signature request. 35 is the max number of signers
   * permitted.
   *
   * **Note**: It may happen that some signers belong to conflicting
   * [segments](r://shield-information-barrier-segment-member) (user groups). This
   * means that due to the security policies, users are assigned to segments to
   * prevent exchanges or communication that could lead to ethical conflicts. In such
   * a case, an attempt to send the sign request will result in an error.
   *
   * Read more about
   * [segments and ethical walls](https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers#h_01GFVJEHQA06N7XEZ4GCZ9GFAQ).
   */
  signers?: Array<SignRequestCreateSigner>;

  /**
   * List of files to create a signing document from. This is currently limited to
   * ten files. Only the ID and type fields are required for each file.
   */
  source_files?: Array<FileBase | null> | null;

  /**
   * When a signature request is created from a template this field will indicate the
   * id of that template.
   */
  template_id?: string | null;
}

export interface SignRequestListParams {
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
   * A list of sender emails to filter the signature requests by sender. If provided,
   * `shared_requests` must be set to `true`.
   */
  senders?: Array<string>;

  /**
   * If set to `true`, only includes requests that user is not an owner, but user is
   * a collaborator. Collaborator access is determined by the user access level of
   * the sign files of the request. Default is `false`. Must be set to `true` if
   * `senders` are provided.
   */
  shared_requests?: boolean;
}

export declare namespace SignRequests {
  export {
    type FileBase as FileBase,
    type SignRequest as SignRequest,
    type SignRequestBase as SignRequestBase,
    type SignRequestCreateSigner as SignRequestCreateSigner,
    type SignRequestPrefillTag as SignRequestPrefillTag,
    type SignRequestListResponse as SignRequestListResponse,
    type SignRequestCreateParams as SignRequestCreateParams,
    type SignRequestListParams as SignRequestListParams,
  };
}

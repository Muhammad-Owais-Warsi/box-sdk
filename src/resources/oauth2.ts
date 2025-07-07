// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TasksAPI from './tasks';
import * as FilesAPI from './files/files';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Oauth2 extends APIResource {
  /**
   * Request an Access Token using either a client-side obtained OAuth 2.0
   * authorization code or a server-side JWT assertion.
   *
   * An Access Token is a string that enables Box to verify that a request belongs to
   * an authorized session. In the normal order of operations you will begin by
   * requesting authentication from the [authorize](#get-authorize) endpoint and Box
   * will send you an authorization code.
   *
   * You will then send this code to this endpoint to exchange it for an Access
   * Token. The returned Access Token can then be used to to make Box API calls.
   *
   * @example
   * ```ts
   * const accessToken = await client.oauth2.requestToken({
   *   grant_type: 'authorization_code',
   * });
   * ```
   */
  requestToken(body: Oauth2RequestTokenParams, options?: RequestOptions): APIPromise<AccessToken> {
    return this._client.post('/oauth2/token', {
      body,
      defaultBaseURL: 'https://api.box.com',
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Revoke an active Access Token, effectively logging a user out that has been
   * previously authenticated.
   *
   * @example
   * ```ts
   * await client.oauth2.revokeToken();
   * ```
   */
  revokeToken(body: Oauth2RevokeTokenParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/oauth2/revoke', {
      body,
      defaultBaseURL: 'https://api.box.com',
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

/**
 * A token that can be used to make authenticated API calls.
 */
export interface AccessToken {
  /**
   * The requested access token.
   */
  access_token?: string;

  /**
   * The time in seconds by which this token will expire.
   */
  expires_in?: number;

  /**
   * The type of downscoped access token returned. This is only returned if an access
   * token has been downscoped.
   */
  issued_token_type?: 'urn:ietf:params:oauth:token-type:access_token';

  /**
   * The refresh token for this access token, which can be used to request a new
   * access token when the current one expires.
   */
  refresh_token?: string;

  /**
   * The permissions that this access token permits, providing a list of resources
   * (files, folders, etc) and the scopes permitted for each of those resources.
   */
  restricted_to?: Array<FileOrFolderScope>;

  /**
   * The type of access token returned.
   */
  token_type?: 'bearer';
}

/**
 * A relation between a resource (file or folder) and the scopes for which the
 * resource can be accessed.
 */
export interface FileOrFolderScope {
  /**
   * The file or folder resource.
   */
  object?: FilesAPI.FolderMini | TasksAPI.FileMini | null;

  /**
   * The scopes for the resource access.
   */
  scope?:
    | 'annotation_edit'
    | 'annotation_view_all'
    | 'annotation_view_self'
    | 'base_explorer'
    | 'base_picker'
    | 'base_preview'
    | 'base_upload'
    | 'item_delete'
    | 'item_download'
    | 'item_preview'
    | 'item_rename'
    | 'item_share'
    | 'item_upload'
    | 'item_read';
}

export interface Oauth2RequestTokenParams {
  /**
   * The type of request being made, either using a client-side obtained
   * authorization code, a refresh token, a JWT assertion, client credentials grant
   * or another access token for the purpose of downscoping a token.
   */
  grant_type:
    | 'authorization_code'
    | 'refresh_token'
    | 'client_credentials'
    | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    | 'urn:ietf:params:oauth:grant-type:token-exchange';

  /**
   * The token used to create an annotator token. This is a JWT assertion.
   *
   * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as
   * the `grant_type`.
   */
  actor_token?: string;

  /**
   * The type of `actor_token` passed in.
   *
   * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as
   * the `grant_type`.
   */
  actor_token_type?: 'urn:ietf:params:oauth:token-type:id_token';

  /**
   * A JWT assertion for which to request a new access token.
   *
   * Used in combination with `urn:ietf:params:oauth:grant-type:jwt-bearer` as the
   * `grant_type`.
   */
  assertion?: string;

  /**
   * Full URL of the shared link on the file or folder that the token should be
   * generated for.
   */
  box_shared_link?: string;

  /**
   * Used in combination with `client_credentials` as the `grant_type`. Value is
   * determined by `box_subject_type`. If `user` use user ID and if `enterprise` use
   * enterprise ID.
   */
  box_subject_id?: string;

  /**
   * Used in combination with `client_credentials` as the `grant_type`.
   */
  box_subject_type?: 'enterprise' | 'user';

  /**
   * The Client ID of the application requesting an access token.
   *
   * Used in combination with `authorization_code`, `client_credentials`, or
   * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.
   */
  client_id?: string;

  /**
   * The client secret of the application requesting an access token.
   *
   * Used in combination with `authorization_code`, `client_credentials`, or
   * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.
   */
  client_secret?: string;

  /**
   * The client-side authorization code passed to your application by Box in the
   * browser redirect after the user has successfully granted your application
   * permission to make API calls on their behalf.
   *
   * Used in combination with `authorization_code` as the `grant_type`.
   */
  code?: string;

  /**
   * A refresh token used to get a new access token with.
   *
   * Used in combination with `refresh_token` as the `grant_type`.
   */
  refresh_token?: string;

  /**
   * Full URL for the file that the token should be generated for.
   */
  resource?: string;

  /**
   * The space-delimited list of scopes that you want apply to the new access token.
   *
   * The `subject_token` will need to have all of these scopes or the call will error
   * with **401 Unauthorized**..
   */
  scope?: string;

  /**
   * The token to exchange for a downscoped token. This can be a regular access
   * token, a JWT assertion, or an app token.
   *
   * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as
   * the `grant_type`.
   */
  subject_token?: string;

  /**
   * The type of `subject_token` passed in.
   *
   * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as
   * the `grant_type`.
   */
  subject_token_type?: 'urn:ietf:params:oauth:token-type:access_token';
}

export interface Oauth2RevokeTokenParams {
  /**
   * The access token to revoke.
   */
  token?: string;

  /**
   * The Client ID of the application requesting to revoke the access token.
   */
  client_id?: string;

  /**
   * The client secret of the application requesting to revoke an access token.
   */
  client_secret?: string;
}

export declare namespace Oauth2 {
  export {
    type AccessToken as AccessToken,
    type FileOrFolderScope as FileOrFolderScope,
    type Oauth2RequestTokenParams as Oauth2RequestTokenParams,
    type Oauth2RevokeTokenParams as Oauth2RevokeTokenParams,
  };
}

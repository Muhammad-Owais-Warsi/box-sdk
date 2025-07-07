// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Authorize extends APIResource {
  /**
   * Authorize a user by sending them through the [Box](https://box.com) website and
   * request their permission to act on their behalf.
   *
   * This is the first step when authenticating a user using OAuth 2.0. To request a
   * user's authorization to use the Box APIs on their behalf you will need to send a
   * user to the URL with this format.
   */
  request(query: AuthorizeRequestParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/authorize', {
      query,
      defaultBaseURL: 'https://account.box.com/api/oauth2',
      ...options,
      headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]),
    });
  }
}

export type AuthorizeRequestResponse = string;

export interface AuthorizeRequestParams {
  /**
   * The Client ID of the application that is requesting to authenticate the user. To
   * get the Client ID for your application, log in to your Box developer console and
   * click the **Edit Application** link for the application you're working with. In
   * the OAuth 2.0 Parameters section of the configuration page, find the item
   * labelled `client_id`. The text of that item is your application's Client ID.
   */
  client_id: string;

  /**
   * The type of response we'd like to receive.
   */
  response_type: 'code';

  /**
   * The URI to which Box redirects the browser after the user has granted or denied
   * the application permission. This URI match one of the redirect URIs in the
   * configuration of your application. It must be a valid HTTPS URI and it needs to
   * be able to handle the redirection to complete the next step in the OAuth 2.0
   * flow. Although this parameter is optional, it must be a part of the
   * authorization URL if you configured multiple redirect URIs for the application
   * in the developer console. A missing parameter causes a `redirect_uri_missing`
   * error after the user grants application access.
   */
  redirect_uri?: string;

  /**
   * A space-separated list of application scopes you'd like to authenticate the user
   * for. This defaults to all the scopes configured for the application in its
   * configuration page.
   */
  scope?: string;

  /**
   * A custom string of your choice. Box will pass the same string to the redirect
   * URL when authentication is complete. This parameter can be used to identify a
   * user on redirect, as well as protect against hijacked sessions and other
   * exploits.
   */
  state?: string;
}

export declare namespace Authorize {
  export {
    type AuthorizeRequestResponse as AuthorizeRequestResponse,
    type AuthorizeRequestParams as AuthorizeRequestParams,
  };
}

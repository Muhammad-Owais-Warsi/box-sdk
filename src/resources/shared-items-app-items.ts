// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class SharedItemsAppItems extends APIResource {}

/**
 * An app item represents an content object owned by an application. It can group
 * files and folders together from different paths. That set can be shared via a
 * collaboration.
 */
export interface AppItem {
  /**
   * The unique identifier for this app item.
   */
  id: string;

  /**
   * The type of the app that owns this app item.
   */
  application_type: string;

  /**
   * The value will always be `app_item`.
   */
  type: 'app_item';
}

export declare namespace SharedItemsAppItems {
  export { type AppItem as AppItem };
}

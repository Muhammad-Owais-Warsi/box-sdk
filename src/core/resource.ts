// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { NimbusStorage } from '../client';

export abstract class APIResource {
  protected _client: NimbusStorage;

  constructor(client: NimbusStorage) {
    this._client = client;
  }
}

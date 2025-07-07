// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AI,
  AIAgentInfo,
  AIAgentReference,
  AIAskQuestionParams,
  AIAskQuestionResponse,
  AIDialogueHistory,
  AIExtractMetadataParams,
  AIExtractStructuredMetadataParams,
  AIExtractStructuredMetadataResponse,
  AIGenerateTextParams,
  AIItemBase,
  AIResponse,
} from './resources/ai';
import {
  AIAgentAsk,
  AIAgentBasicGenTool,
  AIAgentBasicTextTool,
  AIAgentBasicTextToolBase,
  AIAgentDefault,
  AIAgentDefaultRetrieveParams,
  AIAgentDefaultRetrieveResponse,
  AIAgentExtract,
  AIAgentExtractStructured,
  AIAgentLongTextTool,
  AIAgentSpreadsheetTool,
  AIAgentTextGen,
  AILlmEndpointParams,
} from './resources/ai-agent-default';
import {
  AIAgentAllowedEntity,
  AIAgentCreateParams,
  AIAgentListParams,
  AIAgentListResponse,
  AIAgentRetrieveParams,
  AIAgentUpdateParams,
  AIAgents,
  AISingleAgent,
  AIStudioAgentBasicGenTool,
  AIStudioAgentBasicTextTool,
  AIStudioAgentBasicTextToolResponse,
  AIStudioAgentLongTextTool,
  AIStudioAgentLongTextToolResponse,
  AIStudioAgentSpreadsheetTool,
  CreateAIAgent,
} from './resources/ai-agents';
import { Authorize, AuthorizeRequestParams, AuthorizeRequestResponse } from './resources/authorize';
import {
  CollaborationAllowlistEntry,
  CollaborationWhitelistEntries,
  CollaborationWhitelistEntryCreateParams,
  CollaborationWhitelistEntryListParams,
  CollaborationWhitelistEntryListResponse,
} from './resources/collaboration-whitelist-entries';
import {
  CollaborationWhitelistExemptTargetCreateParams,
  CollaborationWhitelistExemptTargetListParams,
  CollaborationWhitelistExemptTargetListResponse,
  CollaborationWhitelistExemptTargets,
  ExemptTarget,
} from './resources/collaboration-whitelist-exempt-targets';
import {
  Collaboration,
  CollaborationCreateParams,
  CollaborationListParams,
  CollaborationRetrieveParams,
  CollaborationUpdateParams,
  Collaborations,
  CollaborationsOffsetPaginated,
  UserCollaborations,
} from './resources/collaborations';
import {
  Collection,
  CollectionListItemsParams,
  CollectionListItemsResponse,
  CollectionListParams,
  CollectionListResponse,
  Collections,
} from './resources/collections';
import {
  CommentCreateParams,
  CommentFull,
  CommentRetrieveParams,
  CommentUpdateParams,
  Comments,
} from './resources/comments';
import { DevicePinner, DevicePinners } from './resources/device-pinners';
import {
  EnterpriseListDevicePinnersParams,
  EnterpriseListDevicePinnersResponse,
  Enterprises,
} from './resources/enterprises';
import { EventListParams, EventListResponse, Events } from './resources/events';
import {
  FileRequest,
  FileRequestCopyParams,
  FileRequestUpdate,
  FileRequestUpdateParams,
  FileRequests,
} from './resources/file-requests';
import {
  FileVersionLegalHold,
  FileVersionLegalHoldListParams,
  FileVersionLegalHoldListResponse,
  FileVersionLegalHolds,
} from './resources/file-version-legal-holds';
import {
  FileVersionRetention,
  FileVersionRetentionListParams,
  FileVersionRetentionListResponse,
  FileVersionRetentions,
} from './resources/file-version-retentions';
import {
  FolderLock,
  FolderLockCreateParams,
  FolderLockListParams,
  FolderLockListResponse,
  FolderLocks,
} from './resources/folder-locks';
import {
  GroupBase,
  GroupMembership,
  GroupMembershipCreateParams,
  GroupMembershipRetrieveParams,
  GroupMembershipUpdateParams,
  GroupMemberships,
  GroupMini,
} from './resources/group-memberships';
import {
  GroupCreateParams,
  GroupFull,
  GroupListCollaborationsParams,
  GroupListMembershipsParams,
  GroupListParams,
  GroupListResponse,
  GroupRetrieveParams,
  GroupTerminateSessionsParams,
  GroupUpdateParams,
  Groups,
} from './resources/groups';
import { Invite, InviteCreateParams, InviteRetrieveParams, Invites } from './resources/invites';
import {
  LegalHoldPolicies,
  LegalHoldPolicy,
  LegalHoldPolicyCreateParams,
  LegalHoldPolicyListParams,
  LegalHoldPolicyListResponse,
  LegalHoldPolicyMini,
  LegalHoldPolicyUpdateParams,
} from './resources/legal-hold-policies';
import {
  LegalHoldPolicyAssignment,
  LegalHoldPolicyAssignmentAssignParams,
  LegalHoldPolicyAssignmentListFileVersionsOnHoldParams,
  LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse,
  LegalHoldPolicyAssignmentListFilesOnHoldParams,
  LegalHoldPolicyAssignmentListFilesOnHoldResponse,
  LegalHoldPolicyAssignmentListParams,
  LegalHoldPolicyAssignmentListResponse,
  LegalHoldPolicyAssignments,
} from './resources/legal-hold-policy-assignments';
import {
  MetadataCascadePolicies,
  MetadataCascadePolicy,
  MetadataCascadePolicyApplyParams,
  MetadataCascadePolicyCreateParams,
  MetadataCascadePolicyListParams,
  MetadataCascadePolicyListResponse,
} from './resources/metadata-cascade-policies';
import {
  MetadataQueries,
  MetadataQueryExecuteParams,
  MetadataQueryExecuteResponse,
} from './resources/metadata-queries';
import {
  AccessToken,
  FileOrFolderScope,
  Oauth2,
  Oauth2RequestTokenParams,
  Oauth2RevokeTokenParams,
} from './resources/oauth2';
import { RecentItemListParams, RecentItemListResponse, RecentItems } from './resources/recent-items';
import {
  RetentionPolicies,
  RetentionPolicy,
  RetentionPolicyCreateParams,
  RetentionPolicyListAssignmentsParams,
  RetentionPolicyListAssignmentsResponse,
  RetentionPolicyListParams,
  RetentionPolicyListResponse,
  RetentionPolicyMini,
  RetentionPolicyRetrieveParams,
  RetentionPolicyUpdateParams,
  UserBase,
  UserMini,
} from './resources/retention-policies';
import {
  FilesUnderRetention,
  RetentionPolicyAssignment,
  RetentionPolicyAssignmentCreateParams,
  RetentionPolicyAssignmentListFileVersionsUnderRetentionParams,
  RetentionPolicyAssignmentListFilesUnderRetentionParams,
  RetentionPolicyAssignmentRetrieveParams,
  RetentionPolicyAssignments,
} from './resources/retention-policy-assignments';
import { Search, SearchPerformParams, SearchPerformResponse } from './resources/search';
import { SharedItemRetrieveParams, SharedItems } from './resources/shared-items';
import { AppItem, SharedItemsAppItems } from './resources/shared-items-app-items';
import { SharedItemsFolders } from './resources/shared-items-folders';
import { SharedItemsWebLinks } from './resources/shared-items-web-links';
import {
  ShieldInformationBarrierReference,
  ShieldInformationBarrierReport,
  ShieldInformationBarrierReportCreateParams,
  ShieldInformationBarrierReportListParams,
  ShieldInformationBarrierReportListResponse,
  ShieldInformationBarrierReports,
} from './resources/shield-information-barrier-reports';
import {
  ShieldInformationBarrierSegmentMember,
  ShieldInformationBarrierSegmentMemberCreateParams,
  ShieldInformationBarrierSegmentMemberListParams,
  ShieldInformationBarrierSegmentMemberListResponse,
  ShieldInformationBarrierSegmentMembers,
} from './resources/shield-information-barrier-segment-members';
import {
  SegmentRestriction,
  ShieldInformationBarrierSegmentRestrictionCreateParams,
  ShieldInformationBarrierSegmentRestrictionListParams,
  ShieldInformationBarrierSegmentRestrictionListResponse,
  ShieldInformationBarrierSegmentRestrictions,
} from './resources/shield-information-barrier-segment-restrictions';
import {
  ShieldInformationBarrierBase,
  ShieldInformationBarrierSegment,
  ShieldInformationBarrierSegmentCreateParams,
  ShieldInformationBarrierSegmentListParams,
  ShieldInformationBarrierSegmentListResponse,
  ShieldInformationBarrierSegmentUpdateParams,
  ShieldInformationBarrierSegments,
} from './resources/shield-information-barrier-segments';
import {
  EnterpriseBase,
  ShieldInformationBarrier,
  ShieldInformationBarrierChangeStatusParams,
  ShieldInformationBarrierCreateParams,
  ShieldInformationBarrierListParams,
  ShieldInformationBarrierListResponse,
  ShieldInformationBarriers,
} from './resources/shield-information-barriers';
import {
  FileBase,
  SignRequest,
  SignRequestBase,
  SignRequestCreateParams,
  SignRequestCreateSigner,
  SignRequestListParams,
  SignRequestListResponse,
  SignRequestPrefillTag,
  SignRequests,
} from './resources/sign-requests';
import {
  SignTemplate,
  SignTemplateListParams,
  SignTemplateListResponse,
  SignTemplates,
} from './resources/sign-templates';
import { SkillInvocationUpdateParams, SkillInvocations } from './resources/skill-invocations';
import {
  StoragePolicies,
  StoragePolicy,
  StoragePolicyListParams,
  StoragePolicyListResponse,
  StoragePolicyMini,
} from './resources/storage-policies';
import {
  StoragePolicyAssignment,
  StoragePolicyAssignmentCreateParams,
  StoragePolicyAssignmentListParams,
  StoragePolicyAssignmentListResponse,
  StoragePolicyAssignmentUpdateParams,
  StoragePolicyAssignments,
} from './resources/storage-policy-assignments';
import {
  TaskAssignment,
  TaskAssignmentCreateParams,
  TaskAssignmentUpdateParams,
  TaskAssignments,
} from './resources/task-assignments';
import {
  FileMini,
  Task,
  TaskAssignments as TasksAPITaskAssignments,
  TaskCreateParams,
  TaskUpdateParams,
  Tasks,
} from './resources/tasks';
import {
  TermsOfServiceUserStatus,
  TermsOfServiceUserStatusCreateParams,
  TermsOfServiceUserStatusListParams,
  TermsOfServiceUserStatusListResponse,
  TermsOfServiceUserStatusUpdateParams,
  TermsOfServiceUserStatuses,
} from './resources/terms-of-service-user-statuses';
import {
  TermsOfService,
  TermsOfServiceBase,
  TermsOfServiceCreateParams,
  TermsOfServiceListParams,
  TermsOfServiceListResponse,
  TermsOfServiceUpdateParams,
  TermsOfServices,
} from './resources/terms-of-services';
import {
  Webhook,
  WebhookCreateParams,
  WebhookListParams,
  WebhookListResponse,
  WebhookMini,
  WebhookUpdateParams,
  Webhooks,
} from './resources/webhooks';
import {
  CollaboratorVariable,
  RoleVariable,
  WorkflowListParams,
  WorkflowListResponse,
  WorkflowStartParams,
  Workflows,
} from './resources/workflows';
import {
  ZipDownloadCreateParams,
  ZipDownloadCreateResponse,
  ZipDownloadStatusResponse,
  ZipDownloads,
} from './resources/zip-downloads';
import {
  AppItemAssociations,
  Collaborations as FilesAPICollaborations,
  File,
  FileCopyParams,
  FileDeleteParams,
  FileFull,
  FileGetThumbnailParams,
  FileListAppItemAssociationsParams,
  FileListCollaborationsParams,
  FileListCommentsParams,
  FileListCommentsResponse,
  FileListTasksResponse,
  FileRestoreParams,
  FileRestoreResponse,
  FileRetrieveParams,
  FileUpdateParams,
  FileVersionMini,
  Files,
  FolderBase,
  FolderMini,
} from './resources/files/files';
import {
  Folder,
  FolderCopyParams,
  FolderCreateParams,
  FolderDeleteParams,
  FolderFull,
  FolderListAppItemAssociationsParams,
  FolderListCollaborationsParams,
  FolderListItemsParams,
  FolderRestoreParams,
  FolderRestoreResponse,
  FolderRetrieveParams,
  FolderUpdateParams,
  Folders,
  Items,
} from './resources/folders/folders';
import { IntegrationMappings } from './resources/integration-mappings/integration-mappings';
import {
  MetadataTemplateListGlobalParams,
  MetadataTemplateListParams,
  MetadataTemplates,
} from './resources/metadata-templates/metadata-templates';
import {
  GroupMemberships as UsersAPIGroupMemberships,
  SessionTerminationMessage,
  TrackingCode,
  User,
  UserCreateParams,
  UserDeleteParams,
  UserFull,
  UserListMembershipsParams,
  UserListParams,
  UserListResponse,
  UserRetrieveCurrentParams,
  UserRetrieveParams,
  UserTerminateSessionsParams,
  UserUpdateParams,
  Users,
} from './resources/users/users';
import {
  WebLink,
  WebLinkBase,
  WebLinkCreateParams,
  WebLinkRestoreParams,
  WebLinkRestoreResponse,
  WebLinkRetrieveParams,
  WebLinkUpdateParams,
  WebLinks,
} from './resources/web-links/web-links';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['NIMBUS_STORAGE_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NIMBUS_STORAGE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['NIMBUS_STORAGE_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Nimbus Storage API.
 */
export class NimbusStorage {
  apiKey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Nimbus Storage API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['NIMBUS_STORAGE_API_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['NIMBUS_STORAGE_BASE_URL'] ?? https://api.box.com/2.0] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('NIMBUS_STORAGE_BASE_URL'),
    apiKey = readEnv('NIMBUS_STORAGE_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.box.com/2.0`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? NimbusStorage.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('NIMBUS_STORAGE_LOG'), "process.env['NIMBUS_STORAGE_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    return new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.box.com/2.0';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.apiKey && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    if (this.apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static NimbusStorage = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NimbusStorageError = Errors.NimbusStorageError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  authorize: API.Authorize = new API.Authorize(this);
  oauth2: API.Oauth2 = new API.Oauth2(this);
  files: API.Files = new API.Files(this);
  fileRequests: API.FileRequests = new API.FileRequests(this);
  folders: API.Folders = new API.Folders(this);
  folderLocks: API.FolderLocks = new API.FolderLocks(this);
  metadataTemplates: API.MetadataTemplates = new API.MetadataTemplates(this);
  metadataCascadePolicies: API.MetadataCascadePolicies = new API.MetadataCascadePolicies(this);
  metadataQueries: API.MetadataQueries = new API.MetadataQueries(this);
  comments: API.Comments = new API.Comments(this);
  collaborations: API.Collaborations = new API.Collaborations(this);
  search: API.Search = new API.Search(this);
  tasks: API.Tasks = new API.Tasks(this);
  taskAssignments: API.TaskAssignments = new API.TaskAssignments(this);
  sharedItems: API.SharedItems = new API.SharedItems(this);
  sharedItemsFolders: API.SharedItemsFolders = new API.SharedItemsFolders(this);
  webLinks: API.WebLinks = new API.WebLinks(this);
  sharedItemsWebLinks: API.SharedItemsWebLinks = new API.SharedItemsWebLinks(this);
  sharedItemsAppItems: API.SharedItemsAppItems = new API.SharedItemsAppItems(this);
  users: API.Users = new API.Users(this);
  invites: API.Invites = new API.Invites(this);
  groups: API.Groups = new API.Groups(this);
  groupMemberships: API.GroupMemberships = new API.GroupMemberships(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  skillInvocations: API.SkillInvocations = new API.SkillInvocations(this);
  events: API.Events = new API.Events(this);
  collections: API.Collections = new API.Collections(this);
  recentItems: API.RecentItems = new API.RecentItems(this);
  retentionPolicies: API.RetentionPolicies = new API.RetentionPolicies(this);
  retentionPolicyAssignments: API.RetentionPolicyAssignments = new API.RetentionPolicyAssignments(this);
  legalHoldPolicies: API.LegalHoldPolicies = new API.LegalHoldPolicies(this);
  legalHoldPolicyAssignments: API.LegalHoldPolicyAssignments = new API.LegalHoldPolicyAssignments(this);
  fileVersionRetentions: API.FileVersionRetentions = new API.FileVersionRetentions(this);
  fileVersionLegalHolds: API.FileVersionLegalHolds = new API.FileVersionLegalHolds(this);
  shieldInformationBarriers: API.ShieldInformationBarriers = new API.ShieldInformationBarriers(this);
  shieldInformationBarrierReports: API.ShieldInformationBarrierReports =
    new API.ShieldInformationBarrierReports(this);
  shieldInformationBarrierSegments: API.ShieldInformationBarrierSegments =
    new API.ShieldInformationBarrierSegments(this);
  shieldInformationBarrierSegmentMembers: API.ShieldInformationBarrierSegmentMembers =
    new API.ShieldInformationBarrierSegmentMembers(this);
  shieldInformationBarrierSegmentRestrictions: API.ShieldInformationBarrierSegmentRestrictions =
    new API.ShieldInformationBarrierSegmentRestrictions(this);
  devicePinners: API.DevicePinners = new API.DevicePinners(this);
  enterprises: API.Enterprises = new API.Enterprises(this);
  termsOfServices: API.TermsOfServices = new API.TermsOfServices(this);
  termsOfServiceUserStatuses: API.TermsOfServiceUserStatuses = new API.TermsOfServiceUserStatuses(this);
  collaborationWhitelistEntries: API.CollaborationWhitelistEntries = new API.CollaborationWhitelistEntries(
    this,
  );
  collaborationWhitelistExemptTargets: API.CollaborationWhitelistExemptTargets =
    new API.CollaborationWhitelistExemptTargets(this);
  storagePolicies: API.StoragePolicies = new API.StoragePolicies(this);
  storagePolicyAssignments: API.StoragePolicyAssignments = new API.StoragePolicyAssignments(this);
  zipDownloads: API.ZipDownloads = new API.ZipDownloads(this);
  signRequests: API.SignRequests = new API.SignRequests(this);
  workflows: API.Workflows = new API.Workflows(this);
  signTemplates: API.SignTemplates = new API.SignTemplates(this);
  integrationMappings: API.IntegrationMappings = new API.IntegrationMappings(this);
  ai: API.AI = new API.AI(this);
  aiAgentDefault: API.AIAgentDefault = new API.AIAgentDefault(this);
  aiAgents: API.AIAgents = new API.AIAgents(this);
}
NimbusStorage.Authorize = Authorize;
NimbusStorage.Oauth2 = Oauth2;
NimbusStorage.Files = Files;
NimbusStorage.FileRequests = FileRequests;
NimbusStorage.Folders = Folders;
NimbusStorage.FolderLocks = FolderLocks;
NimbusStorage.MetadataCascadePolicies = MetadataCascadePolicies;
NimbusStorage.MetadataQueries = MetadataQueries;
NimbusStorage.Comments = Comments;
NimbusStorage.Collaborations = Collaborations;
NimbusStorage.Search = Search;
NimbusStorage.Tasks = Tasks;
NimbusStorage.TaskAssignments = TaskAssignments;
NimbusStorage.SharedItems = SharedItems;
NimbusStorage.SharedItemsFolders = SharedItemsFolders;
NimbusStorage.WebLinks = WebLinks;
NimbusStorage.SharedItemsWebLinks = SharedItemsWebLinks;
NimbusStorage.SharedItemsAppItems = SharedItemsAppItems;
NimbusStorage.Users = Users;
NimbusStorage.Invites = Invites;
NimbusStorage.Groups = Groups;
NimbusStorage.GroupMemberships = GroupMemberships;
NimbusStorage.Webhooks = Webhooks;
NimbusStorage.SkillInvocations = SkillInvocations;
NimbusStorage.Events = Events;
NimbusStorage.Collections = Collections;
NimbusStorage.RecentItems = RecentItems;
NimbusStorage.RetentionPolicies = RetentionPolicies;
NimbusStorage.RetentionPolicyAssignments = RetentionPolicyAssignments;
NimbusStorage.LegalHoldPolicies = LegalHoldPolicies;
NimbusStorage.LegalHoldPolicyAssignments = LegalHoldPolicyAssignments;
NimbusStorage.FileVersionRetentions = FileVersionRetentions;
NimbusStorage.FileVersionLegalHolds = FileVersionLegalHolds;
NimbusStorage.ShieldInformationBarriers = ShieldInformationBarriers;
NimbusStorage.ShieldInformationBarrierReports = ShieldInformationBarrierReports;
NimbusStorage.ShieldInformationBarrierSegments = ShieldInformationBarrierSegments;
NimbusStorage.ShieldInformationBarrierSegmentMembers = ShieldInformationBarrierSegmentMembers;
NimbusStorage.ShieldInformationBarrierSegmentRestrictions = ShieldInformationBarrierSegmentRestrictions;
NimbusStorage.DevicePinners = DevicePinners;
NimbusStorage.Enterprises = Enterprises;
NimbusStorage.TermsOfServices = TermsOfServices;
NimbusStorage.TermsOfServiceUserStatuses = TermsOfServiceUserStatuses;
NimbusStorage.CollaborationWhitelistEntries = CollaborationWhitelistEntries;
NimbusStorage.CollaborationWhitelistExemptTargets = CollaborationWhitelistExemptTargets;
NimbusStorage.StoragePolicies = StoragePolicies;
NimbusStorage.StoragePolicyAssignments = StoragePolicyAssignments;
NimbusStorage.ZipDownloads = ZipDownloads;
NimbusStorage.SignRequests = SignRequests;
NimbusStorage.Workflows = Workflows;
NimbusStorage.SignTemplates = SignTemplates;
NimbusStorage.IntegrationMappings = IntegrationMappings;
NimbusStorage.AI = AI;
NimbusStorage.AIAgentDefault = AIAgentDefault;
NimbusStorage.AIAgents = AIAgents;
export declare namespace NimbusStorage {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Authorize as Authorize,
    type AuthorizeRequestResponse as AuthorizeRequestResponse,
    type AuthorizeRequestParams as AuthorizeRequestParams,
  };

  export {
    Oauth2 as Oauth2,
    type AccessToken as AccessToken,
    type FileOrFolderScope as FileOrFolderScope,
    type Oauth2RequestTokenParams as Oauth2RequestTokenParams,
    type Oauth2RevokeTokenParams as Oauth2RevokeTokenParams,
  };

  export {
    Files as Files,
    type AppItemAssociations as AppItemAssociations,
    type FilesAPICollaborations as Collaborations,
    type File as File,
    type FileFull as FileFull,
    type FileVersionMini as FileVersionMini,
    type FolderBase as FolderBase,
    type FolderMini as FolderMini,
    type FileListCommentsResponse as FileListCommentsResponse,
    type FileListTasksResponse as FileListTasksResponse,
    type FileRestoreResponse as FileRestoreResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileCopyParams as FileCopyParams,
    type FileGetThumbnailParams as FileGetThumbnailParams,
    type FileListAppItemAssociationsParams as FileListAppItemAssociationsParams,
    type FileListCollaborationsParams as FileListCollaborationsParams,
    type FileListCommentsParams as FileListCommentsParams,
    type FileRestoreParams as FileRestoreParams,
  };

  export {
    FileRequests as FileRequests,
    type FileRequest as FileRequest,
    type FileRequestUpdate as FileRequestUpdate,
    type FileRequestUpdateParams as FileRequestUpdateParams,
    type FileRequestCopyParams as FileRequestCopyParams,
  };

  export {
    Folders as Folders,
    type Folder as Folder,
    type FolderFull as FolderFull,
    type Items as Items,
    type FolderRestoreResponse as FolderRestoreResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderDeleteParams as FolderDeleteParams,
    type FolderCopyParams as FolderCopyParams,
    type FolderListAppItemAssociationsParams as FolderListAppItemAssociationsParams,
    type FolderListCollaborationsParams as FolderListCollaborationsParams,
    type FolderListItemsParams as FolderListItemsParams,
    type FolderRestoreParams as FolderRestoreParams,
  };

  export {
    FolderLocks as FolderLocks,
    type FolderLock as FolderLock,
    type FolderLockListResponse as FolderLockListResponse,
    type FolderLockCreateParams as FolderLockCreateParams,
    type FolderLockListParams as FolderLockListParams,
  };

  export {
    type MetadataTemplates as MetadataTemplates,
    type MetadataTemplateListParams as MetadataTemplateListParams,
    type MetadataTemplateListGlobalParams as MetadataTemplateListGlobalParams,
  };

  export {
    MetadataCascadePolicies as MetadataCascadePolicies,
    type MetadataCascadePolicy as MetadataCascadePolicy,
    type MetadataCascadePolicyListResponse as MetadataCascadePolicyListResponse,
    type MetadataCascadePolicyCreateParams as MetadataCascadePolicyCreateParams,
    type MetadataCascadePolicyListParams as MetadataCascadePolicyListParams,
    type MetadataCascadePolicyApplyParams as MetadataCascadePolicyApplyParams,
  };

  export {
    MetadataQueries as MetadataQueries,
    type MetadataQueryExecuteResponse as MetadataQueryExecuteResponse,
    type MetadataQueryExecuteParams as MetadataQueryExecuteParams,
  };

  export {
    Comments as Comments,
    type CommentFull as CommentFull,
    type CommentCreateParams as CommentCreateParams,
    type CommentRetrieveParams as CommentRetrieveParams,
    type CommentUpdateParams as CommentUpdateParams,
  };

  export {
    Collaborations as Collaborations,
    type Collaboration as Collaboration,
    type CollaborationsOffsetPaginated as CollaborationsOffsetPaginated,
    type UserCollaborations as UserCollaborations,
    type CollaborationCreateParams as CollaborationCreateParams,
    type CollaborationRetrieveParams as CollaborationRetrieveParams,
    type CollaborationUpdateParams as CollaborationUpdateParams,
    type CollaborationListParams as CollaborationListParams,
  };

  export {
    Search as Search,
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };

  export {
    Tasks as Tasks,
    type FileMini as FileMini,
    type Task as Task,
    type TasksAPITaskAssignments as TaskAssignments,
    type TaskCreateParams as TaskCreateParams,
    type TaskUpdateParams as TaskUpdateParams,
  };

  export {
    TaskAssignments as TaskAssignments,
    type TaskAssignment as TaskAssignment,
    type TaskAssignmentCreateParams as TaskAssignmentCreateParams,
    type TaskAssignmentUpdateParams as TaskAssignmentUpdateParams,
  };

  export { SharedItems as SharedItems, type SharedItemRetrieveParams as SharedItemRetrieveParams };

  export { SharedItemsFolders as SharedItemsFolders };

  export {
    WebLinks as WebLinks,
    type WebLink as WebLink,
    type WebLinkBase as WebLinkBase,
    type WebLinkRestoreResponse as WebLinkRestoreResponse,
    type WebLinkCreateParams as WebLinkCreateParams,
    type WebLinkRetrieveParams as WebLinkRetrieveParams,
    type WebLinkUpdateParams as WebLinkUpdateParams,
    type WebLinkRestoreParams as WebLinkRestoreParams,
  };

  export { SharedItemsWebLinks as SharedItemsWebLinks };

  export { SharedItemsAppItems as SharedItemsAppItems, type AppItem as AppItem };

  export {
    Users as Users,
    type UsersAPIGroupMemberships as GroupMemberships,
    type SessionTerminationMessage as SessionTerminationMessage,
    type TrackingCode as TrackingCode,
    type User as User,
    type UserFull as UserFull,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserListMembershipsParams as UserListMembershipsParams,
    type UserRetrieveCurrentParams as UserRetrieveCurrentParams,
    type UserTerminateSessionsParams as UserTerminateSessionsParams,
  };

  export {
    Invites as Invites,
    type Invite as Invite,
    type InviteCreateParams as InviteCreateParams,
    type InviteRetrieveParams as InviteRetrieveParams,
  };

  export {
    Groups as Groups,
    type GroupFull as GroupFull,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupListCollaborationsParams as GroupListCollaborationsParams,
    type GroupListMembershipsParams as GroupListMembershipsParams,
    type GroupTerminateSessionsParams as GroupTerminateSessionsParams,
  };

  export {
    GroupMemberships as GroupMemberships,
    type GroupBase as GroupBase,
    type GroupMembership as GroupMembership,
    type GroupMini as GroupMini,
    type GroupMembershipCreateParams as GroupMembershipCreateParams,
    type GroupMembershipRetrieveParams as GroupMembershipRetrieveParams,
    type GroupMembershipUpdateParams as GroupMembershipUpdateParams,
  };

  export {
    Webhooks as Webhooks,
    type Webhook as Webhook,
    type WebhookMini as WebhookMini,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    SkillInvocations as SkillInvocations,
    type SkillInvocationUpdateParams as SkillInvocationUpdateParams,
  };

  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };

  export {
    Collections as Collections,
    type Collection as Collection,
    type CollectionListResponse as CollectionListResponse,
    type CollectionListItemsResponse as CollectionListItemsResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionListItemsParams as CollectionListItemsParams,
  };

  export {
    RecentItems as RecentItems,
    type RecentItemListResponse as RecentItemListResponse,
    type RecentItemListParams as RecentItemListParams,
  };

  export {
    RetentionPolicies as RetentionPolicies,
    type RetentionPolicy as RetentionPolicy,
    type RetentionPolicyMini as RetentionPolicyMini,
    type UserBase as UserBase,
    type UserMini as UserMini,
    type RetentionPolicyListResponse as RetentionPolicyListResponse,
    type RetentionPolicyListAssignmentsResponse as RetentionPolicyListAssignmentsResponse,
    type RetentionPolicyCreateParams as RetentionPolicyCreateParams,
    type RetentionPolicyRetrieveParams as RetentionPolicyRetrieveParams,
    type RetentionPolicyUpdateParams as RetentionPolicyUpdateParams,
    type RetentionPolicyListParams as RetentionPolicyListParams,
    type RetentionPolicyListAssignmentsParams as RetentionPolicyListAssignmentsParams,
  };

  export {
    RetentionPolicyAssignments as RetentionPolicyAssignments,
    type FilesUnderRetention as FilesUnderRetention,
    type RetentionPolicyAssignment as RetentionPolicyAssignment,
    type RetentionPolicyAssignmentCreateParams as RetentionPolicyAssignmentCreateParams,
    type RetentionPolicyAssignmentRetrieveParams as RetentionPolicyAssignmentRetrieveParams,
    type RetentionPolicyAssignmentListFileVersionsUnderRetentionParams as RetentionPolicyAssignmentListFileVersionsUnderRetentionParams,
    type RetentionPolicyAssignmentListFilesUnderRetentionParams as RetentionPolicyAssignmentListFilesUnderRetentionParams,
  };

  export {
    LegalHoldPolicies as LegalHoldPolicies,
    type LegalHoldPolicy as LegalHoldPolicy,
    type LegalHoldPolicyMini as LegalHoldPolicyMini,
    type LegalHoldPolicyListResponse as LegalHoldPolicyListResponse,
    type LegalHoldPolicyCreateParams as LegalHoldPolicyCreateParams,
    type LegalHoldPolicyUpdateParams as LegalHoldPolicyUpdateParams,
    type LegalHoldPolicyListParams as LegalHoldPolicyListParams,
  };

  export {
    LegalHoldPolicyAssignments as LegalHoldPolicyAssignments,
    type LegalHoldPolicyAssignment as LegalHoldPolicyAssignment,
    type LegalHoldPolicyAssignmentListResponse as LegalHoldPolicyAssignmentListResponse,
    type LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse as LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse,
    type LegalHoldPolicyAssignmentListFilesOnHoldResponse as LegalHoldPolicyAssignmentListFilesOnHoldResponse,
    type LegalHoldPolicyAssignmentListParams as LegalHoldPolicyAssignmentListParams,
    type LegalHoldPolicyAssignmentAssignParams as LegalHoldPolicyAssignmentAssignParams,
    type LegalHoldPolicyAssignmentListFileVersionsOnHoldParams as LegalHoldPolicyAssignmentListFileVersionsOnHoldParams,
    type LegalHoldPolicyAssignmentListFilesOnHoldParams as LegalHoldPolicyAssignmentListFilesOnHoldParams,
  };

  export {
    FileVersionRetentions as FileVersionRetentions,
    type FileVersionRetention as FileVersionRetention,
    type FileVersionRetentionListResponse as FileVersionRetentionListResponse,
    type FileVersionRetentionListParams as FileVersionRetentionListParams,
  };

  export {
    FileVersionLegalHolds as FileVersionLegalHolds,
    type FileVersionLegalHold as FileVersionLegalHold,
    type FileVersionLegalHoldListResponse as FileVersionLegalHoldListResponse,
    type FileVersionLegalHoldListParams as FileVersionLegalHoldListParams,
  };

  export {
    ShieldInformationBarriers as ShieldInformationBarriers,
    type EnterpriseBase as EnterpriseBase,
    type ShieldInformationBarrier as ShieldInformationBarrier,
    type ShieldInformationBarrierListResponse as ShieldInformationBarrierListResponse,
    type ShieldInformationBarrierCreateParams as ShieldInformationBarrierCreateParams,
    type ShieldInformationBarrierListParams as ShieldInformationBarrierListParams,
    type ShieldInformationBarrierChangeStatusParams as ShieldInformationBarrierChangeStatusParams,
  };

  export {
    ShieldInformationBarrierReports as ShieldInformationBarrierReports,
    type ShieldInformationBarrierReference as ShieldInformationBarrierReference,
    type ShieldInformationBarrierReport as ShieldInformationBarrierReport,
    type ShieldInformationBarrierReportListResponse as ShieldInformationBarrierReportListResponse,
    type ShieldInformationBarrierReportCreateParams as ShieldInformationBarrierReportCreateParams,
    type ShieldInformationBarrierReportListParams as ShieldInformationBarrierReportListParams,
  };

  export {
    ShieldInformationBarrierSegments as ShieldInformationBarrierSegments,
    type ShieldInformationBarrierBase as ShieldInformationBarrierBase,
    type ShieldInformationBarrierSegment as ShieldInformationBarrierSegment,
    type ShieldInformationBarrierSegmentListResponse as ShieldInformationBarrierSegmentListResponse,
    type ShieldInformationBarrierSegmentCreateParams as ShieldInformationBarrierSegmentCreateParams,
    type ShieldInformationBarrierSegmentUpdateParams as ShieldInformationBarrierSegmentUpdateParams,
    type ShieldInformationBarrierSegmentListParams as ShieldInformationBarrierSegmentListParams,
  };

  export {
    ShieldInformationBarrierSegmentMembers as ShieldInformationBarrierSegmentMembers,
    type ShieldInformationBarrierSegmentMember as ShieldInformationBarrierSegmentMember,
    type ShieldInformationBarrierSegmentMemberListResponse as ShieldInformationBarrierSegmentMemberListResponse,
    type ShieldInformationBarrierSegmentMemberCreateParams as ShieldInformationBarrierSegmentMemberCreateParams,
    type ShieldInformationBarrierSegmentMemberListParams as ShieldInformationBarrierSegmentMemberListParams,
  };

  export {
    ShieldInformationBarrierSegmentRestrictions as ShieldInformationBarrierSegmentRestrictions,
    type SegmentRestriction as SegmentRestriction,
    type ShieldInformationBarrierSegmentRestrictionListResponse as ShieldInformationBarrierSegmentRestrictionListResponse,
    type ShieldInformationBarrierSegmentRestrictionCreateParams as ShieldInformationBarrierSegmentRestrictionCreateParams,
    type ShieldInformationBarrierSegmentRestrictionListParams as ShieldInformationBarrierSegmentRestrictionListParams,
  };

  export { DevicePinners as DevicePinners, type DevicePinner as DevicePinner };

  export {
    Enterprises as Enterprises,
    type EnterpriseListDevicePinnersResponse as EnterpriseListDevicePinnersResponse,
    type EnterpriseListDevicePinnersParams as EnterpriseListDevicePinnersParams,
  };

  export {
    TermsOfServices as TermsOfServices,
    type TermsOfService as TermsOfService,
    type TermsOfServiceBase as TermsOfServiceBase,
    type TermsOfServiceListResponse as TermsOfServiceListResponse,
    type TermsOfServiceCreateParams as TermsOfServiceCreateParams,
    type TermsOfServiceUpdateParams as TermsOfServiceUpdateParams,
    type TermsOfServiceListParams as TermsOfServiceListParams,
  };

  export {
    TermsOfServiceUserStatuses as TermsOfServiceUserStatuses,
    type TermsOfServiceUserStatus as TermsOfServiceUserStatus,
    type TermsOfServiceUserStatusListResponse as TermsOfServiceUserStatusListResponse,
    type TermsOfServiceUserStatusCreateParams as TermsOfServiceUserStatusCreateParams,
    type TermsOfServiceUserStatusUpdateParams as TermsOfServiceUserStatusUpdateParams,
    type TermsOfServiceUserStatusListParams as TermsOfServiceUserStatusListParams,
  };

  export {
    CollaborationWhitelistEntries as CollaborationWhitelistEntries,
    type CollaborationAllowlistEntry as CollaborationAllowlistEntry,
    type CollaborationWhitelistEntryListResponse as CollaborationWhitelistEntryListResponse,
    type CollaborationWhitelistEntryCreateParams as CollaborationWhitelistEntryCreateParams,
    type CollaborationWhitelistEntryListParams as CollaborationWhitelistEntryListParams,
  };

  export {
    CollaborationWhitelistExemptTargets as CollaborationWhitelistExemptTargets,
    type ExemptTarget as ExemptTarget,
    type CollaborationWhitelistExemptTargetListResponse as CollaborationWhitelistExemptTargetListResponse,
    type CollaborationWhitelistExemptTargetCreateParams as CollaborationWhitelistExemptTargetCreateParams,
    type CollaborationWhitelistExemptTargetListParams as CollaborationWhitelistExemptTargetListParams,
  };

  export {
    StoragePolicies as StoragePolicies,
    type StoragePolicy as StoragePolicy,
    type StoragePolicyMini as StoragePolicyMini,
    type StoragePolicyListResponse as StoragePolicyListResponse,
    type StoragePolicyListParams as StoragePolicyListParams,
  };

  export {
    StoragePolicyAssignments as StoragePolicyAssignments,
    type StoragePolicyAssignment as StoragePolicyAssignment,
    type StoragePolicyAssignmentListResponse as StoragePolicyAssignmentListResponse,
    type StoragePolicyAssignmentCreateParams as StoragePolicyAssignmentCreateParams,
    type StoragePolicyAssignmentUpdateParams as StoragePolicyAssignmentUpdateParams,
    type StoragePolicyAssignmentListParams as StoragePolicyAssignmentListParams,
  };

  export {
    ZipDownloads as ZipDownloads,
    type ZipDownloadCreateResponse as ZipDownloadCreateResponse,
    type ZipDownloadStatusResponse as ZipDownloadStatusResponse,
    type ZipDownloadCreateParams as ZipDownloadCreateParams,
  };

  export {
    SignRequests as SignRequests,
    type FileBase as FileBase,
    type SignRequest as SignRequest,
    type SignRequestBase as SignRequestBase,
    type SignRequestCreateSigner as SignRequestCreateSigner,
    type SignRequestPrefillTag as SignRequestPrefillTag,
    type SignRequestListResponse as SignRequestListResponse,
    type SignRequestCreateParams as SignRequestCreateParams,
    type SignRequestListParams as SignRequestListParams,
  };

  export {
    Workflows as Workflows,
    type CollaboratorVariable as CollaboratorVariable,
    type RoleVariable as RoleVariable,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowStartParams as WorkflowStartParams,
  };

  export {
    SignTemplates as SignTemplates,
    type SignTemplate as SignTemplate,
    type SignTemplateListResponse as SignTemplateListResponse,
    type SignTemplateListParams as SignTemplateListParams,
  };

  export { IntegrationMappings as IntegrationMappings };

  export {
    AI as AI,
    type AIAgentInfo as AIAgentInfo,
    type AIAgentReference as AIAgentReference,
    type AIDialogueHistory as AIDialogueHistory,
    type AIItemBase as AIItemBase,
    type AIResponse as AIResponse,
    type AIAskQuestionResponse as AIAskQuestionResponse,
    type AIExtractStructuredMetadataResponse as AIExtractStructuredMetadataResponse,
    type AIAskQuestionParams as AIAskQuestionParams,
    type AIExtractMetadataParams as AIExtractMetadataParams,
    type AIExtractStructuredMetadataParams as AIExtractStructuredMetadataParams,
    type AIGenerateTextParams as AIGenerateTextParams,
  };

  export {
    AIAgentDefault as AIAgentDefault,
    type AIAgentAsk as AIAgentAsk,
    type AIAgentBasicGenTool as AIAgentBasicGenTool,
    type AIAgentBasicTextTool as AIAgentBasicTextTool,
    type AIAgentBasicTextToolBase as AIAgentBasicTextToolBase,
    type AIAgentExtract as AIAgentExtract,
    type AIAgentExtractStructured as AIAgentExtractStructured,
    type AIAgentLongTextTool as AIAgentLongTextTool,
    type AIAgentSpreadsheetTool as AIAgentSpreadsheetTool,
    type AIAgentTextGen as AIAgentTextGen,
    type AILlmEndpointParams as AILlmEndpointParams,
    type AIAgentDefaultRetrieveResponse as AIAgentDefaultRetrieveResponse,
    type AIAgentDefaultRetrieveParams as AIAgentDefaultRetrieveParams,
  };

  export {
    AIAgents as AIAgents,
    type AIAgentAllowedEntity as AIAgentAllowedEntity,
    type AISingleAgent as AISingleAgent,
    type AIStudioAgentBasicGenTool as AIStudioAgentBasicGenTool,
    type AIStudioAgentBasicTextTool as AIStudioAgentBasicTextTool,
    type AIStudioAgentBasicTextToolResponse as AIStudioAgentBasicTextToolResponse,
    type AIStudioAgentLongTextTool as AIStudioAgentLongTextTool,
    type AIStudioAgentLongTextToolResponse as AIStudioAgentLongTextToolResponse,
    type AIStudioAgentSpreadsheetTool as AIStudioAgentSpreadsheetTool,
    type CreateAIAgent as CreateAIAgent,
    type AIAgentListResponse as AIAgentListResponse,
    type AIAgentCreateParams as AIAgentCreateParams,
    type AIAgentRetrieveParams as AIAgentRetrieveParams,
    type AIAgentUpdateParams as AIAgentUpdateParams,
    type AIAgentListParams as AIAgentListParams,
  };
}

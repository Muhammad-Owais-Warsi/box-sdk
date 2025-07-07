# Authorize

Types:

- <code><a href="./src/resources/authorize.ts">AuthorizeRequestResponse</a></code>

Methods:

- <code title="get /authorize">client.authorize.<a href="./src/resources/authorize.ts">request</a>({ ...params }) -> string</code>

# Oauth2

Types:

- <code><a href="./src/resources/oauth2.ts">AccessToken</a></code>
- <code><a href="./src/resources/oauth2.ts">FileOrFolderScope</a></code>

Methods:

- <code title="post /oauth2/token">client.oauth2.<a href="./src/resources/oauth2.ts">requestToken</a>({ ...params }) -> AccessToken</code>
- <code title="post /oauth2/revoke">client.oauth2.<a href="./src/resources/oauth2.ts">revokeToken</a>({ ...params }) -> void</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">AppItemAssociations</a></code>
- <code><a href="./src/resources/files/files.ts">Collaborations</a></code>
- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileFull</a></code>
- <code><a href="./src/resources/files/files.ts">FileVersionMini</a></code>
- <code><a href="./src/resources/files/files.ts">FolderBase</a></code>
- <code><a href="./src/resources/files/files.ts">FolderMini</a></code>
- <code><a href="./src/resources/files/files.ts">FileListCommentsResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileListTasksResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileRestoreResponse</a></code>

Methods:

- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">retrieve</a>(fileID, { ...params }) -> FileFull</code>
- <code title="put /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">update</a>(fileID, { ...params }) -> FileFull</code>
- <code title="delete /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /files/{file_id}/copy">client.files.<a href="./src/resources/files/files.ts">copy</a>(fileID, { ...params }) -> FileFull</code>
- <code title="get /files/{file_id}/thumbnail.{extension}">client.files.<a href="./src/resources/files/files.ts">getThumbnail</a>(extension, { ...params }) -> Response</code>
- <code title="get /files/{file_id}/app_item_associations">client.files.<a href="./src/resources/files/files.ts">listAppItemAssociations</a>(fileID, { ...params }) -> AppItemAssociations</code>
- <code title="get /files/{file_id}/collaborations">client.files.<a href="./src/resources/files/files.ts">listCollaborations</a>(fileID, { ...params }) -> Collaborations</code>
- <code title="get /files/{file_id}/comments">client.files.<a href="./src/resources/files/files.ts">listComments</a>(fileID, { ...params }) -> FileListCommentsResponse</code>
- <code title="get /files/{file_id}/tasks">client.files.<a href="./src/resources/files/files.ts">listTasks</a>(fileID) -> FileListTasksResponse</code>
- <code title="post /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">restore</a>(fileID, { ...params }) -> FileRestoreResponse</code>

## Content

Types:

- <code><a href="./src/resources/files/content.ts">Files</a></code>

Methods:

- <code title="get /files/{file_id}/content">client.files.content.<a href="./src/resources/files/content.ts">download</a>(fileID, { ...params }) -> Response</code>
- <code title="post /files/content">client.files.content.<a href="./src/resources/files/content.ts">upload</a>({ ...params }) -> Files</code>
- <code title="post /files/{file_id}/content">client.files.content.<a href="./src/resources/files/content.ts">uploadVersion</a>(fileID, { ...params }) -> Files</code>

## UploadSessions

Types:

- <code><a href="./src/resources/files/upload-sessions.ts">UploadPart</a></code>
- <code><a href="./src/resources/files/upload-sessions.ts">UploadSession</a></code>
- <code><a href="./src/resources/files/upload-sessions.ts">UploadSessionListPartsResponse</a></code>
- <code><a href="./src/resources/files/upload-sessions.ts">UploadSessionUploadPartResponse</a></code>

Methods:

- <code title="post /files/upload_sessions">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">create</a>({ ...params }) -> UploadSession</code>
- <code title="post /files/upload_sessions/{upload_session_id}/commit">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">commit</a>(uploadSessionID, { ...params }) -> Files</code>
- <code title="post /files/{file_id}/upload_sessions">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">createForExistingFile</a>(fileID, { ...params }) -> UploadSession</code>
- <code title="get /files/upload_sessions/{upload_session_id}">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">get</a>(uploadSessionID) -> UploadSession</code>
- <code title="get /files/upload_sessions/{upload_session_id}/parts">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">listParts</a>(uploadSessionID, { ...params }) -> UploadSessionListPartsResponse</code>
- <code title="delete /files/upload_sessions/{upload_session_id}">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">remove</a>(uploadSessionID) -> void</code>
- <code title="put /files/upload_sessions/{upload_session_id}">client.files.uploadSessions.<a href="./src/resources/files/upload-sessions.ts">uploadPart</a>(uploadSessionID, { ...params }) -> UploadSessionUploadPartResponse</code>

## Trash

Types:

- <code><a href="./src/resources/files/trash.ts">TrashRetrieveResponse</a></code>

Methods:

- <code title="get /files/{file_id}/trash">client.files.trash.<a href="./src/resources/files/trash.ts">retrieve</a>(fileID, { ...params }) -> TrashRetrieveResponse</code>
- <code title="delete /files/{file_id}/trash">client.files.trash.<a href="./src/resources/files/trash.ts">delete</a>(fileID) -> void</code>

## Versions

Types:

- <code><a href="./src/resources/files/versions.ts">FileVersion</a></code>
- <code><a href="./src/resources/files/versions.ts">FileVersionFull</a></code>
- <code><a href="./src/resources/files/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="get /files/{file_id}/versions/{file_version_id}">client.files.versions.<a href="./src/resources/files/versions.ts">retrieve</a>(fileVersionID, { ...params }) -> FileVersionFull</code>
- <code title="get /files/{file_id}/versions">client.files.versions.<a href="./src/resources/files/versions.ts">list</a>(fileID, { ...params }) -> VersionListResponse</code>
- <code title="delete /files/{file_id}/versions/{file_version_id}">client.files.versions.<a href="./src/resources/files/versions.ts">delete</a>(fileVersionID, { ...params }) -> void</code>
- <code title="post /files/{file_id}/versions/current">client.files.versions.<a href="./src/resources/files/versions.ts">promote</a>(fileID, { ...params }) -> FileVersionFull</code>
- <code title="put /files/{file_id}/versions/{file_version_id}">client.files.versions.<a href="./src/resources/files/versions.ts">restore</a>(fileVersionID, { ...params }) -> FileVersionFull</code>

## Metadata

Types:

- <code><a href="./src/resources/files/metadata/metadata.ts">Metadata</a></code>
- <code><a href="./src/resources/files/metadata/metadata.ts">MetadataFull</a></code>
- <code><a href="./src/resources/files/metadata/metadata.ts">MetadataInstanceValue</a></code>
- <code><a href="./src/resources/files/metadata/metadata.ts">Metadatas</a></code>

Methods:

- <code title="post /files/{file_id}/metadata/{scope}/{template_key}">client.files.metadata.<a href="./src/resources/files/metadata/metadata.ts">create</a>(templateKey, { ...params }) -> MetadataFull</code>
- <code title="get /files/{file_id}/metadata/{scope}/{template_key}">client.files.metadata.<a href="./src/resources/files/metadata/metadata.ts">retrieve</a>(templateKey, { ...params }) -> MetadataFull</code>
- <code title="put /files/{file_id}/metadata/{scope}/{template_key}">client.files.metadata.<a href="./src/resources/files/metadata/metadata.ts">update</a>(templateKey, [ ...body ]) -> MetadataFull</code>
- <code title="get /files/{file_id}/metadata">client.files.metadata.<a href="./src/resources/files/metadata/metadata.ts">list</a>(fileID) -> Metadatas</code>
- <code title="delete /files/{file_id}/metadata/{scope}/{template_key}">client.files.metadata.<a href="./src/resources/files/metadata/metadata.ts">delete</a>(templateKey, { ...params }) -> void</code>

### Enterprise

#### SecurityClassification6VmVochwUWo

Types:

- <code><a href="./src/resources/files/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">Classification</a></code>

Methods:

- <code title="get /files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.files.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/files/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">retrieve</a>(fileID) -> Classification</code>
- <code title="put /files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.files.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/files/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">update</a>(fileID, [ ...body ]) -> Classification</code>
- <code title="post /files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.files.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/files/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">add</a>(fileID, { ...params }) -> Classification</code>
- <code title="delete /files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.files.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/files/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">remove</a>(fileID) -> void</code>

### Global

#### BoxSkillsCards

Types:

- <code><a href="./src/resources/files/metadata/global/box-skills-cards.ts">KeywordSkillCard</a></code>
- <code><a href="./src/resources/files/metadata/global/box-skills-cards.ts">SkillCardsMetadata</a></code>
- <code><a href="./src/resources/files/metadata/global/box-skills-cards.ts">StatusSkillCard</a></code>
- <code><a href="./src/resources/files/metadata/global/box-skills-cards.ts">TimelineSkillCard</a></code>
- <code><a href="./src/resources/files/metadata/global/box-skills-cards.ts">TranscriptSkillCard</a></code>

Methods:

- <code title="post /files/{file_id}/metadata/global/boxSkillsCards">client.files.metadata.global.boxSkillsCards.<a href="./src/resources/files/metadata/global/box-skills-cards.ts">create</a>(fileID, { ...params }) -> SkillCardsMetadata</code>
- <code title="put /files/{file_id}/metadata/global/boxSkillsCards">client.files.metadata.global.boxSkillsCards.<a href="./src/resources/files/metadata/global/box-skills-cards.ts">update</a>(fileID, [ ...body ]) -> SkillCardsMetadata</code>
- <code title="get /files/{file_id}/metadata/global/boxSkillsCards">client.files.metadata.global.boxSkillsCards.<a href="./src/resources/files/metadata/global/box-skills-cards.ts">list</a>(fileID) -> SkillCardsMetadata</code>
- <code title="delete /files/{file_id}/metadata/global/boxSkillsCards">client.files.metadata.global.boxSkillsCards.<a href="./src/resources/files/metadata/global/box-skills-cards.ts">remove</a>(fileID) -> void</code>

## Watermark

Types:

- <code><a href="./src/resources/files/watermark.ts">Watermark</a></code>

Methods:

- <code title="get /files/{file_id}/watermark">client.files.watermark.<a href="./src/resources/files/watermark.ts">retrieve</a>(fileID) -> Watermark</code>
- <code title="put /files/{file_id}/watermark">client.files.watermark.<a href="./src/resources/files/watermark.ts">apply</a>(fileID, { ...params }) -> Watermark</code>
- <code title="delete /files/{file_id}/watermark">client.files.watermark.<a href="./src/resources/files/watermark.ts">remove</a>(fileID) -> void</code>

# FileRequests

Types:

- <code><a href="./src/resources/file-requests.ts">FileRequest</a></code>
- <code><a href="./src/resources/file-requests.ts">FileRequestUpdate</a></code>

Methods:

- <code title="get /file_requests/{file_request_id}">client.fileRequests.<a href="./src/resources/file-requests.ts">retrieve</a>(fileRequestID) -> FileRequest</code>
- <code title="put /file_requests/{file_request_id}">client.fileRequests.<a href="./src/resources/file-requests.ts">update</a>(fileRequestID, { ...params }) -> FileRequest</code>
- <code title="delete /file_requests/{file_request_id}">client.fileRequests.<a href="./src/resources/file-requests.ts">delete</a>(fileRequestID) -> void</code>
- <code title="post /file_requests/{file_request_id}/copy">client.fileRequests.<a href="./src/resources/file-requests.ts">copy</a>(fileRequestID, { ...params }) -> FileRequest</code>

# Folders

Types:

- <code><a href="./src/resources/folders/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderFull</a></code>
- <code><a href="./src/resources/folders/folders.ts">Items</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderRestoreResponse</a></code>

Methods:

- <code title="post /folders">client.folders.<a href="./src/resources/folders/folders.ts">create</a>({ ...params }) -> FolderFull</code>
- <code title="get /folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">retrieve</a>(folderID, { ...params }) -> FolderFull</code>
- <code title="put /folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">update</a>(folderID, { ...params }) -> FolderFull</code>
- <code title="delete /folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">delete</a>(folderID, { ...params }) -> void</code>
- <code title="post /folders/{folder_id}/copy">client.folders.<a href="./src/resources/folders/folders.ts">copy</a>(folderID, { ...params }) -> FolderFull</code>
- <code title="get /folders/{folder_id}/app_item_associations">client.folders.<a href="./src/resources/folders/folders.ts">listAppItemAssociations</a>(folderID, { ...params }) -> AppItemAssociations</code>
- <code title="get /folders/{folder_id}/collaborations">client.folders.<a href="./src/resources/folders/folders.ts">listCollaborations</a>(folderID, { ...params }) -> Collaborations</code>
- <code title="get /folders/{folder_id}/items">client.folders.<a href="./src/resources/folders/folders.ts">listItems</a>(folderID, { ...params }) -> Items</code>
- <code title="post /folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">restore</a>(folderID, { ...params }) -> FolderRestoreResponse</code>

## Trash

Types:

- <code><a href="./src/resources/folders/trash.ts">TrashGetTrashedFolderResponse</a></code>

Methods:

- <code title="get /folders/{folder_id}/trash">client.folders.trash.<a href="./src/resources/folders/trash.ts">getTrashedFolder</a>(folderID, { ...params }) -> TrashGetTrashedFolderResponse</code>
- <code title="get /folders/trash/items">client.folders.trash.<a href="./src/resources/folders/trash.ts">listTrashedItems</a>({ ...params }) -> Items</code>
- <code title="delete /folders/{folder_id}/trash">client.folders.trash.<a href="./src/resources/folders/trash.ts">permanentlyRemove</a>(folderID) -> void</code>

## Metadata

Methods:

- <code title="post /folders/{folder_id}/metadata/{scope}/{template_key}">client.folders.metadata.<a href="./src/resources/folders/metadata/metadata.ts">createMetadataInstance</a>(templateKey, { ...params }) -> MetadataFull</code>
- <code title="get /folders/{folder_id}/metadata/{scope}/{template_key}">client.folders.metadata.<a href="./src/resources/folders/metadata/metadata.ts">getMetadataInstance</a>(templateKey, { ...params }) -> MetadataFull</code>
- <code title="get /folders/{folder_id}/metadata">client.folders.metadata.<a href="./src/resources/folders/metadata/metadata.ts">listMetadata</a>(folderID) -> Metadatas</code>
- <code title="delete /folders/{folder_id}/metadata/{scope}/{template_key}">client.folders.metadata.<a href="./src/resources/folders/metadata/metadata.ts">removeMetadataInstance</a>(templateKey, { ...params }) -> void</code>
- <code title="put /folders/{folder_id}/metadata/{scope}/{template_key}">client.folders.metadata.<a href="./src/resources/folders/metadata/metadata.ts">updateMetadataInstance</a>(templateKey, [ ...body ]) -> MetadataFull</code>

### Enterprise

#### SecurityClassification6VmVochwUWo

Methods:

- <code title="post /folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folders.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/folders/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">addClassification</a>(folderID, { ...params }) -> Classification</code>
- <code title="get /folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folders.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/folders/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">getClassification</a>(folderID) -> Classification</code>
- <code title="delete /folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folders.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/folders/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">removeClassification</a>(folderID) -> void</code>
- <code title="put /folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folders.metadata.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/folders/metadata/enterprise/security-classification-6-vm-vochw-u-wo.ts">updateClassification</a>(folderID, [ ...body ]) -> Classification</code>

## Watermark

Methods:

- <code title="put /folders/{folder_id}/watermark">client.folders.watermark.<a href="./src/resources/folders/watermark.ts">applyWatermark</a>(folderID, { ...params }) -> Watermark</code>
- <code title="get /folders/{folder_id}/watermark">client.folders.watermark.<a href="./src/resources/folders/watermark.ts">getWatermark</a>(folderID) -> Watermark</code>
- <code title="delete /folders/{folder_id}/watermark">client.folders.watermark.<a href="./src/resources/folders/watermark.ts">removeWatermark</a>(folderID) -> void</code>

# FolderLocks

Types:

- <code><a href="./src/resources/folder-locks.ts">FolderLock</a></code>
- <code><a href="./src/resources/folder-locks.ts">FolderLockListResponse</a></code>

Methods:

- <code title="post /folder_locks">client.folderLocks.<a href="./src/resources/folder-locks.ts">create</a>({ ...params }) -> FolderLock</code>
- <code title="get /folder_locks">client.folderLocks.<a href="./src/resources/folder-locks.ts">list</a>({ ...params }) -> FolderLockListResponse</code>
- <code title="delete /folder_locks/{folder_lock_id}">client.folderLocks.<a href="./src/resources/folder-locks.ts">delete</a>(folderLockID) -> void</code>

# MetadataTemplates

Types:

- <code><a href="./src/resources/metadata-templates/metadata-templates.ts">MetadataTemplates</a></code>

Methods:

- <code title="get /metadata_templates/{template_id}">client.metadataTemplates.<a href="./src/resources/metadata-templates/metadata-templates.ts">retrieve</a>(templateID) -> MetadataTemplate</code>
- <code title="get /metadata_templates">client.metadataTemplates.<a href="./src/resources/metadata-templates/metadata-templates.ts">list</a>({ ...params }) -> MetadataTemplates</code>
- <code title="get /metadata_templates/global">client.metadataTemplates.<a href="./src/resources/metadata-templates/metadata-templates.ts">listGlobal</a>({ ...params }) -> MetadataTemplates</code>

## Enterprise

Methods:

- <code title="get /metadata_templates/enterprise">client.metadataTemplates.enterprise.<a href="./src/resources/metadata-templates/enterprise/enterprise.ts">list</a>({ ...params }) -> MetadataTemplates</code>

### SecurityClassification6VmVochwUWo

Types:

- <code><a href="./src/resources/metadata-templates/enterprise/security-classification-6-vm-vochw-u-wo.ts">ClassificationTemplate</a></code>

Methods:

- <code title="get /metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema">client.metadataTemplates.enterprise.securityClassification6VmVochwUWo.<a href="./src/resources/metadata-templates/enterprise/security-classification-6-vm-vochw-u-wo.ts">listClassifications</a>() -> ClassificationTemplate</code>

## Schema

Types:

- <code><a href="./src/resources/metadata-templates/schema.ts">MetadataTemplate</a></code>

Methods:

- <code title="post /metadata_templates/schema">client.metadataTemplates.schema.<a href="./src/resources/metadata-templates/schema.ts">create</a>({ ...params }) -> MetadataTemplate</code>
- <code title="get /metadata_templates/{scope}/{template_key}/schema">client.metadataTemplates.schema.<a href="./src/resources/metadata-templates/schema.ts">retrieve</a>(templateKey, { ...params }) -> MetadataTemplate</code>
- <code title="put /metadata_templates/{scope}/{template_key}/schema">client.metadataTemplates.schema.<a href="./src/resources/metadata-templates/schema.ts">update</a>(templateKey, [ ...body ]) -> MetadataTemplate</code>
- <code title="delete /metadata_templates/{scope}/{template_key}/schema">client.metadataTemplates.schema.<a href="./src/resources/metadata-templates/schema.ts">delete</a>(templateKey, { ...params }) -> void</code>

# MetadataCascadePolicies

Types:

- <code><a href="./src/resources/metadata-cascade-policies.ts">MetadataCascadePolicy</a></code>
- <code><a href="./src/resources/metadata-cascade-policies.ts">MetadataCascadePolicyListResponse</a></code>

Methods:

- <code title="post /metadata_cascade_policies">client.metadataCascadePolicies.<a href="./src/resources/metadata-cascade-policies.ts">create</a>({ ...params }) -> MetadataCascadePolicy</code>
- <code title="get /metadata_cascade_policies/{metadata_cascade_policy_id}">client.metadataCascadePolicies.<a href="./src/resources/metadata-cascade-policies.ts">retrieve</a>(metadataCascadePolicyID) -> MetadataCascadePolicy</code>
- <code title="get /metadata_cascade_policies">client.metadataCascadePolicies.<a href="./src/resources/metadata-cascade-policies.ts">list</a>({ ...params }) -> MetadataCascadePolicyListResponse</code>
- <code title="delete /metadata_cascade_policies/{metadata_cascade_policy_id}">client.metadataCascadePolicies.<a href="./src/resources/metadata-cascade-policies.ts">delete</a>(metadataCascadePolicyID) -> void</code>
- <code title="post /metadata_cascade_policies/{metadata_cascade_policy_id}/apply">client.metadataCascadePolicies.<a href="./src/resources/metadata-cascade-policies.ts">apply</a>(metadataCascadePolicyID, { ...params }) -> void</code>

# MetadataQueries

Types:

- <code><a href="./src/resources/metadata-queries.ts">MetadataQueryExecuteResponse</a></code>

Methods:

- <code title="post /metadata_queries/execute_read">client.metadataQueries.<a href="./src/resources/metadata-queries.ts">execute</a>({ ...params }) -> MetadataQueryExecuteResponse</code>

# Comments

Types:

- <code><a href="./src/resources/comments.ts">CommentFull</a></code>

Methods:

- <code title="post /comments">client.comments.<a href="./src/resources/comments.ts">create</a>({ ...params }) -> CommentFull</code>
- <code title="get /comments/{comment_id}">client.comments.<a href="./src/resources/comments.ts">retrieve</a>(commentID, { ...params }) -> CommentFull</code>
- <code title="put /comments/{comment_id}">client.comments.<a href="./src/resources/comments.ts">update</a>(commentID, { ...params }) -> CommentFull</code>
- <code title="delete /comments/{comment_id}">client.comments.<a href="./src/resources/comments.ts">delete</a>(commentID) -> void</code>

# Collaborations

Types:

- <code><a href="./src/resources/collaborations.ts">Collaboration</a></code>
- <code><a href="./src/resources/collaborations.ts">CollaborationsOffsetPaginated</a></code>
- <code><a href="./src/resources/collaborations.ts">UserCollaborations</a></code>

Methods:

- <code title="post /collaborations">client.collaborations.<a href="./src/resources/collaborations.ts">create</a>({ ...params }) -> Collaboration</code>
- <code title="get /collaborations/{collaboration_id}">client.collaborations.<a href="./src/resources/collaborations.ts">retrieve</a>(collaborationID, { ...params }) -> Collaboration</code>
- <code title="put /collaborations/{collaboration_id}">client.collaborations.<a href="./src/resources/collaborations.ts">update</a>(collaborationID, { ...params }) -> Collaboration</code>
- <code title="get /collaborations">client.collaborations.<a href="./src/resources/collaborations.ts">list</a>({ ...params }) -> CollaborationsOffsetPaginated</code>
- <code title="delete /collaborations/{collaboration_id}">client.collaborations.<a href="./src/resources/collaborations.ts">delete</a>(collaborationID) -> void</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">FileMini</a></code>
- <code><a href="./src/resources/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks.ts">TaskAssignments</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks.ts">create</a>({ ...params }) -> Task</code>
- <code title="get /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(taskID) -> Task</code>
- <code title="put /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">update</a>(taskID, { ...params }) -> Task</code>
- <code title="delete /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">delete</a>(taskID) -> void</code>
- <code title="get /tasks/{task_id}/assignments">client.tasks.<a href="./src/resources/tasks.ts">listAssignments</a>(taskID) -> TaskAssignments</code>

# TaskAssignments

Types:

- <code><a href="./src/resources/task-assignments.ts">TaskAssignment</a></code>

Methods:

- <code title="post /task_assignments">client.taskAssignments.<a href="./src/resources/task-assignments.ts">create</a>({ ...params }) -> TaskAssignment</code>
- <code title="get /task_assignments/{task_assignment_id}">client.taskAssignments.<a href="./src/resources/task-assignments.ts">retrieve</a>(taskAssignmentID) -> TaskAssignment</code>
- <code title="put /task_assignments/{task_assignment_id}">client.taskAssignments.<a href="./src/resources/task-assignments.ts">update</a>(taskAssignmentID, { ...params }) -> TaskAssignment</code>
- <code title="delete /task_assignments/{task_assignment_id}">client.taskAssignments.<a href="./src/resources/task-assignments.ts">delete</a>(taskAssignmentID) -> void</code>

# SharedItems

Methods:

- <code title="get /shared_items">client.sharedItems.<a href="./src/resources/shared-items.ts">retrieve</a>({ ...params }) -> FileFull</code>

# SharedItemsFolders

# WebLinks

Types:

- <code><a href="./src/resources/web-links/web-links.ts">WebLink</a></code>
- <code><a href="./src/resources/web-links/web-links.ts">WebLinkBase</a></code>
- <code><a href="./src/resources/web-links/web-links.ts">WebLinkRestoreResponse</a></code>

Methods:

- <code title="post /web_links">client.webLinks.<a href="./src/resources/web-links/web-links.ts">create</a>({ ...params }) -> WebLink</code>
- <code title="get /web_links/{web_link_id}">client.webLinks.<a href="./src/resources/web-links/web-links.ts">retrieve</a>(webLinkID, { ...params }) -> WebLink</code>
- <code title="put /web_links/{web_link_id}">client.webLinks.<a href="./src/resources/web-links/web-links.ts">update</a>(webLinkID, { ...params }) -> WebLink</code>
- <code title="delete /web_links/{web_link_id}">client.webLinks.<a href="./src/resources/web-links/web-links.ts">delete</a>(webLinkID) -> void</code>
- <code title="post /web_links/{web_link_id}">client.webLinks.<a href="./src/resources/web-links/web-links.ts">restore</a>(webLinkID, { ...params }) -> WebLinkRestoreResponse</code>

## Trash

Types:

- <code><a href="./src/resources/web-links/trash.ts">TrashRetrieveResponse</a></code>

Methods:

- <code title="get /web_links/{web_link_id}/trash">client.webLinks.trash.<a href="./src/resources/web-links/trash.ts">retrieve</a>(webLinkID, { ...params }) -> TrashRetrieveResponse</code>
- <code title="delete /web_links/{web_link_id}/trash">client.webLinks.trash.<a href="./src/resources/web-links/trash.ts">permanentlyDelete</a>(webLinkID) -> void</code>

# SharedItemsWebLinks

# SharedItemsAppItems

Types:

- <code><a href="./src/resources/shared-items-app-items.ts">AppItem</a></code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">GroupMemberships</a></code>
- <code><a href="./src/resources/users/users.ts">SessionTerminationMessage</a></code>
- <code><a href="./src/resources/users/users.ts">TrackingCode</a></code>
- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserFull</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> UserFull</code>
- <code title="get /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userID, { ...params }) -> UserFull</code>
- <code title="put /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">update</a>(userID, { ...params }) -> UserFull</code>
- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /users/{user_id}/memberships">client.users.<a href="./src/resources/users/users.ts">listMemberships</a>(userID, { ...params }) -> GroupMemberships</code>
- <code title="get /users/me">client.users.<a href="./src/resources/users/users.ts">retrieveCurrent</a>({ ...params }) -> UserFull</code>
- <code title="post /users/terminate_sessions">client.users.<a href="./src/resources/users/users.ts">terminateSessions</a>({ ...params }) -> SessionTerminationMessage</code>

## Avatar

Types:

- <code><a href="./src/resources/users/avatar.ts">AvatarUpdateResponse</a></code>

Methods:

- <code title="get /users/{user_id}/avatar">client.users.avatar.<a href="./src/resources/users/avatar.ts">retrieve</a>(userID) -> Response</code>
- <code title="post /users/{user_id}/avatar">client.users.avatar.<a href="./src/resources/users/avatar.ts">update</a>(userID, { ...params }) -> AvatarUpdateResponse</code>
- <code title="delete /users/{user_id}/avatar">client.users.avatar.<a href="./src/resources/users/avatar.ts">delete</a>(userID) -> void</code>

## Folders

Methods:

- <code title="put /users/{user_id}/folders/0">client.users.folders.<a href="./src/resources/users/folders.ts">transfer</a>(userID, { ...params }) -> FolderFull</code>

## EmailAliases

Types:

- <code><a href="./src/resources/users/email-aliases.ts">EmailAlias</a></code>
- <code><a href="./src/resources/users/email-aliases.ts">EmailAliasListResponse</a></code>

Methods:

- <code title="post /users/{user_id}/email_aliases">client.users.emailAliases.<a href="./src/resources/users/email-aliases.ts">create</a>(userID, { ...params }) -> EmailAlias</code>
- <code title="get /users/{user_id}/email_aliases">client.users.emailAliases.<a href="./src/resources/users/email-aliases.ts">list</a>(userID) -> EmailAliasListResponse</code>
- <code title="delete /users/{user_id}/email_aliases/{email_alias_id}">client.users.emailAliases.<a href="./src/resources/users/email-aliases.ts">delete</a>(emailAliasID, { ...params }) -> void</code>

# Invites

Types:

- <code><a href="./src/resources/invites.ts">Invite</a></code>

Methods:

- <code title="post /invites">client.invites.<a href="./src/resources/invites.ts">create</a>({ ...params }) -> Invite</code>
- <code title="get /invites/{invite_id}">client.invites.<a href="./src/resources/invites.ts">retrieve</a>(inviteID, { ...params }) -> Invite</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">GroupFull</a></code>
- <code><a href="./src/resources/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /groups">client.groups.<a href="./src/resources/groups.ts">create</a>({ ...params }) -> GroupFull</code>
- <code title="get /groups/{group_id}">client.groups.<a href="./src/resources/groups.ts">retrieve</a>(groupID, { ...params }) -> GroupFull</code>
- <code title="put /groups/{group_id}">client.groups.<a href="./src/resources/groups.ts">update</a>(groupID, { ...params }) -> GroupFull</code>
- <code title="get /groups">client.groups.<a href="./src/resources/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /groups/{group_id}">client.groups.<a href="./src/resources/groups.ts">delete</a>(groupID) -> void</code>
- <code title="get /groups/{group_id}/collaborations">client.groups.<a href="./src/resources/groups.ts">listCollaborations</a>(groupID, { ...params }) -> CollaborationsOffsetPaginated</code>
- <code title="get /groups/{group_id}/memberships">client.groups.<a href="./src/resources/groups.ts">listMemberships</a>(groupID, { ...params }) -> GroupMemberships</code>
- <code title="post /groups/terminate_sessions">client.groups.<a href="./src/resources/groups.ts">terminateSessions</a>({ ...params }) -> SessionTerminationMessage</code>

# GroupMemberships

Types:

- <code><a href="./src/resources/group-memberships.ts">GroupBase</a></code>
- <code><a href="./src/resources/group-memberships.ts">GroupMembership</a></code>
- <code><a href="./src/resources/group-memberships.ts">GroupMini</a></code>

Methods:

- <code title="post /group_memberships">client.groupMemberships.<a href="./src/resources/group-memberships.ts">create</a>({ ...params }) -> GroupMembership</code>
- <code title="get /group_memberships/{group_membership_id}">client.groupMemberships.<a href="./src/resources/group-memberships.ts">retrieve</a>(groupMembershipID, { ...params }) -> GroupMembership</code>
- <code title="put /group_memberships/{group_membership_id}">client.groupMemberships.<a href="./src/resources/group-memberships.ts">update</a>(groupMembershipID, { ...params }) -> GroupMembership</code>
- <code title="delete /group_memberships/{group_membership_id}">client.groupMemberships.<a href="./src/resources/group-memberships.ts">delete</a>(groupMembershipID) -> void</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookMini</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="get /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(webhookID) -> Webhook</code>
- <code title="put /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(webhookID, { ...params }) -> Webhook</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> void</code>

# SkillInvocations

Methods:

- <code title="put /skill_invocations/{skill_id}">client.skillInvocations.<a href="./src/resources/skill-invocations.ts">update</a>(skillID, { ...params }) -> void</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections.ts">Collection</a></code>
- <code><a href="./src/resources/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionListItemsResponse</a></code>

Methods:

- <code title="get /collections/{collection_id}">client.collections.<a href="./src/resources/collections.ts">retrieve</a>(collectionID) -> Collection</code>
- <code title="get /collections">client.collections.<a href="./src/resources/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="get /collections/{collection_id}/items">client.collections.<a href="./src/resources/collections.ts">listItems</a>(collectionID, { ...params }) -> CollectionListItemsResponse</code>

# RecentItems

Types:

- <code><a href="./src/resources/recent-items.ts">RecentItemListResponse</a></code>

Methods:

- <code title="get /recent_items">client.recentItems.<a href="./src/resources/recent-items.ts">list</a>({ ...params }) -> RecentItemListResponse</code>

# RetentionPolicies

Types:

- <code><a href="./src/resources/retention-policies.ts">RetentionPolicy</a></code>
- <code><a href="./src/resources/retention-policies.ts">RetentionPolicyMini</a></code>
- <code><a href="./src/resources/retention-policies.ts">UserBase</a></code>
- <code><a href="./src/resources/retention-policies.ts">UserMini</a></code>
- <code><a href="./src/resources/retention-policies.ts">RetentionPolicyListResponse</a></code>
- <code><a href="./src/resources/retention-policies.ts">RetentionPolicyListAssignmentsResponse</a></code>

Methods:

- <code title="post /retention_policies">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">create</a>({ ...params }) -> RetentionPolicy</code>
- <code title="get /retention_policies/{retention_policy_id}">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">retrieve</a>(retentionPolicyID, { ...params }) -> RetentionPolicy</code>
- <code title="put /retention_policies/{retention_policy_id}">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">update</a>(retentionPolicyID, { ...params }) -> RetentionPolicy</code>
- <code title="get /retention_policies">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">list</a>({ ...params }) -> RetentionPolicyListResponse</code>
- <code title="delete /retention_policies/{retention_policy_id}">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">delete</a>(retentionPolicyID) -> void</code>
- <code title="get /retention_policies/{retention_policy_id}/assignments">client.retentionPolicies.<a href="./src/resources/retention-policies.ts">listAssignments</a>(retentionPolicyID, { ...params }) -> RetentionPolicyListAssignmentsResponse</code>

# RetentionPolicyAssignments

Types:

- <code><a href="./src/resources/retention-policy-assignments.ts">FilesUnderRetention</a></code>
- <code><a href="./src/resources/retention-policy-assignments.ts">RetentionPolicyAssignment</a></code>

Methods:

- <code title="post /retention_policy_assignments">client.retentionPolicyAssignments.<a href="./src/resources/retention-policy-assignments.ts">create</a>({ ...params }) -> RetentionPolicyAssignment</code>
- <code title="get /retention_policy_assignments/{retention_policy_assignment_id}">client.retentionPolicyAssignments.<a href="./src/resources/retention-policy-assignments.ts">retrieve</a>(retentionPolicyAssignmentID, { ...params }) -> RetentionPolicyAssignment</code>
- <code title="delete /retention_policy_assignments/{retention_policy_assignment_id}">client.retentionPolicyAssignments.<a href="./src/resources/retention-policy-assignments.ts">delete</a>(retentionPolicyAssignmentID) -> void</code>
- <code title="get /retention_policy_assignments/{retention_policy_assignment_id}/file_versions_under_retention">client.retentionPolicyAssignments.<a href="./src/resources/retention-policy-assignments.ts">listFileVersionsUnderRetention</a>(retentionPolicyAssignmentID, { ...params }) -> FilesUnderRetention</code>
- <code title="get /retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention">client.retentionPolicyAssignments.<a href="./src/resources/retention-policy-assignments.ts">listFilesUnderRetention</a>(retentionPolicyAssignmentID, { ...params }) -> FilesUnderRetention</code>

# LegalHoldPolicies

Types:

- <code><a href="./src/resources/legal-hold-policies.ts">LegalHoldPolicy</a></code>
- <code><a href="./src/resources/legal-hold-policies.ts">LegalHoldPolicyMini</a></code>
- <code><a href="./src/resources/legal-hold-policies.ts">LegalHoldPolicyListResponse</a></code>

Methods:

- <code title="post /legal_hold_policies">client.legalHoldPolicies.<a href="./src/resources/legal-hold-policies.ts">create</a>({ ...params }) -> LegalHoldPolicy</code>
- <code title="get /legal_hold_policies/{legal_hold_policy_id}">client.legalHoldPolicies.<a href="./src/resources/legal-hold-policies.ts">retrieve</a>(legalHoldPolicyID) -> LegalHoldPolicy</code>
- <code title="put /legal_hold_policies/{legal_hold_policy_id}">client.legalHoldPolicies.<a href="./src/resources/legal-hold-policies.ts">update</a>(legalHoldPolicyID, { ...params }) -> LegalHoldPolicy</code>
- <code title="get /legal_hold_policies">client.legalHoldPolicies.<a href="./src/resources/legal-hold-policies.ts">list</a>({ ...params }) -> LegalHoldPolicyListResponse</code>
- <code title="delete /legal_hold_policies/{legal_hold_policy_id}">client.legalHoldPolicies.<a href="./src/resources/legal-hold-policies.ts">delete</a>(legalHoldPolicyID) -> void</code>

# LegalHoldPolicyAssignments

Types:

- <code><a href="./src/resources/legal-hold-policy-assignments.ts">LegalHoldPolicyAssignment</a></code>
- <code><a href="./src/resources/legal-hold-policy-assignments.ts">LegalHoldPolicyAssignmentListResponse</a></code>
- <code><a href="./src/resources/legal-hold-policy-assignments.ts">LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse</a></code>
- <code><a href="./src/resources/legal-hold-policy-assignments.ts">LegalHoldPolicyAssignmentListFilesOnHoldResponse</a></code>

Methods:

- <code title="get /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">retrieve</a>(legalHoldPolicyAssignmentID) -> LegalHoldPolicyAssignment</code>
- <code title="get /legal_hold_policy_assignments">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">list</a>({ ...params }) -> LegalHoldPolicyAssignmentListResponse</code>
- <code title="post /legal_hold_policy_assignments">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">assign</a>({ ...params }) -> LegalHoldPolicyAssignment</code>
- <code title="get /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/file_versions_on_hold">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">listFileVersionsOnHold</a>(legalHoldPolicyAssignmentID, { ...params }) -> LegalHoldPolicyAssignmentListFileVersionsOnHoldResponse</code>
- <code title="get /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">listFilesOnHold</a>(legalHoldPolicyAssignmentID, { ...params }) -> LegalHoldPolicyAssignmentListFilesOnHoldResponse</code>
- <code title="delete /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}">client.legalHoldPolicyAssignments.<a href="./src/resources/legal-hold-policy-assignments.ts">unassign</a>(legalHoldPolicyAssignmentID) -> void</code>

# FileVersionRetentions

Types:

- <code><a href="./src/resources/file-version-retentions.ts">FileVersionRetention</a></code>
- <code><a href="./src/resources/file-version-retentions.ts">FileVersionRetentionListResponse</a></code>

Methods:

- <code title="get /file_version_retentions/{file_version_retention_id}">client.fileVersionRetentions.<a href="./src/resources/file-version-retentions.ts">retrieve</a>(fileVersionRetentionID) -> FileVersionRetention</code>
- <code title="get /file_version_retentions">client.fileVersionRetentions.<a href="./src/resources/file-version-retentions.ts">list</a>({ ...params }) -> FileVersionRetentionListResponse</code>

# FileVersionLegalHolds

Types:

- <code><a href="./src/resources/file-version-legal-holds.ts">FileVersionLegalHold</a></code>
- <code><a href="./src/resources/file-version-legal-holds.ts">FileVersionLegalHoldListResponse</a></code>

Methods:

- <code title="get /file_version_legal_holds/{file_version_legal_hold_id}">client.fileVersionLegalHolds.<a href="./src/resources/file-version-legal-holds.ts">retrieve</a>(fileVersionLegalHoldID) -> FileVersionLegalHold</code>
- <code title="get /file_version_legal_holds">client.fileVersionLegalHolds.<a href="./src/resources/file-version-legal-holds.ts">list</a>({ ...params }) -> FileVersionLegalHoldListResponse</code>

# ShieldInformationBarriers

Types:

- <code><a href="./src/resources/shield-information-barriers.ts">EnterpriseBase</a></code>
- <code><a href="./src/resources/shield-information-barriers.ts">ShieldInformationBarrier</a></code>
- <code><a href="./src/resources/shield-information-barriers.ts">ShieldInformationBarrierListResponse</a></code>

Methods:

- <code title="post /shield_information_barriers">client.shieldInformationBarriers.<a href="./src/resources/shield-information-barriers.ts">create</a>({ ...params }) -> ShieldInformationBarrier</code>
- <code title="get /shield_information_barriers/{shield_information_barrier_id}">client.shieldInformationBarriers.<a href="./src/resources/shield-information-barriers.ts">retrieve</a>(shieldInformationBarrierID) -> ShieldInformationBarrier</code>
- <code title="get /shield_information_barriers">client.shieldInformationBarriers.<a href="./src/resources/shield-information-barriers.ts">list</a>({ ...params }) -> ShieldInformationBarrierListResponse</code>
- <code title="post /shield_information_barriers/change_status">client.shieldInformationBarriers.<a href="./src/resources/shield-information-barriers.ts">changeStatus</a>({ ...params }) -> ShieldInformationBarrier</code>

# ShieldInformationBarrierReports

Types:

- <code><a href="./src/resources/shield-information-barrier-reports.ts">ShieldInformationBarrierReference</a></code>
- <code><a href="./src/resources/shield-information-barrier-reports.ts">ShieldInformationBarrierReport</a></code>
- <code><a href="./src/resources/shield-information-barrier-reports.ts">ShieldInformationBarrierReportListResponse</a></code>

Methods:

- <code title="post /shield_information_barrier_reports">client.shieldInformationBarrierReports.<a href="./src/resources/shield-information-barrier-reports.ts">create</a>({ ...params }) -> ShieldInformationBarrierReport</code>
- <code title="get /shield_information_barrier_reports/{shield_information_barrier_report_id}">client.shieldInformationBarrierReports.<a href="./src/resources/shield-information-barrier-reports.ts">retrieve</a>(shieldInformationBarrierReportID) -> ShieldInformationBarrierReport</code>
- <code title="get /shield_information_barrier_reports">client.shieldInformationBarrierReports.<a href="./src/resources/shield-information-barrier-reports.ts">list</a>({ ...params }) -> ShieldInformationBarrierReportListResponse</code>

# ShieldInformationBarrierSegments

Types:

- <code><a href="./src/resources/shield-information-barrier-segments.ts">ShieldInformationBarrierBase</a></code>
- <code><a href="./src/resources/shield-information-barrier-segments.ts">ShieldInformationBarrierSegment</a></code>
- <code><a href="./src/resources/shield-information-barrier-segments.ts">ShieldInformationBarrierSegmentListResponse</a></code>

Methods:

- <code title="post /shield_information_barrier_segments">client.shieldInformationBarrierSegments.<a href="./src/resources/shield-information-barrier-segments.ts">create</a>({ ...params }) -> ShieldInformationBarrierSegment</code>
- <code title="get /shield_information_barrier_segments/{shield_information_barrier_segment_id}">client.shieldInformationBarrierSegments.<a href="./src/resources/shield-information-barrier-segments.ts">retrieve</a>(shieldInformationBarrierSegmentID) -> ShieldInformationBarrierSegment</code>
- <code title="put /shield_information_barrier_segments/{shield_information_barrier_segment_id}">client.shieldInformationBarrierSegments.<a href="./src/resources/shield-information-barrier-segments.ts">update</a>(shieldInformationBarrierSegmentID, { ...params }) -> ShieldInformationBarrierSegment</code>
- <code title="get /shield_information_barrier_segments">client.shieldInformationBarrierSegments.<a href="./src/resources/shield-information-barrier-segments.ts">list</a>({ ...params }) -> ShieldInformationBarrierSegmentListResponse</code>
- <code title="delete /shield_information_barrier_segments/{shield_information_barrier_segment_id}">client.shieldInformationBarrierSegments.<a href="./src/resources/shield-information-barrier-segments.ts">delete</a>(shieldInformationBarrierSegmentID) -> void</code>

# ShieldInformationBarrierSegmentMembers

Types:

- <code><a href="./src/resources/shield-information-barrier-segment-members.ts">ShieldInformationBarrierSegmentMember</a></code>
- <code><a href="./src/resources/shield-information-barrier-segment-members.ts">ShieldInformationBarrierSegmentMemberListResponse</a></code>

Methods:

- <code title="post /shield_information_barrier_segment_members">client.shieldInformationBarrierSegmentMembers.<a href="./src/resources/shield-information-barrier-segment-members.ts">create</a>({ ...params }) -> ShieldInformationBarrierSegmentMember</code>
- <code title="get /shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}">client.shieldInformationBarrierSegmentMembers.<a href="./src/resources/shield-information-barrier-segment-members.ts">retrieve</a>(shieldInformationBarrierSegmentMemberID) -> ShieldInformationBarrierSegmentMember</code>
- <code title="get /shield_information_barrier_segment_members">client.shieldInformationBarrierSegmentMembers.<a href="./src/resources/shield-information-barrier-segment-members.ts">list</a>({ ...params }) -> ShieldInformationBarrierSegmentMemberListResponse</code>
- <code title="delete /shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}">client.shieldInformationBarrierSegmentMembers.<a href="./src/resources/shield-information-barrier-segment-members.ts">delete</a>(shieldInformationBarrierSegmentMemberID) -> void</code>

# ShieldInformationBarrierSegmentRestrictions

Types:

- <code><a href="./src/resources/shield-information-barrier-segment-restrictions.ts">SegmentRestriction</a></code>
- <code><a href="./src/resources/shield-information-barrier-segment-restrictions.ts">ShieldInformationBarrierSegmentRestrictionListResponse</a></code>

Methods:

- <code title="post /shield_information_barrier_segment_restrictions">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/resources/shield-information-barrier-segment-restrictions.ts">create</a>({ ...params }) -> SegmentRestriction</code>
- <code title="get /shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/resources/shield-information-barrier-segment-restrictions.ts">retrieve</a>(shieldInformationBarrierSegmentRestrictionID) -> SegmentRestriction</code>
- <code title="get /shield_information_barrier_segment_restrictions">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/resources/shield-information-barrier-segment-restrictions.ts">list</a>({ ...params }) -> ShieldInformationBarrierSegmentRestrictionListResponse</code>
- <code title="delete /shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/resources/shield-information-barrier-segment-restrictions.ts">delete</a>(shieldInformationBarrierSegmentRestrictionID) -> void</code>

# DevicePinners

Types:

- <code><a href="./src/resources/device-pinners.ts">DevicePinner</a></code>

Methods:

- <code title="get /device_pinners/{device_pinner_id}">client.devicePinners.<a href="./src/resources/device-pinners.ts">retrieve</a>(devicePinnerID) -> DevicePinner</code>
- <code title="delete /device_pinners/{device_pinner_id}">client.devicePinners.<a href="./src/resources/device-pinners.ts">delete</a>(devicePinnerID) -> void</code>

# Enterprises

Types:

- <code><a href="./src/resources/enterprises.ts">EnterpriseListDevicePinnersResponse</a></code>

Methods:

- <code title="get /enterprises/{enterprise_id}/device_pinners">client.enterprises.<a href="./src/resources/enterprises.ts">listDevicePinners</a>(enterpriseID, { ...params }) -> EnterpriseListDevicePinnersResponse</code>

# TermsOfServices

Types:

- <code><a href="./src/resources/terms-of-services.ts">TermsOfService</a></code>
- <code><a href="./src/resources/terms-of-services.ts">TermsOfServiceBase</a></code>
- <code><a href="./src/resources/terms-of-services.ts">TermsOfServiceListResponse</a></code>

Methods:

- <code title="post /terms_of_services">client.termsOfServices.<a href="./src/resources/terms-of-services.ts">create</a>({ ...params }) -> TermsOfService</code>
- <code title="get /terms_of_services/{terms_of_service_id}">client.termsOfServices.<a href="./src/resources/terms-of-services.ts">retrieve</a>(termsOfServiceID) -> TermsOfService</code>
- <code title="put /terms_of_services/{terms_of_service_id}">client.termsOfServices.<a href="./src/resources/terms-of-services.ts">update</a>(termsOfServiceID, { ...params }) -> TermsOfService</code>
- <code title="get /terms_of_services">client.termsOfServices.<a href="./src/resources/terms-of-services.ts">list</a>({ ...params }) -> TermsOfServiceListResponse</code>

# TermsOfServiceUserStatuses

Types:

- <code><a href="./src/resources/terms-of-service-user-statuses.ts">TermsOfServiceUserStatus</a></code>
- <code><a href="./src/resources/terms-of-service-user-statuses.ts">TermsOfServiceUserStatusListResponse</a></code>

Methods:

- <code title="post /terms_of_service_user_statuses">client.termsOfServiceUserStatuses.<a href="./src/resources/terms-of-service-user-statuses.ts">create</a>({ ...params }) -> TermsOfServiceUserStatus</code>
- <code title="put /terms_of_service_user_statuses/{terms_of_service_user_status_id}">client.termsOfServiceUserStatuses.<a href="./src/resources/terms-of-service-user-statuses.ts">update</a>(termsOfServiceUserStatusID, { ...params }) -> TermsOfServiceUserStatus</code>
- <code title="get /terms_of_service_user_statuses">client.termsOfServiceUserStatuses.<a href="./src/resources/terms-of-service-user-statuses.ts">list</a>({ ...params }) -> TermsOfServiceUserStatusListResponse</code>

# CollaborationWhitelistEntries

Types:

- <code><a href="./src/resources/collaboration-whitelist-entries.ts">CollaborationAllowlistEntry</a></code>
- <code><a href="./src/resources/collaboration-whitelist-entries.ts">CollaborationWhitelistEntryListResponse</a></code>

Methods:

- <code title="post /collaboration_whitelist_entries">client.collaborationWhitelistEntries.<a href="./src/resources/collaboration-whitelist-entries.ts">create</a>({ ...params }) -> CollaborationAllowlistEntry</code>
- <code title="get /collaboration_whitelist_entries/{collaboration_whitelist_entry_id}">client.collaborationWhitelistEntries.<a href="./src/resources/collaboration-whitelist-entries.ts">retrieve</a>(collaborationWhitelistEntryID) -> CollaborationAllowlistEntry</code>
- <code title="get /collaboration_whitelist_entries">client.collaborationWhitelistEntries.<a href="./src/resources/collaboration-whitelist-entries.ts">list</a>({ ...params }) -> CollaborationWhitelistEntryListResponse</code>
- <code title="delete /collaboration_whitelist_entries/{collaboration_whitelist_entry_id}">client.collaborationWhitelistEntries.<a href="./src/resources/collaboration-whitelist-entries.ts">delete</a>(collaborationWhitelistEntryID) -> void</code>

# CollaborationWhitelistExemptTargets

Types:

- <code><a href="./src/resources/collaboration-whitelist-exempt-targets.ts">ExemptTarget</a></code>
- <code><a href="./src/resources/collaboration-whitelist-exempt-targets.ts">CollaborationWhitelistExemptTargetListResponse</a></code>

Methods:

- <code title="post /collaboration_whitelist_exempt_targets">client.collaborationWhitelistExemptTargets.<a href="./src/resources/collaboration-whitelist-exempt-targets.ts">create</a>({ ...params }) -> ExemptTarget</code>
- <code title="get /collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}">client.collaborationWhitelistExemptTargets.<a href="./src/resources/collaboration-whitelist-exempt-targets.ts">retrieve</a>(collaborationWhitelistExemptTargetID) -> ExemptTarget</code>
- <code title="get /collaboration_whitelist_exempt_targets">client.collaborationWhitelistExemptTargets.<a href="./src/resources/collaboration-whitelist-exempt-targets.ts">list</a>({ ...params }) -> CollaborationWhitelistExemptTargetListResponse</code>
- <code title="delete /collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}">client.collaborationWhitelistExemptTargets.<a href="./src/resources/collaboration-whitelist-exempt-targets.ts">delete</a>(collaborationWhitelistExemptTargetID) -> void</code>

# StoragePolicies

Types:

- <code><a href="./src/resources/storage-policies.ts">StoragePolicy</a></code>
- <code><a href="./src/resources/storage-policies.ts">StoragePolicyMini</a></code>
- <code><a href="./src/resources/storage-policies.ts">StoragePolicyListResponse</a></code>

Methods:

- <code title="get /storage_policies/{storage_policy_id}">client.storagePolicies.<a href="./src/resources/storage-policies.ts">retrieve</a>(storagePolicyID) -> StoragePolicy</code>
- <code title="get /storage_policies">client.storagePolicies.<a href="./src/resources/storage-policies.ts">list</a>({ ...params }) -> StoragePolicyListResponse</code>

# StoragePolicyAssignments

Types:

- <code><a href="./src/resources/storage-policy-assignments.ts">StoragePolicyAssignment</a></code>
- <code><a href="./src/resources/storage-policy-assignments.ts">StoragePolicyAssignmentListResponse</a></code>

Methods:

- <code title="post /storage_policy_assignments">client.storagePolicyAssignments.<a href="./src/resources/storage-policy-assignments.ts">create</a>({ ...params }) -> StoragePolicyAssignment</code>
- <code title="get /storage_policy_assignments/{storage_policy_assignment_id}">client.storagePolicyAssignments.<a href="./src/resources/storage-policy-assignments.ts">retrieve</a>(storagePolicyAssignmentID) -> StoragePolicyAssignment</code>
- <code title="put /storage_policy_assignments/{storage_policy_assignment_id}">client.storagePolicyAssignments.<a href="./src/resources/storage-policy-assignments.ts">update</a>(storagePolicyAssignmentID, { ...params }) -> StoragePolicyAssignment</code>
- <code title="get /storage_policy_assignments">client.storagePolicyAssignments.<a href="./src/resources/storage-policy-assignments.ts">list</a>({ ...params }) -> StoragePolicyAssignmentListResponse</code>
- <code title="delete /storage_policy_assignments/{storage_policy_assignment_id}">client.storagePolicyAssignments.<a href="./src/resources/storage-policy-assignments.ts">delete</a>(storagePolicyAssignmentID) -> void</code>

# ZipDownloads

Types:

- <code><a href="./src/resources/zip-downloads.ts">ZipDownloadCreateResponse</a></code>
- <code><a href="./src/resources/zip-downloads.ts">ZipDownloadStatusResponse</a></code>

Methods:

- <code title="post /zip_downloads">client.zipDownloads.<a href="./src/resources/zip-downloads.ts">create</a>({ ...params }) -> ZipDownloadCreateResponse</code>
- <code title="get /zip_downloads/{zip_download_id}/content">client.zipDownloads.<a href="./src/resources/zip-downloads.ts">download</a>(zipDownloadID) -> Response</code>
- <code title="get /zip_downloads/{zip_download_id}/status">client.zipDownloads.<a href="./src/resources/zip-downloads.ts">status</a>(zipDownloadID) -> ZipDownloadStatusResponse</code>

# SignRequests

Types:

- <code><a href="./src/resources/sign-requests.ts">FileBase</a></code>
- <code><a href="./src/resources/sign-requests.ts">SignRequest</a></code>
- <code><a href="./src/resources/sign-requests.ts">SignRequestBase</a></code>
- <code><a href="./src/resources/sign-requests.ts">SignRequestCreateSigner</a></code>
- <code><a href="./src/resources/sign-requests.ts">SignRequestPrefillTag</a></code>
- <code><a href="./src/resources/sign-requests.ts">SignRequestListResponse</a></code>

Methods:

- <code title="post /sign_requests">client.signRequests.<a href="./src/resources/sign-requests.ts">create</a>({ ...params }) -> SignRequest</code>
- <code title="get /sign_requests/{sign_request_id}">client.signRequests.<a href="./src/resources/sign-requests.ts">retrieve</a>(signRequestID) -> SignRequest</code>
- <code title="get /sign_requests">client.signRequests.<a href="./src/resources/sign-requests.ts">list</a>({ ...params }) -> SignRequestListResponse</code>
- <code title="post /sign_requests/{sign_request_id}/cancel">client.signRequests.<a href="./src/resources/sign-requests.ts">cancel</a>(signRequestID) -> SignRequest</code>
- <code title="post /sign_requests/{sign_request_id}/resend">client.signRequests.<a href="./src/resources/sign-requests.ts">resend</a>(signRequestID) -> void</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">CollaboratorVariable</a></code>
- <code><a href="./src/resources/workflows.ts">RoleVariable</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>({ ...params }) -> WorkflowListResponse</code>
- <code title="post /workflows/{workflow_id}/start">client.workflows.<a href="./src/resources/workflows.ts">start</a>(workflowID, { ...params }) -> void</code>

# SignTemplates

Types:

- <code><a href="./src/resources/sign-templates.ts">SignTemplate</a></code>
- <code><a href="./src/resources/sign-templates.ts">SignTemplateListResponse</a></code>

Methods:

- <code title="get /sign_templates/{template_id}">client.signTemplates.<a href="./src/resources/sign-templates.ts">retrieve</a>(templateID) -> SignTemplate</code>
- <code title="get /sign_templates">client.signTemplates.<a href="./src/resources/sign-templates.ts">list</a>({ ...params }) -> SignTemplateListResponse</code>

# IntegrationMappings

## Slack

Types:

- <code><a href="./src/resources/integration-mappings/slack.ts">IntegrationMappingBase</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">IntegrationMappingBoxItem</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">IntegrationMappingOptions</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">IntegrationMappingPartnerItem</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">IntegrationMappingSlack</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">UserIntegrationMappings</a></code>
- <code><a href="./src/resources/integration-mappings/slack.ts">SlackListResponse</a></code>

Methods:

- <code title="post /integration_mappings/slack">client.integrationMappings.slack.<a href="./src/resources/integration-mappings/slack.ts">create</a>({ ...params }) -> IntegrationMappingSlack</code>
- <code title="put /integration_mappings/slack/{integration_mapping_id}">client.integrationMappings.slack.<a href="./src/resources/integration-mappings/slack.ts">update</a>(integrationMappingID, { ...params }) -> IntegrationMappingSlack</code>
- <code title="get /integration_mappings/slack">client.integrationMappings.slack.<a href="./src/resources/integration-mappings/slack.ts">list</a>({ ...params }) -> SlackListResponse</code>
- <code title="delete /integration_mappings/slack/{integration_mapping_id}">client.integrationMappings.slack.<a href="./src/resources/integration-mappings/slack.ts">delete</a>(integrationMappingID) -> void</code>

## Teams

Types:

- <code><a href="./src/resources/integration-mappings/teams.ts">FolderReference</a></code>
- <code><a href="./src/resources/integration-mappings/teams.ts">IntegrationMappingTeams</a></code>
- <code><a href="./src/resources/integration-mappings/teams.ts">TeamListResponse</a></code>

Methods:

- <code title="post /integration_mappings/teams">client.integrationMappings.teams.<a href="./src/resources/integration-mappings/teams.ts">create</a>({ ...params }) -> IntegrationMappingTeams</code>
- <code title="put /integration_mappings/teams/{integration_mapping_id}">client.integrationMappings.teams.<a href="./src/resources/integration-mappings/teams.ts">update</a>(integrationMappingID, { ...params }) -> IntegrationMappingTeams</code>
- <code title="get /integration_mappings/teams">client.integrationMappings.teams.<a href="./src/resources/integration-mappings/teams.ts">list</a>({ ...params }) -> TeamListResponse</code>
- <code title="delete /integration_mappings/teams/{integration_mapping_id}">client.integrationMappings.teams.<a href="./src/resources/integration-mappings/teams.ts">delete</a>(integrationMappingID) -> void</code>

# AI

Types:

- <code><a href="./src/resources/ai.ts">AIAgentInfo</a></code>
- <code><a href="./src/resources/ai.ts">AIAgentReference</a></code>
- <code><a href="./src/resources/ai.ts">AIDialogueHistory</a></code>
- <code><a href="./src/resources/ai.ts">AIItemBase</a></code>
- <code><a href="./src/resources/ai.ts">AIResponse</a></code>
- <code><a href="./src/resources/ai.ts">AIAskQuestionResponse</a></code>
- <code><a href="./src/resources/ai.ts">AIExtractStructuredMetadataResponse</a></code>

Methods:

- <code title="post /ai/ask">client.ai.<a href="./src/resources/ai.ts">askQuestion</a>({ ...params }) -> AIAskQuestionResponse</code>
- <code title="post /ai/extract">client.ai.<a href="./src/resources/ai.ts">extractMetadata</a>({ ...params }) -> AIResponse</code>
- <code title="post /ai/extract_structured">client.ai.<a href="./src/resources/ai.ts">extractStructuredMetadata</a>({ ...params }) -> AIExtractStructuredMetadataResponse</code>
- <code title="post /ai/text_gen">client.ai.<a href="./src/resources/ai.ts">generateText</a>({ ...params }) -> AIResponse</code>

# AIAgentDefault

Types:

- <code><a href="./src/resources/ai-agent-default.ts">AIAgentAsk</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentBasicGenTool</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentBasicTextTool</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentBasicTextToolBase</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentExtract</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentExtractStructured</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentLongTextTool</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentSpreadsheetTool</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentTextGen</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AILlmEndpointParams</a></code>
- <code><a href="./src/resources/ai-agent-default.ts">AIAgentDefaultRetrieveResponse</a></code>

Methods:

- <code title="get /ai_agent_default">client.aiAgentDefault.<a href="./src/resources/ai-agent-default.ts">retrieve</a>({ ...params }) -> AIAgentDefaultRetrieveResponse</code>

# AIAgents

Types:

- <code><a href="./src/resources/ai-agents.ts">AIAgentAllowedEntity</a></code>
- <code><a href="./src/resources/ai-agents.ts">AISingleAgent</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentBasicGenTool</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentBasicTextTool</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentBasicTextToolResponse</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentLongTextTool</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentLongTextToolResponse</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIStudioAgentSpreadsheetTool</a></code>
- <code><a href="./src/resources/ai-agents.ts">CreateAIAgent</a></code>
- <code><a href="./src/resources/ai-agents.ts">AIAgentListResponse</a></code>

Methods:

- <code title="post /ai_agents">client.aiAgents.<a href="./src/resources/ai-agents.ts">create</a>({ ...params }) -> AISingleAgent</code>
- <code title="get /ai_agents/{agent_id}">client.aiAgents.<a href="./src/resources/ai-agents.ts">retrieve</a>(agentID, { ...params }) -> AISingleAgent</code>
- <code title="put /ai_agents/{agent_id}">client.aiAgents.<a href="./src/resources/ai-agents.ts">update</a>(agentID, { ...params }) -> AISingleAgent</code>
- <code title="get /ai_agents">client.aiAgents.<a href="./src/resources/ai-agents.ts">list</a>({ ...params }) -> AIAgentListResponse</code>
- <code title="delete /ai_agents/{agent_id}">client.aiAgents.<a href="./src/resources/ai-agents.ts">delete</a>(agentID) -> void</code>

/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DefaultResponseObject {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: object
  errors?: Record<string, string[]>
}

export interface EditTopicModel {
  name: string
  material: string
}

export interface DefaultResponseTopicDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: TopicDTO
  errors?: Record<string, string[]>
}

export interface TaskDTO {
  /** @format uuid */
  id?: string
  name?: string
  description?: string
  /** @format int64 */
  experienceAmount?: number
  /** @format uuid */
  topicId?: string
  authorLogin?: string
  /** @format date-time */
  createTime?: string
  /** @format date-time */
  modifiedDate?: string
}

export interface TopicDTO {
  /** @format uuid */
  id?: string
  name?: string
  material?: string
  /** @format uuid */
  categoryId?: string
  tasks?: TaskDTO[]
  authorLogin?: string
  /** @format uuid */
  chatId?: string
  /** @format date-time */
  createTime?: string
  /** @format date-time */
  modifiedDate?: string
}

export interface EditTestModel {
  expectedInput: string
  expectedOutput: string
}

export interface DefaultResponseTestCaseDto {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: TestCaseDto
  errors?: Record<string, string[]>
}

export interface TestCaseDto {
  /** @format uuid */
  id?: string
  /** @format int64 */
  index?: number
  expectedInput?: string
  expectedOutput?: string
  /** @format int64 */
  timeLimit?: number
}

export interface EditTaskModel {
  name: string
  description: string
  /** @format int64 */
  experienceAmount: number
  /**
   * @format int64
   * @min 500
   */
  timeLimit: number
}

export interface DefaultResponseTaskDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: TaskDTO
  errors?: Record<string, string[]>
}

export interface EditCategoryModel {
  name: string
  description: string
}

export interface CategoryDTO {
  /** @format uuid */
  id?: string
  name?: string
  description?: string
  authorLogin?: string
  topics?: TopicDTO[]
  /** @format date-time */
  createTime?: string
  /** @format date-time */
  modifiedDate?: string
}

export interface DefaultResponseCategoryDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: CategoryDTO
  errors?: Record<string, string[]>
}

export interface CreateTopicModel {
  name: string
  material: string
}

export interface CreateTestModel {
  expectedInput: string
  expectedOutput: string
}

export interface CreateTaskModel {
  name: string
  description: string
  /** @format int64 */
  experienceAmount: number
  /**
   * @format int64
   * @min 500
   */
  timeLimit: number
}

export interface CreateCategoryModel {
  name: string
  description: string
}

export interface DefaultResponsePageTopicDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: PageTopicDTO
  errors?: Record<string, string[]>
}

export interface PageTopicDTO {
  /** @format int32 */
  totalPages?: number
  /** @format int64 */
  totalElements?: number
  /** @format int32 */
  size?: number
  content?: TopicDTO[]
  /** @format int32 */
  number?: number
  sort?: SortObject[]
  first?: boolean
  last?: boolean
  /** @format int32 */
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}

export interface PageableObject {
  /** @format int64 */
  offset?: number
  sort?: SortObject[]
  /** @format int32 */
  pageNumber?: number
  /** @format int32 */
  pageSize?: number
  paged?: boolean
  unpaged?: boolean
}

export interface SortObject {
  direction?: string
  nullHandling?: string
  ascending?: boolean
  property?: string
  ignoreCase?: boolean
}

export interface TaskFilter {
  content?: string
  /** @format int64 */
  experienceAmountMin?: number
  /** @format int64 */
  experienceAmountMax?: number
  /** @format uuid */
  topicId?: string
  /** @format uuid */
  categoryId?: string
}

export interface DefaultResponsePageTaskDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: PageTaskDTO
  errors?: Record<string, string[]>
}

export interface PageTaskDTO {
  /** @format int32 */
  totalPages?: number
  /** @format int64 */
  totalElements?: number
  /** @format int32 */
  size?: number
  content?: TaskDTO[]
  /** @format int32 */
  number?: number
  sort?: SortObject[]
  first?: boolean
  last?: boolean
  /** @format int32 */
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}

export interface DefaultResponseListMessageDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: MessageDTO[]
  errors?: Record<string, string[]>
}

export interface MessageDTO {
  /** @format uuid */
  id?: string
  content?: string
  senderLogin?: string
  /** @format uuid */
  parentMessageId?: string
  /** @format uuid */
  topicId?: string
  reactions?: Record<string, number>
  /** @uniqueItems true */
  currentUserReactions?: ('LIKE' | 'DISLIKE')[]
  eventType?: 'NEW' | 'UPDATE'
  /** @format date-time */
  sentAt?: string
}

export interface DefaultResponsePageCategoryDTO {
  status?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 EARLY_HINTS'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED'
  /** @format int32 */
  statusCode?: number
  message?: string
  /** @format date-time */
  timestamp?: string
  data?: PageCategoryDTO
  errors?: Record<string, string[]>
}

export interface PageCategoryDTO {
  /** @format int32 */
  totalPages?: number
  /** @format int64 */
  totalElements?: number
  /** @format int32 */
  size?: number
  content?: CategoryDTO[]
  /** @format int32 */
  number?: number
  sort?: SortObject[]
  first?: boolean
  last?: boolean
  /** @format int32 */
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8082'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) =>
        Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title No title
 * @baseUrl http://localhost:8082
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Topic
     * @name GetTopic
     * @summary Получить конкретную тему
     * @request GET:/api/learning/topics/{id}
     * @secure
     */
    getTopic: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseTopicDTO, DefaultResponseObject>({
        path: `/api/learning/topics/${id}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name EditTopic
     * @summary Редактировать тему
     * @request PUT:/api/learning/topics/{id}
     * @secure
     */
    editTopic: (id: string, data: EditTopicModel, params: RequestParams = {}) =>
      this.request<DefaultResponseTopicDTO, DefaultResponseObject>({
        path: `/api/learning/topics/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name DeleteTopic
     * @summary Удалить тему
     * @request DELETE:/api/learning/topics/{id}
     * @secure
     */
    deleteTopic: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseObject, DefaultResponseObject>({
        path: `/api/learning/topics/${id}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Позволяет администратору изменить тест-кейс
     *
     * @tags Тест-кейсы
     * @name EditTestCase
     * @summary Изменение тест-кейса
     * @request PUT:/api/learning/test
     * @secure
     */
    editTestCase: (
      query: {
        /** @format uuid */
        testId: string
      },
      data: EditTestModel,
      params: RequestParams = {}
    ) =>
      this.request<DefaultResponseTestCaseDto, DefaultResponseObject>({
        path: `/api/learning/test`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Позволяет администратору удалить тест-кейс
     *
     * @tags Тест-кейсы
     * @name DeleteTestCase
     * @summary Удаление тест-кейса
     * @request DELETE:/api/learning/test
     * @secure
     */
    deleteTestCase: (
      query: {
        /** @format uuid */
        testId: string
      },
      params: RequestParams = {}
    ) =>
      this.request<DefaultResponseObject, DefaultResponseObject>({
        path: `/api/learning/test`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Task
     * @name GetTask
     * @summary Получить конкретную задачу
     * @request GET:/api/learning/tasks/{id}
     * @secure
     */
    getTask: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseTaskDTO, DefaultResponseObject>({
        path: `/api/learning/tasks/${id}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Task
     * @name EditTask
     * @summary Редактировать задачу
     * @request PUT:/api/learning/tasks/{id}
     * @secure
     */
    editTask: (id: string, data: EditTaskModel, params: RequestParams = {}) =>
      this.request<DefaultResponseTaskDTO, DefaultResponseObject>({
        path: `/api/learning/tasks/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Task
     * @name DeleteTask
     * @summary Удалить задачу
     * @request DELETE:/api/learning/tasks/{id}
     * @secure
     */
    deleteTask: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseObject, DefaultResponseObject>({
        path: `/api/learning/tasks/${id}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name EditCategory
     * @summary Отредактировать категорию
     * @request PUT:/api/learning/categories/{id}
     * @secure
     */
    editCategory: (id: string, data: EditCategoryModel, params: RequestParams = {}) =>
      this.request<DefaultResponseCategoryDTO, DefaultResponseObject>({
        path: `/api/learning/categories/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name DeleteCategory
     * @summary Удалить категорию по id
     * @request DELETE:/api/learning/categories/{id}
     * @secure
     */
    deleteCategory: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseObject, DefaultResponseObject>({
        path: `/api/learning/categories/${id}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name CreateTopic
     * @summary Создать тему в конкретной категории
     * @request POST:/api/learning/topics/{categoryId}
     * @secure
     */
    createTopic: (categoryId: string, data: CreateTopicModel, params: RequestParams = {}) =>
      this.request<DefaultResponseTopicDTO, DefaultResponseObject>({
        path: `/api/learning/topics/${categoryId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Позволяет получить тесты, относящиеся к конкретной задаче
     *
     * @tags Тест-кейсы
     * @name GetTaskTestCases
     * @summary Получение тестов для задачи
     * @request GET:/api/learning/tests/{taskId}
     * @secure
     */
    getTaskTestCases: (taskId: string, params: RequestParams = {}) =>
      this.request<TestCaseDto[], DefaultResponseObject>({
        path: `/api/learning/tests/${taskId}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * @description Позволяет администратору создать тест-кейс для конкретного задания
     *
     * @tags Тест-кейсы
     * @name CreateTestCase
     * @summary Создание тест-кейса
     * @request POST:/api/learning/tests/{taskId}
     * @secure
     */
    createTestCase: (taskId: string, data: CreateTestModel, params: RequestParams = {}) =>
      this.request<DefaultResponseTestCaseDto, DefaultResponseObject>({
        path: `/api/learning/tests/${taskId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Task
     * @name CreateTask
     * @summary Создать задачу в конкретной теме
     * @request POST:/api/learning/tasks/{topicId}
     * @secure
     */
    createTask: (topicId: string, data: CreateTaskModel, params: RequestParams = {}) =>
      this.request<DefaultResponseTaskDTO, DefaultResponseObject>({
        path: `/api/learning/tasks/${topicId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Список категорий с пагинацией и текстом запроса (поиск одновременно по названию и описанию)
     *
     * @tags Category
     * @name GetCategories
     * @summary Получить список категорий
     * @request GET:/api/learning/categories
     * @secure
     */
    getCategories: (
      query?: {
        queryText?: string
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * The size of the page to be returned
         * @min 1
         * @default 10
         */
        size?: number
        /**
         * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @default ["name,ASC"]
         */
        sort?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<DefaultResponsePageCategoryDTO, DefaultResponseObject>({
        path: `/api/learning/categories`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CreateCategory
     * @summary Создать категорию
     * @request POST:/api/learning/categories
     * @secure
     */
    createCategory: (data: CreateCategoryModel, params: RequestParams = {}) =>
      this.request<DefaultResponseCategoryDTO, DefaultResponseObject>({
        path: `/api/learning/categories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Topic
     * @name GetTopics
     * @summary Получить список тем с пагинацией и запросом поиска
     * @request GET:/api/learning/topics
     * @secure
     */
    getTopics: (
      query?: {
        queryText?: string
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * The size of the page to be returned
         * @min 1
         * @default 10
         */
        size?: number
        /**
         * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @default ["name,ASC"]
         */
        sort?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<DefaultResponsePageTopicDTO, DefaultResponseObject>({
        path: `/api/learning/topics`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Task
     * @name GetTasks
     * @summary Получить список задач с фильтром и пагинацией
     * @request GET:/api/learning/tasks
     * @secure
     */
    getTasks: (
      query: {
        taskFilter: TaskFilter
        /**
         * Zero-based page index (0..N)
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * The size of the page to be returned
         * @min 1
         * @default 10
         */
        size?: number
        /**
         * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @default ["name,ASC"]
         */
        sort?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<DefaultResponsePageTaskDTO, DefaultResponseObject>({
        path: `/api/learning/tasks`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags chat-controller
     * @name GetChatHistory
     * @summary Получить историю сообщений чата
     * @request GET:/api/learning/chats/{id}
     * @secure
     */
    getChatHistory: (id: string, params: RequestParams = {}) =>
      this.request<DefaultResponseListMessageDTO, DefaultResponseObject>({
        path: `/api/learning/chats/${id}`,
        method: 'GET',
        secure: true,
        ...params
      })
  }
}

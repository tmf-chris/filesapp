// Server
export const HOST = 'http://localhost';
export const SERVER_PORT = '5000';
export const SERVER_URL = HOST + ':' + SERVER_PORT + '/api/';
export const CLIENT_PORT = '5001';
export const CLIENT_URL = HOST + ':' + CLIENT_PORT + '/';

// Server requests
export const REQUESTING = 'requesting';
export const RECEIVED = 'received';
export const FAILED = 'failed';

// Limits
export const MAX_FILE_SIZE_STR = '10mb';

// Server validation messages
export const FILE_TYPE_NOT_ALLOWED = 'validation.mimetypes';
export const FILE_SIZE_EXCEEDED = 'validation.size';
export const FILE_SIZE_REJECTED = 'The file field is required.';
export const FILE_SIZE_EXCEEDED_STR = 'The file may not be greater than 10240 kilobytes.';

// File sizes
export const KB = 1000;
export const MB = KB * KB;
export const GB = MB * KB;
import type { PDFDataRangeTransport } from 'pdfjs-dist';
import type { TypedArray } from 'pdfjs-dist/types/src/display/api.js';

type BinaryData = TypedArray | ArrayBuffer | number[] | string;

export type Source =
  | { data: BinaryData | undefined }
  | { range: PDFDataRangeTransport }
  | { url: string };

export type ExternalLinkTarget = '_self' | '_blank' | '_parent' | '_top';

export type File = string | ArrayBuffer | Blob | Source | null;

export type PassMethod = 'blob' | 'normal' | 'object' | 'string';

export type RenderMode = 'canvas' | 'custom' | 'none';

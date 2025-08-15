declare module '@wordpress/rich-text' {
    import type { RichTextValue } from '@wordpress/rich-text';

    /** Format object used by toggleFormat */
    export interface RichTextFormat {
        type: string;
        attributes?: Record<string, string>;
    }

    /** Format object used by registerFormatType */
    export interface WPFormat {
        type?: string;
        title?: string;
        tagName?: string;
        className?: string;
        attributes?: Record<string, string>;
        edit?: React.FC<any>;
    }

    export function registerFormatType(
        name: string,
        settings: WPFormat
    ): WPFormat;

    export function toggleFormat(
        value: RichTextValue,
        format: RichTextFormat,
        startIndex?: number,
        endIndex?: number
    ): RichTextValue;
}
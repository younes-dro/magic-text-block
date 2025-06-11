import { registerformatType } from '@wordpress/rich-text';
import { RichTextToolbarButton, toggleFormat } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

registerformatType( 'magic-text-block/unstyle-text', {
    title: __( 'Unstyle Text', 'magic-text-block' ),
    tagName: 'span',
    className: 'dro-magic-text-unstyle-text',
    edit: ( { isActive, value, onChange } ) => {
        console.log( 'Unstyle Text Format', value );
        const handleUnstyleText = () => {
            onChange(
                toggleFormat( value, {
                    type: 'magic-text-block/unstyle-text',
                } )
            );
        };

        return (
            <RichTextToolbarButton
                icon="editor-removeformatting"
                title={ __( 'Unstyle Text', 'magic-text-block' ) }
                onClick={ handleUnstyleText }
                isActive={ isActive }
            />
        );
    }
});
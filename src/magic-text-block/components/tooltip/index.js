import registerFormatType from '@wordpress/rich-text';
import RichTextToolbarButton from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


// const tooltipEffectUI= () =>{

//     return
//     <RichTextToolbarButton
//         icon="editor-help"
//         title={__('Tooltip', 'dro-magic-text')}
//         onClick={(event) => {
//             event.preventDefault();
//             const selection = window.getSelection();
//             const selectedText = selection.toString();
//             if (selectedText) {
//                 const tooltipText = prompt(__('Enter tooltip text:', 'dro-magic-text'), '');
//                 if (tooltipText) {
//                     const newAttributes = {
//                         'data-tooltip': tooltipText,
//                         class: 'dro-magic-text-tooltip',
//                     };
//                     // Apply the format with the new attributes
//                     toggleFormat(value, {
//                         type: 'dro-magic-text/tooltip',
//                         attributes: newAttributes,
//                     });
//                 }
//             }
//         }}  
//         isActive={isActive}
//     />
// }
const tooltipEffect = () => {
    return(
        <>
        <div>
            
        </div>
        </>
    )
}

registerFormatType('dro-magic-text/tooltip', {
    title: __('Tooltip', 'dro-magic-text'),
    tagName: 'span',
    className: null,
    attributes: {
        'data-tooltip': 'data-tooltip',
        class: 'class',
        style: 'style',
    },
});


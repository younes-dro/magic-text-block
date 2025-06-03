import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, TextControl, Button, ColorPicker } from '@wordpress/components';
import { comment } from '@wordpress/icons';
import { useState, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import './style.scss';


const TooltipEffectUI = ({
    LABEL_POPOVER_TITLE,
    LABEL_TOOLTIP_TEXT,
    LABEL_APPLY_BUTTON,
    onChange,
    setTooltipText,
    popoverAnchor,
    tooltipBgColor,
    setTolltipBgColor,
    tooltipTextColor,
    setTooltipTextColor,

}) => {

    return (
        <Popover  anchor={popoverAnchor} className="tooltip-effect-popover">
            <h4>{LABEL_POPOVER_TITLE}</h4>
            <TextControl
                label={LABEL_TOOLTIP_TEXT}
                placeholder={__('Enter tooltip text', 'dro-magic-text')}
                onChange={(value) => {
                    setTooltipText(value);
                }}
            />
            <strong>{__('Tooltip Background color', 'dro-magic-text')}</strong>
            <ColorPicker
                color={tooltipBgColor}
                onChange={(color) => setTolltipBgColor(color)}
            />
            <stong>{__('Tooltip Text color', 'dro-magic-text')}</stong>
            <ColorPicker
                color={tooltipTextColor}
                onChange={(color) => setTooltipTextColor(color)}
            />
            <Button variant="primary"
                onClick={onChange}>{LABEL_APPLY_BUTTON}</Button>

        </Popover>
    )
}

const TooltipEffect = ({ isActive, value, onChange, textDomain = "dro-magic-text" }) => {
    // console.debug('TooltipEffect', isActive, value, onChange);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState('Default Tooltip Text');
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [tooltipBgColor, setTolltipBgColor] = useState('#000000');
    const [tooltipTextColor, setTooltipTextColor] = useState('#ffffff');

    const LABEL_POPOVER_TITLE =
        __("Tooltip Settings", textDomain) || "Tooltip Settings";
    const LABEL_TOOLTIP_TEXT = __("Tooltip Text", textDomain) || "Tooltip Text";
    // const LABEL_TOOLTIP_CLASS = __("Tooltip Class", textDomain) || "Tooltip Class";
    // const LABEL_TOOLTIP_STYLE = __("Tooltip Style", textDomain) || "Tooltip Style";
    const LABEL_APPLY_BUTTON = __("Apply", textDomain) || "Apply";

    const applyTooltip = useCallback(() => {
        onChange(toggleFormat(value, {
            type: 'dro-magic-text/tooltip',
            attributes: {
                'data-tooltip': tooltipText,
                class: 'dro-magic-text-tooltip',
                style: `--tooltip-bg-color: ${tooltipBgColor}; --tooltip-text-color: ${tooltipTextColor};`,
            }
        })
        );

    }, [value, onChange, tooltipText, tooltipBgColor, tooltipTextColor]);

    const handleTooltipClick = useCallback(() => {
        if (isActive) {
            onChange(toggleFormat(value, { type: 'dro-magic-text/tooltip' }));
        } else {
            setIsPopoverVisible(true);
        }
    }, [isActive, value, onChange]);

    return (
        <>
            <div ref={setPopoverAnchor}>
                <RichTextToolbarButton
                    icon={comment}
                    title={__('Add Tooltip', 'dro-magic-text')}
                    onClick={handleTooltipClick}
                    isActive={isActive}
                />
            </div>
            {isPopoverVisible && (
                <TooltipEffectUI
                    onClose={() => setIsPopoverVisible(false)}
                    onChange={() => {
                        applyTooltip();
                        setIsPopoverVisible(false);
                    }}
                    setTooltipText={setTooltipText}
                    popoverAnchor={popoverAnchor}
                    tooltipBgColor={tooltipBgColor}
                    setTolltipBgColor={setTolltipBgColor}
                    tooltipTextColor={tooltipTextColor}
                    setTooltipTextColor={setTooltipTextColor}
                    LABEL_POPOVER_TITLE={LABEL_POPOVER_TITLE}
                    LABEL_TOOLTIP_TEXT={LABEL_TOOLTIP_TEXT}
                    LABEL_APPLY_BUTTON={LABEL_APPLY_BUTTON}

                />
            )}
        </>

    );

}

registerFormatType('dro-magic-text/tooltip', {
    title: __('Tooltip', 'dro-magic-text'),
    tagName: 'span',
    className: 'dro-magic-text-tooltip',
    attributes: {
        'data-tooltip': 'data-tooltip',
        class: 'class',
        style: 'style',
    },
    edit: TooltipEffect,
});


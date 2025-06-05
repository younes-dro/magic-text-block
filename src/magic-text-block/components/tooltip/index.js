import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, TextControl, RadioControl, Button, ColorPicker } from '@wordpress/components';
import { comment } from '@wordpress/icons';
import { useState, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { tooltipPositions } from './options';


const TooltipEffectUI = ({
    LABEL_POPOVER_TITLE,
    LABEL_TOOLTIP_TEXT,
    LABEL_APPLY_BUTTON,
    LABEL_TOOLTIP_POSITION,
    onChange,
    setTooltipText,
    popoverAnchor,
    tooltipBgColor,
    setTolltipBgColor,
    tooltipTextColor,
    setTooltipTextColor,
    tooltipPosition,
    setTooltipPosition,

}) => {

    return (
        <Popover anchor={popoverAnchor} className="tooltip-effect-popover">
            <h4>{LABEL_POPOVER_TITLE}</h4>
            <TextControl
                label={LABEL_TOOLTIP_TEXT}
                placeholder={__('Enter tooltip text', 'dro-magic-text')}
                onChange={(value) => {
                    setTooltipText(value);
                }}
            />
            <RadioControl
                label={LABEL_TOOLTIP_POSITION}
                help={__('Select the position of the tooltip', 'dro-magic-text')}
                selected={tooltipPosition}
                options={tooltipPositions}
                onChange={(value) => {
                    setTooltipPosition(value);
                }}
            />
            <strong>{__('Tooltip Background color', 'dro-magic-text')}</strong>
            <ColorPicker
                color={tooltipBgColor}
                onChange={(color) => setTolltipBgColor(color)}
            />
            <strong>{__('Tooltip Text color', 'dro-magic-text')}</strong>
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
    const [tooltipPosition, setTooltipPosition] = useState('top');

    const LABEL_POPOVER_TITLE =
        __("Tooltip Settings", textDomain) || "Tooltip Settings";
    const LABEL_TOOLTIP_TEXT = __("Tooltip Text", textDomain) || "Tooltip Text";
    const LABEL_TOOLTIP_POSITION = __("Tooltip Position", textDomain) || "Tooltip Position";
    // const LABEL_TOOLTIP_STYLE = __("Tooltip Style", textDomain) || "Tooltip Style";
    const LABEL_APPLY_BUTTON = __("Apply", textDomain) || "Apply";

    const applyTooltip = useCallback(() => {
        onChange(toggleFormat(value, {
            type: 'dro-magic-text/tooltip',
            attributes: {
                'data-tooltip': tooltipText,
                class: `tooltip-${tooltipPosition}`,
                style: `--tooltip-bg-color: ${tooltipBgColor}; --tooltip-text-color: ${tooltipTextColor};`,
            }
        })
        );

    }, [value, onChange, tooltipText, tooltipBgColor, tooltipTextColor, tooltipPosition]);

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
                    tooltipPosition={tooltipPosition}
                    setTooltipPosition={setTooltipPosition}
                    LABEL_POPOVER_TITLE={LABEL_POPOVER_TITLE}
                    LABEL_TOOLTIP_TEXT={LABEL_TOOLTIP_TEXT}
                    LABEL_APPLY_BUTTON={LABEL_APPLY_BUTTON}
                    LABEL_TOOLTIP_POSITION={LABEL_TOOLTIP_POSITION}

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


import { __ } from "@wordpress/i18n";
import IconMarker from "./icon-marker";
import { registerFormatType, toggleFormat, applyFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import { Popover, Button } from "@wordpress/components";
import './style.scss';
import { useCallback, useState } from "react";
import MarkerOptions from './marker-options';

const textDomain = 'dro-magic-text';

const MarkerUI = ({
    onClose,
    LABEL_POPOVER_TITLE,
    popoverAnchor,
    value,
    onChange
}) => {
    const [selectedMarker, setSelectedMarker] = useState('text-marker');
    const [selectedClassName, setSelectedClassName] = useState('dro-magic-text-text-marker');

    const handleMarkerChange = (markerName, className) => {
        setSelectedMarker(markerName);
        setSelectedClassName(className);
    };

    const handleApplyMarker = () => {
        
        const newValue = applyFormat(value, {
            type: 'dro-magic-text/marker',
            attributes: {
                class: selectedClassName
            }
        });
        onChange(newValue);
        onClose();
    };

    return (
        <Popover
            className="dro-magic-text-popover"
            animate={true}
            position="bottom right"
            offset={{ x: 10, y: 10 }}
            onClose={onClose}
            anchor={popoverAnchor}
        >
            <div style={{ padding: '16px', width: '320px' }}>
                <h4>{LABEL_POPOVER_TITLE}</h4>
                <div style={{ marginBottom: "15px" }}>
                    <strong>{__('Select marker:', textDomain)}</strong>
                </div>

                <MarkerOptions
                    selectedMarker={selectedMarker}
                    onMarkerChange={handleMarkerChange}
                    textDomain={textDomain}
                />

                <div className="dro-popover-actions">
                    <Button
                        variant="primary"
                        onClick={handleApplyMarker}
                        style={{ marginRight: '10px' }}
                    >
                        {__('Apply Marker', textDomain)}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        {__('Cancel', textDomain)}
                    </Button>
                </div>
            </div>
        </Popover>
    );
};

const Marker = ({ isActive, value, onChange, textDomain }) => {
    const [isAddingMarker, setIsAddingMarker] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState(null);
    const LABEL_POPOVER_TITLE =
        __("Realistic Text Marker Effects", textDomain) ||
        "Realistic Text Marker Effects";

    const handleToolbarClick = useCallback(() => {
        if (isActive) {
            onChange(toggleFormat(value, {
                type: 'dro-magic-text/marker',
                attributes: ''
            }));
        } else {
            setIsAddingMarker(true);
        }
    }, [isActive, value, onChange]);

    return (
        <>
            <div ref={setPopoverAnchor}>
                <RichTextToolbarButton
                    title={__('Marker', textDomain)}
                    icon={IconMarker}
                    onClick={handleToolbarClick}
                />
            </div>
            {!isActive && isAddingMarker && (
                <MarkerUI
                    onClose={() => setIsAddingMarker(false)}
                    LABEL_POPOVER_TITLE={LABEL_POPOVER_TITLE}
                    popoverAnchor={popoverAnchor}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    );
};

registerFormatType("dro-magic-text/marker", {
    title: __("Marker", "dro-magic-text"),
    tagName: "span",
    className: "dro-magic-text-text-marker",
    attributes: {
        style: "style",
        class: "class"
    },
    edit: Marker
});
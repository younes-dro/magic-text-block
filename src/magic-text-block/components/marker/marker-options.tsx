
import { __ } from "@wordpress/i18n";

const MarkerOptions = ({ selectedMarker, onMarkerChange, textDomain }) => {
    const markerOptions = [
        {
            name: 'text-marker',
            label: __('Default Marker', textDomain),
            className: 'dro-magic-text-text-marker'
        },
        {
            name: 'marker-uneven',
            label: __('Uneven Style', textDomain),
            className: 'dro-magic-text-marker-uneven'
        },
        {
            name: 'marker-thick',
            label: __('Thick Style', textDomain),
            className: 'dro-magic-text-marker-thick'
        },
        {
            name: 'marker-messy',
            label: __('Messy Style', textDomain),
            className: 'dro-magic-text-marker-messy'
        },
        {
            name: 'marker-double',
            label: __('Double Style', textDomain),
            className: 'dro-magic-text-marker-double'
        },
        {
            name: 'marker-faded',
            label: __('Faded Style', textDomain),
            className: 'dro-magic-text-marker-faded'
        },
        {
            name: 'marker-wavy',
            label: __('Wavy Style', textDomain),
            className: 'dro-magic-text-marker-wavy'
        },
        {
            name: 'marker-textured',
            label: __('Textured Style', textDomain),
            className: 'dro-magic-text-marker-textured'
        }
    ];

    return (
        <div className="dro-radio-gutenberg">
            {markerOptions.map((option) => (
                <label
                    key={option.name}
                    className="dro-radio-option"
                >
                    <input
                        type="radio"
                        name="textMarker"
                        value={option.name}
                        checked={selectedMarker === option.name}
                        onChange={(e) => onMarkerChange(e.target.value, option.className)}
                    />
                    <div className="dro-radio-content">
                        <span className="dro-radio-label">
                            {option.label}
                        </span>
                        <span className={`dro-radio-preview ${option.className}`}>
                            {__('Sample Text', textDomain)}
                        </span>
                    </div>
                </label>
            ))}
        </div>
    );
};

export default MarkerOptions;


import { __ } from "@wordpress/i18n";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import {
  Popover,
  GradientPicker,
  RangeControl,
  Button,
} from "@wordpress/components";
import { useState, useCallback } from "@wordpress/element";
import "./style.scss";
import IconGradientStroke from "./icon-gradient-stroke";

const GradientStrokeUI: React.FC<GradientStrokeUIProps> = ({
  onClose,
  onChange,
  gradient,
  setGradient,
  strokeWidth,
  setStrokeWidth,
  popoverAnchor,
  LABEL_POPOVER_TITLE,
  LABEL_GRADIENT_STROKE,
  LABEL_GRADIENT_WIDTH,
  LABEL_APPLY_BUTTON,
}) => {
  return (
    <Popover anchor={popoverAnchor} className="dro-magic-text-popover">
      <h4>{LABEL_POPOVER_TITLE}</h4>

      <GradientPicker value={gradient} onChange={setGradient} />

      <RangeControl
        label={LABEL_GRADIENT_WIDTH}
        value={strokeWidth}
        onChange={setStrokeWidth}
        min={0.1}
        max={5}
        step={0.1}
        initialPosition={1}
      />

      <Button variant="primary" onClick={onChange}>
        {LABEL_APPLY_BUTTON}
      </Button>
    </Popover>
  );
};

const GradientStroke: React.FC<GradientStrokeProps> = ({
  isActive,
  value,
  onChange,
  textDomain = "dro-magic-text",
}) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>();
  const [gradient, setGradient] = useState<string>(
    "linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)"
  );
  const [strokeWidth, setStrokeWidth] = useState<number>(1);

  const LABEL_POPOVER_TITLE =
    __("Gradient Stroke Settings", textDomain) || "Gradient Stroke Settings";
  const LABEL_GRADIENT_STROKE =
    __("Stroke Gradient..", textDomain) || "Stroke Gradient";
  const LABEL_GRADIENT_WIDTH = __("Stroke Width", textDomain) || "Stroke Width";
  const LABEL_APPLY_BUTTON = __("Apply", textDomain) || "Apply";

  const applyGradientStroke = useCallback(() => {
    onChange(
      toggleFormat(value, {
        type: "dro-magic-text/gradient-stroke",
        attributes: {
          style: `
            --gradient-stroke: ${gradient};
            --stroke-width: ${strokeWidth}px;
          `,
          class: "magic-gradient-stroke",
        },
      })
    );
  }, [gradient, strokeWidth, onChange, value]);

  const handleToolbarClick = useCallback(() => {
    if (isActive) {
      onChange(toggleFormat(value, { type: "dro-magic-text/gradient-stroke" }));
    } else {
      setIsPopoverVisible(true);
    }
  }, [isActive, value, onChange]);

  /**
   * Wrapper functions to avoid using  :
   *  - // setGradient: React.Dispatch<SetStateAction<number>>;
   *  - // setStrokeWidth: React.Dispatch<SetStateAction<number>>;
   * and keep the interface with the simple function signature
   * (which matches WordPress components):
   * @param newGradient
   */
  const handleGradientChange = (newGradient: string) => {
    setGradient(newGradient);
  };
  /**
   *
   * @param newWidth
   */
  const handleStrokeWidthChange = (newWidth: number | undefined) => {
    if (newWidth !== undefined) {
      setStrokeWidth(newWidth);
    }
  };
  /******************** End wrapper functions  */

  return (
    <>
      <div ref={setPopoverAnchor}>
        <RichTextToolbarButton
          icon={IconGradientStroke}
          title={__("Gradient Stroke", textDomain) || "Gradient Stroke"}
          onClick={handleToolbarClick}
          isActive={isActive}
        />
      </div>
      {isPopoverVisible && (
        <GradientStrokeUI
          onClose={() => setIsPopoverVisible(false)}
          onChange={() => {
            applyGradientStroke();
            setIsPopoverVisible(false);
          }}
          gradient={gradient}
          setGradient={handleGradientChange}
          strokeWidth={strokeWidth}
          setStrokeWidth={handleStrokeWidthChange}
          popoverAnchor={popoverAnchor}
          LABEL_POPOVER_TITLE={LABEL_POPOVER_TITLE}
          LABEL_GRADIENT_STROKE={LABEL_GRADIENT_STROKE}
          LABEL_GRADIENT_WIDTH={LABEL_GRADIENT_WIDTH}
          LABEL_APPLY_BUTTON={LABEL_APPLY_BUTTON}
        />
      )}
    </>
  );
};

registerFormatType("dro-magic-text/gradient-stroke", {
  title: __("Gradient Stroke", "dro-magic-text"),
  tagName: "span",
  className: "dro-magic-text-gradient-stroke",
  attributes: {
    style: "style",
    class: "class",
  },
  edit: GradientStroke,
});

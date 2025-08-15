
interface GradientStrokeProps {

    isActive: boolean;
    value: string;
    onChange: (nextValue: RichTextValue) => void;
    textDomain?: string;
}

interface GradientStrokeUIProps {
    onClose?: () => void;
    onChange: () => void;
    gradient: string;
    setGradient: (gradient: string) => void;
    strokeWidth: number;
    setStrokeWidth: (strokeWidth: number | undefined) => void;
    popoverAnchor: HTMLElement | null | undefined;
    LABEL_POPOVER_TITLE: string,
    LABEL_GRADIENT_STROKE: string,
    LABEL_GRADIENT_WIDTH: string,
    LABEL_APPLY_BUTTON: string,
}
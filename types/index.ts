// Block Attributes Interface
export interface MagicTextBlockAttributes {
    content: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    fontSize?: number;
    fontFamily?: string;
    textColor?: string;
    backgroundColor?: string;
    // Gradient settings
    gradientBackground?: string;
    gradientDirection?: number;
    // Tooltip settings
    tooltipText?: string;
    showTooltip?: boolean;
    // Custom theme
    customTheme?: string;
    
}

// Edit Component Props
export interface EditProps<T = MagicTextBlockAttributes> {
    attributes: T;
    setAttributes: (attributes: Partial<T>) => void;
    clientId: string;
    isSelected: boolean;
}

// Save Component Props
export interface SaveProps<T = MagicTextBlockAttributes> {
    attributes: T;
}

// Theme Configuration
export interface ThemeConfig {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        text: string;
        background: string;
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        lineHeight: number;
    };
}

// Gradient Configuration
export interface GradientConfig {
    type: 'linear' | 'radial';
    colors: string[];
    direction?: number;
    position?: string;
}

// Tooltip Configuration
export interface TooltipConfig {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    showOnHover: boolean;
    delay?: number;
}
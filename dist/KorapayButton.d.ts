import { ReactNode } from "react";
import { KorapayConfig } from "./types";
interface KorapayButtonProps extends KorapayConfig {
    text?: string;
    className?: string;
    children?: ReactNode;
    onSuccess?: Function;
    onClose?: Function;
    disabled?: boolean;
}
declare const KorapayButton: ({ text, className, children, onSuccess, onClose, disabled, ...config }: KorapayButtonProps) => JSX.Element;
export default KorapayButton;

import * as React from "react";
import useKorapay from "./useKorapay";
import { KorapayConfig } from "./types";

interface KorapayButtonProps extends KorapayConfig {
  text?: string;
  disabled?: boolean;
  className?: string;
  onClose?: Function;
  onSuccess?: Function;
  children?: React.ReactNode;
}

const KorapayButton: React.FC<KorapayButtonProps> = ({
  text,
  children,
  disabled,
  className,
  onClose = () => null,
  onSuccess = () => null,
  ...config
}) => {
  const initializePayment = useKorapay(config);

  return (
    <button
      disabled={disabled}
      className={className}
      onClick={() => initializePayment({ onSuccess, onClose })}
    >
      {text || children}
    </button>
  );
};

export default KorapayButton;

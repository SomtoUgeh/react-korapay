import React, { ReactNode } from "react";
import useKorapay from "./useKorapay";
import { KorapayConfig } from "./types";

interface KorapayButtonProps extends KorapayConfig {
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess?: Function;
  onClose?: Function;
  disabled?: boolean;
}

const KorapayButton = ({
  text,
  className,
  children,
  onSuccess = () => null,
  onClose = () => null,
  disabled,
  ...config
}: KorapayButtonProps): JSX.Element => {
  const [initializePayment] = useKorapay(config);

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

import * as React from "react";
import useKorapayScript from "./korapay-script";
import { KoraPayProps, InitializeKorapayPayment } from "./types";

/**
 *
 * @param config takes in configuration for payment
 * @returns paymentInitialization Fn
 */
export default function useKoraPay(config: KoraPayProps) {
  const [loaded, error] = useKorapayScript();

  React.useEffect(() => {
    if (error) {
      throw new Error("Unable to load korapay collection modal");
    }
  }, [error]);

  /**
   *
   * @param object - {onSuccess, onClose, onFailed, onTokenized}
   */
  function handleKorapayPayment({
    onSuccess = (): any => null,
    onClose = (): any => null,
    onFailed,
    onTokenized
  }: InitializeKorapayPayment) {
    if (error) {
      throw new Error("Unable to load korapay collection modal");
    }

    if (loaded) {
      const korapayArgs: KoraPayProps = {
        ...config,
        amount: config.amount ?? 0,
        currency: config.currency ?? "NGN",
        onSuccess: onSuccess,
        onClose: onClose
      };

      if (onFailed) korapayArgs.onFailed = onFailed;
      if (onTokenized) korapayArgs.onTokenized = onTokenized;

      // @ts-ignore
      return window.Korapay && window.Korapay.initialize(korapayArgs);
    }
  }

  return [handleKorapayPayment] as const;
}

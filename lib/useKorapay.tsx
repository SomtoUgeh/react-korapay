import * as React from "react";
import useKorapayScript from "./korapay-script";
import { KoraPayProps, KorapayConfig, InitializeKorapayPayment } from "./types";

/**
 *
 * @param config takes in configuration for payment
 * @returns handleKorapayPayment fn
 */
export default function useKorapay(korapayConfig: KorapayConfig) {
  const [loaded, error] = useKorapayScript();

  React.useEffect(() => {
    if (error) throw new Error("Unable to load korapay collection modal");
  }, [error]);

  /**
   *
   * @param object - { onSuccess, onClose, onFailed, onTokenized }
   */
  function handleKorapayPayment({
    onSuccess,
    onClose,
    onFailed,
    onTokenized
  }: InitializeKorapayPayment): void {
    if (error) {
      throw new Error("Unable to load korapay collection modal");
    }

    if (loaded) {
      const korapayArgs: KoraPayProps = {
        ...korapayConfig,
        key: korapayConfig.public_key,
        amount: korapayConfig.amount ?? 0,
        currency: korapayConfig.currency ?? "NGN",
        onClose: onClose ? onClose : (): null => null,
        onSuccess: onSuccess ? onSuccess : (): null => null
      };

      // @ts-ignore
      delete korapayArgs.public_key;

      if (onFailed) korapayArgs.onFailed = onFailed;
      if (onTokenized) korapayArgs.onTokenized = onTokenized;

      // @ts-ignore
      // eslint-disable-next-line no-undef
      return window.Korapay && window.Korapay.initialize(korapayArgs);
    }
  }

  return handleKorapayPayment;
}

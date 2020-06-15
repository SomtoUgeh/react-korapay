import { KorapayConfig, InitializeKorapayPayment } from "./types";
/**
 *
 * @param config takes in configuration for payment
 * @returns handleKorapayPayment
 */
export default function useKorapay(korapayConfig: KorapayConfig): readonly [({ onSuccess, onClose, onFailed, onTokenized }: InitializeKorapayPayment) => any];

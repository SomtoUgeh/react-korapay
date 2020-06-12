type Currency = "NGN" | string;

/**
 * Check out {@link https://korahq.atlassian.net/wiki/spaces/AR/pages/1064370549/Collection+Modal Configuration parameters} for more information.
 */
export interface KoraPayProps {
  /**
   * Your public key from Korapay.
   * - Use the test public key for test transactions and live public key for live transactions
   */
  key: string;
  amount: number;
  /**
   * Currency of the charge.
   * - Default is NGN (Nigerian Naira)
   */
  currency: Currency;
  /**
   * Transaction reference.
   * -If you do not provide one, a unique transaction reference would be generated for the transaction.
   */
  reference?: string;
  /**
   * object containing customer details
   */
  customer: {
    name: string;
    email: string;
    [key: string]: any;
  };
  /**
   * Information/narration about the transaction
   */
  narration: string;
  /**
   * function to be called when the payment gateway is closed
   */
  onClose: () => void;
  /**
   * function to be called when the payment is completed successfully
   */
  onSuccess: () => void;
  /**
   * function to be called when the payment failed
   */
  onFailed?: () => void;
  /**
   * function to be called when card tokenization is completed successfully
   */
  onTokenized: () => void;
  /**
   * HTTP endpoint to send information to on payment termination, success, or failure.
   * This overrides the webhook URL set on your merchant dashboard for this particular transaction
   */
  notification_url: string;
  /**
   * Methods of payment eg. Bank (bank_transfer), card(card). Default is [“bank_transfer”, “card”]
   * {@default} [“bank_transfer”, “card”]
   */
  channels: string[];
}

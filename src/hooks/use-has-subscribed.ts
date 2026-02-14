import { useEffect, useState } from "react";
import { getAxiosInstance } from "../lib/axios.config";

export function useSubscription(singerId: number) {
  const [hasSubscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const http = getAxiosInstance();

  const checkSubscriptionUrl = `/singers/${singerId}/check-subscription`;
  const subscriptionUrl = `/singers/${singerId}/subscribe`;

  async function checkSubscription() {
    try {
      const response = await http.get(checkSubscriptionUrl);
      if (response.data.data.hasSubscribed) {
        setSubscribed(true);
      }
    } catch (error) {
      console.log("Subscription error", error);
      setError(error?.response?.data.message || "Une erreur est survenue");
    }
  }

  async function subscribed() {
    try {
      setSubscribed(true);
      await http.post(subscriptionUrl);
    } catch (error) {
      setSubscribed(false);
      setError(error?.response?.data.message || "Une erreur est survenue");
      console.log(error);
    }
  }

  async function unsubscribed() {
    try {
      setSubscribed(false);
      await http.delete(subscriptionUrl);
    } catch (error) {
      setSubscribed(true);
      setError(error?.response?.data.message || "Une erreur est survenue");
      console.log(error);
    }
  }

  useEffect(() => {
    checkSubscription();
  }, [singerId]);

  return { unsubscribed, subscribed, hasSubscribed, error };
}

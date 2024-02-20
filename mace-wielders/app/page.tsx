"use client"

import { Button } from "@/components/button";
import { useEffect, useState } from "react";


export default function Home() {
  useEffect(() => {
    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        await requestNotificationPermissionGranted();
        const registration = await navigator.serviceWorker.register('/service-worker.js')
        console.log(registration);
      }
    }
    registerSW();
  }, [])
  const [isStarted, setIsStarted] = useState(false)

  return (
    <section className='p-20'>
      <Button name={isStarted ? "Stop" : "Start"} />
    </section>
  );
}

async function saveSubscription(subscription: any) {
  // use axios & next syntax for api call
  const response = await fetch("http://0.0.0.0:6500/save-service-worker", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(subscription),
  });
  return response.json();
}

const requestNotificationPermissionGranted = async () => {
  const permission = await Notification.requestPermission();

  if (permission != 'granted')
    throw new Error("Notification permission not granted")
}

// Utility -
function urlBase64ToUint8Array(base64String: any) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

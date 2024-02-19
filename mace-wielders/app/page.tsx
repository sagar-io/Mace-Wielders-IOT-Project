"use client"

import { Button } from "@/components/button";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const registerSW = async () => {
      const applicationServerKey = urlBase64ToUint8Array("BEjcOtPhCH8JuDrXq53bz8NEkZEuLLIr0k4qUdULIzd49BPBDcMzyhtwZKral3jXeStY5BXLLIEEqaFeTg8-Meo");
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/service-worker.js')
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey,
        })
        const response = await saveSubscription(subscription)
        console.log(response)
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

function urlBase64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function saveSubscription(subscription: any) {
  // axi
  const response = await fetch("http://0.0.0.0:6500/save-service-worker", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(subscription)
  })
  return response.json();
}

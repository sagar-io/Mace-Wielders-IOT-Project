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

const requestNotificationPermissionGranted = async () => {
  const permission = await Notification.requestPermission();

  if (permission != 'granted')
    throw new Error("Notification permission not granted")
}


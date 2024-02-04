"use client";

import { useAppSelector } from "@/app/hooks";
import useIsMobile from "@/app/hooks/useIsMobile";
import { WeatherTable } from "@/components/dashboard/weather";
import { slices } from "@/lib";
import { useRouter } from "next/navigation";

export default function WeatherDetails() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const weatherData = useAppSelector(
    slices.weather.selectors.selectTableDetailsFromWeatherDetails
  );

  return (
    <WeatherTable
      renderItems={
        (isMobile ? weatherData?.mobile : weatherData?.desktop) || []
      }
      onBack={router.back}
    />
  );
}

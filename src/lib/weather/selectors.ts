import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { format } from "date-fns";

export const selectWeatherState = (state: RootState) => state.weather;

export const selectSelectedCurrentWeather = createSelector(
  selectWeatherState,
  (state) => state.currentCityWeather
);

export const selectTableDetailsFromWeatherDetails = createSelector(
  [selectSelectedCurrentWeather],
  (currentWeather) => {
    const now = new Date();

    if (!currentWeather) return null;

    const timezoneOffsetMillis = currentWeather.timezone * 1000;

    const targetDate = new Date(now.getTime() + timezoneOffsetMillis);
    const currentDate = format(targetDate, "MM/dd/yyyy");

    const { main, weather, name, sys } = currentWeather || {};

    const defaultGrid = [
      {
        label: "Date (mm/dd/yyyy)",
        value: currentDate,
      },
      {
        label: "Temp (F)",
        value: main?.temp,
      },
    ];

    const desktop = [
      ...defaultGrid,
      ...[
        {
          label: "Description",
          value: weather?.[0].description,
        },
        {
          label: "Main",
          value: weather?.[0].main,
        },
        {
          label: "Pressure",
          value: main.pressure,
        },
        {
          label: "Humidity",
          value: main.humidity,
        },
        {
          label: "City",
          value: `${name} (${sys.country})`,
        },
      ],
    ];

    return {
      desktop,
      mobile: defaultGrid,
    };
  }
);

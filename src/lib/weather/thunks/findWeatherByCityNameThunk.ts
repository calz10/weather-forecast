import { api } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CityWeatherDetails } from "../interface";

export const findWeatherByCityNameThunk = createAsyncThunk(
  "weather/find-city-weather",
  async (cityName: string): Promise<CityWeatherDetails> => {
    const url = `${api.WEATHER_BASE_ENDPOINT}?q=${cityName}&APPID=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    const result = await fetch(url);
    const actualResponse: any = result.json();

    return actualResponse as CityWeatherDetails;
  }
);

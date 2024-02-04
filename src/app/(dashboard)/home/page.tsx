"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppDispatch";
import Button from "@/components/common/button/Button";
import GithubProfileCard from "@/components/dashboard/home/GithubDetailsCard";
import { slices } from "@/lib";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function Home() {
  const user = useAppSelector(slices.user.selectors.selectCurrentUser);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const [city, setCity] = useState("");

  const findCityWeather = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(
        slices.weather.actions.findWeatherByCityNameThunk(city)
      ).unwrap();
      router.push("/weather");
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, city]);

  return (
    <div>
      <div className="justify-center flex-col justify-items-center flex items-center">
        <GithubProfileCard user={user} />
        <div className="flex justify-center align-center justify-items-center pt-10 flex-col items-center">
          <div className="w-72">
            <div className="min-w-[200px] h-15 my-2">
              <input
                onChange={(evt) => setCity(evt.target.value)}
                placeholder="Search City"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              />
            </div>
          </div>
          <div className="pt-3">
            <Button
              onClick={findCityWeather}
              variant="contained"
              color="primary"
              disabled={!!loading || !city}
            >
              {loading ? "Loading . . ." : "Display Weather"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

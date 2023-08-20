import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

interface IValues {
  VITE_APP_PORT?: string;
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const env = loadEnv("mock", process.cwd(), "");
  const values: IValues = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      [key]: val,
    };
  }, {});
  return {
    server: {
      port: parseInt(values.VITE_APP_PORT),
    },
    plugins: [react()],
  };
});

"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { useDemoScan } from "../scan/use-demo-scan";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useDevices() {
  const [mounted, setMounted] = useState(false);
  const { scanned } = useDemoScan();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, mutate } = useSWR(
    mounted ? (scanned ? "/api/devices?scanned=1" : "/api/devices") : null,
    fetcher
  );

  return { devices: data?.devices ?? [], mutate };
}

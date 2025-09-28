"use client"

import useSWR from "swr"
import { useDemoScan } from "../scan/use-demo-scan"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useDevices() {
  const { scanned } = useDemoScan()
  const { data, mutate } = useSWR(scanned ? "/api/devices?scanned=1" : "/api/devices", fetcher)
  return { devices: data?.devices ?? [], mutate }
}

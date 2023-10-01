import { SettingsTabs } from "@/components/SettingsTabs"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
    </>
  )
}

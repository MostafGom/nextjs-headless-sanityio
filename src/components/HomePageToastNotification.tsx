"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

export function HomePageToastNotification() {
    const { toast } = useToast()

    useEffect(() => {
        const welcomeToastShown = localStorage.getItem("welcomeToastShown")

        if (welcomeToastShown) {
            return
        }
        const timeout = setTimeout(() => {
            toast({
                title: "Welcome To AI Sanity 👋",
                description: "All content here is AI genreated revise eveything before using it, Thanks",
                action: (
                    <ToastAction altText="Okay Got It!">Okay Got It!</ToastAction>
                ),
                duration: 10000,
            })
            localStorage.setItem("welcomeToastShown", "true")
        })

        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <></>
    )
}

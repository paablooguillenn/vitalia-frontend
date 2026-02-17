"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Bell, Mail, Smartphone, Save } from "lucide-react"
import { toast } from "sonner"

interface NotifPref {
  label: string
  description: string
  push: boolean
  email: boolean
}

const defaults: NotifPref[] = [
  { label: "Nueva cita", description: "Cuando un paciente agenda una cita", push: true, email: true },
  { label: "Cancelacion", description: "Cuando un paciente cancela una cita", push: true, email: true },
  { label: "Recordatorio", description: "Recordatorio antes de cada cita", push: true, email: false },
  { label: "Modificacion", description: "Cuando se modifica una cita existente", push: false, email: true },
  { label: "Sistema", description: "Actualizaciones del sistema", push: false, email: false },
]

export default function DoctorNotificationsPage() {
  return null;
}

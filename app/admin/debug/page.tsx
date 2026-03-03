"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { inscriptionService } from "@/src/services/inscriptionService";
import { Inscription } from "@/src/types/incription";
import Loading from "@/src/components/Loading";

/**
 * Page de debug pour tester les routes verify
 */
export default function DebugPage() 
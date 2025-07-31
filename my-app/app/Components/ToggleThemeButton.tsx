"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {Sun,Moon} from "lucide-react"

export default function ToggleThemeButton(){
    const {theme,setTheme} = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>setMounted(true),[]);
    
    if(!mounted)return null;

    return(
        <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>

    );
}
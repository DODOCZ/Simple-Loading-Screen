-- ================================================================
--  Loading Screen V2 — client.lua
--  Uses loadscreen_manual_shutdown 'yes' — we control when it closes.
-- ================================================================

-- Close loading screen after player has fully spawned
AddEventHandler('playerSpawned', function()
    Citizen.Wait(800)
    SendNUIMessage({ type = 'loadingDone' })
    Citizen.Wait(1200)
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)

-- Safety fallback: force close after 90 seconds
Citizen.CreateThread(function()
    Citizen.Wait(90000)
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)

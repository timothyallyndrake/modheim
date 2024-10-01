import { shell } from 'electron'
import { findSteam, findSteamAppById } from 'find-steam-app'

// TODO finish hooking this up. need to get the env here as well.
const STEAM_APP_ID = process.env.STEAM_APP_ID

export function launchClient() {
  const steamUrl = `steam://run`
  shell.openExternal(steamUrl)
}

export function launchGame() {
  const steamUrl = `steam://run/${STEAM_APP_ID}`
  shell.openExternal(steamUrl)
}

export function isSteamInstalled() {
  return !!findSteam()
}

export function isGameInstalled() {
  return !!findSteamAppById(STEAM_APP_ID)
}

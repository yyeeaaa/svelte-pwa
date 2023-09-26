export async function checkUpdate() {
    try {
        const currentVersion = localStorage.getItem("version")
        const f = await fetch("/version")
        const version = await f.text()

        if (version != currentVersion) {
            const reg = await navigator.serviceWorker.getRegistration()
            localStorage.setItem("version", version)
            reg.active.postMessage("update")
        }
    } catch {
        console.error("Failed to fetch version!")
    }
}
export default class UtilService {
  static async openNewTab (url:string) {
    const tab = window.open(url)
    tab?.focus()
  }
  static importAll(r:any) {
    return r.keys().map(r);
  }
  static downloadFile(path:string) {
    const el = document.createElement('a')
    el.setAttribute('download','')
    el.setAttribute('target','_blank')
    el.href = path
    el.click()
    el.remove()
  }
}
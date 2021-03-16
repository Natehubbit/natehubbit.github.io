export default class UtilService {
  static async openNewTab (url:string) {
    const tab = window.open(url)
    tab?.focus()
  }
  static importAll(r:any) {
    return r.keys().map(r);
  }
  
}
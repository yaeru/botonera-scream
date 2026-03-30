export default ({ app }) => {
  window.dataLayer = window.dataLayer || []
  function gtag(){ dataLayer.push(arguments) }

  gtag('js', new Date())
  gtag('config', 'G-4CYFZFVT7V', {
    page_path: window.location.pathname
  })

  app.router.afterEach((to) => {
    gtag('config', 'G-4CYFZFVT7V', {
      page_path: to.fullPath
    })
  })
}
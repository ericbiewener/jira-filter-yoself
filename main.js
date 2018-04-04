const params = new URLSearchParams(window.location.href)
const asignee = params.get('asignee')

if (asignee) {
  // Don't cache result for use in `setImmediate` because React's re-rendering
  // may cause it to no longer be valid
  const getEl = () => document.querySelector('[for=' + asignee + ']')

  const interval = setInterval(() => {
    if (!getEl()) return
    console.info('jira filter: found element')

    clearInterval(interval)
    setTimeout(() => {
      console.info('jira filter: clicking')
      getEl().click()
    })
  }, 100)
}

document.addEventListener('click', ({target}) => {
  if (target.tagName === 'A' && target.className === 'ghx-parent-key js-detailview') window.open(target.href)
})

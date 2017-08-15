const params = new URLSearchParams(window.location.href)
const asignee = params.get('asignee')

if (asignee) {
  // Don't cache result for use in `setImmediate` because React's re-rendering
  // may cause it to no longer be valid
  const getEl = () => document.querySelector('[for=' + asignee + ']')
  // Must wait until quickFilter exists, otherwise selecting the asignee clears out its value.
  const quickFilterExists = () => document.getElementById("3")

  const interval = setInterval(() => {
    if (!getEl() || !quickFilterExists()) return
    console.info('found element')

    clearInterval(interval)
    setTimeout(() => {
      console.log('clicking')
      getEl().click()
    })
  }, 100)
}

document.addEventListener('click', ({target}) => {
  if (target.tagName === 'A' && target.className === 'ghx-parent-key js-detailview') window.open(target.href)
})

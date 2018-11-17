window.onload = function() {
  window.cktModals = {}
  initAllModals()
  initContestRedWin()
  bindAllModalKeyListeners()
}
function initAllModals() {
  // 如果只需要开关弹窗  只需要把id添加到数组, 如果需要钩子函数可以按照 ininContestRedWin()
  // cktModals.xxxxID.open(); cktModals.xxxxId.close()
  // cktModals.xxxxID.content() 可以获取到内容的html
  // cktModals.xxxxID.content('<h1>可以设置html</h1>') 可以设置html

  let modalIds = [
    'contestBlueWin',
    'contestEven',
    'thumbsUpReport',
    'thumbsUpDetail',
    'diamondReport',
    'contactUs',
    'rules',
    'changePwd',
    'gift',
    'ranking',
    'gameSetting',
    'notice'
  ]
  for (index in modalIds) {
    window.cktModals[modalIds[index]] = new RModal(
      document.getElementById(modalIds[index])
    )
  }
}
function initContestRedWin() {
  var contestRedWin = new RModal(document.getElementById('contestRedWin'), {
    beforeOpen: function(next) {
      console.log('beforeOpen')
      next()
    },
    afterOpen: function() {
      console.log('opened')
    },

    beforeClose: function(next) {
      console.log('beforeClose')
      next()
    },
    afterClose: function() {
      console.log('closed')
    }

    // , content: 'Abracadabra'

    // , bodyClass: 'modal-open'
    // , dialogClass: 'modal-dialog-lg'
    // , dialogOpenClass: 'fadeIn'
    // , dialogCloseClass: 'fadeOut'

    // , focus: true
    // , focusElements: ['input.form-control', 'textarea', 'button.btn-primary']

    // , escapeClose: true
  })

  document.getElementById('showContestRedWin').addEventListener(
    'click',
    function(ev) {
      ev.preventDefault()
      cktModals.contestRedWin.open()
    },
    false
  )

  window.cktModals.contestRedWin = contestRedWin
}

function bindAllModalKeyListeners() {
  document.addEventListener(
    'keydown',
    function(ev) {
      for (modal in window.cktModals) {
        window.cktModals[modal].keydown(ev)
      }
    },
    false
  )
}

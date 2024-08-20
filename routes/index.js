const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  const template = 'home'
  res.render(template, {
    CLIENT_IP: undefined,
    USRV_Host: 'bnkio46py0.execute-api.us-east-1.amazonaws.com/production/',
    USRV_IP: undefined,
    USRV_MsgPort: undefined,
    USRV_Start: undefined,
    // Introduced
    USRV_WSS: true,
    USRV_Preamble: '{"action":"join-network"}'
  })
})

module.exports = router

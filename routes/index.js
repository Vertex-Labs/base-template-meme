const { Router } = require('express')
const router = Router()

// Environment parameters that reference the Turbo 360 Web Socket Gateway path
// Note: no protocol prefix
const gateway = process.env.WSG_GATEWAY 
  ? process.env.WSG_GATEWAY
  : 'q716d6lwhe.execute-api.us-east-1.amazonaws.com/production/';
const projectSlug = process.env.TURBO_PROJECT_SLUG;

router.get('/', (req, res, next) => {
  const template = 'home'
  res.render(template, {
    CLIENT_IP: undefined,
    USRV_Host: `${gateway}?turbo=${projectSlug}`,
    USRV_IP: undefined,
    USRV_MsgPort: undefined,
    USRV_Start: undefined,
    // Introduced
    USRV_WSS: true,
    USRV_Preamble: '{"action":"join-network"}'
  })
});

router.get('/ursys', (req, res, next) => {
  res.sendStatus(200);
})

module.exports = router

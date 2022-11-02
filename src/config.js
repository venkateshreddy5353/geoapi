const appName = "geoapi"

export default {
  app: {
    name: appName
  },

  server: {
    // isProduction: process.env.NODE_ENV === 'production',
    port:  49153
  },
  
  logger: {
    options: {
      name: appName,
      streams: [
        {
          level: "info",
          stream: process.stdout
        }
      ]
    }
  }
}

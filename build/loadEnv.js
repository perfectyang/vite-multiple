import dotenv from 'dotenv'

export function loadEnv() {
  const env = process.env.NODE_ENV
  console.log(env)
  const ret = {}
  const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env']
  envList.forEach((e) => {
    dotenv.config({
      path: e,
    })
  })
  for (const envName of Object.keys(process.env)) {
    let realName = (process.env)[envName].replace(/\\n/g, '\n')
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}
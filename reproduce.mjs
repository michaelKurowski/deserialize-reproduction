import v8 from 'node:v8'
import fs from 'node:fs'

const loadedPayload = fs.readFileSync('./problematic-payload')
v8.deserialize(loadedPayload)

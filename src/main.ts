import * as core from '@actions/core'
import {readdirSync} from 'fs'

async function run(): Promise<void> {
  try {
    console.log('helloo', readdirSync(process.cwd()))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

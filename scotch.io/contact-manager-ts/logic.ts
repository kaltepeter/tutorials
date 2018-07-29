/** logic.ts **/
import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'
const url: string = "https://us-central1-myreddit-clone.cloudfunctions.net"
export const addContact = (answers: any) => {
(async () => {
 try {
  const spinner = ora('Adding contact ...').start();
  let response = await axios.post(`${url}/addContact`,answers)
  spinner.stop()
  console.log(chalk.magentaBright('New contact added'))
 } catch (error) {
  console.log(error)
 }
 })()
}
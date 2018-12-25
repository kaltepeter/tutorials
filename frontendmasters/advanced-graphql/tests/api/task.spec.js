const mongoose = require('mongoose');

const db = require('../db')
const { runQuery } = require('../run')
const taskResolvers = require('../../src/api/task/task.resolvers')

describe('Task', () => {
    beforeAll(db.connectToDB)
    afterAll(db.disconnectDB)
    afterEach(db.cleanDB)

    describe('resolvers', () => {
        describe('task', () => {
            test('shold resolve correctly', async () => {
                const id = mongoose.Types.ObjectId()
                await db.models.task.create([
                    {name: 'test', project: id, type: 'dev', repoUrl: 'https://github.com/tipeio/awesome-tipe'},
                    {name: 'test2', project: id, type: 'design', assetUrl: 'https://user-images.githubusercontent.com/1016365/32705887-92e25d68-c7cd-11e7-9751-acdc196e7cb8.png'},
                ])
                const results = await taskResolvers.Query
                    .tasks(null, {input: {}}, {models: {
                        task: db.models.task
                        }})
                expect(results).toHaveLength(2)
            })

            test('should have correct query', async () => {
                const id = mongoose.Types.ObjectId()
                await db.models.task.create([
                    {name: 'test', project: id, type: 'dev', repoUrl: 'https://github.com/tipeio/awesome-tipe'},
                    {name: 'test2', project: id, type: 'design', assetUrl: 'https://user-images.githubusercontent.com/1016365/32705887-92e25d68-c7cd-11e7-9751-acdc196e7cb8.png'},
                ])

                const query = `
                    query Tasks($input: TasksInput!) {
                        tasks(input: $input) {
                            id
                            name
                        }
                    }
                `

                const input = {input: {project: id}}

                const {data, errors} = await runQuery(query, input)
                expect(errors).toBeUndefined()
                expect(data.tasks.length).toBe(2)
                expect(data.tasks[0].name).toBe('test')
            })
        })
    })
})
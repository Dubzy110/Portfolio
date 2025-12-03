import { Database } from 'bun:sqlite'

var y: Record<string, string>
const db = new Database(':memory:')
const query = db.query("select 'Hello world' as message;")
y = query.get()

console.log('Common queries module loaded.', y)

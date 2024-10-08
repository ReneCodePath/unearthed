import pg from 'pg'

const config = {
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	database: process.env.PGDATABASE,
	connectionstring: process.env.CONN_STRING
}
const pool = new pg.Pool(config)

export default pool

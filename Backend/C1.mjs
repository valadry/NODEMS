import postgres from 'postgres'

const sql = postgres('http://localhost:3000', {
  host                 : '127.0.0.1',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : 'test',            // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : 'Crackhead123',            // Password of database user
})


export const Questions = async () => {return await sql`
  select
    * 
  from public."Questions";
`
}

export const Examples = async () => {return await sql`
  select
    * 
  from public."Examples";
`
};


console.log(Questions);
# PostgreSQL

> local and production setup for PostgreSQL project database

---

## Resources

-   [postgresql: Website](https://www.postgresql.org/)
-   [postgresql: Documentation: 14.5](https://www.postgresql.org/docs/current/)
-   [postgresql: Github: awesome-postgres](https://github.com/dhamaniasad/awesome-postgres)
-   [node-postgres: Github](https://github.com/brianc/node-postgres)
-   [node-postgres: Website](https://node-postgres.com/)

### Resources | Tools

-   [Zapatos: Typescript generator for postgresql](https://jawj.github.io/zapatos/)

### General Articles

-   [PostgeSQL+Nodejs+Node-Postgres](https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/)

---

## Database Setup: Local

> local database setup

### PostgreSQL

#### Install

[MacOS Install](https://www.postgresql.org/download/macosx/)

**Homebrew Installation:**

```bash
brew install postgresql
```

**Localhost Port:**

```bash
# env DATABASE URL
postgresql://postgres:password@localhost:####/databasename?schema=public
```

#### Deployment

-   [PostgreSQL Shell Docs](https://www.postgresql.org/docs/current/app-psql.html)

**Shell Commands:**

```bash
# Install
brew install postgresql@14

# Start
brew services start postgresql@14

# Stop
brew services stop postgresql@14

# Restart
brew services restart postgresql@14

# Start PostgreSQl Console
psql

# Uninstall
brew uninstall postgres@14
```

### PgAdmin4

#### Installation

-   [Docs](https://www.pgadmin.org/docs/pgadmin4/development/index.html)
-   [MacOS](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.13/macos/)

#### Articles

-   [Install PG Admin4 **After** Installing PostgreSQL](https://dev.to/letsbsocial1/installing-pgadmin-only-after-installing-postgresql-with-homebrew-part-2-4k44)
-   [MacOS + Brew](https://marioyepes.com/install-postgresql-on-mac-with-brew/)

---

### PSQL Command Line

**Commandline Help:**

```sql
psql --help
```

**Connect To Database:**

```sql
psql postgres
```

#### PSQL Command Prompts:

**_psql is the PostgreSQL interactive terminal. Running psql will connect you to a PostgreSQL host. Running psql --help will give you more information about the available options for connecting with psql:_**

-   **-h: --host=HOSTNAME:** _The database server host or socket directory; the default is local socket_
-   **-p: --port=PORT:** _The database server port; the default is 5432_
-   **-U: --username=USERNAME:** _The database username; the default is your_username_
-   **-w: --no-password:** _Never prompt for password_
-   **-W: --password:** _Force password prompt, which should happen automatically_

#### Database PSQL Commands:

-   **\conninfo:** _database connection info_
-   **\q:** _Exit psql connection_
-   **\c:** _Connect to a new database_
-   **\dt:** _List all tables_
-   **\du:** _List all roles_
-   **\list:** _List databases_

---

### Database Commands

-   [Documentation: PostgreSQL Commands](https://www.postgresql.org/docs/current/sql-commands.html)
-   [PostgreSQL Grant Access Commands](https://tableplus.com/blog/2018/04/postgresql-how-to-grant-access-to-users.html)

#### Commands: Database

**Create Database:**

```sql
CREATE DATABASE database_name;
```

#### Commands: Tables

**Create Tables:**

```sql
CREATE TABLE table_name (
  field_name TYPE CONSTRAINTS,
  field_name TYPE(args) CONSTRAINTS
);
```

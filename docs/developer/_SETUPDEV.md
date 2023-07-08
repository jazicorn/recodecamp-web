# SETUP(DEV)

> Daily setup for developer devlopment

## Categories

---

### Server: Setup

```bash
# Start Development Server
yarn dev
```

---

### Database: Setup (MacOS)

#### 🐘 [PostgreSQL@14](../../project/server/databases/POSTGRESQL.md)

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

#### 🚶 &nbsp;_Database Migration_

```bash
# package command | ...
yarn ...
```

#### 🌱 &nbsp;_Seed Database_

```bash
# package command | ...
yarn ...
```

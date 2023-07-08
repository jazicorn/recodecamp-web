# MongoDB
> local and production setup for Mongo No-SQl project database

## About

...

## Setup

### Local
> local database setup

#### Install

[MacOS Install](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

**Homebrew Installation:**
```bash
# Tap the MongoDB Homebrew Tap to download the official Homebrew formula for MongoDB and the Database Tools, 
# by running the following command in your macOS Terminal:
brew tap mongodb/brew

# To update Homebrew and all existing formulae:
brew update

# To install MongoDB, run the following command in your macOS Terminal application:
brew install mongodb-community@5.0
```

**Connect Your Database**

- [Prisma/MongoDB](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/connect-your-database-typescript-mongodb)

#### Deployment
**Start mongodb server:**
```bash
# To run MongoDB (i.e. the mongod process) as a macOS service, run:
brew services start mongodb-community@5.0

# To stop a mongod running as a macOS service, use the following command as needed:
brew services stop mongodb-community@5.0

# To verify that MongoDB is running, perform one of the following:
# If you started MongoDB as a macOS service:
brew services list
```

**Start mongodb shell:**
```bash
# To start mongodb shell:
mongosh  
```
- [Mongodb Shell Docs](https://docs.mongodb.com/mongodb-shell/)
  - [Shell Commands](https://www.mongodb.com/docs/mongodb-shell/run-commands/)
  - [Local Deployment](https://www.mongodb.com/docs/mongodb-shell/connect/)

### Production
> production database setup

#### Configuration

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

#### Remote Deployment

**Node.js Example:**
```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<cluster-name>.ki2hdjb.mongodb.net/<db-name>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// Replace <password> with the password for the <username> user. Ensure any option params are URL encoded.
```

## Articles

### Warnings
- [You may want to copy or rename ~/.mongorc.js to ~/.mongoshrc.js.](https://www.mongodb.com/community/forums/t/warning-found-mongorc-js-but-not-mongoshrc-js-mongorc-js-will-not-be-loaded/129716/4)

### Mongodb Telemetry
```bash
To help improve our products, 
anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.
```


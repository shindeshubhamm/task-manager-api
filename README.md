# task-manager-api

### Task manager API using nodejs. This is just a backend. Use Postman or similar client to make requests.

1. Express JS
1. MonogoDB + Mongoose
1. Sendgrid API (To send emails through your application)

### Usage

Add 'config' folder in project root. Add 'config/dev.env':
```env
PORT=3000
SENDGRID_API_KEY=Your_sendgrid_api_key
MONGODB_URL=Your_mongodb_url
JWT_SECRET=Your_jwt_secret
```
Install dependencies:
```bash
npm install
```

Run script:
```bash
npm run dev (:3000)
```

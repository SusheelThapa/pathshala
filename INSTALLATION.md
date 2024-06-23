# Installation

## OPAL Docker

1. Install the [docker](https://www.docker.com/) in your machine.

2. Download [Permit.io](https://www.permit.io/) PDP container from Docker Hub.

   ```bash
   docker pull permitio/pdp-v2:latest
   ```

3. Run the container

   ```bash
   docker run -it \
   -p 7766:7000 \
   --env PDP_API_KEY=permit_key_CMsXae8FSaocUJipFWAGrV5VazIjfV4VhALRHSd08TBWi03sPK7gMk17ehij5NKADbMJUVku6N4kGPHkZBSTYs \
   --env PDP_DEBUG=True \
   permitio/pdp-v2:latest
   ```

## Backend

1. Install [nodejs](https://nodejs.org/en) and [mongodb](https://www.mongodb.com/) into your machine.
2. Navigate to `backend/` folder

   ```bash
   cd backend
   ```

3. Install the required packages.

   ```bash
   npm install
   ```

4. Create `.env` file and add following content

   ```bash
   JWT_SECRET=123d31a56e33c2a251778b8622fb35d4a21fedb5833c75ca1762c3fc33d86acb
   MONGO_URL=mongodb://localhost:27017/pathshala
   PDP_URL=http://localhost:7766
   PDP_TOKEN=permit_key_CMsXae8FSaocUJipFWAGrV5VazIjfV4VhALRHSd08TBWi03sPK7gMk17ehij5NKADbMJUVku6N4kGPHkZBSTYs
   ```

5. Run the backend server

   ```bash
   node server.js
   ```

   _Note: You can use `**nodemon**` to run the server_

## Frontend

1. Navigate to `frontend/` folder

   ```bash
   cd frontend
   ```

2. Install the required packages.

   ```bash
   npm install
   ```

3. Create `.env` file and add following content

   ```env
   VITE_BACKEND_URL=http://localhost:3001
   ```

4. Run the frontend server

   ```bash
   npm run dev
   ```

5. You can view the live website on `http://localhost:3000/login`

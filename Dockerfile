ROM public.ecr.aws/lambda/nodejs:12

# Copy function code and package.json
COPY src/index.js package.json /var/task/

# Install NPM dependencies for function
RUN npm install

# Set the CMD to your handler
CMD [ "index.handler" ]

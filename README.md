# (MIDAS) AWS Lambda Scrapper to Get Data of a NFE

## How to run

1. Clone the repository:

```bash
git clone https://github.com/marcosparreiras/lambda-scrapper-puc.git
```

2. Rename the `./scrapper/.env.sample` file to `./scrapper/.env` and fill in the required information.

3. Rename the `template.yaml.sample` file to `template.yaml` and fill in the `parameters defaults`.

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- AWS_PUBLISH_DATA_TOPIC_ARN

4. CD into `scrapper` folder and install the dependencies:

```bash
cd ./lambda-scrapper-puc/scrapper && npm install
```

5. Run the tests with:

```bash
npm run test
```

6. build and deploy

```bash
sam build
sam deploy --guided
```

## Invoke locally

```bash
sam local invoke NFScrapperFunction --event events/event.json
```

## Delete

```bash
sam delete
```

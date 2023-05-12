### elastic beanstalk環境を初期化

```
eb init --platform node.js --region ap-northeast-1

You have not yet set up your credentials or your credentials are incorrect
You must provide your credentials.
(aws-access-id): XXXXX
(aws-secret-key): XXXXX

Application elasticbeanstalk has been created.
```


```
eb init --platform node.js --region ap-northeast-1

Application elasticbeanstalk has been created.
```

### DEMOアプリケーションをインストール

```
eb create --sample node-express-prod
```

### 新しいアプリケーションデプロイ

```
eb deploy node-express-prod
```

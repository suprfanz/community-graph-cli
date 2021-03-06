const program = require('commander');

program
    .version('0.0.1')
    .description('Community Graph')
    .command('install [name]', 'install one or more packages').alias('i')
    .command('search [query]', 'search with optional query').alias('s')
    .command('list', 'list packages installed')
    .command('status', 'status of the community graph')
    .command('dump-config', 'show all config')
    .command('create-s3-bucket', 'create an S3 bucket to store the summary page')
    .command('create-kms-key', 'create a KMS key to use to encrypt credentials')
    .command('encrypt', 'Encrypt a value using KMS key')
    .command('create-neo4j-server <communityName>', 'spins up a Neo4j server')
    .command('init', 'initialise the community graph - set constraints, load initial data')
    .command('deploy', 'deploy the lambdas to AWS')
    .command('create', 'Create the community graph')
    .parse(process.argv);
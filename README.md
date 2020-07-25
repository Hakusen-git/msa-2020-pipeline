# msa-2020-pipeline

# The Deployed Website
https://msa-pipeline-2020.azurewebsites.net/


# Short description
For the build pipelines, I created two seperate pipelines for each branch. One for master and one for develop.
Therefore when a branch gets updated, the corresponding pipeline will run.
I used my React webapp in this repositories, therefore the first step is installing node and run neccessary npm commands.
Then it will pack a zip file and publish build artifacts.

For the release pipeline, since we only need one for master branch I followed the tutorial. Linking it to correct web app service and then create release.
